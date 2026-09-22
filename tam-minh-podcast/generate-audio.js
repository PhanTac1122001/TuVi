const fs = require('fs');
const path = require('path');
const { MsEdgeTTS, OUTPUT_FORMAT } = require('msedge-tts');
const PODCAST_DATA = require('./podcast-data.js');

const audioDir = path.join(__dirname, 'audio');
if (!fs.existsSync(audioDir)) {
  fs.mkdirSync(audioDir, { recursive: true });
}

async function synthesizeText(text, voiceName, destPath) {
  const tempPath = destPath + '.tmp';
  const tts = new MsEdgeTTS();
  try {
    await tts.setMetadata(voiceName, OUTPUT_FORMAT.AUDIO_24KHZ_48KBITRATE_MONO_MP3, {});
    const { audioStream } = tts.toStream(text);
    await new Promise((resolve, reject) => {
      const ws = fs.createWriteStream(tempPath);
      audioStream.pipe(ws);
      ws.on('finish', () => {
        try { tts.close(); } catch(e) {}
        resolve();
      });
      ws.on('error', (err) => {
        try { tts.close(); } catch(e) {}
        reject(err);
      });
      audioStream.on('error', (err) => {
        try { tts.close(); } catch(e) {}
        reject(err);
      });
    });

    if (fs.existsSync(tempPath) && fs.statSync(tempPath).size > 1000) {
      if (fs.existsSync(destPath)) fs.unlinkSync(destPath);
      fs.renameSync(tempPath, destPath);
      return true;
    }
    return false;
  } catch (err) {
    try { tts.close(); } catch(e) {}
    if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
    throw err;
  }
}

async function generateAll() {
  console.log("=== BẮT ĐẦU TẠO TOÀN BỘ FILE ÂM THANH TIẾNG VIỆT TỰ NHIÊN ===");
  console.log("- Minh Triết: vi-VN-NamMinhNeural (Trầm ấm, đĩnh đạc)");
  console.log("- Tuệ Mẫn: vi-VN-HoaiMyNeural (Trong trẻo, sinh động)\n");

  const tasks = [];
  for (const chapter of PODCAST_DATA.chapters) {
    for (const segment of chapter.segments) {
      tasks.push({
        id: segment.id,
        speaker: segment.speaker,
        text: segment.text,
        voice: segment.speaker === 'triet' ? 'vi-VN-NamMinhNeural' : 'vi-VN-HoaiMyNeural',
        filePath: path.join(audioDir, `${segment.id}.mp3`)
      });
    }
  }

  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    if (fs.existsSync(task.filePath) && fs.statSync(task.filePath).size > 2000) {
      console.log(`[${i + 1}/${tasks.length}] Đã có sẵn: ${task.id}.mp3 (${fs.statSync(task.filePath).size} bytes)`);
      continue;
    }

    console.log(`[${i + 1}/${tasks.length}] Đang tạo: ${task.id}.mp3 [${task.speaker.toUpperCase()} - ${task.voice}]...`);
    let success = false;
    for (let attempt = 1; attempt <= 3; attempt++) {
      try {
        await synthesizeText(task.text, task.voice, task.filePath);
        console.log(`  -> Thành công: ${task.id}.mp3 (${fs.statSync(task.filePath).size} bytes)`);
        success = true;
        break;
      } catch (err) {
        console.warn(`  -> Thử lại lần ${attempt} cho ${task.id}: ${err.message}`);
        await new Promise(r => setTimeout(r, 1000));
      }
    }

    if (!success) {
      console.error(`  -> THẤT BẠI: ${task.id}.mp3`);
    }

    await new Promise(r => setTimeout(r, 300));
  }

  console.log("\n=== TẤT CẢ FILE ÂM THANH ĐÃ ĐƯỢC TẠO XONG THÀNH CÔNG ===");
}

generateAll().catch(console.error);
