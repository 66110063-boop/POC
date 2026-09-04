/**
 * Hallmark-Compliant Application Controller
 * Anti-AI-Slop Architecture: Solid typography, precise data grids, no emojis, strict 8-state styling.
 */

document.addEventListener('DOMContentLoaded', () => {
  const state = {
    currentPersona: 'female', // 'female' | 'male'
    currentScreen: 1,         // 1 to 5
    currentOccasion: 'professional' // 'professional' | 'formal' | 'social' | 'special'
  };

  init();

  function init() {
    bindEvents();
    renderScreen(state.currentScreen);
  }

  function bindEvents() {
    // Persona Switcher
    document.querySelectorAll('.persona-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const persona = btn.dataset.persona;
        if (state.currentPersona !== persona) {
          state.currentPersona = persona;
          document.querySelectorAll('.persona-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          renderScreen(state.currentScreen);
        }
      });
    });

    // Step Navigation
    document.querySelectorAll('.step-nav-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const step = parseInt(btn.dataset.step);
        goToStep(step);
      });
    });
  }

  function goToStep(stepNumber) {
    state.currentScreen = stepNumber;

    // Update Header Step Navigation
    document.querySelectorAll('.step-nav-btn').forEach(btn => {
      const s = parseInt(btn.dataset.step);
      btn.classList.toggle('active', s === stepNumber);
    });

    // Toggle Active Stage Container
    document.querySelectorAll('.screen-stage').forEach((stage, idx) => {
      stage.classList.toggle('active-stage', (idx + 1) === stepNumber);
    });

    renderScreen(stepNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    setTimeout(() => {
      lucide.createIcons();
    }, 40);
  }

  window.appNav = function(step) {
    goToStep(step);
  };

  window.switchOccasion = function(occKey) {
    state.currentOccasion = occKey;
    renderScreen5(MOCK_DATA[state.currentPersona]);
    lucide.createIcons();
  };

  function renderScreen(screenNum) {
    const data = MOCK_DATA[state.currentPersona];
    if (!data) return;

    switch (screenNum) {
      case 1: renderScreen1(data); break;
      case 2: renderScreen2(data); break;
      case 3: renderScreen3(data); break;
      case 4: renderScreen4(data); break;
      case 5: renderScreen5(data); break;
    }
  }

  /* ========================================================================
     SCREEN 1: USER PROFILING (TOR 2.2.1)
     ======================================================================== */
  function renderScreen1(data) {
    const container = document.getElementById('content-stage-1');
    if (!container) return;

    container.innerHTML = `
      <div class="screen-header-block">
        <div>
          <div class="screen-step-tag">Step 01 / Ingestion & Natal Calibration</div>
          <h1 class="screen-title">นำเข้าข้อมูลผู้ใช้ & องศาดวงชะตากำเนิด</h1>
          <p class="screen-lede">อัปโหลดภาพถ่ายสำหรับการวิเคราะห์โครงสร้างพิกัดสรีระ ควบคู่กับการผูกดวงหาลัคนาราศีและเวลาตกฟากแท้จริง</p>
        </div>
        <div class="text-right font-mono text-xs text-neutral-400">
          <div>DATASET ID: ${data.id.toUpperCase()}-1997</div>
          <div class="text-amber-500/90 font-medium mt-1">STATUS: CALIBRATED</div>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <!-- Dual Photography Input (5 cols) -->
        <div class="lg:col-span-5 space-y-4">
          <div class="editorial-card">
            <div class="card-label-row">
              <span class="card-label">Visual Ingestion — Computer Vision</span>
              <span class="font-mono text-[11px] text-neutral-400">2 Inputs Verified</span>
            </div>

            <div class="grid grid-cols-2 gap-3 mt-3">
              <!-- Face Capture -->
              <div class="portrait-frame aspect-[4/5] relative">
                <img src="${data.photos.face}" alt="Facial Topography" class="w-full h-full object-cover">
                <div class="absolute bottom-0 inset-x-0 bg-neutral-950/80 backdrop-blur-xs p-2 border-t border-neutral-800">
                  <div class="font-mono text-[10px] text-neutral-300 uppercase">01 / Facial Topography</div>
                  <div class="text-[11px] font-medium text-neutral-100">โหงวเฮ้ง & อันเดอร์โทน</div>
                </div>
              </div>

              <!-- Body Capture -->
              <div class="portrait-frame aspect-[4/5] relative">
                <img src="${data.photos.body}" alt="Skeletal Geometry" class="w-full h-full object-cover">
                <div class="absolute bottom-0 inset-x-0 bg-neutral-950/80 backdrop-blur-xs p-2 border-t border-neutral-800">
                  <div class="font-mono text-[10px] text-neutral-300 uppercase">02 / Skeletal Geometry</div>
                  <div class="text-[11px] font-medium text-neutral-100">สรีระ & สัดส่วนกระดูก</div>
                </div>
              </div>
            </div>
            
            <p class="text-xs text-neutral-400 mt-3 leading-relaxed">
              ภาพถ่ายความละเอียดสูงผ่านการสกัดจุดพิกัดแลนด์มาร์ก 68 จุดบนใบหน้า และแนวระนาบกระดูก 14 จุดเพื่อประเมินสมดุลกายภาพ
            </p>
          </div>
        </div>

        <!-- Natal Astrology Input Form (7 cols) -->
        <div class="lg:col-span-7 space-y-4">
          <div class="editorial-card space-y-4">
            <div class="card-label-row">
              <span class="card-label">Natal Coordinates — Thai Astrological Engine</span>
              <span class="font-mono text-[11px] text-amber-500">Solar Time Confirmed</span>
            </div>

            <div class="space-y-3 text-sm">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div class="p-3 bg-neutral-900/60 border border-neutral-800 rounded">
                  <div class="font-mono text-[10px] text-neutral-400 uppercase">วัน เดือน ปีเกิด</div>
                  <div class="font-medium text-neutral-100 mt-1">${data.birth.date}</div>
                  <div class="text-xs text-neutral-400 mt-0.5">${data.birth.dayName}</div>
                </div>
                <div class="p-3 bg-neutral-900/60 border border-neutral-800 rounded">
                  <div class="font-mono text-[10px] text-neutral-400 uppercase">เวลาตกฟาก (Solar True Time)</div>
                  <div class="font-mono font-medium text-amber-400 mt-1">${data.birth.time}</div>
                  <div class="text-xs text-neutral-400 mt-0.5">${data.birth.province}</div>
                </div>
              </div>

              <div class="p-3.5 bg-neutral-900/90 border border-neutral-800 rounded space-y-2">
                <div class="flex items-center justify-between">
                  <span class="font-mono text-[11px] text-neutral-300 uppercase">ผลการคำนวณตำแหน่งดวงดาว</span>
                  <span class="font-mono text-[11px] text-amber-400">${data.birth.solarDegree}</span>
                </div>
                <div class="text-base font-semibold text-neutral-100">${data.birth.lagna}</div>
                <div class="text-xs text-neutral-400 leading-relaxed">
                  ดาวเกษตรบดีผู้ครองเรือน: <span class="text-neutral-200 font-medium">${data.birth.rulingPlanet}</span><br/>
                  นักษัตรฤกษ์ประจำชะตา: <span class="text-neutral-200 font-medium">${data.birth.nakshatra}</span>
                </div>
              </div>
            </div>

            <div class="pt-2 flex justify-end">
              <button onclick="window.appNav(2)" class="primary-btn">
                <span>ประมวลผลต่อ: สรีรศาสตร์ & โหงวเฮ้ง</span>
                <i data-lucide="arrow-right" class="w-4 h-4"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  /* ========================================================================
     SCREEN 2: FACE ANALYSIS x PHYSIOGNOMY (TOR 2.2.2)
     ======================================================================== */
  function renderScreen2(data) {
    const container = document.getElementById('content-stage-2');
    if (!container) return;

    const face = data.faceAnalysis;

    container.innerHTML = `
      <div class="screen-header-block">
        <div>
          <div class="screen-step-tag">Step 02 / Facial Topography & Physiognomy</div>
          <h1 class="screen-title">วิเคราะห์โครงหน้า x ศาสตร์โหงวเฮ้ง</h1>
          <p class="screen-lede">รูปหน้าและสัดส่วนใบหน้าคือ "ประตูระบายและเก็บทรัพย์" ปรับสมดุลเส้นสายด้วยทรงผม เมคอัพ และกรอบแว่นตา</p>
        </div>
        <div class="text-right font-mono text-xs text-neutral-400">
          <div>STRUCTURE: ${face.shape.toUpperCase()}</div>
          <div class="text-amber-500 font-medium mt-0.5">${face.undertone}</div>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <!-- Portrait with Crosshair Overlay (5 cols) -->
        <div class="lg:col-span-5">
          <div class="editorial-card p-0 overflow-hidden sticky top-24">
            <div class="p-3 border-b border-neutral-800 flex items-center justify-between font-mono text-xs">
              <span class="text-neutral-400 uppercase">Topographic Mapping</span>
              <span class="text-amber-400">6 Zenith Gates</span>
            </div>

            <div class="portrait-frame aspect-[4/4.8] relative bg-neutral-950">
              <img src="${data.photos.face}" alt="Physiognomy Subject" class="w-full h-full object-cover">
              
              <!-- Subtle Hairline Grid -->
              <svg class="absolute inset-0 w-full h-full pointer-events-none opacity-40" viewBox="0 0 100 100">
                <line x1="50" y1="10" x2="50" y2="90" stroke="rgba(255,255,255,0.4)" stroke-width="0.5" stroke-dasharray="1.5,1.5" />
                <line x1="20" y1="43" x2="80" y2="43" stroke="rgba(255,255,255,0.4)" stroke-width="0.5" stroke-dasharray="1.5,1.5" />
                <line x1="25" y1="56" x2="75" y2="56" stroke="rgba(255,255,255,0.4)" stroke-width="0.5" stroke-dasharray="1.5,1.5" />
              </svg>

              <!-- Crosshair Landmarks -->
              ${face.landmarks.map(lm => `
                <div class="crosshair-point" style="left: ${lm.x}%; top: ${lm.y}%;" title="${lm.label}: ${lm.zone}"></div>
                <div class="crosshair-tag" style="left: ${lm.x > 50 ? (lm.x + 3) : (lm.x - 28)}%; top: ${lm.y - 1.5}%;">
                  ${lm.label} · ${lm.zone}
                </div>
              `).join('')}
            </div>

            <div class="p-3.5 bg-neutral-900 border-t border-neutral-800 text-xs text-neutral-300">
              <span class="font-mono text-neutral-400 uppercase text-[10px] block mb-0.5">Symmetry Evaluation</span>
              สัดส่วนระยะสามช่วงใบหน้า (หน้าผาก จมูก คาง) มีความสมดุลกลมกลืนตามสัดส่วนทองคำ 1:1.618
            </div>
          </div>
        </div>

        <!-- Physiognomy Directives & Recommendations (7 cols) -->
        <div class="lg:col-span-7 space-y-6">
          
          <!-- Gates of Wealth Section -->
          <div class="space-y-3">
            <div class="border-b border-neutral-800 pb-2 flex items-center justify-between">
              <h2 class="text-lg font-semibold text-neutral-100">ประตูรับทรัพย์บนใบหน้า (Gates of Wealth)</h2>
              <span class="font-mono text-xs text-amber-500">3 แกนหลัก</span>
            </div>

            <div class="space-y-3">
              ${face.wealthGates.map(gate => `
                <div class="editorial-card p-4 hover:border-neutral-700 transition">
                  <div class="flex items-start justify-between gap-4">
                    <div class="space-y-1">
                      <div class="font-mono text-xs text-amber-400 font-medium">${gate.number} / ${gate.subtitle}</div>
                      <h3 class="text-base font-semibold text-neutral-100">${gate.title}</h3>
                      <p class="text-xs text-neutral-300 leading-relaxed">${gate.detail}</p>
                      <div class="pt-2">
                        <span class="inline-block font-mono text-[11px] text-neutral-200 bg-neutral-800/80 px-2.5 py-1 rounded border border-neutral-700">
                          แนวทางปรับแต่ง: ${gate.action}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Curated Recommendations (Hair, Makeup, Eyewear) -->
          <div class="space-y-3 pt-2">
            <div class="border-b border-neutral-800 pb-2">
              <h2 class="text-lg font-semibold text-neutral-100">คำแนะนำเฉพาะบุคคล (Curated Directives)</h2>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
              <!-- Coiffure -->
              <div class="editorial-card p-3 space-y-2">
                <div class="portrait-frame aspect-[4/3] rounded overflow-hidden">
                  <img src="${face.recommendations.hair.image}" alt="Coiffure" class="w-full h-full object-cover">
                </div>
                <div class="font-mono text-[10px] text-neutral-400 uppercase">${face.recommendations.hair.category}</div>
                <div class="font-semibold text-sm text-neutral-100">${face.recommendations.hair.title}</div>
                <p class="text-xs text-neutral-400 leading-snug">${face.recommendations.hair.desc}</p>
              </div>

              <!-- Cosmetics -->
              <div class="editorial-card p-3 space-y-2">
                <div class="portrait-frame aspect-[4/3] rounded overflow-hidden">
                  <img src="${face.recommendations.makeup.image}" alt="Cosmetics" class="w-full h-full object-cover">
                </div>
                <div class="font-mono text-[10px] text-neutral-400 uppercase">${face.recommendations.makeup.category}</div>
                <div class="font-semibold text-sm text-neutral-100">${face.recommendations.makeup.title}</div>
                <p class="text-xs text-neutral-400 leading-snug">${face.recommendations.makeup.desc}</p>
              </div>

              <!-- Spectacles -->
              <div class="editorial-card p-3 space-y-2">
                <div class="portrait-frame aspect-[4/3] rounded overflow-hidden">
                  <img src="${face.recommendations.eyewear.image}" alt="Spectacles" class="w-full h-full object-cover">
                </div>
                <div class="font-mono text-[10px] text-neutral-400 uppercase">${face.recommendations.eyewear.category}</div>
                <div class="font-semibold text-sm text-neutral-100">${face.recommendations.eyewear.title}</div>
                <p class="text-xs text-neutral-400 leading-snug">${face.recommendations.eyewear.desc}</p>
              </div>
            </div>
          </div>

          <!-- Stage Action Buttons -->
          <div class="pt-4 flex items-center justify-between border-t border-neutral-800">
            <button onclick="window.appNav(1)" class="secondary-btn">ย้อนกลับ</button>
            <button onclick="window.appNav(3)" class="primary-btn">
              <span>ขั้นตอนถัดไป: ฮวงจุ้ยโครงสร้างร่างกาย</span>
              <i data-lucide="arrow-right" class="w-4 h-4"></i>
            </button>
          </div>

        </div>
      </div>
    `;
  }

  /* ========================================================================
     SCREEN 3: BODY ANALYSIS x BONE FENG SHUI (TOR 2.2.4 & 3.2.1)
     ======================================================================== */
  function renderScreen3(data) {
    const container = document.getElementById('content-stage-3');
    if (!container) return;

    const body = data.bodyAnalysis;

    container.innerHTML = `
      <div class="screen-header-block">
        <div>
          <div class="screen-step-tag">Step 03 / Skeletal Feng Shui & Morphological Harmony</div>
          <h1 class="screen-title">วิเคราะห์โครงสร้างร่างกาย & ฮวงจุ้ยสรีระ</h1>
          <p class="screen-lede">โครงสร้างกระดูกคือชะตาฟ้าลิขิต ใช้การออกแบบเครื่องแต่งกายมาแก้จุดบล็อกและขยายจุดเฮง</p>
        </div>
        <div class="text-right font-mono text-xs text-neutral-400">
          <div>SKELETON: ${body.type.toUpperCase()}</div>
          <div class="text-amber-500 font-medium mt-0.5">YIN ${body.yinYang.yin}% / YANG ${body.yinYang.yang}%</div>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <!-- Body Overview & Geometry (5 cols) -->
        <div class="lg:col-span-5 space-y-4">
          <div class="editorial-card p-0 overflow-hidden">
            <div class="p-3 border-b border-neutral-800 flex items-center justify-between font-mono text-xs">
              <span class="text-neutral-400 uppercase">Proportion Silhouette</span>
              <span class="text-amber-400">${body.typeName}</span>
            </div>

            <div class="portrait-frame aspect-[9/14] relative bg-neutral-950">
              <img src="${data.photos.body}" alt="Body Silhouette" class="w-full h-full object-cover">
              <div class="absolute inset-0 bg-neutral-950/25 pointer-events-none"></div>

              <!-- Hairline Alignment Guides -->
              <div class="absolute top-[22%] inset-x-0 border-b border-neutral-500/50 border-dashed"></div>
              <div class="absolute top-[42%] inset-x-0 border-b border-neutral-500/50 border-dashed"></div>
              <div class="absolute top-[58%] inset-x-0 border-b border-neutral-500/50 border-dashed"></div>
            </div>

            <!-- Skeletal Metrics -->
            <div class="p-4 bg-neutral-900 border-t border-neutral-800 space-y-2 text-xs">
              <div class="font-mono text-neutral-400 uppercase text-[10px] mb-1">Vector Dimensions</div>
              <div class="flex justify-between border-b border-neutral-800/80 pb-1">
                <span class="text-neutral-400">แนวไหล่:</span> <span class="text-neutral-200 font-medium">${body.lines.shoulder}</span>
              </div>
              <div class="flex justify-between border-b border-neutral-800/80 pb-1">
                <span class="text-neutral-400">แนวเอว:</span> <span class="text-neutral-200 font-medium">${body.lines.waist}</span>
              </div>
              <div class="flex justify-between border-b border-neutral-800/80 pb-1">
                <span class="text-neutral-400">แนวสะโพก:</span> <span class="text-neutral-200 font-medium">${body.lines.hip}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-neutral-400">ความหนาแน่นกระดูก:</span> <span class="text-neutral-200 font-medium">${body.lines.bone}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Feng Shui Principles & Seasonal Color (7 cols) -->
        <div class="lg:col-span-7 space-y-5">
          
          <!-- 3 Archetypes Breakdown -->
          <div class="editorial-card space-y-3">
            <div class="card-label-row">
              <span class="card-label">Skeletal Typology — 3 Structural Archetypes</span>
              <span class="font-mono text-[11px] text-amber-500">Target: ${body.type}</span>
            </div>

            <div class="space-y-2.5">
              <!-- Straight -->
              <div class="p-3 rounded border ${body.type === 'Straight' ? 'border-amber-500/80 bg-neutral-900' : 'border-neutral-800 bg-neutral-950/40 opacity-60'}">
                <div class="flex items-center justify-between">
                  <div class="font-semibold text-sm text-neutral-100">Straight — กระดูกหนา อกแน่น ลำตัวตรง</div>
                  ${body.type === 'Straight' ? '<span class="font-mono text-[10px] text-amber-400 border border-amber-500/40 px-2 py-0.5 rounded">ACTIVE MATCH</span>' : ''}
                </div>
                <div class="text-xs text-neutral-400 mt-1">คัตติ้งเนี้ยบ ไม่รุ่มร่าม เพื่อไม่ให้ "ทับถมบารมี" และขับเน้นความมั่นคง</div>
              </div>

              <!-- Wave -->
              <div class="p-3 rounded border ${body.type === 'Wave' ? 'border-amber-500/80 bg-neutral-900' : 'border-neutral-800 bg-neutral-950/40 opacity-60'}">
                <div class="flex items-center justify-between">
                  <div class="font-semibold text-sm text-neutral-100">Wave — กระดูกบาง ร่างน้อย เส้นสายพลิ้วไหว</div>
                  ${body.type === 'Wave' ? '<span class="font-mono text-[10px] text-amber-400 border border-amber-500/40 px-2 py-0.5 rounded">ACTIVE MATCH</span>' : ''}
                </div>
                <div class="text-xs text-neutral-400 mt-1">แต่งเติมดีเทล ผ้าทิ้งตัวพลิ้วไหว เพื่อเติม "ความอุดมสมบูรณ์เรียกโชค"</div>
              </div>

              <!-- Natural -->
              <div class="p-3 rounded border ${body.type === 'Natural' ? 'border-amber-500/80 bg-neutral-900' : 'border-neutral-800 bg-neutral-950/40 opacity-60'}">
                <div class="flex items-center justify-between">
                  <div class="font-semibold text-sm text-neutral-100">Natural — กระดูกใหญ่ ข้อต่อชัด ร่างสมดุล</div>
                  ${body.type === 'Natural' ? '<span class="font-mono text-[10px] text-amber-400 border border-amber-500/40 px-2 py-0.5 rounded">ACTIVE MATCH</span>' : ''}
                </div>
                <div class="text-xs text-neutral-400 mt-1">มีความหลวมสบาย ไม่รัดแน่น เพื่อไม่ให้ "บีบพลังผู้นำ"</div>
              </div>
            </div>
          </div>

          <!-- Seasonal Color Matrix (TOR 3.2.1) -->
          <div class="editorial-card space-y-3">
            <div class="card-label-row">
              <span class="card-label">Seasonal Color Analysis (AI Undertone Calibration)</span>
              <span class="font-mono text-xs text-amber-400">${body.seasonalColor.season}</span>
            </div>

            <div class="grid grid-cols-2 gap-3 text-xs">
              <div>
                <span class="text-neutral-400 block font-mono text-[10px] uppercase">Skin Tone Basis</span>
                <span class="font-medium text-neutral-200">${body.seasonalColor.skinTone}</span>
              </div>
              <div>
                <span class="text-neutral-400 block font-mono text-[10px] uppercase">Vein & Chromatic Undertone</span>
                <span class="font-medium text-neutral-200">${body.seasonalColor.undertone}</span>
              </div>
            </div>

            <!-- Palette Swatches -->
            <div class="pt-2">
              <div class="font-mono text-[10px] text-neutral-400 uppercase mb-2">Harmonic Pigment Range</div>
              <div class="flex items-center gap-2">
                ${body.seasonalColor.palette.map(color => `
                  <div class="h-8 flex-1 rounded border border-neutral-700" style="background-color: ${color};" title="${color}"></div>
                `).join('')}
              </div>
            </div>

            <p class="text-xs text-neutral-300 bg-neutral-900/80 p-3 rounded border border-neutral-800 mt-2 leading-relaxed">
              ${body.seasonalColor.luckyColorExplanation}
            </p>
          </div>

          <!-- Hallmark Motto Box -->
          <div class="p-4 bg-neutral-900/90 border-l-2 border-amber-500 rounded text-neutral-200 text-sm font-medium">
            "${body.motto}"
          </div>

          <!-- Stage Action Buttons -->
          <div class="pt-2 flex items-center justify-between border-t border-neutral-800">
            <button onclick="window.appNav(2)" class="secondary-btn">ย้อนกลับ</button>
            <button onclick="window.appNav(4)" class="primary-btn">
              <span>ขั้นตอนถัดไป: พลังงานออร่า & ดวงชะตาไทย</span>
              <i data-lucide="arrow-right" class="w-4 h-4"></i>
            </button>
          </div>

        </div>
      </div>
    `;
  }

  /* ========================================================================
     SCREEN 4: ASTROLOGY x AURA & ENERGY PROFILE (TOR 3.2.4)
     ======================================================================== */
  function renderScreen4(data) {
    const container = document.getElementById('content-stage-4');
    if (!container) return;

    const astro = data.astrologyProfile;

    container.innerHTML = `
      <div class="screen-header-block">
        <div>
          <div class="screen-step-tag">Step 04 / Bio-Electromagnetic Aura & Natal Matrix</div>
          <h1 class="screen-title">การคำนวณพลังงานออร่า & ดวงชะตาไทย</h1>
          <p class="screen-lede">ผสานองศาดวงดาว มหาทักษา และค่าชีวสรีรศาสตร์ สู่ดัชนีคลื่นรังสีออร่าเฉพาะบุคคล</p>
        </div>
        <div class="text-right font-mono text-xs text-neutral-400">
          <div>HARMONIC QUOTIENT: ${astro.energyScore}%</div>
          <div class="text-amber-500 font-medium mt-0.5">PEAK RESONANCE</div>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <!-- Aura Visual Field (5 cols) -->
        <div class="lg:col-span-5 space-y-4">
          <div class="editorial-card p-0 overflow-hidden">
            <div class="p-3 border-b border-neutral-800 flex items-center justify-between font-mono text-xs">
              <span class="text-neutral-400 uppercase">Chromatic Aura Field</span>
              <span class="font-mono text-amber-400">${astro.energyScore} / 100</span>
            </div>

            <!-- Aura Ambient Stage -->
            <div class="aura-stage relative">
              <div class="aura-ambient-ring" style="background: radial-gradient(circle, ${astro.auraColor1} 0%, ${astro.auraColor2} 60%, transparent 80%);"></div>
              
              <div class="aura-portrait-circle">
                <img src="${data.photos.face}" alt="Aura Subject">
              </div>

              <div class="absolute bottom-3 font-mono text-xs text-neutral-200 bg-neutral-950/80 px-3 py-1 rounded border border-neutral-800">
                ${astro.auraName}
              </div>
            </div>

            <div class="p-4 bg-neutral-900 border-t border-neutral-800 text-xs text-neutral-300 leading-relaxed">
              <span class="font-mono text-neutral-400 uppercase text-[10px] block mb-1">Spectral Interpretation</span>
              ${astro.auraMeaning}
            </div>
          </div>
        </div>

        <!-- 4 Pillars & 5 Elements (7 cols) -->
        <div class="lg:col-span-7 space-y-5">
          
          <!-- 4 Core Pillars of Destiny -->
          <div class="editorial-card space-y-3.5">
            <div class="card-label-row">
              <span class="card-label">Four Pillars of Sovereign Energy</span>
              <span class="font-mono text-xs text-neutral-400">Calculated Metrics</span>
            </div>

            <div class="space-y-3">
              ${astro.pillars.map(pillar => `
                <div class="space-y-1">
                  <div class="flex items-center justify-between text-xs font-mono">
                    <span class="text-neutral-200">${pillar.code} · ${pillar.name}</span>
                    <span class="text-amber-400 font-medium">${pillar.score}%</span>
                  </div>
                  <div class="w-full h-1.5 bg-neutral-950 rounded overflow-hidden border border-neutral-800">
                    <div class="h-full bg-neutral-200 transition-all duration-700" style="width: ${pillar.score}%;"></div>
                  </div>
                  <div class="text-[11px] text-neutral-400">${pillar.label}</div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- 5 Elements Thai Astrology Matrix -->
          <div class="editorial-card space-y-3">
            <div class="card-label-row">
              <span class="card-label">Pancha Dhatu (ธาตุทั้ง 5 ประจำชะตา)</span>
              <span class="font-mono text-xs text-amber-500">${data.birth.lagna}</span>
            </div>

            <div class="grid grid-cols-4 gap-2.5 text-center">
              ${astro.elements.map(el => `
                <div class="p-3 bg-neutral-900 rounded border border-neutral-800">
                  <div class="font-mono text-[10px] text-neutral-400 uppercase">${el.name}</div>
                  <div class="font-mono text-lg font-semibold text-neutral-100 my-0.5">${el.pct}%</div>
                  <div class="text-[10px] text-neutral-300 font-medium">${el.status}</div>
                </div>
              `).join('')}
            </div>

            <!-- Auspicious Hours & Spectrum Notice -->
            <div class="p-3 bg-neutral-900/60 rounded border border-neutral-800 text-xs space-y-1.5 mt-3">
              <div class="flex justify-between">
                <span class="text-neutral-400">เฉดสีมงคลเสริมชะตา:</span>
                <span class="text-neutral-200 font-medium">${astro.dailyAuspicious.color}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-neutral-400">เฉดสีที่ควรเว้นวรรค:</span>
                <span class="text-neutral-400 font-medium">${astro.dailyAuspicious.avoidColor}</span>
              </div>
              <div class="flex justify-between border-t border-neutral-800 pt-1 text-[11px]">
                <span class="text-neutral-400">ช่วงเวลาทอง (Golden Window):</span>
                <span class="font-mono text-amber-400">${astro.dailyAuspicious.time}</span>
              </div>
            </div>
          </div>

          <!-- Stage Action Buttons -->
          <div class="pt-2 flex items-center justify-between border-t border-neutral-800">
            <button onclick="window.appNav(3)" class="secondary-btn">ย้อนกลับ</button>
            <button onclick="window.appNav(5)" class="primary-btn">
              <span>ขั้นตอนสุดท้าย: ตู้เสื้อผ้ามงคล 4 โอกาส</span>
              <i data-lucide="arrow-right" class="w-4 h-4"></i>
            </button>
          </div>

        </div>
      </div>
    `;
  }

  /* ========================================================================
     SCREEN 5: FASHION RECOMMENDATION (TOR 4.2.1 & 4.2.2)
     ======================================================================== */
  function renderScreen5(data) {
    const container = document.getElementById('content-stage-5');
    if (!container) return;

    const occKey = state.currentOccasion;
    const occ = data.occasions[occKey] || data.occasions.professional;

    container.innerHTML = `
      <div class="screen-header-block">
        <div>
          <div class="screen-step-tag">Step 05 / Curated Lookbook & Complete Look Ensemble</div>
          <h1 class="screen-title">ตู้เสื้อผ้ามงคลเฉพาะบุคคล (Complete Look)</h1>
          <p class="screen-lede">แมตช์สัดส่วนสรีระ โหงวเฮ้ง และธาตุกำเนิด สู่ชุดแต่งกายแบบครบเซ็ตตาม 4 โอกาสหลัก</p>
        </div>
        <div class="text-right font-mono text-xs text-neutral-400">
          <div>COLLECTION: 2026/ASTRAL</div>
          <div class="text-amber-500 font-medium mt-0.5">TAILORED ENSEMBLE</div>
        </div>
      </div>

      <!-- 4 Occasions Selector Strip (TOR 4.2.1) -->
      <div class="occasion-menu">
        <button class="occasion-tab ${occKey === 'professional' ? 'active' : ''}" onclick="window.switchOccasion('professional')">
          01 / PROFESSIONAL (การทำงาน)
        </button>
        <button class="occasion-tab ${occKey === 'formal' ? 'active' : ''}" onclick="window.switchOccasion('formal')">
          02 / FORMAL & CEREMONIAL (ทางการ)
        </button>
        <button class="occasion-tab ${occKey === 'social' ? 'active' : ''}" onclick="window.switchOccasion('social')">
          03 / SOCIAL & EVENING (สังสรรค์)
        </button>
        <button class="occasion-tab ${occKey === 'special' ? 'active' : ''}" onclick="window.switchOccasion('special')">
          04 / SACRED & SANCTUARY (กิจกรรมมงคล)
        </button>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <!-- Hero Garment & Concept Imagery (5 cols) -->
        <div class="lg:col-span-5 space-y-4">
          <div class="editorial-card p-0 overflow-hidden sticky top-24">
            <div class="p-3 border-b border-neutral-800 flex items-center justify-between font-mono text-xs">
              <span class="text-neutral-400 uppercase">${occ.title} Ensemble</span>
              <span class="text-amber-400">Complete Set</span>
            </div>

            <div class="portrait-frame aspect-[4/5] relative bg-neutral-950">
              <img src="${occ.outfitImage}" alt="${occ.title}" class="w-full h-full object-cover">
              
              <div class="absolute bottom-0 inset-x-0 bg-neutral-950/85 backdrop-blur-xs p-3.5 border-t border-neutral-800">
                <div class="font-mono text-[10px] text-amber-400 uppercase tracking-wide">${occ.subtitle}</div>
                <div class="text-sm font-semibold text-neutral-100 mt-0.5">${occ.concept}</div>
              </div>
            </div>

            <!-- Garment Anatomy -->
            <div class="p-4 bg-neutral-900 space-y-2 text-xs border-t border-neutral-800">
              <div class="font-mono text-neutral-400 uppercase text-[10px] mb-1">Garment Breakdown</div>
              <div class="text-neutral-300"><b class="text-neutral-100">ท่อนบน:</b> ${occ.breakdown.top}</div>
              ${occ.breakdown.inner ? `<div class="text-neutral-300"><b class="text-neutral-100">ตัวใน:</b> ${occ.breakdown.inner}</div>` : ''}
              ${occ.breakdown.bottom ? `<div class="text-neutral-300"><b class="text-neutral-100">ท่อนล่าง:</b> ${occ.breakdown.bottom}</div>` : ''}
              ${occ.breakdown.shoes ? `<div class="text-neutral-300"><b class="text-neutral-100">รองเท้า:</b> ${occ.breakdown.shoes}</div>` : ''}
            </div>
          </div>
        </div>

        <!-- Astrological Rationale & Shop The Look (7 cols) -->
        <div class="lg:col-span-7 space-y-5">
          
          <!-- Astro-Feng Shui Rationale -->
          <div class="editorial-card space-y-3">
            <div class="card-label-row">
              <span class="card-label">Astro-Feng Shui Intelligence (บทวิเคราะห์เชิงโครงสร้าง)</span>
              <span class="font-mono text-xs text-amber-400">Direct Resonance</span>
            </div>

            <p class="text-sm text-neutral-200 leading-relaxed">
              ${occ.fengShuiReason}
            </p>

            <div class="pt-2 border-t border-neutral-800 flex items-center justify-between text-xs text-neutral-400">
              <span><b>ไกด์แต่งหน้า & ทรงผม:</b> ${occ.beautyGuide}</span>
            </div>
          </div>

          <!-- Shop The Look Catalog (TOR 4.2.2) -->
          <div class="space-y-3">
            <div class="border-b border-neutral-800 pb-2 flex items-center justify-between">
              <h2 class="text-base font-semibold text-neutral-100">ไอเทมในชุด (Complete Look Items)</h2>
              <span class="font-mono text-xs text-neutral-400">${occ.items.length} รายการที่คัดสรร</span>
            </div>

            <div class="space-y-2.5">
              ${occ.items.map(item => `
                <div class="editorial-card p-3 flex items-center justify-between hover:border-neutral-700 transition">
                  <div class="flex items-center gap-3.5">
                    <div class="w-14 h-14 rounded overflow-hidden bg-neutral-950 border border-neutral-800 shrink-0">
                      <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover">
                    </div>
                    <div>
                      <span class="font-mono text-[10px] text-amber-400 uppercase tracking-wider">${item.tag}</span>
                      <div class="font-semibold text-sm text-neutral-100 mt-0.5">${item.name}</div>
                      <div class="font-mono text-xs text-neutral-400 mt-0.5">${item.brand}</div>
                    </div>
                  </div>
                  <div class="text-right shrink-0">
                    <div class="font-mono font-bold text-sm text-neutral-100">${item.price}</div>
                    <button class="secondary-btn text-xs py-1 px-2.5 mt-1">เลือกชุดนี้</button>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Bottom Actions -->
          <div class="pt-4 flex items-center justify-between border-t border-neutral-800">
            <button onclick="window.appNav(4)" class="secondary-btn">ย้อนกลับ</button>
            <button onclick="alert('บันทึกชุด Complete Look ลงแคตตาล็อกส่วนตัวเรียบร้อย')" class="primary-btn">
              <span>บันทึก Complete Look เข้าตู้เสื้อผ้า</span>
              <i data-lucide="check" class="w-4 h-4"></i>
            </button>
          </div>

        </div>
      </div>
    `;
  }
});
