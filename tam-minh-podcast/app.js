/**
 * TỬ VI TAM MINH - AI VIDEO PODCAST STUDIO ENGINE
 * Features:
 * - Dual AI Host Speech Synthesis (Minh Triết & Tuệ Mẫn)
 * - Ambient Zen Background Audio via Web Audio API
 * - Synchronized Presentation Slides & Live Subtitles
 * - Interactive Transcript Navigator
 * - Real-time 16:9 Canvas Video Recording & MP4/WebM Export
 */

class PodcastStudio {
  constructor(data) {
    this.data = data;
    this.currentChapterIndex = 0;
    this.currentSegmentIndex = 0;
    this.isPlaying = false;
    this.playbackSpeed = 1.0;
    this.isZenMusicOn = true;
    this.isRecording = false;

    // Audio & Speech
    this.synth = window.speechSynthesis;
    this.voices = [];
    this.currentUtterance = null;
    this.timerFallback = null;

    // Web Audio Zen Synth
    this.audioCtx = null;
    this.ambientGain = null;

    // MediaRecorder for Video Export
    this.mediaRecorder = null;
    this.recordedChunks = [];
    this.canvasStream = null;
    this.isExportRendering = false;

    // DOM Elements
    this.dom = {
      chapterNav: document.getElementById('chapterNav'),
      stageChapterTitle: document.getElementById('stageChapterTitle'),
      stageTimer: document.getElementById('stageTimer'),
      podiumTriet: document.getElementById('podiumTriet'),
      podiumMan: document.getElementById('podiumMan'),
      slideBadge: document.getElementById('slideBadge'),
      slideTitle: document.getElementById('slideTitle'),
      slidePoints: document.getElementById('slidePoints'),
      slideQuote: document.getElementById('slideQuote'),
      subSpeakerTag: document.getElementById('subSpeakerTag'),
      subText: document.getElementById('subText'),
      progressTrack: document.getElementById('progressTrack'),
      progressFill: document.getElementById('progressFill'),
      currentTimeLabel: document.getElementById('currentTimeLabel'),
      totalTimeLabel: document.getElementById('totalTimeLabel'),
      playBtn: document.getElementById('playBtn'),
      prevBtn: document.getElementById('prevBtn'),
      nextBtn: document.getElementById('nextBtn'),
      restartBtn: document.getElementById('restartBtn'),
      speedSelect: document.getElementById('speedSelect'),
      zenMusicBtn: document.getElementById('zenMusicBtn'),
      zenMusicStatus: document.getElementById('zenMusicStatus'),
      recordVideoBtn: document.getElementById('recordVideoBtn'),
      recordBtnText: document.getElementById('recordBtnText'),
      recBadge: document.getElementById('recBadge'),
      transcriptList: document.getElementById('transcriptList'),
      glossaryGrid: document.getElementById('glossaryGrid'),
      exportCanvas: document.getElementById('exportCanvas'),
      tabBtns: document.querySelectorAll('.tab-btn'),
      tabPanes: document.querySelectorAll('.tab-pane')
    };

    this.init();
  }

  init() {
    this.initVoices();
    this.renderChapterNav();
    this.renderTranscript();
    this.renderGlossary();
    this.bindEvents();
    this.loadSegment(0, 0);
  }

  initVoices() {
    if (!this.synth) return;
    const populate = () => {
      this.voices = this.synth.getVoices();
    };
    populate();
    if (speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.onvoiceschanged = populate;
    }
  }

  getBestVoice(gender) {
    const viVoices = this.voices.filter(v => v.lang && (v.lang.startsWith('vi') || v.lang.includes('VN')));
    if (viVoices.length > 0) {
      if (gender === 'female') {
        const femaleVoice = viVoices.find(v => /female|nữ|hoaimy|linh|mai/i.test(v.name));
        return femaleVoice || viVoices[0];
      } else {
        const maleVoice = viVoices.find(v => /male|nam|namminh|minh/i.test(v.name));
        return maleVoice || viVoices[viVoices.length - 1];
      }
    }
    // Fallback to any voice
    return this.voices[0] || null;
  }

  // ==========================================
  // AMBIENT ZEN SOUND SYNTHESIZER (WEB AUDIO)
  // ==========================================
  initAudioContext() {
    if (this.audioCtx) return;
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.audioCtx = new AudioContext();
      this.ambientGain = this.audioCtx.createGain();
      this.ambientGain.gain.setValueAtTime(0.08, this.audioCtx.currentTime);
      this.ambientGain.connect(this.audioCtx.destination);
      this.startZenDrone();
    } catch (e) {
      console.warn("Web Audio API not supported", e);
    }
  }

  startZenDrone() {
    if (!this.audioCtx) return;
    // Harmonious ancient pentatonic chord: 216Hz, 324Hz, 432Hz
    const freqs = [108, 162, 216, 324];
    freqs.forEach((freq, idx) => {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      const filter = this.audioCtx.createBiquadFilter();

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(450, this.audioCtx.currentTime);

      osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);

      gain.gain.setValueAtTime(0.025 / (idx + 1), this.audioCtx.currentTime);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.ambientGain);

      osc.start();
    });
  }

  toggleZenMusic() {
    this.initAudioContext();
    this.isZenMusicOn = !this.isZenMusicOn;
    if (this.ambientGain) {
      this.ambientGain.gain.setTargetAtTime(this.isZenMusicOn ? 0.08 : 0, this.audioCtx.currentTime, 0.5);
    }
    this.dom.zenMusicStatus.textContent = this.isZenMusicOn ? 'BẬT' : 'TẮT';
    this.dom.zenMusicBtn.classList.toggle('active', this.isZenMusicOn);
  }

  // ==========================================
  // RENDER UI & CONTROLS
  // ==========================================
  renderChapterNav() {
    this.dom.chapterNav.innerHTML = '';
    this.data.chapters.forEach((chap, idx) => {
      const pill = document.createElement('button');
      pill.className = `chapter-pill ${idx === this.currentChapterIndex ? 'active' : ''}`;
      pill.innerHTML = `
        <span class="pill-num">${chap.id}</span>
        <span>${chap.title.split(':')[0]}</span>
      `;
      pill.onclick = () => this.switchChapter(idx);
      this.dom.chapterNav.appendChild(pill);
    });
  }

  renderTranscript() {
    this.dom.transcriptList.innerHTML = '';
    this.data.chapters.forEach((chap, cIdx) => {
      const chapHeader = document.createElement('div');
      chapHeader.style.cssText = "font-weight: 700; color: var(--gold); margin-top: 14px; font-size: 0.95rem;";
      chapHeader.textContent = chap.title;
      this.dom.transcriptList.appendChild(chapHeader);

      chap.segments.forEach((seg, sIdx) => {
        const item = document.createElement('div');
        item.className = `transcript-item ${seg.speaker === 'man' ? 'man-line' : ''}`;
        item.id = `trans_${cIdx}_${sIdx}`;
        item.innerHTML = `
          <div class="transcript-speaker ${seg.speaker}">
            ${seg.speaker === 'triet' ? 'Minh Triết' : 'Tuệ Mẫn'}
          </div>
          <div class="transcript-content">${seg.text}</div>
        `;
        item.onclick = () => {
          this.switchChapter(cIdx);
          this.loadSegment(cIdx, sIdx);
          if (this.isPlaying) this.playCurrent();
        };
        this.dom.transcriptList.appendChild(item);
      });
    });
  }

  renderGlossary() {
    this.dom.glossaryGrid.innerHTML = '';
    this.data.glossary.forEach(item => {
      const card = document.createElement('div');
      card.className = 'glossary-card';
      card.innerHTML = `
        <h4>✦ ${item.term}</h4>
        <p>${item.def}</p>
      `;
      this.dom.glossaryGrid.appendChild(card);
    });
  }

  bindEvents() {
    this.dom.playBtn.onclick = () => this.togglePlay();
    this.dom.nextBtn.onclick = () => this.nextSegment();
    this.dom.prevBtn.onclick = () => this.prevSegment();
    this.dom.restartBtn.onclick = () => this.restart();
    this.dom.zenMusicBtn.onclick = () => this.toggleZenMusic();
    this.dom.recordVideoBtn.onclick = () => this.toggleRecordVideo();

    this.dom.speedSelect.onchange = (e) => {
      this.playbackSpeed = parseFloat(e.target.value);
      if (this.isPlaying) {
        this.playCurrent();
      }
    };

    this.dom.progressTrack.onclick = (e) => {
      const rect = this.dom.progressTrack.getBoundingClientRect();
      const clickRatio = (e.clientX - rect.left) / rect.width;
      const totalSegments = this.getCurrentChapter().segments.length;
      const targetIdx = Math.min(totalSegments - 1, Math.floor(clickRatio * totalSegments));
      this.loadSegment(this.currentChapterIndex, targetIdx);
      if (this.isPlaying) this.playCurrent();
    };

    // Tabs switching
    this.dom.tabBtns.forEach(btn => {
      btn.onclick = () => {
        this.dom.tabBtns.forEach(b => b.classList.remove('active'));
        this.dom.tabPanes.forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById(btn.dataset.tab).classList.add('active');
      };
    });
  }

  getCurrentChapter() {
    return this.data.chapters[this.currentChapterIndex];
  }

  getCurrentSegment() {
    return this.getCurrentChapter().segments[this.currentSegmentIndex];
  }

  switchChapter(idx) {
    this.stopSpeech();
    this.currentChapterIndex = idx;
    this.currentSegmentIndex = 0;
    this.renderChapterNav();
    this.loadSegment(idx, 0);
  }

  loadSegment(cIdx, sIdx) {
    this.currentChapterIndex = cIdx;
    this.currentSegmentIndex = sIdx;
    const chapter = this.getCurrentChapter();
    const segment = chapter.segments[sIdx];

    // Update Header
    this.dom.stageChapterTitle.textContent = chapter.title;

    // Update Podium States
    if (segment.speaker === 'triet') {
      this.dom.podiumTriet.classList.add('active');
      this.dom.podiumMan.classList.remove('active');
      this.dom.subSpeakerTag.className = 'sub-speaker-tag triet';
      this.dom.subSpeakerTag.textContent = 'Minh Triết';
    } else {
      this.dom.podiumMan.classList.add('active');
      this.dom.podiumTriet.classList.remove('active');
      this.dom.subSpeakerTag.className = 'sub-speaker-tag man';
      this.dom.subSpeakerTag.textContent = 'Tuệ Mẫn';
    }

    // Update Presentation Slide
    const slide = segment.slide;
    this.dom.slideBadge.textContent = slide.badge;
    this.dom.slideTitle.textContent = slide.title;
    this.dom.slidePoints.innerHTML = slide.points.map(pt => `<li>${pt}</li>`).join('');
    this.dom.slideQuote.textContent = `"${slide.quote}"`;

    // Update Subtitles
    this.dom.subText.textContent = segment.text;

    // Update Progress
    const totalSegs = chapter.segments.length;
    const pct = ((sIdx + 1) / totalSegs) * 100;
    this.dom.progressFill.style.width = `${pct}%`;
    this.dom.currentTimeLabel.textContent = `0${sIdx + 1}:00`;
    this.dom.totalTimeLabel.textContent = `0${totalSegs}:00`;
    this.dom.stageTimer.textContent = `Câu ${sIdx + 1} / ${totalSegs}`;

    // Highlight in Transcript Tab
    document.querySelectorAll('.transcript-item').forEach(item => item.classList.remove('current'));
    const currentTrans = document.getElementById(`trans_${cIdx}_${sIdx}`);
    if (currentTrans) {
      currentTrans.classList.add('current');
      currentTrans.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }

  // ==========================================
  // SPEECH PLAYBACK ENGINE
  // ==========================================
  togglePlay() {
    this.initAudioContext();
    if (this.isPlaying) {
      this.pause();
    } else {
      this.playCurrent();
    }
  }

  playCurrent() {
    this.stopSpeech();
    this.isPlaying = true;
    this.dom.playBtn.innerHTML = '⏸';
    this.dom.playBtn.title = 'Tạm dừng';

    const segment = this.getCurrentSegment();
    const host = this.data.meta.hosts.find(h => h.id === segment.speaker);

    if (this.synth) {
      const utterance = new SpeechSynthesisUtterance(segment.text);
      utterance.voice = this.getBestVoice(host.gender);
      utterance.pitch = host.voicePitch;
      utterance.rate = this.playbackSpeed * host.voiceRate;
      utterance.lang = 'vi-VN';

      utterance.onend = () => {
        if (this.isPlaying) {
          setTimeout(() => this.nextSegment(), 400);
        }
      };

      utterance.onerror = (e) => {
        console.warn("Speech error, fallback timer triggered", e);
        this.runFallbackTimer(segment.text);
      };

      this.currentUtterance = utterance;
      this.synth.speak(utterance);
    } else {
      this.runFallbackTimer(segment.text);
    }
  }

  runFallbackTimer(text) {
    const wordCount = text.split(' ').length;
    const durationMs = Math.max(3500, (wordCount / (2.5 * this.playbackSpeed)) * 1000);
    this.timerFallback = setTimeout(() => {
      if (this.isPlaying) this.nextSegment();
    }, durationMs);
  }

  pause() {
    this.isPlaying = false;
    this.dom.playBtn.innerHTML = '▶';
    this.dom.playBtn.title = 'Phát';
    this.stopSpeech();
  }

  stopSpeech() {
    if (this.synth) {
      this.synth.cancel();
    }
    if (this.timerFallback) {
      clearTimeout(this.timerFallback);
      this.timerFallback = null;
    }
  }

  nextSegment() {
    const chapter = this.getCurrentChapter();
    if (this.currentSegmentIndex < chapter.segments.length - 1) {
      this.loadSegment(this.currentChapterIndex, this.currentSegmentIndex + 1);
      if (this.isPlaying) this.playCurrent();
    } else if (this.currentChapterIndex < this.data.chapters.length - 1) {
      // Go to next chapter
      this.switchChapter(this.currentChapterIndex + 1);
      if (this.isPlaying) this.playCurrent();
    } else {
      // Finished all chapters
      this.pause();
      if (this.isRecording) {
        this.stopRecordingAndDownload();
      }
    }
  }

  prevSegment() {
    if (this.currentSegmentIndex > 0) {
      this.loadSegment(this.currentChapterIndex, this.currentSegmentIndex - 1);
      if (this.isPlaying) this.playCurrent();
    } else if (this.currentChapterIndex > 0) {
      const prevChap = this.currentChapterIndex - 1;
      this.switchChapter(prevChap);
      this.loadSegment(prevChap, this.data.chapters[prevChap].segments.length - 1);
      if (this.isPlaying) this.playCurrent();
    }
  }

  restart() {
    this.loadSegment(this.currentChapterIndex, 0);
    if (this.isPlaying) this.playCurrent();
  }

  // ==========================================
  // REAL-TIME 1080p CANVAS VIDEO EXPORTER
  // ==========================================
  toggleRecordVideo() {
    this.initAudioContext();
    if (this.isRecording) {
      this.stopRecordingAndDownload();
    } else {
      this.startVideoRecording();
    }
  }

  startVideoRecording() {
    const canvas = this.dom.exportCanvas;
    const ctx = canvas.getContext('2d');
    this.recordedChunks = [];
    this.isRecording = true;
    this.isExportRendering = true;

    this.dom.recBadge.classList.add('show');
    this.dom.recordVideoBtn.classList.add('btn-recording');
    this.dom.recordBtnText.textContent = 'Dừng & Tải Video';

    // Set up canvas capture stream
    const videoStream = canvas.captureStream(30);

    // Audio stream combination if Web Audio active
    let combinedStream = videoStream;
    if (this.audioCtx) {
      try {
        const dest = this.audioCtx.createMediaStreamDestination();
        if (this.ambientGain) this.ambientGain.connect(dest);
        const audioTracks = dest.stream.getAudioTracks();
        if (audioTracks.length > 0) {
          combinedStream = new MediaStream([...videoStream.getVideoTracks(), audioTracks[0]]);
        }
      } catch (e) {
        console.warn("Could not merge audio stream to canvas", e);
      }
    }

    // MediaRecorder options
    const mimeTypes = [
      'video/webm;codecs=vp9,opus',
      'video/webm',
      'video/mp4'
    ];
    let selectedMime = '';
    for (const m of mimeTypes) {
      if (MediaRecorder.isTypeSupported(m)) {
        selectedMime = m;
        break;
      }
    }

    try {
      this.mediaRecorder = new MediaRecorder(combinedStream, selectedMime ? { mimeType: selectedMime } : undefined);
    } catch (e) {
      this.mediaRecorder = new MediaRecorder(combinedStream);
    }

    this.mediaRecorder.ondataavailable = (e) => {
      if (e.data && e.data.size > 0) {
        this.recordedChunks.push(e.data);
      }
    };

    this.mediaRecorder.onstop = () => {
      this.saveVideoFile();
    };

    this.mediaRecorder.start(250);

    // Canvas render loop at 30 FPS
    this.renderCanvasLoop(canvas, ctx);

    // Start playback from beginning of current chapter
    this.loadSegment(this.currentChapterIndex, 0);
    this.playCurrent();
  }

  renderCanvasLoop(canvas, ctx) {
    if (!this.isExportRendering) return;

    // Draw Studio Frame onto 1280x720 Canvas
    const w = canvas.width;
    const h = canvas.height;

    // Background Gradient
    const bg = ctx.createRadialGradient(w / 2, h / 2, 50, w / 2, h / 2, w / 1.5);
    bg.addColorStop(0, '#111a33');
    bg.addColorStop(1, '#060913');
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, w, h);

    // Subtle Stars
    ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
    for (let i = 0; i < 40; i++) {
      const sx = ((i * 137) % w);
      const sy = ((i * 97) % h);
      ctx.fillRect(sx, sy, 1.5, 1.5);
    }

    // Top Header Banner
    ctx.fillStyle = '#f59e0b';
    ctx.font = 'bold 20px "Segoe UI", sans-serif';
    ctx.fillText("✦ TỬ VI TAM MINH • AI VIDEO PODCAST STUDIO ✦", 40, 50);

    ctx.fillStyle = '#94a3b8';
    ctx.font = '16px "Segoe UI", sans-serif';
    ctx.fillText(this.getCurrentChapter().title, 40, 78);

    // Host 1: Minh Triết (Left)
    const segment = this.getCurrentSegment();
    const isTrietSpeaking = segment.speaker === 'triet';
    const isManSpeaking = segment.speaker === 'man';

    // Draw Triet Podium
    ctx.fillStyle = isTrietSpeaking ? 'rgba(56, 189, 248, 0.2)' : 'rgba(15, 23, 42, 0.6)';
    ctx.strokeStyle = isTrietSpeaking ? '#38bdf8' : 'rgba(255, 255, 255, 0.1)';
    ctx.lineWidth = isTrietSpeaking ? 3 : 1;
    ctx.beginPath();
    ctx.arc(140, 240, 75, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = '#38bdf8';
    ctx.font = 'bold 18px "Segoe UI", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText("MINH TRIẾT", 140, 345);
    ctx.fillStyle = '#94a3b8';
    ctx.font = '14px "Segoe UI", sans-serif';
    ctx.fillText("Lý Số Gia", 140, 368);
    if (isTrietSpeaking) {
      ctx.fillStyle = '#38bdf8';
      ctx.fillText("● ĐANG NÓI", 140, 390);
    }

    // Host 2: Tuệ Mẫn (Right)
    ctx.fillStyle = isManSpeaking ? 'rgba(244, 114, 182, 0.2)' : 'rgba(15, 23, 42, 0.6)';
    ctx.strokeStyle = isManSpeaking ? '#f472b6' : 'rgba(255, 255, 255, 0.1)';
    ctx.lineWidth = isManSpeaking ? 3 : 1;
    ctx.beginPath();
    ctx.arc(w - 140, 240, 75, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = '#f472b6';
    ctx.font = 'bold 18px "Segoe UI", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText("TUỆ MẪN", w - 140, 345);
    ctx.fillStyle = '#94a3b8';
    ctx.font = '14px "Segoe UI", sans-serif';
    ctx.fillText("Nhà Phân Tích", w - 140, 368);
    if (isManSpeaking) {
      ctx.fillStyle = '#f472b6';
      ctx.fillText("● ĐANG NÓI", w - 140, 390);
    }

    // Center Slide Card
    ctx.textAlign = 'left';
    ctx.fillStyle = 'rgba(15, 23, 42, 0.85)';
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
    ctx.lineWidth = 1;
    this.roundRect(ctx, 250, 110, w - 500, 380, 16, true, true);

    const slide = segment.slide;
    ctx.fillStyle = '#fbbf24';
    ctx.font = 'bold 14px "Segoe UI", sans-serif';
    ctx.fillText(`[ ${slide.badge} ]`, 280, 150);

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 22px "Segoe UI", sans-serif';
    ctx.fillText(slide.title, 280, 185);

    // Slide Bullet Points
    ctx.fillStyle = '#e2e8f0';
    ctx.font = '16px "Segoe UI", sans-serif';
    slide.points.forEach((pt, idx) => {
      ctx.fillText(`✦  ${pt}`, 280, 230 + idx * 36);
    });

    // Quote Box
    ctx.fillStyle = 'rgba(2, 132, 199, 0.18)';
    this.roundRect(ctx, 280, 370, w - 560, 60, 8, true, false);
    ctx.fillStyle = '#7dd3fc';
    ctx.font = 'italic 15px "Segoe UI", sans-serif';
    ctx.fillText(`"${slide.quote}"`, 300, 406);

    // Subtitle / Karaoke at Bottom
    ctx.fillStyle = 'rgba(6, 9, 19, 0.9)';
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
    this.roundRect(ctx, 60, h - 160, w - 120, 120, 14, true, true);

    // Speaker label
    ctx.fillStyle = isTrietSpeaking ? '#38bdf8' : '#f472b6';
    ctx.font = 'bold 15px "Segoe UI", sans-serif';
    ctx.fillText(isTrietSpeaking ? 'MINH TRIẾT:' : 'TUỆ MẪN:', 90, h - 125);

    // Text with wrapping
    ctx.fillStyle = '#f8fafc';
    ctx.font = '16px "Segoe UI", sans-serif';
    this.wrapText(ctx, segment.text, 90, h - 95, w - 180, 24);

    requestAnimationFrame(() => this.renderCanvasLoop(canvas, ctx));
  }

  roundRect(ctx, x, y, width, height, radius, fill, stroke) {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
    if (fill) ctx.fill();
    if (stroke) ctx.stroke();
  }

  wrapText(ctx, text, x, y, maxWidth, lineHeight) {
    const words = text.split(' ');
    let line = '';
    for (let n = 0; n < words.length; n++) {
      const testLine = line + words[n] + ' ';
      const metrics = ctx.measureText(testLine);
      if (metrics.width > maxWidth && n > 0) {
        ctx.fillText(line, x, y);
        line = words[n] + ' ';
        y += lineHeight;
      } else {
        line = testLine;
      }
    }
    ctx.fillText(line, x, y);
  }

  stopRecordingAndDownload() {
    this.isRecording = false;
    this.isExportRendering = false;
    this.dom.recBadge.classList.remove('show');
    this.dom.recordVideoBtn.classList.remove('btn-recording');
    this.dom.recordBtnText.textContent = 'Xuất Video MP4';

    if (this.mediaRecorder && this.mediaRecorder.state !== 'inactive') {
      this.mediaRecorder.stop();
    }
  }

  saveVideoFile() {
    if (this.recordedChunks.length === 0) return;
    const blob = new Blob(this.recordedChunks, { type: 'video/webm' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    const chapNum = this.getCurrentChapter().id;
    a.download = `Tu-Vi-Tam-Minh-Podcast-Tap-${chapNum}.webm`;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    }, 2000);
  }
}

// Instantiate Podcast on Window Load
window.addEventListener('DOMContentLoaded', () => {
  if (typeof PODCAST_DATA !== 'undefined') {
    window.podcastStudio = new PodcastStudio(PODCAST_DATA);
  }
});
