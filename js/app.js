/**
 * ดวง•ทรง — Application Controller
 * Strict Rule: Preserves 100% of the original data in mockData.js
 * Applies the 'ดวง•ทรง' visual styling (Ivory, Plum, Gold & Jade)
 */

document.addEventListener('DOMContentLoaded', () => {
  const state = {
    currentPersona: 'female', // 'female' | 'male'
    currentScreen: 1,         // 1 to 5
    currentOccasion: 'professional' // 'professional' | 'formal' | 'social' | 'special'
  };

  init();

  function init() {
    const params = new URLSearchParams(window.location.search);
    if (params.has('persona')) {
      const p = params.get('persona');
      if (p === 'female' || p === 'male') state.currentPersona = p;
    }
    if (params.has('step')) {
      const s = parseInt(params.get('step'));
      if (s >= 1 && s <= 5) state.currentScreen = s;
    }
    if (params.has('occ')) {
      state.currentOccasion = params.get('occ');
    }

    // Sync persona button UI
    document.querySelectorAll('.persona-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.persona === state.currentPersona);
    });

    // Sync Step Rail UI
    document.querySelectorAll('.rail-step').forEach(stepEl => {
      const s = parseInt(stepEl.dataset.step);
      stepEl.classList.toggle('active', s === state.currentScreen);
      stepEl.classList.toggle('done', s < state.currentScreen);
    });

    // Toggle Screen Visibility
    document.querySelectorAll('.screen').forEach((scr, idx) => {
      scr.classList.toggle('show', (idx + 1) === state.currentScreen);
    });

    renderAll();
  }

  window.setPersona = function(personaKey) {
    if (state.currentPersona !== personaKey) {
      state.currentPersona = personaKey;
      document.querySelectorAll('.persona-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.persona === personaKey);
      });
      renderAll();
    }
  };

  window.goStep = function(stepNum) {
    state.currentScreen = stepNum;

    // Update Step Rail
    document.querySelectorAll('.rail-step').forEach(stepEl => {
      const s = parseInt(stepEl.dataset.step);
      stepEl.classList.toggle('active', s === stepNum);
      stepEl.classList.toggle('done', s < stepNum);
    });

    // Auto-scroll active step on mobile/tablet
    const activeStepEl = document.querySelector(`.rail-step[data-step="${stepNum}"]`);
    if (activeStepEl && window.innerWidth < 820) {
      activeStepEl.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }

    // Toggle Screen Visibility
    document.querySelectorAll('.screen').forEach((scr, idx) => {
      scr.classList.toggle('show', (idx + 1) === stepNum);
    });

    renderCurrentScreen();
    window.scrollTo({ top: 0, behavior: 'smooth' });

    setTimeout(() => {
      if (window.lucide) lucide.createIcons();
    }, 40);
  };

  window.setOcc = function(occKey) {
    state.currentOccasion = occKey;
    document.querySelectorAll('.occ-tab').forEach(tab => {
      tab.classList.toggle('active', tab.dataset.occ === occKey);
    });
    renderScreen5(MOCK_DATA[state.currentPersona]);
    setTimeout(() => {
      if (window.lucide) lucide.createIcons();
    }, 40);
  };

  function renderAll() {
    renderCurrentScreen();
  }

  function renderCurrentScreen() {
    const data = MOCK_DATA[state.currentPersona];
    if (!data) return;

    switch (state.currentScreen) {
      case 1: renderScreen1(data); break;
      case 2: renderScreen2(data); break;
      case 3: renderScreen3(data); break;
      case 4: renderScreen4(data); break;
      case 5: renderScreen5(data); break;
    }
    setTimeout(() => {
      if (window.lucide) lucide.createIcons();
    }, 40);
  }

  /* ========================================================================
     SCREEN 1: UPLOAD & USER PROFILING (TOR 2.2.1)
     ======================================================================== */
  function renderScreen1(data) {
    const container = document.getElementById('content-screen-1');
    if (!container) return;

    container.innerHTML = `
      <div class="intro">
        <h1>เริ่มต้นค้นหาออร่าและสไตล์ของคุณ</h1>
        <p>อัปโหลดภาพถ่ายและกรอกข้อมูลวันเวลาเกิด เพื่อให้ระบบ AI วิเคราะห์โครงหน้า สัดส่วนร่างกาย และพลังงานประจำตัวของคุณ (โปรไฟล์ปัจจุบัน: <b>${data.name}</b>)</p>
      </div>

      <!-- Step 1 Studio Console: 3-Column Diagnostic Layout -->
      <div class="step1-studio-grid">
        <!-- Column 1: Face Scan -->
        <div class="step1-card">
          <div class="step1-card-h">
            <div>
              <h3 style="font-size:16px; color:var(--plum); font-weight:700;">ภาพถ่ายใบหน้า</h3>
              <div style="font-size:12px; color:#8a7d6a;">หน้าตรง แสงสว่างเห็นสัดส่วนชัดเจน</div>
            </div>
            <span class="tag tag-gold" style="font-size:11px;">Face Scan</span>
          </div>
          <div class="step1-card-body">
            <div class="step1-dropzone">
              <img src="${data.photos.face}" alt="Face Scan">
              <div class="upload-overlay">
                <span style="font-family:var(--font-mono); font-size:11px; text-transform:uppercase;">01 / Face Topography</span>
                <span style="color:var(--gold-lt); font-size:11px;">ตรวจจับ 68 จุด</span>
              </div>
            </div>
            <div style="display:flex; justify-content:space-between; align-items:center; font-size:12px; color:#6b5f4f;">
              <span>สถานะ: <b>ประมวลผลเสร็จสิ้น</b></span>
              <span style="color:var(--jade); font-weight:600;">✓ พร้อมวิเคราะห์</span>
            </div>
          </div>
        </div>

        <!-- Column 2: Body Scan -->
        <div class="step1-card">
          <div class="step1-card-h">
            <div>
              <h3 style="font-size:16px; color:var(--plum); font-weight:700;">ภาพถ่ายเต็มตัว</h3>
              <div style="font-size:12px; color:#8a7d6a;">ยืนตรง เห็นสรีระและโครงกระดูกชัดเจน</div>
            </div>
            <span class="tag tag-gold" style="font-size:11px;">Body Scan</span>
          </div>
          <div class="step1-card-body">
            <div class="step1-dropzone">
              <img src="${data.photos.body}" alt="Body Scan">
              <div class="upload-overlay">
                <span style="font-family:var(--font-mono); font-size:11px; text-transform:uppercase;">02 / Skeletal Geometry</span>
                <span style="color:var(--gold-lt); font-size:11px;">วิเคราะห์กระดูก 14 จุด</span>
              </div>
            </div>
            <div style="display:flex; justify-content:space-between; align-items:center; font-size:12px; color:#6b5f4f;">
              <span>สถานะ: <b>ประมวลผลเสร็จสิ้น</b></span>
              <span style="color:var(--jade); font-weight:600;">✓ พร้อมวิเคราะห์</span>
            </div>
          </div>
        </div>

        <!-- Column 3: Natal Chart & Birth Form -->
        <div class="step1-card form-col">
          <div class="step1-card-h gold">
            <div>
              <h3 style="color:var(--gold-lt); font-size:16px;">ข้อมูลวันเวลาเกิด & พิกัดภูมิลำเนา</h3>
              <div style="font-size:12px; color:rgba(255,255,255,0.75);">ใช้คำนวณตำแหน่งดวงดาวและลัคนา</div>
            </div>
            <span style="font-size:11.5px; color:var(--gold-lt); font-family:var(--font-mono);">${data.birth.solarDegree}</span>
          </div>
          <div class="step1-card-body">
            <div class="step1-form-grid">
              <div class="form-field">
                <label for="birth-date">วัน เดือน ปีเกิด</label>
                <input type="text" id="birth-date" name="birth-date" value="${data.birth.date}" readonly>
              </div>
              <div class="form-field">
                <label for="birth-day">วันกำเนิด & ดาวครองวัน</label>
                <input type="text" id="birth-day" name="birth-day" value="${data.birth.dayName}" readonly>
              </div>
              <div class="form-field">
                <label for="birth-time">เวลาตกฟาก (Solar True Time)</label>
                <input type="text" id="birth-time" name="birth-time" value="${data.birth.time}" readonly>
              </div>
              <div class="form-field">
                <label for="birth-province">จังหวัดเกิด (ภูมิลำเนา)</label>
                <input type="text" id="birth-province" name="birth-province" value="${data.birth.province}" readonly>
              </div>
              <div class="form-field full-w">
                <label for="birth-lagna">ลัคนาราศี & ดาวเกษตรบดี</label>
                <input type="text" id="birth-lagna" name="birth-lagna" value="${data.birth.lagna} — ${data.birth.rulingPlanet}" readonly>
              </div>
            </div>

            <div class="natal-summary-box">
              <div style="font-weight:600; color:var(--plum); margin-bottom:4px;">✨ ข้อมูลดวงชะตาคำนวณเบื้องต้น</div>
              <div>• <b>พลังงานออร่า:</b> ${data.astrologyProfile.auraName}</div>
              <div>• <b>สีมงคลประจำตัว:</b> ${data.astrologyProfile.dailyAuspicious.color}</div>
            </div>

            <button class="btn btn-primary step1-cta-btn" onclick="window.goStep(2)">
              <span>เริ่มวิเคราะห์โหงวเฮ้ง & สรีระ →</span>
            </button>
          </div>
        </div>
      </div>
    `;
  }

  /* ========================================================================
     SCREEN 2: FACE x โหงวเฮ้ง (TOR 2.2.2)
     ======================================================================== */
  function renderScreen2(data) {
    const container = document.getElementById('content-screen-2');
    if (!container) return;

    const face = data.faceAnalysis;

    container.innerHTML = `
      <div class="intro">
        <h1>โหงวเฮ้ง — รูปหน้าและสัดส่วนใบหน้า คือ ประตูระบายและเก็บทรัพย์</h1>
        <p>วิเคราะห์เส้นสายบนใบหน้าตามหลักโหงวเฮ้ง พร้อมคำแนะนำการเปิดรับโอกาส คอนทัวร์สันจมูก และไฮไลต์แก้มอิ่มฟู</p>
      </div>

      <!-- Result Header Info -->
      <div style="display:flex; align-items:center; gap:16px; margin-bottom:24px;">
        <div style="width:68px; height:68px; border-radius:50%; overflow:hidden; border:2.5px solid var(--gold); flex-shrink:0;">
          <img src="${data.photos.face}" alt="Face" style="width:100%; height:100%; object-fit:cover;">
        </div>
        <div>
          <h2 style="font-size:20px; color:var(--plum);">${data.name}</h2>
          <div style="font-size:13.5px; color:#6b5f4f;">โครงสร้าง: <b>${face.shape}</b> · โทนผิว: <b>${face.undertone}</b></div>
        </div>
      </div>

      <!-- Main Face Panel -->
      <div class="panel">
        <div class="panel-h gold">
          <h3>พิกัดโหงวเฮ้ง & ประตูรับทรัพย์บนใบหน้า (Zenith Gates)</h3>
          <span style="font-size:12px; color:var(--gold-lt);">5 วังสำคัญ</span>
        </div>
        <div class="panel-body">
          <div class="face-map">
            <!-- Face Diagram with Crosshair Markers -->
            <div class="face-diagram-wrap" style="height:340px;">
              <img src="${data.photos.face}" alt="Face Subject" style="width:100%; height:100%; object-fit:cover;">
              <div style="position:absolute; inset:0; background:rgba(28,20,16,0.15);"></div>

              ${face.landmarks.map(lm => `
                <div class="crosshair-dot" style="left:${lm.x}%; top:${lm.y}%;" title="${lm.label}: ${lm.zone}"></div>
                <div class="crosshair-label" style="left:${lm.x > 50 ? (lm.x + 3) : (lm.x - 26)}%; top:${lm.y - 1}%;">
                  ${lm.label}
                </div>
              `).join('')}
            </div>

            <!-- Wealth Gates Notes -->
            <div class="face-notes">
              ${face.wealthGates.map(gate => `
                <div class="face-note">
                  <b>${gate.title} (${gate.subtitle})</b>
                  <span>${gate.detail}</span>
                  <div style="margin-top:6px;">
                    <span class="tag tag-gold">แนวทาง: ${gate.action}</span>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>

      <!-- Curated Recommendations (Hair, Makeup, Eyewear) -->
      <div class="section-title">คำแนะนำเฉพาะบุคคล (Curated Directives)</div>
      <div class="directives-grid">
        <!-- Hair -->
        <div class="panel" style="margin-bottom:0; overflow:hidden;">
          <div style="height:150px; overflow:hidden;">
            <img src="${face.recommendations.hair.image}" alt="Hair" style="width:100%; height:100%; object-fit:cover;">
          </div>
          <div style="padding:16px;">
            <div style="font-size:11px; color:var(--gold); font-weight:700; text-transform:uppercase; margin-bottom:2px;">
              ${face.recommendations.hair.category}
            </div>
            <b style="font-size:15px; color:var(--plum); display:block; margin-bottom:4px;">${face.recommendations.hair.title}</b>
            <span style="font-size:13px; color:#6b5f4f;">${face.recommendations.hair.desc}</span>
          </div>
        </div>

        <!-- Makeup -->
        <div class="panel" style="margin-bottom:0; overflow:hidden;">
          <div style="height:150px; overflow:hidden;">
            <img src="${face.recommendations.makeup.image}" alt="Makeup" style="width:100%; height:100%; object-fit:cover;">
          </div>
          <div style="padding:16px;">
            <div style="font-size:11px; color:var(--gold); font-weight:700; text-transform:uppercase; margin-bottom:2px;">
              ${face.recommendations.makeup.category}
            </div>
            <b style="font-size:15px; color:var(--plum); display:block; margin-bottom:4px;">${face.recommendations.makeup.title}</b>
            <span style="font-size:13px; color:#6b5f4f;">${face.recommendations.makeup.desc}</span>
          </div>
        </div>

        <!-- Eyewear -->
        <div class="panel" style="margin-bottom:0; overflow:hidden;">
          <div style="height:150px; overflow:hidden;">
            <img src="${face.recommendations.eyewear.image}" alt="Eyewear" style="width:100%; height:100%; object-fit:cover;">
          </div>
          <div style="padding:16px;">
            <div style="font-size:11px; color:var(--gold); font-weight:700; text-transform:uppercase; margin-bottom:2px;">
              ${face.recommendations.eyewear.category}
            </div>
            <b style="font-size:15px; color:var(--plum); display:block; margin-bottom:4px;">${face.recommendations.eyewear.title}</b>
            <span style="font-size:13px; color:#6b5f4f;">${face.recommendations.eyewear.desc}</span>
          </div>
        </div>
      </div>

      <div class="btn-row">
        <button class="btn btn-ghost" onclick="window.goStep(1)">← ย้อนกลับ</button>
        <button class="btn btn-primary" onclick="window.goStep(3)">ดูฮวงจุ้ยสรีระร่างกาย →</button>
      </div>
    `;
  }

  /* ========================================================================
     SCREEN 3: BODY x ฮวงจุ้ยสรีระ (TOR 2.2.4 & 3.2.1)
     ======================================================================== */
  function renderScreen3(data) {
    const container = document.getElementById('content-screen-3');
    if (!container) return;

    const body = data.bodyAnalysis;

    container.innerHTML = `
      <div class="intro">
        <h1>วิเคราะห์ร่างกาย x จัดฮวงจุ้ยโครงสร้างสรีระ</h1>
        <p>โครงสร้างกระดูกคือชะตาฟ้าลิขิต ใช้การแต่งตัวมาช่วยแก้จุดบล็อกและขยายจุดเฮง (Motto: "${body.motto}")</p>
      </div>

      <div class="body-split-grid">
        <!-- Left: Body Type & Yin Yang -->
        <div class="panel" style="margin-bottom:0;">
          <div class="panel-h gold">
            <h3>โครงสร้างร่างกาย & สมดุล Yin / Yang</h3>
            <span style="font-size:12px; color:var(--gold-lt); font-weight:700;">${body.type} Type</span>
          </div>
          <div class="panel-body">
            <div style="display:flex; gap:20px; align-items:center; margin-bottom:20px;">
              <div style="width:130px; height:200px; border-radius:12px; overflow:hidden; border:1px solid var(--line); flex-shrink:0; box-shadow:0 4px 12px rgba(0,0,0,0.04);">
                <img src="${data.photos.body}" alt="Body" style="width:100%; height:100%; object-fit:cover; object-position:center top;">
              </div>
              <div>
                <div style="font-size:12px; color:var(--gold); font-weight:700; text-transform:uppercase;">ผลการประเมินโครงสร้าง</div>
                <h3 style="font-size:18px; color:var(--plum); margin:2px 0 6px;">คุณคือ ${body.typeName}</h3>
                <p style="font-size:13.5px; color:#6b5f4f; line-height:1.55;">${body.typeSummary}</p>
              </div>
            </div>

            <!-- Yin Yang Harmonic Bar -->
            <div style="background:var(--ivory-2); padding:16px; border-radius:12px; border:1px solid var(--line); margin-bottom:18px;">
              <div style="display:flex; justify-content:space-between; font-size:13.5px; font-weight:600; margin-bottom:8px;">
                <span>พลังหยิน (Yin): ${body.yinYang.yin}%</span>
                <span>พลังหยาง (Yang): ${body.yinYang.yang}%</span>
              </div>
              <div style="height:10px; border-radius:6px; overflow:hidden; display:flex;">
                <div style="width:${body.yinYang.yin}%; background:var(--plum);"></div>
                <div style="width:${body.yinYang.yang}%; background:var(--gold);"></div>
              </div>
            </div>

            <!-- Skeletal Lines -->
            <div style="font-size:13px; color:#6b5f4f; display:flex; flex-direction:column; gap:6px;">
              <div>• <b>แนวไหล่:</b> ${body.lines.shoulder}</div>
              <div>• <b>แนวเอว:</b> ${body.lines.waist}</div>
              <div>• <b>แนวสะโพก:</b> ${body.lines.hip}</div>
              <div>• <b>โครงกระดูก:</b> ${body.lines.bone}</div>
            </div>
          </div>
        </div>

        <!-- Right: Seasonal Color & Archetypes -->
        <div class="panel" style="margin-bottom:0;">
          <div class="panel-h jade">
            <h3>Seasonal Color Analysis (AI Undertone)</h3>
            <span style="font-size:12px; font-weight:700;">${body.seasonalColor.season}</span>
          </div>
          <div class="panel-body">
            <div style="margin-bottom:16px;">
              <div style="font-size:13.5px; color:#6b5f4f;">• <b>Skin Tone:</b> ${body.seasonalColor.skinTone}</div>
              <div style="font-size:13.5px; color:#6b5f4f; margin-top:4px;">• <b>Undertone:</b> ${body.seasonalColor.undertone}</div>
            </div>

            <div style="font-size:12px; font-weight:600; color:#8a7d6a; margin-bottom:8px;">เฉดสีมงคลที่สอดรับกับสีผิว:</div>
            <div style="display:flex; gap:6px; margin-bottom:16px;">
              ${body.seasonalColor.palette.map(c => `
                <div style="flex:1; height:32px; border-radius:6px; background-color:${c}; border:1px solid rgba(0,0,0,0.1);" title="${c}"></div>
              `).join('')}
            </div>

            <p style="font-size:13px; color:#6b5f4f; background:var(--ivory-2); padding:12px; border-radius:8px; border:1px solid var(--line); line-height:1.5;">
              💡 ${body.seasonalColor.luckyColorExplanation}
            </p>

            <div class="tag-row" style="margin-top:16px;">
              <span class="tag">Straight: เนี้ยบ ไม่ทับถมบารมี</span>
              <span class="tag">Wave: ผ้าพลิ้ว เรียกโชค</span>
              <span class="tag">Natural: หลวม ไม่บีบพลัง</span>
            </div>
          </div>
        </div>
      </div>

      <div class="btn-row">
        <button class="btn btn-ghost" onclick="window.goStep(2)">← ย้อนกลับ</button>
        <button class="btn btn-primary" onclick="window.goStep(4)">คำนวณพลังงานออร่า →</button>
      </div>
    `;
  }

  /* ========================================================================
     SCREEN 4: ASTROLOGY x AURA & ENERGY PROFILE (TOR 3.2.4)
     ======================================================================== */
  function renderScreen4(data) {
    const container = document.getElementById('content-screen-4');
    if (!container) return;

    const astro = data.astrologyProfile;

    container.innerHTML = `
      <div class="intro">
        <h1>พลังงานออร่า & ดวงชะตาไทย</h1>
        <p>ประมวลผลดวงชะตาตามหลักโหราศาสตร์ไทย โดยใช้สถิติวันเดือนปีเกิด เวลาตกฟาก และภูมิลำเนาเพื่อวิเคราะห์พลังงานและออร่า</p>
      </div>

      <!-- Aura Visual Box -->
      <div class="aura-visual-box">
        <div class="aura-ring-frame">
          <div class="aura-photo-circle">
            <img src="${data.photos.face}" alt="Aura Portrait">
          </div>
        </div>
        <div>
          <span style="font-size:12px; color:var(--gold); font-weight:700; text-transform:uppercase;">Aura Resonance Quotient</span>
          <h2 style="font-size:24px; color:var(--plum); margin:2px 0 6px;">${astro.auraName}</h2>
          <p style="font-size:14px; color:#6b5f4f; line-height:1.55; max-width:680px;">${astro.auraMeaning}</p>
          <div class="tag-row" style="margin-top:10px;">
            <span class="tag">ระดับพลังงานรวม: ${astro.energyScore}%</span>
            <span class="tag tag-gold">${data.birth.lagna}</span>
          </div>
        </div>
      </div>

      <!-- 4 Pillars & 5 Elements -->
      <div class="astro-split-grid">
        
        <!-- 4 Pillars Progress -->
        <div class="panel" style="margin-bottom:0;">
          <div class="panel-h gold">
            <h3>มิติพลังงาน 4 ด้าน (Four Pillars)</h3>
            <span style="font-size:12px; color:var(--gold-lt);">สมดุลพลัง</span>
          </div>
          <div class="panel-body">
            <div class="aura-bars">
              ${astro.pillars.map(p => `
                <div class="aura-bar-row">
                  <span class="label">${p.name}</span>
                  <div class="aura-bar-track">
                    <div class="aura-bar-fill" style="width:${p.score}%;"></div>
                  </div>
                  <span class="pct">${p.score}%</span>
                </div>
              `).join('')}
            </div>
            <div style="font-size:12.5px; color:#8a7d6a; margin-top:16px;">
              • <b>สถานะเด่น:</b> ${astro.pillars[2].name} (${astro.pillars[2].score}%) มีความสอดคล้องกับดาวศุกร์และดาวพุธในดวงชะตา
            </div>
          </div>
        </div>

        <!-- 5 Elements Matrix -->
        <div class="panel" style="margin-bottom:0;">
          <div class="panel-h jade">
            <h3>สมดุลธาตุทั้ง 5 ตามหลักโหราศาสตร์ไทย</h3>
            <span style="font-size:12px; font-weight:700;">Pancha Dhatu</span>
          </div>
          <div class="panel-body">
            <div class="elements-grid-4">
              ${astro.elements.map(el => `
                <div style="background:var(--ivory-2); padding:10px 4px; border-radius:8px; border:1px solid var(--line);">
                  <div style="font-size:11.5px; color:#6b5f4f;">${el.name}</div>
                  <div style="font-size:16px; font-weight:700; color:var(--plum); margin:2px 0;">${el.pct}%</div>
                  <div style="font-size:10px; color:var(--jade); font-weight:600;">${el.status}</div>
                </div>
              `).join('')}
            </div>

            <div style="font-size:13px; color:#6b5f4f; background:var(--ivory-2); padding:12px; border-radius:8px; border:1px solid var(--line); line-height:1.5;">
              <div>• <b>สีมงคล:</b> ${astro.dailyAuspicious.color}</div>
              <div>• <b>สีที่ควรเลี่ยง:</b> ${astro.dailyAuspicious.avoidColor}</div>
              <div style="color:var(--plum); font-weight:600; margin-top:4px;">• ${astro.dailyAuspicious.time}</div>
            </div>
          </div>
        </div>

      </div>

      <div class="btn-row">
        <button class="btn btn-ghost" onclick="window.goStep(3)">← ย้อนกลับ</button>
        <button class="btn btn-primary" onclick="window.goStep(5)">ดูตู้เสื้อผ้ามงคล 4 โอกาส →</button>
      </div>
    `;
  }

  /* ========================================================================
     SCREEN 5: FASHION RECOMMENDATION (TOR 4.2.1 & 4.2.2)
     ======================================================================== */
  function renderScreen5(data) {
    const container = document.getElementById('content-screen-5');
    if (!container) return;

    const occKey = state.currentOccasion;
    const occ = data.occasions[occKey] || data.occasions.professional;

    container.innerHTML = `
      <div class="intro">
        <h1>คำแนะนำการแต่งกายเฉพาะบุคคล (Complete Look)</h1>
        <p>คัดสรรจากสรีระ โทนสีผิว และพลังงานประจำตัวของคุณ ให้เหมาะกับแต่ละโอกาสในชีวิต 4 ประเภทหลัก</p>
      </div>

      <!-- 4 Occasions Tabs (Exact from user template) -->
      <div class="occ-tabs">
        <div class="occ-tab ${occKey === 'professional' ? 'active' : ''}" data-occ="professional" onclick="window.setOcc('professional')">Professional (ทำงาน)</div>
        <div class="occ-tab ${occKey === 'formal' ? 'active' : ''}" data-occ="formal" onclick="window.setOcc('formal')">Formal & Ceremonial (ทางการ)</div>
        <div class="occ-tab ${occKey === 'social' ? 'active' : ''}" data-occ="social" onclick="window.setOcc('social')">Social & Evening (สังสรรค์)</div>
        <div class="occ-tab ${occKey === 'special' ? 'active' : ''}" data-occ="special" onclick="window.setOcc('special')">Special Activities (กิจกรรมมงคล)</div>
      </div>

      <!-- Look Hero Banner -->
      <div class="look-hero">
        <div class="look-figure">
          <img src="${occ.outfitImage}" alt="${occ.title}">
        </div>
        <div class="look-copy">
          <div class="eyebrow">Complete Look แนะนำสำหรับ ${data.name}</div>
          <h2>${occ.subtitle}</h2>
          <p>${occ.concept} — ${occ.breakdown.top} ${occ.breakdown.inner ? `ร่วมกับ ${occ.breakdown.inner}` : ''}</p>
          <div style="font-size:13px; color:var(--gold-lt); margin-top:8px;">
            ✦ <b>เหตุผลฮวงจุ้ย:</b> ${occ.fengShuiReason}
          </div>
        </div>
      </div>

      <!-- Item Grid: Complete Look Items -->
      <div class="section-title">รายการชิ้นส่วนในชุด (Shop The Look)</div>
      <div class="item-grid">
        ${occ.items.map(item => `
          <div class="item-card">
            <div class="item-thumb">
              <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="item-info">
              <div class="cat">${item.tag}</div>
              <b>${item.name}</b>
              <span>${item.brand}</span>
              <span class="price">${item.price}</span>
            </div>
          </div>
        `).join('')}
      </div>

      <div class="btn-row" style="margin-top:36px;">
        <button class="btn btn-ghost" onclick="window.goStep(4)">← ย้อนกลับ</button>
        <button class="btn btn-primary" onclick="alert('บันทึกชุด Complete Look เรียบร้อยแล้ว')">บันทึกชุดนี้เข้าตู้เสื้อผ้า ✓</button>
      </div>
    `;
  }
});
