// ============================================================================
// lib/data.js — PUSAT DATA / KONTEN seluruh website.
// Semua teks, link, project, sertifikat, skill, timeline disimpan di sini
// sebagai array/objek JavaScript. Komponen di folder components/ tinggal
// memanggil data ini lalu menampilkannya (biasanya lewat .map()).
//
// Keuntungan: utk mengubah konten (misal tambah project atau ganti link)
// cukup edit file ini, tanpa mengubah bagian tampilan sama sekali.
// ============================================================================

export const NAV_ITEMS = [
  { id: 'home', label: 'Home', icon: 'home' },
  { id: 'skills', label: 'Skills', icon: 'code' },
  { id: 'projects', label: 'Projects', icon: 'folder' },
  { id: 'services', label: 'Layanan', icon: 'briefcase' },
  { id: 'career', label: 'Career', icon: 'graduation' },
  { id: 'hobbies', label: 'Hobbies', icon: 'heart' },
  { id: 'timeline', label: 'Timeline', icon: 'road' },
  { id: 'certificates', label: 'Sertifikat', icon: 'trophy' },
  { id: 'contact', label: 'Contact', icon: 'mail' }
];

export const SOCIALS = [
  { name: 'YouTube', url: 'https://www.youtube.com/channel/UCg6xerEubVDBWDwulwr1qaQ', icon: 'youtube' },
  { name: 'Instagram', url: 'https://www.instagram.com/bachrul_panji_gumilang/', icon: 'instagram' },
  { name: 'LinkedIn', url: 'https://id.linkedin.com/in/bachrul-panji-gumilang-92a1621ba', icon: 'linkedin' },
  { name: 'GitHub', url: 'https://github.com/BachrulPanji', icon: 'github' }
];

export const STATS = [
  { value: '3+', label: 'Tahun Pengalaman' },
  { value: '20+', label: 'Project Selesai' },
  { value: '13+', label: 'Sertifikat' },
  { value: '5', label: 'Bidang Keahlian' }
];

export const TYPE_STRINGS = ['Ethical Hacking', 'Cyber Security', 'Front-End Web', 'IT Influencer'];

export const SKILL_GROUPS = [
  {
    title: 'Technical Skills',
    skills: [
      { name: 'HTML', level: 70, label: 'Mahir', detail: 'Forms, Semantic Markup, Structures' },
      { name: 'CSS', level: 60, label: 'Lanjut', detail: 'Layout Design, Animations' },
      { name: 'JavaScript', level: 50, label: 'Menengah', detail: 'DOM Manipulation, Event Handling' },
      { name: 'PHP', level: 55, label: 'Cukup', detail: 'Web Development, Data Analysis' },
      { name: 'Cyber Security', level: 65, label: 'Mahir', detail: 'Keamanan data, Analisis serangan' }
    ]
  },
  {
    title: 'Framework Skill',
    skills: [
      { name: 'Bootstrap', level: 65, label: 'Mahir', detail: 'Responsive Design, Components' },
      { name: 'Vue.js', level: 55, label: 'Cukup', detail: 'SPA, Components, Reactive' },
      { name: 'React', level: 40, label: 'Dasar', detail: 'Components, Hooks, State' },
      { name: 'Laravel', level: 45, label: 'Dasar', detail: 'MVC, Eloquent, Routing' },
      { name: 'Tailwind CSS', level: 50, label: 'Menengah', detail: 'Utility-first, Responsive' },
      { name: 'Next.js', level: 45, label: 'Menengah', detail: 'App Router, SSR, SEO' }
    ]
  },
  {
    title: 'Professional Skills',
    skills: [
      { name: 'Communication', level: 85, label: 'Ahli', detail: 'Clear Messaging, Active Listening' },
      { name: 'Team Work', level: 70, label: 'Mahir', detail: 'Collaboration, Conflict Resolution' },
      { name: 'Management', level: 65, label: 'Mahir', detail: 'Task Delegation, Time Management' },
      { name: 'Creativity', level: 80, label: 'Ahli', detail: 'Innovative Solutions, Brainstorming' }
    ]
  }
];

export const PROJECTS = [
  { img: '/assets/education/Screenshot (312).png', title: 'Ahhaba Course', badge: 'Education', desc: 'Sistem Manajemen Pembelajaran (LMS) dinamis yang dirancang untuk mendukung interaksi real-time antara pengajar dan siswa.', github: 'https://github.com/BachrulPanji' },
  { img: '/assets/education/Screenshot (315).png', title: 'Ahhaba Store', badge: 'E-Commerce', desc: 'Platform E-Commerce berperforma tinggi dengan integrasi keranjang belanja responsif dan sistem manajemen inventaris real-time.', github: 'https://github.com/BachrulPanji' },
  { img: '/assets/gallery/DompetKu.png', title: 'Dompetku', badge: 'Service', desc: 'Aplikasi web pencatatan finansial intuitif untuk melacak arus kas harian, anggaran bulanan, dan visualisasi laporan pengeluaran.', github: 'https://github.com/BachrulPanji' },
  { img: '/assets/gallery/Al-Quran.png', title: 'Al-Quran Digital', badge: 'Design', desc: 'Aplikasi Al-Quran berbasis web yang cepat dan responsif dengan integrasi API publik.', github: 'https://github.com/BachrulPanji' },
  { img: '/assets/gallery/UndanganDigital.png', title: 'Undangan Digital', badge: 'Design', desc: 'Layanan pembuatan undangan pernikahan digital yang elegan dan interaktif.', github: 'https://github.com/BachrulPanji' },
  { img: '/assets/gallery/sistem infomormasi.png', title: 'Sistem Informasi Manajemen', badge: 'Management', desc: 'Dashboard administratif terpadu untuk digitalisasi operasional instansi.', github: 'https://github.com/BachrulPanji' },
  { img: '/assets/gallery/bisnis leadingPage.png', title: 'Business Landing Page', badge: 'Frontend', desc: 'Profil perusahaan digital dengan desain UI/UX modern yang berfokus pada konversi.', github: 'https://github.com/BachrulPanji' },
  { img: '/assets/gallery/RuangEdukasi.png', title: 'Ruang Edukasi', badge: 'Management', desc: 'Portal literasi dan kolaborasi akademik berbasis komunitas.', github: 'https://github.com/BachrulPanji' },
  { img: '/assets/gallery/ChatBot.png', title: 'ChatBot AI Assistant', badge: 'Backend', desc: 'Integrasi asisten virtual cerdas menggunakan NLP untuk merespons pelanggan 24/7.', github: 'https://github.com/BachrulPanji' }
];

export const SERVICES = [
  {
    icon: 'file-invoice', title: 'Aplikasi Office',
    desc: 'Transformasi digital alur kerja administrasi perusahaan Anda. Sistem manajemen data presisi tinggi dan otomatisasi dokumen berbasis cloud.',
    items: ['Data Management', 'Aplikasi App Script', 'Document Support']
  },
  {
    icon: 'code', title: 'Jasa Coding / Web',
    desc: 'Pengembangan arsitektur web kustom yang estetis dan fungsional. Dari PWA dinamis hingga platform e-commerce kompleks.',
    items: ['Website Portofolio', 'E-Commerce Solution', 'Undangan Digital']
  },
  {
    icon: 'shield', title: 'Cyber Security',
    desc: 'Arsitektur pertahanan siber komprehensif untuk melindungi aset digital vital Anda. Audit kerentanan dan penetration testing.',
    items: ['Security Audit', 'Penetration Testing', 'Security Training']
  },
  {
    icon: 'paint', title: 'Desain UI/UX',
    desc: 'Merancang tampilan estetis dan fungsional. Wireframe, mockup, prototype interaktif dengan prioritas pengalaman pengguna.',
    items: ['Desain Website Portofolio', 'Desain E-Commerce', 'Desain Undangan Digital']
  }
];

export const CAREER = {
  summary: 'Seorang pengembang web front-end dengan pengalaman lebih dari 3 tahun dalam membangun situs web yang responsif dan aman. Berfokus pada keamanan siber dan ethical hacking, saya memiliki keterampilan dalam HTML, CSS, JavaScript, PHP dan teknologi modern lainnya. Saya berdedikasi untuk menciptakan solusi digital yang tidak hanya indah secara visual tetapi juga aman dari ancaman siber.',
  shortTerm: [
    'Dapatkan pengalaman praktis melalui kolaborasi.',
    'Tingkatkan skill Cyber Security & Ethical Hacking.',
    'Bangun portofolio yang kuat dan beragam.'
  ],
  longTerm: [
    'Establish a web development & security agency.',
    'Pimpin tim profesional kreatif dan inovatif.',
    'Berkontribusi pada pertumbuhan bisnis melalui solusi digital aman.'
  ]
};

export const HOBBIES = [
  { img: '/assets/hobbies/editing.png', title: 'Modern Web Development', desc: 'Sertifikasi keahlian dalam HTML5, CSS3, dan JavaScript modern.', badge: 'Programming' },
  { img: '/assets/hobbies/Cybersecurity.jpeg', title: 'Ethical Hacking Essentials', desc: 'Dasar-dasar keamanan jaringan dan teknik pencegahan serangan siber.', badge: 'Security' },
  { img: '/assets/hobbies/baca buku.png', title: 'Data Analytics Foundations', desc: 'Penguasaan alat analisis data untuk mendukung keputusan bisnis.', badge: 'Data Science' },
  { img: '/assets/hobbies/bola.png', title: 'PHP Backend Expert', desc: 'Sertifikasi dalam membangun aplikasi web backend yang aman dan skalabel.', badge: 'Backend' },
  { img: '/assets/hobbies/editing.png', title: 'Editor Video', desc: 'Editor video kanal YouTube 3Second TV, produksi video end-to-end.', badge: 'Video Editing' },
  { img: '/assets/hobbies/templet no gambar.png', title: 'IT Project Management', desc: 'Keahlian mengelola siklus hidup proyek TI dari perencanaan hingga implementasi.', badge: 'Management' }
];

export const CERT_FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'cybersecurity', label: 'Cybersecurity' },
  { key: 'webdev', label: 'Web Dev' },
  { key: 'career', label: 'Career' },
  { key: 'ai', label: 'AI & ML' },
  { key: 'training', label: 'Training' }
];

export const CERTS = [
  { img: '/assets/testimonials/SR 1.jpeg', tag: 'cybersecurity', tagLabel: 'Cybersecurity', tagIcon: 'shield-alt', title: 'Cyber Intelligence Forum', issuer: 'Cyber Intelligence Forum Indonesia', desc: 'Attended the Cyber Intelligence Forum Indonesia focusing on the "Threat Landscape for Indonesia\'s Digital Leaders".' },
  { img: '/assets/testimonials/SR 2.jpeg', tag: 'career', tagLabel: 'Career', tagIcon: 'briefcase', title: 'IT Career Preparation', issuer: 'Alterra Academy', desc: 'Successfully completed the IT Career Preparation Program Batch 6.' },
  { img: '/assets/testimonials/SR 3.jpeg', tag: 'cybersecurity', tagLabel: 'Cybersecurity', tagIcon: 'shield-alt', title: 'Cyber Security Webinar', issuer: 'Mercu Buana University', desc: 'Participated in the "How to Maintain Digital Security in Cyberspace" webinar.' },
  { img: '/assets/testimonials/SR 4.jpeg', tag: 'career', tagLabel: 'Career', tagIcon: 'briefcase', title: 'Exclusive Tech Webinar', issuer: 'Alterra Academy', desc: 'Participated in the "How To Get a Job Ready in 2022" exclusive tech webinar.' },
  { img: '/assets/testimonials/SR 6.jpeg', tag: 'webdev', tagLabel: 'Web Dev', tagIcon: 'code', title: 'Backend Developer Career', issuer: 'Archilab Academy', desc: 'Participant in "How to Start Your Professional Career as Backend Developer".' },
  { img: '/assets/testimonials/SR 8.jpeg', tag: 'webdev', tagLabel: 'Web Dev', tagIcon: 'code', title: 'Full Stack Web Development', issuer: 'Harisenin.com', desc: 'Participant in Harisenin Career Conference focusing on Full Stack Web Development.' },
  { img: '/assets/testimonials/SR 9.jpeg', tag: 'cybersecurity', tagLabel: 'Cybersecurity', tagIcon: 'shield-alt', title: 'Fundamental of Cyber Security', issuer: 'Course-Net Indonesia', desc: 'Successful completion of Fundamental of Cyber Security training.' },
  { img: '/assets/testimonials/speaker.jpeg', tag: 'webdev', tagLabel: 'Speaker', tagIcon: 'microphone', title: 'Speaker — JavaScript Masterclass', issuer: 'Google Developer Event', desc: 'Speaker at a Google Developer Event for a JavaScript Masterclass session.' },
  { img: '/assets/testimonials/SR 10.png', tag: 'ai', tagLabel: 'AI & ML', tagIcon: 'robot', title: 'Artificial Intelligence Fundamentals', issuer: 'IBM — International Certificate', desc: 'Internationally recognized certificate from IBM covering core concepts of AI.' },
  { img: '/assets/testimonials/SR 11.png', tag: 'ai', tagLabel: 'AI & ML', tagIcon: 'robot', title: 'Artificial Intelligence Advanced', issuer: 'IBM — International Certificate', desc: 'Second IBM certificate advancing in deep learning and NLP.' },
  { img: '/assets/testimonials/SR 12.png', tag: 'training', tagLabel: 'Training', tagIcon: 'graduation-cap', title: 'Pelatihan Pengembangan Teknologi', issuer: 'Dicoding Indonesia', desc: 'Program pelatihan resmi dari Dicoding Indonesia, platform edukasi teknologi terkemuka.' },
  { img: '/assets/testimonials/SR 13.png', tag: 'training', tagLabel: 'Training', tagIcon: 'graduation-cap', title: 'Pelatihan Pengembangan Teknologi II', issuer: 'Dicoding Indonesia', desc: 'Sertifikat kelulusan kedua dari Dicoding Indonesia.' }
];

export const TIMELINE_EVENTS = [
  { year: '2020', title: 'Awal Perjalanan', subtitle: 'Mulai Belajar Coding', desc: 'Memulai perjalanan coding dengan mempelajari HTML & CSS secara otodidak. Membangun website pertama sebagai portofolio sederhana.', icon: 'code', color: '#0ea5e9' },
  { year: '2021', title: 'Memperdalam Web Development', subtitle: 'JavaScript & PHP', desc: 'Mulai mempelajari JavaScript untuk interaktivitas website dan PHP untuk backend development. Membangun beberapa project website dinamis.', icon: 'js', color: '#f7df1e' },
  { year: '2022', title: 'Eksplorasi Framework', subtitle: 'Bootstrap, Laravel & React', desc: 'Mempelajari framework modern seperti Bootstrap, Laravel, dan React. Mulai mengerjakan project klien.', icon: 'cubes', color: '#6366f1' },
  { year: '2023', title: 'Cyber Security & Ethical Hacking', subtitle: 'Keamanan Siber', desc: 'Mendalami cyber security dan ethical hacking. Mengikuti pelatihan keamanan siber dari Universitas Mercu Buana dan Course-Net Indonesia.', icon: 'shield', color: '#ef4444' },
  { year: '2024', title: 'Sertifikasi & Project Profesional', subtitle: 'IBM AI & Full Stack', desc: 'Mendapatkan sertifikasi internasional dari IBM dalam Artificial Intelligence. Menyelesaikan project LMS, E-Commerce, dan SIM.', icon: 'award', color: '#22c55e' },
  { year: '2025', title: 'IT Influencer & Pembicara', subtitle: 'Berbagi Pengetahuan', desc: 'Menjadi pembicara di Google Developer Event untuk JavaScript Masterclass. Aktif sebagai IT Influencer berbagi tips coding dan keamanan siber.', icon: 'mic', color: '#a855f7' },
  { year: '2026', title: 'Transformasi Portofolio', subtitle: 'Next.js & Modernisasi', desc: 'Melakukan transformasi portofolio menggunakan Next.js untuk performa, SEO, dan kemudahan maintenance. Terus mengembangkan skill di bidang web modern dan keamanan siber.', icon: 'rocket', color: '#0ea5e9' }
];
