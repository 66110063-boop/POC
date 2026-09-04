/**
 * Hallmark-Compliant Dataset for AI Aura & Astro-Fashion POC
 * Genre: Luxury Editorial / Astral Atelier
 * No emojis, no fabricated metrics, exact astrological and physiognomy terminology.
 */

const MOCK_DATA = {
  female: {
    id: "female",
    name: "คุณพิมพ์พิชชา ธนสารไพศาล",
    displayName: "01 / คุณพิมพ์พิชชา (สตรี)",
    role: "Marketing Director — วัย 28 ปี",
    gender: "female",
    birth: {
      date: "14 พฤษภาคม 2540",
      dayName: "วันศุกร์ (ดาวศุกร์สถิตราศีมีน — มหาอุจจ์)",
      time: "09:18 น. (เวลาท้องถิ่นแท้จริง)",
      province: "เชียงใหม่ (พิกัด 18°47'N 98°59'E)",
      lagna: "ลัคนาราศีเมถุน (ธาตุลม-น้ำ)",
      rulingPlanet: "ดาวพุธเกษตราธิบดี (อธิบดีแห่งวาจาและการเจรจา)",
      solarDegree: "28° 14' เมถุน เสวยเทศาตรีฤกษ์",
      nakshatra: "ปุนัพสุ (ดาวพฤหัสบดีครอง)"
    },
    photos: {
      face: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=85",
      body: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=85"
    },
    // Module 2: Face x โหงวเฮ้ง (Physiognomy)
    faceAnalysis: {
      shape: "Oval & Gentle Heart (รูปไข่โครงสร้างละมุน)",
      undertone: "Warm Peachy-Golden (อันเดอร์โทนอบอุ่นประกายทอง)",
      landmarks: [
        { label: "หน้าผาก", zone: "วังอาชีพ & โอกาส", x: 50, y: 22, status: "เนียนเรียบ นูนรับแสงทิพย์", meaning: "ผู้ใหญ่อุปถัมภ์ โอกาสงานใหญ่หลั่งไหล" },
        { label: "คิ้ว", zone: "วังอำนาจ & การตัดสินใจ", x: 42, y: 35, status: "ทรงคันศรเรียงเส้นละเอียด", meaning: "จิตวิทยาเจรจาประนีประนอมสูง" },
        { label: "ดวงตา", zone: "วังปัญญา & วิสัยทัศน์", x: 50, y: 43, status: "ตาหงส์ประกายน้ำใส", meaning: "หยั่งรู้ความต้องการคู่ค้าอย่างแม่นยำ" },
        { label: "จมูก", zone: "วังคลังทรัพย์สิน", x: 50, y: 56, status: "ปีกหนา สันตรงรับฐาน", meaning: "ถุงทองเก็บทรัพย์ กระแสเงินไหลเวียนมั่นคง" },
        { label: "ปาก", zone: "วังวาจา & เสน่ห์", x: 50, y: 74, status: "กระจับคมชัด อวบอิ่มสมดุล", meaning: "วาจาเป็นทรัพย์ โน้มน้าวใจสำเร็จราบรื่น" },
        { label: "เนินแก้ม", zone: "วังบริวาร & ความเกื้อหนุน", x: 34, y: 60, status: "โหนกแก้มอิ่มฟูมีเลือดฝาด", meaning: "ผู้ร่วมงานจงรักภักดี แรงสนับสนุนอบอุ่น" }
      ],
      wealthGates: [
        {
          id: "forehead",
          number: "01",
          title: "เปิดหน้าผากรับแสงแห่งโอกาส",
          subtitle: "วังอาชีพและการงาน (Vocation Zenith)",
          detail: "หน้าผากคือจุดรับพลังสุริยะและกระแสวาสนาจากฟากฟ้า การไม่ปล่อยให้ผมม้าบดบังเปิดรับทางเดินพลังให้ผู้ใหญ่หยิบยื่นโอกาสระดับกลยุทธ์",
          action: "เกล้าผมทรง Soft Layer เปิดกรอบหน้าด้านขวา"
        },
        {
          id: "nose",
          number: "02",
          title: "คอนทัวร์สันจมูกรับทรัพย์",
          subtitle: "วังคลังสมบัติ (The Financial Treasury)",
          detail: "จมูกทำหน้าที่เสมือนตู้นิรภัยของใบหน้า คอนทัวร์โทนอุ่นตามแนวกระดูกจมูกช่วยขับเน้นสันให้คมชัด กักเก็บกระแสเงินตราไม่ให้รั่วไหลออกด้านข้าง",
          action: "คอนทัวร์เฉดดิ้งโทน Soft Bronze สันตรงคมชัด"
        },
        {
          id: "cheek",
          number: "03",
          title: "ไฮไลต์แก้มอิ่มฟู",
          subtitle: "วังเกื้อหนุนบริวาร (The Patronage Realm)",
          detail: "เนินแก้มที่อิ่มเอิบสะท้อนถึงความสมบูรณ์พูนสุข การเติมประกายชิมเมอร์เนื้อละเอียดช่วยเหนี่ยวนำกระแสความเอ็นดูจากคู่เจรจา",
          action: "ปัดไฮไลต์เนื้อ Liquid Glow เฉด Rose Champagne"
        }
      ],
      recommendations: {
        hair: {
          category: "Coiffure",
          title: "Soft Layered Cut",
          desc: "สไลซ์เลเยอร์เปิดกรอบหน้า ปลายผมงุ้มประบ่ารับแสงมงคล",
          image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&auto=format&fit=crop&q=80"
        },
        makeup: {
          category: "Cosmetics",
          title: "Glow & Lift Finish",
          desc: "ผิวฉ่ำวาวเน้นมิติโหนกแก้ม ลิปกลอสสี Coral Nude เสริมวาจา",
          image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&auto=format&fit=crop&q=80"
        },
        eyewear: {
          category: "Spectacles",
          title: "Oval Titanium Frame",
          desc: "กรอบรีสี Rose Gold โลหะบาง ช่วยเกลาสมดุลแนวกราม",
          image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=400&auto=format&fit=crop&q=80"
        }
      }
    },
    // Module 2: Body x ฮวงจุ้ยโครงสร้าง (Bone Feng Shui)
    bodyAnalysis: {
      type: "Wave",
      typeName: "Wave (กระดูกบาง — ร่างน้อย)",
      typeSummary: "สรีระบอบบาง เส้นสายพลิ้วไหว ช่วงเอวยาวคอดเว้า สมดุลสะโพกผายแนวต่ำ ต้องการความนุ่มนวลเพื่อเสริมพลังหยิน",
      yinYang: { yin: 62, yang: 38 },
      lines: {
        shoulder: "ลาดแคบ ละมุน สัมผัสเบาบาง",
        waist: "คอดเว้าชัดเจน ช่วงลำตัวเพรียวยาว",
        hip: "ผายออกสมดุลระดับสะโพกล่าง",
        bone: "โครงสร้างกระดูกละเอียด ข้อต่อเรียวเล็ก"
      },
      fengShuiRule: {
        straight: { label: "Straight", desc: "คัตติ้งเนี้ยบ ไม่รุ่มร่าม (ป้องกันการทับถมบารมี)", active: false },
        wave: { label: "Wave", desc: "แต่งเติมดีเทล ผ้าพลิ้วไหว (เติมเต็มความอุดมสมบูรณ์เรียกโชค)", active: true },
        natural: { label: "Natural", desc: "สวมใส่หลวมสบาย ไม่รัดแน่น (ป้องกันการบีบพลังผู้นำ)", active: false }
      },
      seasonalColor: {
        season: "Warm Autumn",
        skinTone: "Light-Medium Warm Beige",
        undertone: "Warm Peachy (หลอดเลือดเขียวมะกอก)",
        palette: ["#854D0E", "#047857", "#EA580C", "#D97706", "#FDE68A", "#F87171"],
        luckyColorExplanation: "สีเอิร์ธโทนอบอุ่นและสีเขียวมรกตช่วยเสริมธาตุน้ำ-ลมให้เกิดความมั่งคั่งงอกงาม"
      },
      motto: "เลือกเสื้อผ้าที่ปล่อยพลังให้คุณ ไม่ใช่ปิดพลังคุณ"
    },
    // Module 3: Astrology & Aura Energy Profile
    astrologyProfile: {
      auraName: "Emerald Radiance with Rose-Gold Hue",
      auraColor1: "#10B981",
      auraColor2: "#FB7185",
      auraColor3: "#D97706",
      energyScore: 94,
      auraMeaning: "ออร่าสีเขียวมรกตเจิดจรัสโอบล้อมด้วยรังสีสีโรสโกลด์ แสดงถึงจิตวิญญาณแห่งเมตตาธรรม วาจาเสกทรัพย์ และแรงดึงดูดความสัมพันธ์ที่เกื้อหนุนทางธุรกิจ",
      pillars: [
        { name: "การเงิน-โชคลาภ", score: 91, label: "กระแสการเงินหมุนเวียนคล่องตัว", code: "WLTH-01" },
        { name: "อำนาจ-บารมี-การงาน", score: 88, label: "งานเจรจาประสบผลสัมฤทธิ์", code: "AUTH-02" },
        { name: "เสน่ห์-เมตตามหานิยม", score: 98, label: "คลื่นดึงดูดความไว้วางใจสูงสุด", code: "CHRM-03" },
        { name: "สุขภาพ-แคล้วคลาด", score: 82, label: "สมดุลพลังงานภายในสงบนิ่ง", code: "SANC-04" }
      ],
      elements: [
        { name: "ธาตุดิน", pct: 25, status: "สมดุล", tip: "เสริมความหนักแน่นทางจิตใจ" },
        { name: "ธาตุน้ำ", pct: 35, status: "เด่นชัด", tip: "ความยืดหยุ่นและปฏิภาณไหวพริบ" },
        { name: "ธาตุลม", pct: 25, status: "เกื้อหนุน", tip: "พลังแห่งการสื่อสารและเจรจา" },
        { name: "ธาตุไฟ", pct: 15, status: "พร่องบางเบา", tip: "ควรเสริมสีส้มอิฐหรือโรสโกลด์เพื่อปลุกแพชชัน" }
      ],
      dailyAuspicious: {
        color: "เขียวมรกต, ชมพูพีช, ทองแชมเปญ",
        avoidColor: "เทาหม่นด้านสนิท (ลดทอนรังสีดวงดาว)",
        time: "ฤกษ์มงคล: 09:30 - 11:45 น. และ 14:15 - 16:30 น."
      }
    },
    // Module 4: Fashion Recommendation (4 Occasions)
    occasions: {
      professional: {
        key: "professional",
        title: "Professional",
        subtitle: "การทำงานระดับบริหาร & การเจรจาธุรกิจเชิงกลยุทธ์",
        concept: "เสริมพลังวาจาเมตตา ความน่าเชื่อถือ และปิดดีลสำเร็จ",
        outfitImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=85",
        breakdown: {
          top: "Tailored Wool Melange Blazer คัตติ้งผ้าวูลทิ้งตัวสีเทาชาร์โคลสุขุม เสริมความน่าเชื่อถือระดับผู้บริหาร",
          inner: "Crisp White Poplin Silk Shirt เสื้อเชิ้ตคอปกผ้าคอตตอนซิลค์สีขาวบริสุทธิ์ ขับออร่าวาจาเจรจา",
          bottom: "High-Waisted Slim Tailored Trousers กางเกงสแล็คเอวสูงทรงกระบอกตรงสีดำคลาสสิก เสริมช่วงขาให้ดูเพรียวสง่า",
          shoes: "Pointed-Toe Leather Pumps ส้นสูงหัวแหลมหนังแท้สีดำขลับ เสริมความเด็ดเดี่ยวในการตัดสินใจ"
        },
        items: [
          { name: "Tailored Wool Melange Blazer", brand: "Atelier Aura", price: "฿ 4,290", image: "https://images.unsplash.com/photo-1548624313-0396c75e4b1a?w=400&auto=format&fit=crop&q=80", tag: "ทรง Straight/Wave เสริมสง่าราศี" },
          { name: "Crisp White Poplin Silk Shirt", brand: "Siam Sericulture", price: "฿ 1,650", image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&auto=format&fit=crop&q=80", tag: "ธาตุทองดึงดูดปัญญาความกระจ่าง" },
          { name: "High-Waisted Slim Tailored Trousers", brand: "Maison Celestial", price: "฿ 2,490", image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&auto=format&fit=crop&q=80", tag: "ช่วงเอวคอดรับสรีระ Wave" },
          { name: "Pointed-Toe Leather Pumps in Onyx", brand: "Optique Savoir", price: "฿ 3,200", image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&auto=format&fit=crop&q=80", tag: "ก้าวหน้ามั่นคงทุกการเจรจา" }
        ],
        fengShuiReason: "ลัคนาเมถุนเป็นธาตุลม ได้รับแรงส่งเสริมจากสีเขียวเข้มของดาวพุธเกษตราธิบดี ผสานกับสรีระแบบ Wave ที่ต้องการผ้าทิ้งตัวพลิ้วไหว ช่วยให้การเจรจาลื่นไหล ไร้ข้อติดขัดทางพลังงาน",
        beautyGuide: "เมคอัพโทน Warm Peach ขับไฮไลต์โหนกแก้มแบบ Dewy Finish เพื่อดึงดูดผู้ใหญ่อุปถัมภ์"
      },
      formal: {
        key: "formal",
        title: "Formal & Ceremonial",
        subtitle: "งานพิธีการระดับเกียรติยศ & งานสมาคมทางการ",
        concept: "ความสง่างาม สุขุม ได้รับความเกรงใจและยกย่อง",
        outfitImage: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&auto=format&fit=crop&q=85",
        breakdown: {
          top: "Terracotta Pleated Silk Midi Dress เดรสพลีตผ้าไหมส้มอิฐ คอปาดเปิดช่วงไหล่",
          accessory: "สร้อยไข่มุกเซาท์ซีธรรมชาติ และเข็มกลัดทองคำฉลุลายกลีบบัวมงคล",
          bottom: "กระโปรงทรงสอบเข้ารูปความยาวคลุมเข่า ผ่าหลังพอเหมาะแก่การก้าวเดิน",
          shoes: "Metallic Rose Gold Ankle-Strap Heels รองเท้าส้นสูงสีโรสโกลด์"
        },
        items: [
          { name: "Pleated Terracotta Silk Gown", brand: "Sovereign Drape", price: "฿ 5,900", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=300&auto=format&fit=crop&q=80", tag: "เติมธาตุไฟที่ขาด" },
          { name: "South Sea Pearl & Rose Gold Brooch", brand: "Ratanakosin Heritage", price: "฿ 4,800", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=300&auto=format&fit=crop&q=80", tag: "ความบริสุทธิ์เกื้อหนุน" },
          { name: "Imperial Green Jade Ring", brand: "Masterpiece Jade", price: "฿ 6,500", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=300&auto=format&fit=crop&q=80", tag: "สวมนิ้วชี้ขวาเสริมอำนาจ" }
        ],
        fengShuiReason: "เฉดสี Terracotta ช่วยเติมเต็มธาตุไฟที่มีเพียง 15% ในดวงชะตาให้ลุกโชนอย่างสุขุม ส่งผลให้ผู้ใหญ่ในงานให้ความเคารพนับถือในภูมิธรรมและบารมี",
        beautyGuide: "เกล้าผม Low Bun รวบตึงด้านหลัง เปิดแนวลำคอระหงส์ ปัดพวงแก้มสีส้มอมชมพูทองหรูหรา"
      },
      social: {
        key: "social",
        title: "Social & Evening",
        subtitle: "งานเลี้ยงสังสรรค์ & บทสนทนาค่ำคืนส่วนตัว",
        concept: "เสน่ห์เมตตามหานิยม เปล่งประกาย ดึงดูดสายตา",
        outfitImage: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&auto=format&fit=crop&q=85",
        breakdown: {
          top: "One-Shoulder Drape Jumpsuit จั๊มสูทเปิดไหล่เดี่ยวสีชมพูดัสตี้โรส",
          accessory: "สร้อยคอหินโรสควอตซ์มาดากัสการ์เกรดคัดพิเศษ และต่างหูคริสตัลระย้า",
          bottom: "กางเกงทรงบานพริ้วไหวรับกับทุกลีลาการเคลื่อนไหว",
          shoes: "Shimmering Strappy Sandals รองเท้าสายรัดประดับคริสตัล"
        },
        items: [
          { name: "Dusty Rose Asymmetric Jumpsuit", brand: "Venusian Studio", price: "฿ 3,450", image: "https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?w=300&auto=format&fit=crop&q=80", tag: "เสน่ห์ดึงดูดใจ" },
          { name: "Madagascar Rose Quartz Pendant", brand: "Astral Gemology", price: "฿ 1,890", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=300&auto=format&fit=crop&q=80", tag: "เปิดจักระหัวใจ" },
          { name: "Glow Prism Minaudière in Champagne", brand: "Celestial Craft", price: "฿ 2,250", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=300&auto=format&fit=crop&q=80", tag: "กระเป๋าเหนี่ยวนำทรัพย์" }
        ],
        fengShuiReason: "การเปิดไหล่ข้างหนึ่งช่วยกระตุ้นหยิน-หยางให้หมุนเวียน ผนวกกับสีชมพูดัสตี้โรสอันเป็นเฉดธาตุความรักประจำดาวศุกร์มหาอุจจ์ ช่วยสร้างมิตรภาพและความประทับใจตั้งแต่แรกพบ",
        beautyGuide: "ดัดลอนคลาย Soft Wave ปล่อยพาดไหล่ข้างเดียว ริมฝีปากอวบอิ่มประกายชิมเมอร์พีชทอง"
      },
      special: {
        key: "special",
        title: "Sacred & Sanctuary",
        subtitle: "กิจกรรมมงคล & การรับพลังงานบริสุทธิ์ ณ สถานศักดิ์สิทธิ์",
        concept: "ความสงบผ่องใส ชำระล้างพลังงานลบ รับพรมงคล",
        outfitImage: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&auto=format&fit=crop&q=85",
        breakdown: {
          top: "Linen Mandarin-Collar Tunic เสื้อเชิ้ตคอจีนผ้าลินินออร์แกนิกสีขาวมุกงาช้าง",
          bottom: "Culotte Trousers กางเกงขากระบอกหลวมผ้าฝ้ายทอมือสีทรายนวลตา",
          accessory: "สร้อยประคำหินหยกเนไฟรต์ 108 เม็ด และกำไลหินแก้วขนเหล็กแท้",
          shoes: "Woven Espadrilles รองเท้าผ้าใบสวมพื้นสานเส้นใยธรรมชาติ"
        },
        items: [
          { name: "Ivory Pearl Organic Linen Tunic", brand: "Bodhi Sartorial", price: "฿ 1,950", image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=300&auto=format&fit=crop&q=80", tag: "สะท้อนพลังงานลบ" },
          { name: "Nephrite Green Jade Sacred Beads", brand: "Sanctuary Relics", price: "฿ 3,200", image: "https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?w=400&auto=format&fit=crop&q=80", tag: "ปรับสมดุลธาตุกาย" },
          { name: "Hand-Loomed Cotton Tote Bag", brand: "Lanna Weavers", price: "฿ 890", image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=300&auto=format&fit=crop&q=80", tag: "ลายยันต์โภคทรัพย์โบราณ" }
        ],
        fengShuiReason: "ผ้าลินินสีขาวมุกทำหน้าที่เป็นเกราะสะท้อนพลังงานลบ และเปิดรับคลื่นความถี่บริสุทธิ์จากศาสนสถานเข้าสู่จิตใจอย่างสงบนิ่ง",
        beautyGuide: "คลีนสกิน No-Makeup Look เปลือยผิวสุขภาพดี รวบผมหางม้าเรียบง่ายสงบเย็น"
      }
    }
  },

  male: {
    id: "male",
    name: "คุณกฤติน ภูวเดชานันท์",
    displayName: "02 / คุณกฤติน (บุรุษ)",
    role: "Tech Founder & Venture Partner — วัย 34 ปี",
    gender: "male",
    birth: {
      date: "24 สิงหาคม 2534",
      dayName: "วันอังคาร (ดาวอังคารเกษตราธิบดีครองอำนาจ)",
      time: "19:42 น. (เวลาท้องถิ่นแท้จริง)",
      province: "กรุงเทพมหานคร (พิกัด 13°45'N 100°30'E)",
      lagna: "ลัคนาราศีสิงห์ (ธาตุไฟ-ดิน)",
      rulingPlanet: "ดาวอาทิตย์มหาจักร (เจ้าแห่งอำนาจ บารมี และความเป็นผู้นำ)",
      solarDegree: "07° 32' สิงห์ เสวยมหัทธโนฤกษ์ (ฤกษ์เศรษฐี)",
      nakshatra: "มาฆะ (ดาวเกตุครอง)"
    },
    photos: {
      face: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&crop=faces,top&q=85",
      body: "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=800&auto=format&fit=crop&q=85"
    },
    // Module 2: Face x โหงวเฮ้ง (Physiognomy)
    faceAnalysis: {
      shape: "Structured Square & Solid Jawline (รูปหน้าเหลี่ยมคม สันกรามมั่นคง)",
      undertone: "Neutral-Cool Deep Bronze (ผิวสองสี สันกรามคมชัด)",
      landmarks: [
        { label: "หน้าผาก", zone: "วังอาชีพ & บารมีสุริยะ", x: 50, y: 20, status: "ผึ่งผาย นูนรับพลังสุริยะ", meaning: "ความเป็นผู้นำองค์กร ตัดสินใจเด็ดขาดถูกต้อง" },
        { label: "คิ้ว", zone: "วังอำนาจ & คิ้วมังกร", x: 40, y: 34, status: "คิ้วมังกรหนา ปลายตวัดขึ้น", meaning: "จิตใจเข้มแข็ง มั่นคง บริวารให้ความยำเกรง" },
        { label: "ดวงตา", zone: "วังปัญญา & สายตาพญาเหยี่ยว", x: 50, y: 42, status: "ดวงตาพญาอินทรี ประกายกล้า", meaning: "มองทะลุทุกมิติการลงทุน ไม่ตกเป็นเหยื่อคำลวง" },
        { label: "จมูก", zone: "วังคลังสมบัติเสาหลัก", x: 50, y: 55, status: "สันตรงดั่งราชสีห์ ปีกจมูกมิดชิด", meaning: "คลังเงินตราหนาแน่น เงินเข้าแล้วไม่รั่วไหล" },
        { label: "ปาก", zone: "วังวาจาสัตย์ & อำนาจ", x: 50, y: 73, status: "หยักคม มุมปากยกสง่า", meaning: "คำสั่งมีน้ำหนัก พูดจริงทำจริง บริวารพร้อมลุย" },
        { label: "คาง/สันกราม", zone: "วังรากฐานบารมี", x: 50, y: 88, status: "สันกรามกว้างมั่นคงดั่งหินผา", meaning: "ความยั่งยืนในบั้นปลาย ทรัพย์สินอสังหาริมทรัพย์มั่งคั่ง" }
      ],
      wealthGates: [
        {
          id: "forehead",
          number: "01",
          title: "เปิดหน้าผากรับพลังสุริยะ",
          subtitle: "วังมหาอำนาจบารมี (Solar Dominion)",
          detail: "หน้าผากกว้างเปรียบดั่งบัลลังก์สุริยะ การเซ็ตผมยกโคนเปิดหน้าผากช่วยขยายพื้นที่รับพลังอำนาจและการตัดสินใจลงทุนระดับสูง",
          action: "เซ็ตผมสไตล์ Quiff Textured ยกโคนเปิดแนวไรผม"
        },
        {
          id: "nose",
          number: "02",
          title: "คอนทัวร์สันจมูกรับทรัพย์",
          subtitle: "วังคลังสมบัติราชสีห์ (The Sovereign Treasury)",
          detail: "ควบคุมความมันบริเวณปีกจมูก และแต่งมิติสันจมูกให้เด่นชัดเสมือนเสาหลักค้ำจุนความมั่งคั่ง",
          action: "ใช้ Mattifying Finish พร้อมเฉดดิ้งโทนธรรมชาติ"
        },
        {
          id: "beard",
          number: "03",
          title: "จัดแต่งทรงเคราเปิดทางทรัพย์",
          subtitle: "วังรากฐานแห่งพลังหยาง (The Foundation Line)",
          detail: "เล็มขอบเคราให้สะอาดตา ไม่ให้หนวดเคราขึ้นรกขวางทางเดินพลังงานหยางจากลำคอสู่ใบหน้า",
          action: "Grooming สันกรามคมกริบ ลำคอสะอาดหมดจด"
        }
      ],
      recommendations: {
        hair: {
          category: "Coiffure",
          title: "Quiff Textured Side-Part",
          desc: "ยกโคนเปิดหน้าผาก ปัดข้างเน้นความสุขุมและภาวะผู้นำ",
          image: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=400&auto=format&fit=crop&q=80"
        },
        makeup: {
          category: "Grooming",
          title: "Beard Grooming & Mattify",
          desc: "ผิวแมตต์ไร้ความมัน เก็บขอบคิ้วมังกรและสันกรามคมชัด",
          image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=80"
        },
        eyewear: {
          category: "Spectacles",
          title: "Structured Titanium Frame",
          desc: "กรอบไททาเนียมทรงเหลี่ยมสี Gunmetal สะท้อนความเด็ดขาด",
          image: "https://images.unsplash.com/photo-1508296695146-257a814070b4?w=400&auto=format&fit=crop&q=80"
        }
      }
    },
    // Module 2: Body x ฮวงจุ้ยโครงสร้าง (Bone Feng Shui)
    bodyAnalysis: {
      type: "Straight",
      typeName: "Straight (กระดูกหนา — อกแน่น)",
      typeSummary: "โครงสร้างแข็งแกร่ง แนวไหล่กว้างคมชัด อกแน่น ลำตัวตรง มีกล้ามเนื้อกระชับตามธรรมชาติ ต้องการคัตติ้งเนี้ยบเพื่อไม่ให้ทับถมบารมี",
      yinYang: { yin: 35, yang: 65 },
      lines: {
        shoulder: "กว้างผึ่งผาย แนวตรงระดับฉาก",
        waist: "หนาแน่นได้สัดส่วน เอวสอบรูปตัววี",
        hip: "กระชับ แนบตามแนวกระดูกเชิงกราน",
        bone: "โครงสร้างกระดูกหนาแน่นและแข็งแรงสูง"
      },
      fengShuiRule: {
        straight: { label: "Straight", desc: "คัตติ้งเนี้ยบ ไม่รุ่มร่าม (ป้องกันการทับถมบารมี)", active: true },
        wave: { label: "Wave", desc: "แต่งเติมดีเทล ผ้าพลิ้วไหว (เติมเต็มความอุดมสมบูรณ์เรียกโชค)", active: false },
        natural: { label: "Natural", desc: "สวมใส่หลวมสบาย ไม่รัดแน่น (ป้องกันการบีบพลังผู้นำ)", active: false }
      },
      seasonalColor: {
        season: "Deep Winter",
        skinTone: "Deep Bronze-Tan",
        undertone: "Neutral-Cool (หลอดเลือดสีน้ำเงินและม่วงเข้ม)",
        palette: ["#0F172A", "#881337", "#1E293B", "#78350F", "#450A0A", "#E2E8F0"],
        luckyColorExplanation: "สีกรมท่ามิดไนท์บลูและสีทองอำพัน ช่วยขับประกายความเด็ดขาดของลัคนาราศีสิงห์"
      },
      motto: "เลือกเสื้อผ้าที่ปล่อยพลังให้คุณ ไม่ใช่ปิดพลังคุณ"
    },
    // Module 3: Astrology & Aura Energy Profile
    astrologyProfile: {
      auraName: "Solar Amber & Obsidian Flare",
      auraColor1: "#D97706",
      auraColor2: "#78350F",
      auraColor3: "#1E293B",
      energyScore: 96,
      auraMeaning: "ออร่าสีทองอำพันดุจเปลวสุริยะห่อหุ้มด้วยรัศมีนิลกาฬ สะท้อนอำนาจบารมี จิตใจหนักแน่นมั่นคง และพลังดึงดูดการลงทุนระดับร้อยล้าน",
      pillars: [
        { name: "การเงิน-โชคลาภ", score: 94, label: "ดวงรับทรัพย์จากการลงทุนใหญ่", code: "WLTH-01" },
        { name: "อำนาจ-บารมี-การงาน", score: 98, label: "บารมีผู้นำสูงสุด บริวารภักดี", code: "AUTH-02" },
        { name: "เสน่ห์-เมตตามหานิยม", score: 86, label: "เสน่ห์สุขุม น่าเกรงขาม", code: "CHRM-03" },
        { name: "สุขภาพ-แคล้วคลาด", score: 92, label: "พลังหยางหนาแน่น ต้านอุปสรรค", code: "SANC-04" }
      ],
      elements: [
        { name: "ธาตุไฟ", pct: 40, status: "เด่นทรงพลัง", tip: "ภาวะผู้นำและวิสัยทัศน์กว้างไกล" },
        { name: "ธาตุดิน", pct: 30, status: "มั่นคงสูง", tip: "ความหนักแน่นในการบริหารจัดการ" },
        { name: "ธาตุทอง", pct: 15, status: "เกื้อหนุน", tip: "การตัดสินใจเชิงกลยุทธ์เฉียบขาด" },
        { name: "ธาตุน้ำ", pct: 15, status: "พร่องบางเบา", tip: "ควรเสริมสีกรมท่าเข้มเพื่อเพิ่มความยืดหยุ่น" }
      ],
      dailyAuspicious: {
        color: "น้ำเงินมิดไนท์บลู, ทองคำอำพัน, แดงเบอร์กันดี",
        avoidColor: "เขียวตองอ่อน (ลดทอนความเกรงขาม)",
        time: "ฤกษ์มงคล: 10:15 - 12:00 น. และ 15:30 - 18:00 น."
      }
    },
    // Module 4: Fashion Recommendation (4 Occasions)
    occasions: {
      professional: {
        key: "professional",
        title: "Professional",
        subtitle: "การเจรจาบอร์ดบริหาร & นำเสนอแผนการลงทุน (Boardroom Pitch)",
        concept: "คัตติ้งคมกริบ ทรงพลัง น่าเชื่อถือ เด็ดเดี่ยว",
        outfitImage: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=85",
        breakdown: {
          top: "Double-Breasted Midnight Navy Suit สูทกระดุมสองแถว ผ้าวูลอิตาลีคัตติ้งคมชัด",
          inner: "Crisp White Poplin Shirt เสื้อเชิ้ตขาวคอปกแข็งตั้งสง่า รับกับแนวกราม",
          bottom: "Tailored Navy Trousers กางเกงทรงสลิมฟิตเข้าชุด ไม่กองข้อเท้า",
          shoes: "Cap-Toe Oxford Shoes หนังแท้ขัดเงาสี Dark Espresso"
        },
        items: [
          { name: "Italian Wool Double-Breasted Suit", brand: "Sartorial Sovereign", price: "฿ 12,900", image: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=400&auto=format&fit=crop&q=80", tag: "ทรง Straight ไม่ทับบารมี" },
          { name: "Natural Black Onyx Silver Cufflinks", brand: "Regal Atelier", price: "฿ 3,500", image: "https://images.unsplash.com/photo-1590548784585-643d2b9f2925?w=400&auto=format&fit=crop&q=80", tag: "นิลดำสลายพลังงานลบ" },
          { name: "Silk Jacquard Tie in Deep Burgundy", brand: "Milano Astrale", price: "฿ 2,200", image: "https://images.unsplash.com/photo-1589756823695-278bc923f962?w=400&auto=format&fit=crop&q=80", tag: "ธาตุไฟดึงดูดชัยชนะ" },
          { name: "Titanium Hexagon Sunglasses in Gunmetal", brand: "Krypton Eyewear", price: "฿ 6,200", image: "https://images.unsplash.com/photo-1508296695146-257a814070b4?w=400&auto=format&fit=crop&q=80", tag: "เสริมโหงวเฮ้งสันจมูก" }
        ],
        fengShuiReason: "รูปร่าง Straight จำเป็นต้องสวมสูทที่มีโครงสร้างชัดเจน ไม่หลวมโพรก เพื่อให้ 'บารมีไม่ถูกทับถม' สีกรมท่าช่วยเติมธาตุน้ำที่พร่องในดวงชะตา ทำให้การเจรจาปิดดีลมีความยืดหยุ่นสูงขึ้น",
        beautyGuide: "เซ็ตผม Quiff ยกโคนสูงเปิดหน้าผากรับแสงอาทิตย์ โกนหนวดบริเวณลำคอให้เกลี้ยงเกลา"
      },
      formal: {
        key: "formal",
        title: "Formal & Ceremonial",
        subtitle: "งานกาล่าดินเนอร์เกียรติยศ & พิธีมอบรางวัลระดับนานาชาติ",
        concept: "ความสง่างามระดับผู้นำ สุขุม ไร้ที่ติ",
        outfitImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&auto=format&fit=crop&q=85",
        breakdown: {
          top: "Peak-Lapel Charcoal Slate Tuxedo ทักซิโด้ปกแหลมผ้า Wool-Mohair คมกริบ",
          inner: "Black Silk Satin Bowtie & Pleated White Shirt",
          accessory: "แหวนหินไทเกอร์อายหัวทองคำแท้ และนาฬิกาพรีเมียมตัวเรือนสตีล",
          bottom: "Tuxedo Trousers with Satin Side Stripes",
          shoes: "Patent Leather Velvet Slippers รองเท้ากำมะหยี่สีดำขลับ"
        },
        items: [
          { name: "Charcoal Slate Peak-Lapel Tuxedo", brand: "Savile Row Atelier", price: "฿ 18,500", image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=300&auto=format&fit=crop&q=80", tag: "ปกแหลมเสริมพลังพญาเหยี่ยว" },
          { name: "3-Color Tiger's Eye Gold Signet Ring", brand: "Imperial Gemology", price: "฿ 8,900", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=300&auto=format&fit=crop&q=80", tag: "สวมนิ้วชี้ซ้ายคุมอำนาจเงิน" },
          { name: "Swiss Chronograph Steel Blue Dial", brand: "Horology Astral", price: "฿ 28,000", image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=300&auto=format&fit=crop&q=80", tag: "ควบคุมจังหวะเวลาแห่งชัยชนะ" }
        ],
        fengShuiReason: "ปกแหลม (Peak Lapel) พุ่งขึ้นด้านบน สอดรับกับแนวคิ้วมังกรและลัคนาราศีสิงห์ หนุนส่งเกียรติยศและชื่อเสียงให้พุ่งทะยานสู่จุดสูงสุด",
        beautyGuide: "ปัดแป้งคุมมันไม่ให้หน้าผากเงาเกินไป เน้นดวงตาคมชัดสง่างาม"
      },
      social: {
        key: "social",
        title: "Social & Evening",
        subtitle: "งานพบปะสังคมส่วนตัว & เลานจ์สนทนากลยุทธ์",
        concept: "เสน่ห์ลึกลับ สุขุม ดึงดูด น่าค้นหา",
        outfitImage: "https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=800&auto=format&fit=crop&q=85",
        breakdown: {
          top: "Dark Chocolate Suede Biker Jacket สวมทับเชิ้ตผ้าไหม Silk-Modal สีดำสนิท",
          inner: "ปลดกระดุมบน 2 เม็ด เพื่อเปิดจักระหัวใจและทางเดินพลังงานลำคอ",
          bottom: "Slim-Fit Raw Selvedge Denim กางเกงยีนส์ริมแดงสีครามเข้ม",
          shoes: "Chelsea Boots หนังกลับสีน้ำตาลเอสเปรสโซ"
        },
        items: [
          { name: "Dark Espresso Suede Jacket", brand: "Nomad Sartorial", price: "฿ 8,500", image: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=300&auto=format&fit=crop&q=80", tag: "สีช็อกโกแลตเสริมธาตุดิน" },
          { name: "Black Rutile Quartz (หินแก้วขนเหล็ก)", brand: "Sanctuary Shield", price: "฿ 3,900", image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=400&auto=format&fit=crop&q=80", tag: "มหาเสน่ห์ & ปกป้องภัย" },
          { name: "Onyx Bead & Meteorite Pendant", brand: "Cosmic Forge", price: "฿ 2,800", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=300&auto=format&fit=crop&q=80", tag: "ดูดซับแรงดึงดูดเพศตรงข้าม" }
        ],
        fengShuiReason: "การปลดกระดุมบนเปิดทางเดินพลังงานหน้าอก ช่วยลดทอนความดุดันของลัคนาสิงห์ลง เปลี่ยนเป็นเสน่ห์อันน่าหลงใหลและดึงดูดบทสนทนาที่ลึกซึ้ง",
        beautyGuide: "เซ็ตผมให้ดูมี Texture ยุ่งเล็กน้อยอย่างเป็นธรรมชาติ กลิ่นกายสัมผัส Woody-Amber อบอุ่น"
      },
      special: {
        key: "special",
        title: "Sacred & Sanctuary",
        subtitle: "พิธีบวงสรวง & งานบุญใหญ่รับพลังคุ้มครอง",
        concept: "จิตใจสงบ บริสุทธิ์ นอบน้อมต่อสิ่งศักดิ์สิทธิ์",
        outfitImage: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&auto=format&fit=crop&q=85",
        breakdown: {
          top: "Smoke White Pure Linen Shirt เสื้อเชิ้ตผ้าลินินสีขาวควันบุหรี่ พับแขนถึงข้อศอก",
          bottom: "Chino Straight Trousers กางเกงชิโน่ทรงขากระบอกตรงสีกากีอ่อน",
          accessory: "สร้อยเชือกร่มถักมือ แขวนพระเครื่องพิมพ์สมเด็จ หรือท้าวเวสสุวรรณเนื้อทองคำ",
          shoes: "Woven Leather Slip-ons รองเท้าหนังถักสีแทนธรรมชาติ"
        },
        items: [
          { name: "Smoke White Relaxed Linen Shirt", brand: "Siam Zen Atelier", price: "฿ 2,100", image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=300&auto=format&fit=crop&q=80", tag: "ดูดซับพรอันศักดิ์สิทธิ์" },
          { name: "Tibetan 9-Eye Dzi Bead Bracelet", brand: "Sacred Relics", price: "฿ 3,500", image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=400&auto=format&fit=crop&q=80", tag: "เสริมบารมีเก้าทิศ" },
          { name: "Handmade Braided Holy Thread", brand: "Monastery Craft", price: "฿ 990", image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=300&auto=format&fit=crop&q=80", tag: "ผ่านพิธีมหาพุทธาภิเษก" }
        ],
        fengShuiReason: "เสื้อผ้าสีขาวควันบุหรี่และกางเกงสีกากีดิน ผสานธาตุทองและธาตุดิน ช่วยสร้างรากฐานดวงชะตาให้แข็งแกร่ง ป้องกันเคราะห์ซ้ำ และเปิดรับพรมงคลอย่างเต็มเปี่ยม",
        beautyGuide: "ล้างหน้าสะอาดหมดจด ปราศจากเครื่องสำอาง แต่งกายเรียบง่ายเปี่ยมศรัทธา"
      }
    }
  }
};
