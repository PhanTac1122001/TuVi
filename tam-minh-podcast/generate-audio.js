const fs = require('fs');
const path = require('path');
const { MsEdgeTTS, OUTPUT_FORMAT } = require('msedge-tts');
const PODCAST_DATA = require('./podcast-data.js');

const audioDir = path.join(__dirname, 'audio');
if (!fs.existsSync(audioDir)) {
  fs.mkdirSync(audioDir, { recursive: true });
}

async function synthesizeToFile(text, voiceName, destPath) {
  const tts = new MsEdgeTTS();
  await tts.setMetadata(voiceName, OUTPUT_FORMAT.AUDIO_24KHZ_48KBITRATE_MONO_MP3, {});
  const { audioStream } = tts.toStream(text);
  
  const chunks = [];
  await new Promise((resolve, reject) => {
    audioStream.on('data', chunk => chunks.push(chunk));
    audioStream.on('end', () => {
      try { tts.close(); } catch(e) {}
      resolve();
    });
    audioStream.on('error', err => {
      try { tts.close(); } catch(e) {}
      reject(err);
    });
  });

  if (chunks.length > 0) {
    const buffer = Buffer.concat(chunks);
    if (buffer.length > 2000) {
      fs.writeFileSync(destPath, buffer);
      return buffer.length;
    }
  }
  throw new Error("Dữ liệu âm thanh nhận được rỗng");
}

async function generateAll() {
  console.log("=== BẮT ĐẦU TẠO FILE ÂM THANH TIẾNG VIỆT TỰ NHIÊN ===");
  console.log("- Tuấn Hiệp: vi-VN-NamMinhNeural (Trầm ấm, uyên bác)");
  console.log("- Minh Anh: vi-VN-HoaiMyNeural (Trong trẻo, sinh động)\n");

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
      console.log(`[${i + 1}/${tasks.length}] Đã có: ${task.id}.mp3 (${fs.statSync(task.filePath).size} bytes)`);
      continue;
    }

    console.log(`[${i + 1}/${tasks.length}] Đang tạo: ${task.id}.mp3 [${task.speaker.toUpperCase()} - ${task.voice}]...`);
    let success = false;
    for (let attempt = 1; attempt <= 3; attempt++) {
      try {
        const size = await synthesizeToFile(task.text, task.voice, task.filePath);
        console.log(`  -> Thành công: ${task.id}.mp3 (${size} bytes)`);
        success = true;
        break;
      } catch (err) {
        console.warn(`  -> Thử lại lần ${attempt} cho ${task.id}: ${err.message}`);
        await new Promise(r => setTimeout(r, 1200));
      }
    }

    if (!success) {
      console.error(`  -> THẤT BẠI: ${task.id}.mp3`);
    }

    await new Promise(r => setTimeout(r, 400));
  }

  console.log("\n=== TẤT CẢ FILE ÂM THANH ĐÃ SẴN SÀNG ===");
}

generateAll().catch(console.error);
