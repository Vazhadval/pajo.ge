/* ============================================================
   PAJO Studio — script.js
   Vanilla JS: i18n (ka/en/ru), mobile menu, smooth scroll,
   reveal, back-to-top, contact form (mailto)
   ============================================================ */
(function () {
  "use strict";

  /* ---------- Current year in footer ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* ========================================================
     Internationalization (Georgian / English / Russian)
     ======================================================== */
  var translations = {
    en: {
      "nav.about": "About",
      "nav.services": "Services",
      "nav.artists": "Artists",
      "nav.equipment": "Equipment",
      "nav.gallery": "Gallery",
      "nav.why": "Why Us",
      "nav.process": "Process",
      "nav.contact": "Contact",

      "hero.eyebrow": "Record Label · Kutaisi, Georgia",
      "hero.title1": "Your Music",
      "hero.title2": "Starts Here",
      "hero.tagline":
        "PAJO Studio crafts, records and amplifies bold new music — from the first idea in the studio to the moment your track plays around the world.",
      "hero.cta1": "Start Your Project",
      "hero.cta2": "Explore the Studio",
      "hero.stat1": "Tracks Released",
      "hero.stat2": "Artists Signed",
      "hero.stat3": "Streams",

      "about.eyebrow": "About the Label",
      "about.title": "A Sound Recording Company With Deep Experience",
      "about.p1":
        "PAJO Studio (PAJO.GE) is an independent Georgian record company rooted in the cultural energy of Kutaisi. We are producers, engineers and storytellers who believe great records are made by people who genuinely care about sound.",
      "about.p2":
        "From hip-hop and pop to electronic and traditional fusion, we partner with artists at every stage of their journey — giving them a creative home, a professional studio and a team that treats their music like its own.",
      "about.cta": "Explore What We Do",
      "about.card1_title": "Creative First",
      "about.card1_desc": "Every release starts with the artist's vision, not a formula.",
      "about.card2_title": "Studio Quality",
      "about.card2_desc": "Professional gear and engineers tuned for radio-ready results.",
      "about.card3_title": "Local Roots",
      "about.card3_desc": "Proudly representing Georgian talent on a global stage.",

      "services.eyebrow": "What We Offer",
      "services.title": "Full-Service Label, End to End",
      "services.lead":
        "Everything an artist needs to go from a rough idea to a finished, distributed and promoted release — all under one roof.",
      "services.s1_title": "Music Production",
      "services.s1_desc": "Beat-making, arrangement and full track production tailored to your sound.",
      "services.s2_title": "Recording",
      "services.s2_desc": "Acoustically treated studio sessions with experienced vocal engineers.",
      "services.s3_title": "Mixing & Mastering",
      "services.s3_desc": "Clean, punchy mixes and loud, balanced masters ready for every platform.",
      "services.s4_title": "Artist Management",
      "services.s4_desc": "Career strategy, bookings and brand growth handled by people who care.",
      "services.s5_title": "Promotion",
      "services.s5_desc": "Playlist pitching, social campaigns and PR to get your music heard.",
      "services.s6_title": "Distribution",
      "services.s6_desc": "Global delivery to Spotify, Apple Music, YouTube and every major store.",

      "artists.eyebrow": "Roster & Releases",
      "artists.title": "Featured Artists & Projects",
      "artists.lead": "A glimpse of the talent and records shaping the PAJO sound.",
      "artists.a1_genre": "Alt-Pop · Single",
      "artists.a1_desc": "\"Midnight in Kutaisi\" — a moody, anthemic debut produced in-house.",
      "artists.a2_genre": "Hip-Hop · EP",
      "artists.a2_desc": "Five tracks of raw Georgian rap, mixed and mastered at PAJO.",
      "artists.a3_genre": "Electronic · Album",
      "artists.a3_desc": "A genre-blending project fusing folk vocals with modern synths.",
      "artists.a4_genre": "R&B · Single",
      "artists.a4_desc": "Smooth, late-night R&B with a signature Caucasus warmth.",

      "equipment.eyebrow": "Our Gear",
      "equipment.title": "Studio Equipment",
      "equipment.lead":
        "Professional, hand-picked gear that gives every PAJO recording its signature clarity and warmth.",
      "equipment.e1_title": "Studio Microphones",
      "equipment.e1_desc": "Neumann TLM 103 · Shure KSM44A",
      "equipment.e2_title": "Studio Monitors",
      "equipment.e2_desc": "ADAM Audio T8",
      "equipment.e3_title": "Audio Interface",
      "equipment.e3_desc": "UAD Volt 476",

      "gallery.eyebrow": "Inside PAJO",
      "gallery.title": "Studio Gallery",
      "gallery.lead":
        "A look inside our Kutaisi studio — where the sound comes to life.",

      "why.eyebrow": "Why PAJO",
      "why.title": "Why Artists Choose Us",
      "why.w1_title": "Proven Track Record",
      "why.w1_desc": "Years of releases, charting singles and happy artists behind us.",
      "why.w2_title": "Fast & Transparent",
      "why.w2_desc": "Clear timelines, honest pricing and no hidden surprises.",
      "why.w3_title": "Artist-First Deals",
      "why.w3_desc": "Fair agreements that keep you in control of your music and rights.",
      "why.w4_title": "World-Class Quality",
      "why.w4_desc": "Professional sound that competes on the global stage.",

      "process.eyebrow": "How It Works",
      "process.title": "From Idea to Release in Four Steps",
      "process.p1_title": "Discover",
      "process.p1_desc": "We listen to your vision, references and goals for the project.",
      "process.p2_title": "Create",
      "process.p2_desc": "We produce and record your track in our Kutaisi studio.",
      "process.p3_title": "Polish",
      "process.p3_desc": "Professional mixing and mastering bring it to release standard.",
      "process.p4_title": "Launch",
      "process.p4_desc": "We distribute and promote your music to the world.",

      "contact.eyebrow": "Get In Touch",
      "contact.title": "Let's Make Your Next Record",
      "contact.lead":
        "Tell us about your project and our team will get back to you within one business day.",
      "contact.phone_label": "Phone",
      "contact.email_label": "Email",
      "contact.location_label": "Location",
      "contact.location_value": "Kutaisi, Georgia",
      "contact.hours_label": "Studio Hours",
      "contact.hours_value": "Mon–Sat · 11:00–21:00",

      "form.name": "Name",
      "form.email": "Email",
      "form.message": "Message",
      "form.send": "Send Message",
      "form.note": "This opens your email app with the message pre-filled — just press send.",
      "form.err_name": "Please enter your name.",
      "form.err_email": "Please enter your email.",
      "form.err_email_invalid": "Please enter a valid email address.",
      "form.err_message": "Please enter a message.",
      "form.fix": "Please fix the errors above.",
      "form.success": "Your email app is opening — just press send to reach us.",
      "form.subject": "New project inquiry from",

      "footer.brand": "Independent record label · Kutaisi, Georgia.",
      "footer.copy": "PAJO Studio · PAJO.GE — All rights reserved.",
      "footer.created_by": "Created by"
    },

    ka: {
      "nav.about": "ჩვენ შესახებ",
      "nav.services": "სერვისები",
      "nav.artists": "არტისტები",
      "nav.equipment": "აპარატურა",
      "nav.gallery": "გალერეა",
      "nav.why": "რატომ ჩვენ",
      "nav.process": "პროცესი",
      "nav.contact": "კონტაქტი",

      "hero.eyebrow": "ჩამწერი ლეიბლი · ქუთაისი, საქართველო",
      "hero.title1": "შენი მუსიკა",
      "hero.title2": "აქ იწყება",
      "hero.tagline":
        "PAJO Studio ქმნის, წერს და ავრცელებს ახალ მუსიკას — სტუდიაში დაბადებული პირველი იდეიდან მომენტამდე, როცა შენი ტრეკი მთელ მსოფლიოში ჟღერს.",
      "hero.cta1": "დაიწყე პროექტი",
      "hero.cta2": "გაიცანი სტუდია",
      "hero.stat1": "გამოცემული ტრეკი",
      "hero.stat2": "ხელმოწერილი არტისტი",
      "hero.stat3": "მოსმენა",

      "about.eyebrow": "ლეიბლის შესახებ",
      "about.title": "ხმის ჩამწერი კომპანია დიდი გამოცდილებით",
      "about.p1":
        "PAJO Studio (PAJO.GE) არის დამოუკიდებელი ქართული ჩამწერი კომპანია, ფესვგადგმული ქუთაისის კულტურულ ენერგიაში. ჩვენ ვართ პროდიუსერები, ინჟინრები და მთხრობელები, რომელთაც გვწამს, რომ შესანიშნავ ჩანაწერებს ქმნიან ადამიანები, რომელთაც ნამდვილად აინტერესებთ ჟღერადობა.",
      "about.p2":
        "ჰიპ-ჰოპიდან და პოპიდან ელექტრონულ და ტრადიციულ შერწყმამდე — ჩვენ ვთანამშრომლობთ არტისტებთან მათი გზის ყველა ეტაპზე, ვაძლევთ მათ შემოქმედებით სახლს, პროფესიონალურ სტუდიას და გუნდს, რომელიც მათ მუსიკას საკუთარივით ეპყრობა.",
      "about.cta": "გაიგე მეტი ჩვენს საქმიანობაზე",
      "about.card1_title": "შემოქმედება უპირველესად",
      "about.card1_desc": "ყველა გამოცემა იწყება არტისტის ხედვით, არა ფორმულით.",
      "about.card2_title": "სტუდიური ხარისხი",
      "about.card2_desc": "პროფესიონალური აღჭურვილობა და ინჟინრები რადიო-მზა შედეგისთვის.",
      "about.card3_title": "ადგილობრივი ფესვები",
      "about.card3_desc": "ამაყად წარმოვადგენთ ქართულ ნიჭს გლობალურ სცენაზე.",

      "services.eyebrow": "რას ვთავაზობთ",
      "services.title": "სრული სერვისის ლეიბლი",
      "services.lead":
        "ყველაფერი, რაც არტისტს სჭირდება უხეში იდეიდან დასრულებულ, გავრცელებულ და დაპრომოუთებულ გამოცემამდე — ერთ სივრცეში.",
      "services.s1_title": "მუსიკის პროდიუსირება",
      "services.s1_desc": "ბიტმეიკინგი, არანჟირება და ტრეკის სრული პროდიუსირება შენი ჟღერადობისთვის.",
      "services.s2_title": "ჩაწერა",
      "services.s2_desc": "აკუსტიკურად დამუშავებული სტუდიური სესიები გამოცდილ ვოკალურ ინჟინრებთან.",
      "services.s3_title": "მიქსი და მასტერინგი",
      "services.s3_desc": "სუფთა, კონტრასტული მიქსები და ხმამაღალი, დაბალანსებული მასტერები ყველა პლატფორმისთვის.",
      "services.s4_title": "არტისტების მენეჯმენტი",
      "services.s4_desc": "კარიერული სტრატეგია, ჯავშნები და ბრენდის ზრდა.",
      "services.s5_title": "პრომოუშენი",
      "services.s5_desc": "ფლეილისთებში მოხვედრა, სოციალური კამპანიები და PR.",
      "services.s6_title": "დისტრიბუცია",
      "services.s6_desc": "გლობალური მიწოდება Spotify-ზე, Apple Music-ზე, YouTube-ზე და ყველა მთავარ მაღაზიაში.",

      "artists.eyebrow": "როსტერი და გამოცემები",
      "artists.title": "გამორჩეული არტისტები და პროექტები",
      "artists.lead": "PAJO-ს ჟღერადობის ფორმირების ნიჭისა და ჩანაწერების ნაწილი.",
      "artists.a1_genre": "ალტ-პოპი · სინგლი",
      "artists.a1_desc": "„შუაღამე ქუთაისში“ — განწყობილი, ჰიმნური დებიუტი.",
      "artists.a2_genre": "ჰიპ-ჰოპი · EP",
      "artists.a2_desc": "ხუთი ტრეკი ნედლი ქართული რეპით, მიქსი და მასტერინგი PAJO-ში.",
      "artists.a3_genre": "ელექტრონული · ალბომი",
      "artists.a3_desc": "ჟანრების შემრევი პროექტი ფოლკლორული ვოკალითა და თანამედროვე სინთებით.",
      "artists.a4_genre": "R&B · სინგლი",
      "artists.a4_desc": "გლუვი, ღამის R&B კავკასიური სითბოთი.",

      "equipment.eyebrow": "ჩვენი აპარატურა",
      "equipment.title": "სტუდიური აპარატურა",
      "equipment.lead":
        "პროფესიონალური, გულდასმით შერჩეული აპარატურა, რომელიც PAJO-ს ყველა ჩანაწერს ანიჭებს გამორჩეულ სიწმინდესა და სითბოს.",
      "equipment.e1_title": "სტუდიური მიკროფონები",
      "equipment.e1_desc": "Neumann TLM 103 · Shure KSM44A",
      "equipment.e2_title": "სტუდიური მონიტორები",
      "equipment.e2_desc": "ADAM Audio T8",
      "equipment.e3_title": "აუდიო ინტერფეისი",
      "equipment.e3_desc": "UAD Volt 476",

      "gallery.eyebrow": "PAJO-ს კულისები",
      "gallery.title": "სტუდიის გალერეა",
      "gallery.lead":
        "ჩვენი ქუთაისის სტუდიის კულისები — სადაც ხმა ცოცხლდება.",

      "why.eyebrow": "რატომ PAJO",
      "why.title": "რატომ გვირჩევენ არტისტები",
      "why.w1_title": "დადასტურებული გამოცდილება",
      "why.w1_desc": "წლების გამოცემები, ჩარტებში მოხვედრილი სინგლები და კმაყოფილი არტისტები.",
      "why.w2_title": "სწრაფი და გამჭვირვალე",
      "why.w2_desc": "მკაფიო ვადები, გულწრფელი ფასები და ფარული სიურპრიზების გარეშე.",
      "why.w3_title": "არტისტზე ორიენტირებული გარიგებები",
      "why.w3_desc": "სამართლიანი ხელშეკრულებები, რომლებიც შენ გაკონტროლებინებს მუსიკას.",
      "why.w4_title": "მსოფლიო დონის ხარისხი",
      "why.w4_desc": "პროფესიონალური ჟღერადობა, რომელიც კონკურენციას უწევს გლობალურ სცენაზე.",

      "process.eyebrow": "როგორ მუშაობს",
      "process.title": "იდეიდან გამოცემამდე ოთხ ნაბიჯში",
      "process.p1_title": "აღმოჩენა",
      "process.p1_desc": "ჩვენ ვისმენთ შენს ხედვას, რეფერენსებსა და მიზნებს.",
      "process.p2_title": "შექმნა",
      "process.p2_desc": "ჩვენ ვაწარმოებთ და ვწერთ შენს ტრეკს ქუთაისის სტუდიაში.",
      "process.p3_title": "დახვეწა",
      "process.p3_desc": "პროფესიონალური მიქსი და მასტერინგი მას გამოცემის სტანდარტამდე მიჰყავს.",
      "process.p4_title": "გაშვება",
      "process.p4_desc": "ჩვენ ვავრცელებთ და ვაპრომოუთებთ შენს მუსიკას მსოფლიოში.",

      "contact.eyebrow": "დაგვიკავშირდი",
      "contact.title": "მოდი შევქმნათ შენი შემდეგი ჩანაწერი",
      "contact.lead":
        "მოგვიყევი შენი პროექტის შესახებ და ჩვენი გუნდი ერთ სამუშაო დღეში დაგიკავშირდება.",
      "contact.phone_label": "ტელეფონი",
      "contact.email_label": "ელფოსტა",
      "contact.location_label": "მდებარეობა",
      "contact.location_value": "ქუთაისი, საქართველო",
      "contact.hours_label": "სტუდიის საათები",
      "contact.hours_value": "ორშ–შაბ · 11:00–21:00",

      "form.name": "სახელი",
      "form.email": "ელფოსტა",
      "form.message": "შეტყობინება",
      "form.send": "გაგზავნა",
      "form.note": "ეს გახსნის შენს ელფოსტის აპს უკვე შევსებული შეტყობინებით — უბრალოდ დააჭირე გაგზავნას.",
      "form.err_name": "გთხოვ, შეიყვანე სახელი.",
      "form.err_email": "გთხოვ, შეიყვანე ელფოსტა.",
      "form.err_email_invalid": "გთხოვ, შეიყვანე სწორი ელფოსტა.",
      "form.err_message": "გთხოვ, შეიყვანე შეტყობინება.",
      "form.fix": "გთხოვ, გაასწორე ზემოთ მითითებული შეცდომები.",
      "form.success": "შენი ელფოსტის აპი იხსნება — უბრალოდ დააჭირე გაგზავნას.",
      "form.subject": "ახალი პროექტის მოთხოვნა —",

      "footer.brand": "დამოუკიდებელი ჩამწერი ლეიბლი · ქუთაისი, საქართველო.",
      "footer.copy": "PAJO Studio · PAJO.GE — ყველა უფლება დაცულია.",
      "footer.created_by": "შექმნილია"
    },

    ru: {
      "nav.about": "О нас",
      "nav.services": "Услуги",
      "nav.artists": "Артисты",
      "nav.equipment": "Оборудование",
      "nav.gallery": "Галерея",
      "nav.why": "Почему мы",
      "nav.process": "Процесс",
      "nav.contact": "Контакты",

      "hero.eyebrow": "Лейбл звукозаписи · Кутаиси, Грузия",
      "hero.title1": "Твоя музыка",
      "hero.title2": "начинается здесь",
      "hero.tagline":
        "PAJO Studio создаёт, записывает и продвигает смелую новую музыку — от первой идеи в студии до момента, когда ваш трек звучит по всему миру.",
      "hero.cta1": "Начать проект",
      "hero.cta2": "Изучить студию",
      "hero.stat1": "Выпущенных треков",
      "hero.stat2": "Артистов",
      "hero.stat3": "Прослушиваний",

      "about.eyebrow": "О лейбле",
      "about.title": "Студия звукозаписи с большим опытом",
      "about.p1":
        "PAJO Studio (PAJO.GE) — независимая грузинская звукозаписывающая компания, укоренённая в культурной энергии Кутаиси. Мы продюсеры, инженеры и рассказчики, верящие, что отличные записи создают люди, которым действительно важен звук.",
      "about.p2":
        "От хип-хопа и попа до электроники и традиционного фьюжна — мы работаем с артистами на каждом этапе их пути, давая им творческий дом, профессиональную студию и команду, которая относится к их музыке как к своей.",
      "about.cta": "Узнать больше о нас",
      "about.card1_title": "Творчество прежде всего",
      "about.card1_desc": "Каждый релиз начинается с видения артиста, а не с формулы.",
      "about.card2_title": "Студийное качество",
      "about.card2_desc": "Профессиональное оборудование и инженеры для результата, готового к эфиру.",
      "about.card3_title": "Местные корни",
      "about.card3_desc": "С гордостью представляем грузинский талант на мировой сцене.",

      "services.eyebrow": "Что мы предлагаем",
      "services.title": "Полный цикл услуг лейбла",
      "services.lead":
        "Всё, что нужно артисту, чтобы превратить черновую идею в готовый, распространённый и продвинутый релиз — под одной крышей.",
      "services.s1_title": "Музыкальное продюсирование",
      "services.s1_desc": "Битмейкинг, аранжировка и полное продюсирование трека под ваше звучание.",
      "services.s2_title": "Запись",
      "services.s2_desc": "Студийные сессии с акустической обработкой и опытными вокальными инженерами.",
      "services.s3_title": "Сведение и мастеринг",
      "services.s3_desc": "Чистое, мощное сведение и громкий, сбалансированный мастеринг для любой платформы.",
      "services.s4_title": "Менеджмент артистов",
      "services.s4_desc": "Карьерная стратегия, букинг и развитие бренда.",
      "services.s5_title": "Продвижение",
      "services.s5_desc": "Питчинг в плейлисты, кампании в соцсетях и PR.",
      "services.s6_title": "Дистрибуция",
      "services.s6_desc": "Глобальная доставка в Spotify, Apple Music, YouTube и все крупные магазины.",

      "artists.eyebrow": "Ростер и релизы",
      "artists.title": "Избранные артисты и проекты",
      "artists.lead": "Часть таланта и записей, формирующих звучание PAJO.",
      "artists.a1_genre": "Альт-поп · Сингл",
      "artists.a1_desc": "«Полночь в Кутаиси» — атмосферный, гимновый дебют.",
      "artists.a2_genre": "Хип-хоп · EP",
      "artists.a2_desc": "Пять треков сырого грузинского рэпа, сведение и мастеринг в PAJO.",
      "artists.a3_genre": "Электроника · Альбом",
      "artists.a3_desc": "Жанровый микс из фолк-вокала и современных синтезаторов.",
      "artists.a4_genre": "R&B · Сингл",
      "artists.a4_desc": "Мягкий, ночной R&B с кавказской теплотой.",

      "equipment.eyebrow": "Наше оборудование",
      "equipment.title": "Студийное оборудование",
      "equipment.lead":
        "Профессиональное, тщательно подобранное оборудование, придающее каждой записи PAJO фирменную чистоту и теплоту.",
      "equipment.e1_title": "Студийные микрофоны",
      "equipment.e1_desc": "Neumann TLM 103 · Shure KSM44A",
      "equipment.e2_title": "Студийные мониторы",
      "equipment.e2_desc": "ADAM Audio T8",
      "equipment.e3_title": "Аудиоинтерфейс",
      "equipment.e3_desc": "UAD Volt 476",

      "gallery.eyebrow": "Внутри PAJO",
      "gallery.title": "Галерея студии",
      "gallery.lead":
        "Загляните в нашу студию в Кутаиси — где рождается звук.",

      "why.eyebrow": "Почему PAJO",
      "why.title": "Почему артисты выбирают нас",
      "why.w1_title": "Проверенный опыт",
      "why.w1_desc": "Годы релизов, чартовые синглы и довольные артисты.",
      "why.w2_title": "Быстро и прозрачно",
      "why.w2_desc": "Чёткие сроки, честные цены и никаких скрытых сюрпризов.",
      "why.w3_title": "Сделки в пользу артиста",
      "why.w3_desc": "Честные соглашения, оставляющие контроль над музыкой за вами.",
      "why.w4_title": "Качество мирового уровня",
      "why.w4_desc": "Профессиональное звучание, конкурентное на мировой сцене.",

      "process.eyebrow": "Как это работает",
      "process.title": "От идеи до релиза за четыре шага",
      "process.p1_title": "Знакомство",
      "process.p1_desc": "Мы слушаем ваше видение, референсы и цели.",
      "process.p2_title": "Создание",
      "process.p2_desc": "Мы продюсируем и записываем ваш трек в студии в Кутаиси.",
      "process.p3_title": "Доработка",
      "process.p3_desc": "Профессиональное сведение и мастеринг доводят его до релизного уровня.",
      "process.p4_title": "Запуск",
      "process.p4_desc": "Мы распространяем и продвигаем вашу музыку по миру.",

      "contact.eyebrow": "Свяжитесь с нами",
      "contact.title": "Давайте создадим вашу следующую запись",
      "contact.lead":
        "Расскажите о вашем проекте, и наша команда ответит в течение одного рабочего дня.",
      "contact.phone_label": "Телефон",
      "contact.email_label": "Эл. почта",
      "contact.location_label": "Местоположение",
      "contact.location_value": "Кутаиси, Грузия",
      "contact.hours_label": "Часы работы студии",
      "contact.hours_value": "Пн–Сб · 11:00–21:00",

      "form.name": "Имя",
      "form.email": "Эл. почта",
      "form.message": "Сообщение",
      "form.send": "Отправить сообщение",
      "form.note": "Откроется ваше почтовое приложение с готовым сообщением — просто нажмите «Отправить».",
      "form.err_name": "Пожалуйста, введите имя.",
      "form.err_email": "Пожалуйста, введите эл. почту.",
      "form.err_email_invalid": "Пожалуйста, введите корректный адрес эл. почты.",
      "form.err_message": "Пожалуйста, введите сообщение.",
      "form.fix": "Пожалуйста, исправьте ошибки выше.",
      "form.success": "Открывается ваше почтовое приложение — просто нажмите «Отправить».",
      "form.subject": "Новый запрос по проекту от",

      "footer.brand": "Независимый лейбл звукозаписи · Кутаиси, Грузия.",
      "footer.copy": "PAJO Studio · PAJO.GE — Все права защищены.",
      "footer.created_by": "Создано"
    }
  };

  var supportedLangs = ["ka", "en", "ru"];
  var currentLang = "en";

  function t(key) {
    var dict = translations[currentLang] || translations.en;
    return dict[key] || translations.en[key] || key;
  }

  function applyLanguage(lang) {
    if (supportedLangs.indexOf(lang) === -1) lang = "en";
    currentLang = lang;

    // Translate every element that carries a data-i18n key
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      var value = t(key);
      if (value) el.textContent = value;
    });

    // Update <html lang="..."> for accessibility / SEO
    document.documentElement.setAttribute("lang", lang);

    // Highlight the active language button
    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      var isActive = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("active", isActive);
      btn.setAttribute("aria-pressed", String(isActive));
    });

    // Remember the choice
    try {
      localStorage.setItem("pajo-lang", lang);
    } catch (e) {
      /* storage may be unavailable; ignore */
    }
  }

  // Wire up the language buttons
  document.querySelectorAll(".lang-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      applyLanguage(btn.getAttribute("data-lang"));
    });
  });

  // Decide the initial language: saved choice → browser → English
  (function initLanguage() {
    var saved = null;
    try {
      saved = localStorage.getItem("pajo-lang");
    } catch (e) {
      /* ignore */
    }
    var browser = (navigator.language || "en").slice(0, 2).toLowerCase();
    var initial =
      saved && supportedLangs.indexOf(saved) !== -1
        ? saved
        : supportedLangs.indexOf(browser) !== -1
        ? browser
        : "en";
    applyLanguage(initial);
  })();

  /* ---------- Mobile navigation toggle ---------- */
  var navToggle = document.getElementById("navToggle");
  var navMenu = document.getElementById("navMenu");

  function closeMenu() {
    if (!navMenu || !navToggle) return;
    navMenu.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  }

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", function () {
      var isOpen = navMenu.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    // Close the menu after clicking a link (mobile)
    navMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });

    // Close on Escape
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeMenu();
    });
  }

  /* ---------- Smooth scroll for in-page anchors ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      var targetId = anchor.getAttribute("href");
      if (targetId === "#" || targetId.length < 2) return;
      var target = document.querySelector(targetId);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  /* ---------- Back to top button ---------- */
  var backToTop = document.getElementById("backToTop");
  if (backToTop) {
    window.addEventListener(
      "scroll",
      function () {
        if (window.scrollY > 500) {
          backToTop.classList.add("visible");
        } else {
          backToTop.classList.remove("visible");
        }
      },
      { passive: true }
    );

    backToTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ---------- Scroll reveal animation ---------- */
  var revealTargets = document.querySelectorAll(
    ".section-head, .about-card, .service-card, .artist-card, .why-item, .process-step, .about-copy, .contact-form, .contact-info"
  );
  revealTargets.forEach(function (el) {
    el.classList.add("reveal");
  });

  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealTargets.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // Fallback: just show everything
    revealTargets.forEach(function (el) {
      el.classList.add("visible");
    });
  }

  /* ---------- Gallery lightbox ---------- */
  var lightbox = document.getElementById("lightbox");
  var lightboxImg = document.getElementById("lightboxImg");
  var lightboxClose = document.getElementById("lightboxClose");

  function openLightbox(src, alt) {
    if (!lightbox || !lightboxImg) return;
    lightboxImg.src = src;
    lightboxImg.alt = alt || "";
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    if (lightboxImg) lightboxImg.src = "";
  }

  document.querySelectorAll(".gallery-item").forEach(function (item) {
    item.addEventListener("click", function () {
      var img = item.querySelector("img");
      if (img) openLightbox(img.src, img.alt);
    });
  });

  if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);
  if (lightbox) {
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) closeLightbox();
    });
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeLightbox();
  });

  /* ---------- Contact form (mailto-based, no backend) ---------- */
  /*
     Note: pure client-side JavaScript cannot send an email on its own —
     that always requires a backend or a third-party email service.
     Instead, we validate the input and open the visitor's email app with
     the message pre-filled, so they can send it with one tap. This keeps
     the site 100% static (HTML/CSS/JS only).
  */
  var form = document.getElementById("contactForm");
  var formStatus = document.getElementById("formStatus");
  var CONTACT_EMAIL = "hello@pajo.ge";

  function setError(field, message) {
    var input = form.elements[field];
    var errorEl = form.querySelector('.form-error[data-for="' + field + '"]');
    if (input) input.setAttribute("aria-invalid", message ? "true" : "false");
    if (errorEl) errorEl.textContent = message || "";
  }

  function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var valid = true;

      var name = form.elements["name"].value.trim();
      var email = form.elements["email"].value.trim();
      var message = form.elements["message"].value.trim();

      // Reset status
      if (formStatus) {
        formStatus.textContent = "";
        formStatus.classList.remove("success");
      }

      if (!name) {
        setError("name", t("form.err_name"));
        valid = false;
      } else {
        setError("name", "");
      }

      if (!email) {
        setError("email", t("form.err_email"));
        valid = false;
      } else if (!isValidEmail(email)) {
        setError("email", t("form.err_email_invalid"));
        valid = false;
      } else {
        setError("email", "");
      }

      if (!message) {
        setError("message", t("form.err_message"));
        valid = false;
      } else {
        setError("message", "");
      }

      if (!valid) {
        if (formStatus) formStatus.textContent = t("form.fix");
        return;
      }

      // Build a mailto link and let the visitor's email app send it
      var subject = t("form.subject") + " " + name;
      var body =
        "Name: " + name + "\n" + "Email: " + email + "\n\n" + message;
      var mailto =
        "mailto:" +
        CONTACT_EMAIL +
        "?subject=" +
        encodeURIComponent(subject) +
        "&body=" +
        encodeURIComponent(body);

      window.location.href = mailto;

      if (formStatus) {
        formStatus.textContent = t("form.success");
        formStatus.classList.add("success");
      }
      form.reset();
    });

    // Clear an error as the user types
    ["name", "email", "message"].forEach(function (field) {
      var input = form.elements[field];
      if (input) {
        input.addEventListener("input", function () {
          setError(field, "");
        });
      }
    });
  }
})();
