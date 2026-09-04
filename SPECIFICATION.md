# ข้อกำหนดการออกแบบส่วนติดต่อผู้ใช้งาน (UI Design Specification)
## แพลตฟอร์มสายมู AI แฟชั่นและโหราศาสตร์ (Aura & Astro-Styling Platform)
### ฉบับปรับปรุงตามมาตรฐาน Hallmark Anti-AI-Slop Architecture (Made, Not Generated)

---

### 1. ปรัชญาและมาตรฐานการออกแบบ (Design Philosophy & Anti-AI-Slop System)

* **Genre:** **Luxury Editorial / Astral Atelier** (แฟชั่นระดับสูง ผสานจิตวิญญาณแห่งดวงดาว)
* **Macrostructure:** **Editorial Split & Asymmetric Catalog** — เลิกใช้กรอบมือถือจำลองของเล่น (Fake Phone Frames) และตัดแถบหัวข้อ Gradient ม่วง-ชมพู เพื่อให้เป็นเว็บแอปพลิเคชันจริงที่สง่างาม Responsive ทุกขนาดหน้าจอ
* **Pre-emit Critique Scores:**
  * `Philosophy (P5)`: สะท้อนจุดยืนสรีระและโหงวเฮ้งชัดเจน ไม่ใช่แค่กล่องข้อความธรรมดา
  * `Hierarchy (H5)`: ลำดับชั้นสายตาเด่นชัดด้วยอัตราส่วน Typography 2+1
  * `Execution (E5)`: เส้น Hairline Rule ละเอียด 1px, ตัวเลขแบบ Tabular-nums
  * `Specificity (S5)`: ข้อมูลโหราศาสตร์ไทยจริง (ลัคนา, เวลาตกฟาก, นักษัตรฤกษ์)
  * `Restraint (R5)`: ตัด Emoji ทั้งหมด ไร้สี Gradient พาดหัว สี Accent กุมพื้นที่ ≤ 3%
  * `Variety (V5)`: โครงสร้างไม่ซ้ำซาก แต่ละหน้าจอตอบโจทย์เฉพาะตัว

---

### 2. ระบบสีและความเปรียบต่าง (OKLCH Color Space)

| ชื่อโทเค็น (Token) | ค่าสี OKLCH | การนำไปใช้งานเชิงสถาปัตยกรรม |
| :--- | :--- | :--- |
| `--color-paper` | `oklch(14% 0.008 55)` | พื้นผิวฐาน สีออบซิเดียนอมบรอนซ์อบอุ่น (ไม่ใช่ `#000` ดิบ) |
| `--color-paper-2` | `oklch(17% 0.010 55)` | พื้นผิวการ์ดและเลเยอร์ข้อมูล |
| `--color-paper-3` | `oklch(21% 0.012 55)` | พื้นผิวโต้ตอบ (Hover & Active States) |
| `--color-rule` | `oklch(26% 0.008 55)` | เส้นแบ่ง Hairline 1px รอบตัวการ์ดและตาราง |
| `--color-neutral` | `oklch(64% 0.008 55)` | ข้อความรองและคำอธิบายย่อย |
| `--color-muted` | `oklch(46% 0.006 55)` | ข้อมูล Metadata และ Label กำกับสถิติ |
| `--color-ink` | `oklch(96% 0.004 65)` | ตัวหนังสือหลัก สีหมึกสว่างอบอุ่น (ไม่ใช่ `#fff` แทงตา) |
| `--color-accent` | `oklch(76% 0.140 78)` | สีทองแชมเปญสุริยะ (Celestial Gold) ควบคุมไม่ให้เกิน 3% ของ Viewport |
| `--color-focus` | `oklch(76% 0.140 78)` | วงแหวนโฟกัส (Focus Ring) ชัดเจนทันทีสำหรับคีย์บอร์ด |

---

### 3. ระบบตัวพิมพ์ (2+1 Typography Rule)

* **Display Face:** `Cormorant Garamond` ผสาน `Noto Serif Thai` — ใช้สำหรับพาดหัว (Roman Style เท่านั้น **ห้ามใช้ Italic ในพาดหัว** ตาม Gate 38a)
* **Body Face:** `Geist` ผสาน `IBM Plex Sans Thai` — ฟอนต์ Sans-serif ทรงคุณค่า อ่านง่าย ความยาวบรรทัดควบคุมที่ `45–65ch`
* **Outlier Face (Mono):** `Geist Mono` — ใช้เฉพาะตำแหน่งแสดงตัวเลขทางสถิติ, องศาดวงดาว (Solar Degrees), วันเวลาเกิด และรหัสชิ้นส่วนสินค้า (Tabular Figures)

---

### 4. โครงสร้าง 5 หน้าจอหลัก (End-to-End User Flow)

1. **Step 01 / Ingestion & Natal Calibration (TOR 2.2.1):**
   * รับภาพถ่ายคู่ความละเอียดสูง (ใบหน้าสำหรับ Topography + สรีระสำหรับ Skeletal Geometry)
   * กรอกวันเดือนปีเกิด เวลาตกฟาก และจังหวัดเกิด คำนวณลัคนาและองศาอาทิตย์แม่นยำ
2. **Step 02 / Facial Topography & Physiognomy (TOR 2.2.2):**
   * ภาพถ่ายใบหน้าพร้อมจุดพิกัดกากบาท (Crosshair Coordinates) บน 5 วังโหงวเฮ้ง
   * การ์ด "ประตูรับทรัพย์บนใบหน้า" (Gates of Wealth) 3 ประการ: *เปิดหน้าผากรับแสงแห่งโอกาส, คอนทัวร์สันจมูกรับทรัพย์, ไฮไลต์แก้มอิ่มฟู*
   * ข้อเสนอแนะเฉพาะบุคคล: *Coiffure (ทรงผม), Cosmetics (การแต่งหน้า/กรูมมิ่ง), Spectacles (แว่นตา)*
3. **Step 03 / Skeletal Feng Shui & Morphological Harmony (TOR 2.2.4 & 3.2.1):**
   * วิเคราะห์ 3 โครงสร้างสรีระ: *Straight (เนี้ยบ ไม่ทับถมบารมี) | Wave (ผ้าพลิ้ว เติมความอุดมสมบูรณ์) | Natural (หลวมสบาย ไม่บีบพลังผู้นำ)*
   * สัดส่วนหยิน-หยาง (Yin / Yang Harmonic Balance) ในรูปแบบสถิติตัวเลขจริง
   * ตารางสีผิวตามฤดูกาล (Seasonal Color Matrix) พร้อมพาเลตต์ Pigment อิงสีผิว
   * คติการออกแบบ: *"เลือกเสื้อผ้าที่ปล่อยพลังให้คุณ ไม่ใช่ปิดพลังคุณ"*
4. **Step 04 / Bio-Electromagnetic Aura & Natal Matrix (TOR 3.2.4):**
   * วงแหวนรังสีออร่า (Aura Field) แบบนุ่มนวล มิติธรรมชาติ ไม่ใช่บล็อบสีนีออนหลอกตา
   * เสาหลักแห่งพลังงานทั้ง 4 (WLTH-01, AUTH-02, CHRM-03, SANC-04)
   * สมดุลธาตุทั้ง 5 ตามโหราศาสตร์ไทย พร้อมคำแนะนำธาตุที่ขาดและเวลาทอง (Golden Window)
5. **Step 05 / Curated Lookbook & Complete Look Ensemble (TOR 4.2.1 & 4.2.2):**
   * แถบเลือก 4 โอกาส: *01/Professional, 02/Formal & Ceremonial, 03/Social & Evening, 04/Sacred & Sanctuary*
   * Complete Look แบบเต็มชุด: ชิ้นเสื้อผ้า, เครื่องประดับหินมงคล, แว่นตา, รองเท้า
   * การวิเคราะห์ถอดรหัสฮวงจุ้ยและดวงดาว (Astro-Feng Shui Intelligence)
   * แคตตาล็อกไอเทมสินค้า (Shop The Look) พร้อมราคาและแบรนด์คัดสรร
