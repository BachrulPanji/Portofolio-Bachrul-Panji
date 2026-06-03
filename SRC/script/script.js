let menu = document.querySelector("#menu-icon-js");
let menuicon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let navtc = document.querySelector("#nav-tc-js");

if (menu) {
  menu.onclick = () => {
    menuicon.classList.toggle("bx-x");
    navbar.classList.toggle("open");
    navtc.classList.toggle("nav-touch-close-open");
  };
}

if (navtc) {
  navtc.onclick = () => {
    menuicon.classList.toggle("bx-x");
    navbar.classList.remove("open");
    navtc.classList.remove("nav-touch-close-open");
    navtc.classList.remove("nav-tc-z");
    navtc.classList.remove("nav-LR-TC");
  };
}

/* Navbar scroll logic */
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  const header = document.getElementById("header");
  if (header) {
    header.classList.add("scrolled");
    if (currentScrollPos === 0) {
      header.classList.remove("scrolled");
    }
    if (navtc && navtc.classList.contains("nav-touch-close-open")) {
      return;
    }
    if (prevScrollpos > currentScrollPos) {
      header.style.top = "0";
    } else {
      header.style.top = "-100px";
    }
  }
  prevScrollpos = currentScrollPos;
};

// Contact Form Elements
const contactForm = document.getElementById("contact-form");
const contactSection = document.querySelector(".contact-section");
const formSection = document.querySelector(".form-section");
const contactSubmitAfter = document.querySelector(".contact-submit-after");
const csaOK = document.querySelector(".csa-ok");

const nameInput = document.getElementById("name");
const subjectInput = document.getElementById("subject"); // Changed from email
const messageInput = document.getElementById("message");
const errorDiv = document.querySelector(".error");
const contactButton = document.getElementById("contact-submit");
const contactLoad = document.querySelector(".contact-load");
const submitText = document.querySelector(".submit-text");

if (csaOK) {
  csaOK.onclick = () => {
    if (contactSubmitAfter) contactSubmitAfter.style.display = "none";
    if (formSection) formSection.style.display = "block";
    if (contactButton) contactButton.classList.remove("loading");
    if (contactLoad) contactLoad.style.display = "none";
    if (submitText) submitText.style.display = "inline-block";
  };
}

// Form Validation
function validateForm(event) {
  event.preventDefault();
  let isValid = true;
  let nameIsValid = true;
  let subjectIsValid = true;
  let messageIsValid = true;

  if (!nameInput || nameInput.value.trim() === "") {
    isValid = false;
    nameIsValid = false;
  }

  if (!subjectInput || subjectInput.value.trim() === "") {
    isValid = false;
    subjectIsValid = false;
  }

  if (!messageInput || messageInput.value.trim() === "") {
    isValid = false;
    messageIsValid = false;
  }

  if (!isValid) {
    if (errorDiv) {
      errorDiv.style.display = "block";
    }
  } else {
    if (errorDiv) errorDiv.style.display = "none";
    
    if (contactButton) contactButton.classList.add("loading");
    if (contactLoad) contactLoad.style.display = "inline-block";
    if (submitText) submitText.style.display = "none";
    
    setTimeout(function () {
      sendMail();
    }, 1000);
  }
}

if (contactForm) {
  contactForm.addEventListener("submit", validateForm);
}

// AJAX Submission to Formspree
async function sendMail() {
  const form = document.getElementById("contact-form");
  if (!form) return;
  
  const formData = new FormData(form);
  const data = {};
  formData.forEach((value, key) => (data[key] = value));

  try {
    const response = await fetch("https://formspree.io/f/xbdqdnnr", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      if (contactButton) contactButton.classList.remove("loading");
      if (contactLoad) contactLoad.style.display = "none";
      if (submitText) submitText.style.display = "inline-block";
      
      if (nameInput) nameInput.value = "";
      if (subjectInput) subjectInput.value = "";
      if (messageInput) messageInput.value = "";

      if (contactSubmitAfter) {
        contactSubmitAfter.style.display = "block";
        if (formSection) formSection.style.display = "none";
      } else {
        alert("Pesan terkirim! Terima kasih telah menghubungi saya.");
      }
    } else {
      const errorData = await response.json();
      throw new Error(errorData.error || "Gagal mengirim pesan.");
    }
  } catch (error) {
    console.error("Submission error:", error);
    alert("Maaf, terjadi kesalahan saat mengirim pesan. Silakan coba lagi nanti.");
    if (contactButton) contactButton.classList.remove("loading");
    if (contactLoad) contactLoad.style.display = "none";
    if (submitText) submitText.style.display = "inline-block";
  }
}

// Certificate Modal Functions
function openCertModal(imageSrc) {
    const modal = document.getElementById("certModal");
    const modalImg = document.getElementById("certImage");
    if (modal && modalImg) {
        modal.style.display = "flex";
        modalImg.src = imageSrc;
    }
}

function closeCertModal() {
    const modal = document.getElementById("certModal");
    if (modal) {
        modal.style.display = "none";
    }
}

window.addEventListener('click', function(event) {
    const modal = document.getElementById("certModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// Certificate Filter Logic
(function () {
    const filterBtns = document.querySelectorAll('.cert-filter-btn');
    const certCards = document.querySelectorAll('.cert-card');

    if (!filterBtns.length || !certCards.length) return;

    filterBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            // Update active button
            filterBtns.forEach(function (b) { b.classList.remove('active'); });
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            certCards.forEach(function (card) {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.classList.remove('hidden');
                    card.style.animation = 'fadeInCard 0.4s ease forwards';
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });
})();

// ============================================================
// Project Image Modal (MyProject page)
// ============================================================
function openProjectModal(imgSrc, title) {
    var modal = document.getElementById('projectModal');
    var img   = document.getElementById('projectModalImg');
    var label = document.getElementById('projectModalTitle');
    if (!modal) return;
    img.src        = imgSrc;
    img.alt        = title;
    label.textContent = title;
    modal.style.display = 'flex';
}

function closeProjectModal() {
    var modal = document.getElementById('projectModal');
    if (modal) modal.style.display = 'none';
}

// ============================================================
// Floating Chatbot (gallery / layanan page)
// ============================================================
(function () {
    var fab     = document.getElementById('chatbotFab');
    var winEl   = document.getElementById('chatbotWindow');
    var badge   = document.getElementById('chatbotBadge');
    var fabIcon = document.getElementById('chatbotFabIcon');
    var msgBox  = document.getElementById('chatbotMessages');
    var qrBox   = document.getElementById('chatbotQuickReplies');
    var inputEl = document.getElementById('chatbotInput');

    if (!fab || !winEl) return; // not on gallery page

    // ── Config ───────────────────────────────────────────────
    var WA_NUMBER  = '6281220463587';            // nomor WA tanpa +
    var EMAIL_ADDR = 'bachrulpanji0038@gmail.com';
    var isOpen     = false;

    // ── State mesin percakapan ───────────────────────────────
    // step: 'main' | 'office' | 'coding' | 'cyber' | 'design'
    //       | 'harga_service' | 'harga_kompleks' | 'harga_final'
    var step         = 'main';
    var hargaService = '';  // simpan pilihan layanan saat tanya harga

    // ── Helpers UI ───────────────────────────────────────────
    function getTime() {
        var d = new Date();
        return ('0' + d.getHours()).slice(-2) + ':' + ('0' + d.getMinutes()).slice(-2);
    }

    /**
     * Tambah pesan ke jendela chat.
     * opts: { wa: bool, email: bool, lines: string[] }
     */
    function addMsg(text, role, opts) {
        opts = opts || {};
        var msg    = document.createElement('div');
        msg.className = 'chat-msg ' + role;

        var bubble = document.createElement('div');
        bubble.className = 'chat-bubble';

        // Multi-baris support: pisah \n jadi <br>
        var lines = text.split('\n');
        lines.forEach(function (line, idx) {
            var span = document.createElement('span');
            span.textContent = line;
            bubble.appendChild(span);
            if (idx < lines.length - 1) bubble.appendChild(document.createElement('br'));
        });

        // Tombol WA
        if (opts.wa) {
            var br = document.createElement('br');
            bubble.appendChild(br);
            var waLink = document.createElement('a');
            waLink.className = 'chat-wa-btn';
            waLink.href      = 'https://wa.me/' + WA_NUMBER +
                '?text=' + encodeURIComponent(
                    'Halo Bachrul Panji! Saya ingin tanya lebih lanjut mengenai layanan' +
                    (hargaService ? ' ' + hargaService : '') + '.'
                );
            waLink.target    = '_blank';
            waLink.rel       = 'noopener noreferrer';
            waLink.innerHTML = '<i class="fab fa-whatsapp"></i> Chat via WhatsApp';
            bubble.appendChild(waLink);
        }

        // Link email
        if (opts.email) {
            var br2 = document.createElement('br');
            bubble.appendChild(br2);
            var emailLink = document.createElement('a');
            emailLink.className = 'chat-wa-btn';
            emailLink.style.background = 'linear-gradient(135deg,#0ea5e9,#6366f1)';
            emailLink.href    = 'mailto:' + EMAIL_ADDR +
                '?subject=' + encodeURIComponent('Konsultasi Layanan' + (hargaService ? ' ' + hargaService : ''));
            emailLink.innerHTML = '<i class="fas fa-envelope"></i> Kirim Email';
            bubble.appendChild(emailLink);
        }

        var time = document.createElement('div');
        time.className   = 'chat-time';
        time.textContent = getTime();

        msg.appendChild(bubble);
        msg.appendChild(time);
        msgBox.appendChild(msg);
        msgBox.scrollTop = msgBox.scrollHeight;
    }

    function typing(delay, cb) {
        var t = document.createElement('div');
        t.className = 'chat-msg bot chat-typing';
        t.id = 'typingIndicator';
        t.innerHTML = '<div class="chat-bubble"><span class="dot"></span><span class="dot"></span><span class="dot"></span></div>';
        msgBox.appendChild(t);
        msgBox.scrollTop = msgBox.scrollHeight;
        setTimeout(function () {
            var el = document.getElementById('typingIndicator');
            if (el) el.remove();
            cb();
        }, delay || 800);
    }

    function setQR(items) {
        qrBox.innerHTML = '';
        items.forEach(function (label) {
            var btn = document.createElement('button');
            btn.className   = 'quick-reply-btn';
            btn.textContent = label;
            btn.onclick = function () {
                qrBox.innerHTML = '';
                addMsg(label, 'user');
                handleStep(label);
            };
            qrBox.appendChild(btn);
        });
    }

    // ── Tampilkan menu utama ─────────────────────────────────
    function showMainMenu() {
        step = 'main';
        hargaService = '';
        typing(700, function () {
            addMsg(
                'Silakan pilih layanan yang ingin kamu ketahui lebih lanjut, atau tanyakan langsung ya 😊',
                'bot'
            );
            setQR([
                '🗂️ Aplikasi Office',
                '💻 Jasa Coding / Web',
                '🛡️ Cyber Security',
                '🎨 Desain UI/UX',
                '💰 Tanya Harga',
                '📩 Konsultasi'
            ]);
        });
    }

    // ── Mesin state ──────────────────────────────────────────
    function handleStep(text) {
        var t = text.trim();

        // ── Kembali ke menu utama ────────────────────────────
        if (t === '🔙 Menu Utama' || t.toLowerCase() === 'menu' || t.toLowerCase() === 'kembali') {
            showMainMenu();
            return;
        }

        // ══════════════════════════════════════════════════════
        // MENU UTAMA
        // ══════════════════════════════════════════════════════
        if (t === '🗂️ Aplikasi Office') {
            step = 'office';
            typing(750, function () {
                addMsg(
                    '📂 Layanan Aplikasi Office\n\n' +
                    'Kami membantu transformasi digital alur kerja administrasi kamu, meliputi:\n' +
                    '• Otomatisasi dokumen berbasis Google App Script\n' +
                    '• Manajemen & pengolahan data (Excel / Google Sheets)\n' +
                    '• Pembuatan laporan otomatis\n' +
                    '• Integrasi tools produktivitas kantor\n\n' +
                    'Cocok untuk: bisnis, instansi, sekolah, atau keperluan pribadi.',
                    'bot'
                );
                setQR(['💰 Tanya Harga Office', '📩 Konsultasi', '🔙 Menu Utama']);
            });
            return;
        }

        if (t === '💻 Jasa Coding / Web') {
            step = 'coding';
            typing(750, function () {
                addMsg(
                    '🌐 Jasa Coding / Pembuatan Website\n\n' +
                    'Kami membangun website profesional sesuai kebutuhanmu:\n' +
                    '• Website Portofolio & CV Digital\n' +
                    '• Landing Page Bisnis (SEO-friendly)\n' +
                    '• E-Commerce (toko online)\n' +
                    '• Undangan Digital\n' +
                    '• Sistem Informasi / Dashboard Admin\n\n' +
                    'Semua dioptimalkan untuk tampilan, kecepatan, dan kemudahan pengguna.',
                    'bot'
                );
                setQR(['💰 Tanya Harga Web', '📩 Konsultasi', '🔙 Menu Utama']);
            });
            return;
        }

        if (t === '🛡️ Cyber Security') {
            step = 'cyber';
            typing(750, function () {
                addMsg(
                    '🔐 Layanan Cyber Security\n\n' +
                    'Lindungi aset digital kamu dengan layanan kami:\n' +
                    '• Security Audit — analisis celah keamanan sistem\n' +
                    '• Penetration Testing — simulasi serangan nyata (ethical hacking)\n' +
                    '• Security Training — edukasi keamanan digital untuk tim\n' +
                    '• Enkripsi & perlindungan data sensitif\n\n' +
                    'Cocok untuk: startup, UMKM, instansi, dan individu.',
                    'bot'
                );
                setQR(['💰 Tanya Harga Cyber', '📩 Konsultasi', '🔙 Menu Utama']);
            });
            return;
        }

        if (t === '🎨 Desain UI/UX') {
            step = 'design';
            typing(750, function () {
                addMsg(
                    '🎨 Layanan Desain UI/UX\n\n' +
                    'Kami merancang tampilan yang estetis sekaligus fungsional:\n' +
                    '• Wireframe & Mockup desain\n' +
                    '• Prototype interaktif (Figma)\n' +
                    '• Desain website portofolio\n' +
                    '• Desain e-commerce & undangan digital\n' +
                    '• Revisi hingga sesuai ekspektasi\n\n' +
                    'User experience adalah prioritas utama kami.',
                    'bot'
                );
                setQR(['💰 Tanya Harga Desain', '📩 Konsultasi', '🔙 Menu Utama']);
            });
            return;
        }

        // ══════════════════════════════════════════════════════
        // TANYA HARGA — langkah 1: tanya kebutuhan
        // ══════════════════════════════════════════════════════
        if (
            t === '💰 Tanya Harga' ||
            t === '💰 Tanya Harga Office' ||
            t === '💰 Tanya Harga Web' ||
            t === '💰 Tanya Harga Cyber' ||
            t === '💰 Tanya Harga Desain'
        ) {
            // Simpan konteks layanan
            if (t.includes('Office'))  hargaService = 'Aplikasi Office';
            else if (t.includes('Web'))    hargaService = 'Jasa Coding / Web';
            else if (t.includes('Cyber'))  hargaService = 'Cyber Security';
            else if (t.includes('Desain')) hargaService = 'Desain UI/UX';
            else hargaService = '';

            step = 'harga_service';
            typing(800, function () {
                addMsg(
                    (hargaService
                        ? 'Oke, untuk layanan ' + hargaService + '! 👍\n\n'
                        : 'Oke! 👍\n\n') +
                    'Sebelum kami berikan estimasi, boleh ceritakan dulu:\n\n' +
                    '👉 Kira-kira layanan apa yang kamu butuhkan?\n' +
                    '(Misal: "bikin website toko online", "audit keamanan server", "desain landing page", dll.)\n\n' +
                    'Atau pilih salah satu kategori di bawah ini:',
                    'bot'
                );
                setQR([
                    '🗂️ Aplikasi Office',
                    '💻 Website / Coding',
                    '🛡️ Cyber Security',
                    '🎨 Desain UI/UX',
                    '🔙 Menu Utama'
                ]);
            });
            return;
        }

        // ══════════════════════════════════════════════════════
        // TANYA HARGA — langkah 2: tanya kompleksitas
        // ══════════════════════════════════════════════════════
        if (step === 'harga_service') {
            // User menjawab bebas atau pilih kategori di langkah ini
            if (t === '🗂️ Aplikasi Office')  hargaService = 'Aplikasi Office';
            else if (t === '💻 Website / Coding') hargaService = 'Jasa Coding / Web';
            else if (t === '🛡️ Cyber Security')   hargaService = 'Cyber Security';
            else if (t === '🎨 Desain UI/UX')      hargaService = 'Desain UI/UX';

            step = 'harga_kompleks';
            typing(900, function () {
                addMsg(
                    'Terima kasih! Satu pertanyaan lagi 🙏\n\n' +
                    'Seberapa kompleks kebutuhannya?\n\n' +
                    '🟢 Sederhana — fitur dasar, 1–3 halaman / modul\n' +
                    '🟡 Menengah — beberapa fitur, integrasi ringan\n' +
                    '🔴 Kompleks — banyak fitur, database, integrasi API\n\n' +
                    'Pilih atau ceritakan langsung:',
                    'bot'
                );
                setQR(['🟢 Sederhana', '🟡 Menengah', '🔴 Kompleks', '🔙 Menu Utama']);
            });
            return;
        }

        // ══════════════════════════════════════════════════════
        // TANYA HARGA — langkah 3: arahkan ke WA untuk nominal
        // ══════════════════════════════════════════════════════
        if (step === 'harga_kompleks') {
            var levelMap = {
                '🟢 Sederhana' : 'sederhana',
                '🟡 Menengah'  : 'menengah',
                '🔴 Kompleks'  : 'kompleks'
            };
            var level = levelMap[t] || 'sesuai kebutuhan kamu';
            step = 'harga_final';

            typing(1000, function () {
                addMsg(
                    'Oke, sudah cukup jelas! 🎯\n\n' +
                    'Untuk layanan ' + (hargaService || 'yang kamu minta') +
                    ' dengan tingkat kompleksitas ' + level + ', nominal harga terbaik akan kami diskusikan langsung.\n\n' +
                    '👇 Hubungi kami via WhatsApp untuk mendapatkan penawaran harga yang tepat:',
                    'bot',
                    { wa: true }
                );
                setQR(['📩 Konsultasi lewat Email', '🔙 Menu Utama']);
            });
            return;
        }

        // ══════════════════════════════════════════════════════
        // KONSULTASI — arahkan ke email
        // ══════════════════════════════════════════════════════
        if (
            t === '📩 Konsultasi' ||
            t === '📩 Konsultasi lewat Email' ||
            t.toLowerCase().includes('konsultasi') ||
            t.toLowerCase().includes('email')
        ) {
            typing(700, function () {
                addMsg(
                    'Untuk konsultasi lebih mendalam, kamu bisa kirim email ke kami. Kami akan merespons dalam 1×24 jam kerja 📬\n\n' +
                    'Ceritakan kebutuhan projekmu, tujuan, dan timeline yang diharapkan ya 😊',
                    'bot',
                    { email: true }
                );
                setQR(['💰 Tanya Harga', '🔙 Menu Utama']);
            });
            return;
        }

        // ══════════════════════════════════════════════════════
        // FALLBACK — belum kami kembangkan
        // ══════════════════════════════════════════════════════
        step = 'main';
        typing(800, function () {
            addMsg(
                'Maaf untuk pelayanan itu belum kami kembangkan. 🙏\n\n' +
                'Tapi jangan khawatir, kamu bisa konsultasikan kebutuhanmu langsung kepada kami!',
                'bot'
            );
            setQR(['📩 Konsultasi', '💰 Tanya Harga', '🔙 Menu Utama']);
        });
    }

    // ── Toggle open / close ──────────────────────────────────
    window.toggleChatbot = function () {
        isOpen = !isOpen;
        winEl.classList.toggle('open', isOpen);

        if (isOpen) {
            badge.classList.add('hidden');
            fabIcon.className = 'fas fa-times chatbot-fab-icon';

            // Sapa hanya sekali
            if (msgBox.children.length === 0) {
                step = 'main';
                typing(600, function () {
                    addMsg(
                        'Halo! 👋 Saya Panji Assistant.\n\n' +
                        'Saya siap membantu kamu mengenal layanan jasa Bachrul Panji. Pilih topik di bawah atau ketik pertanyaanmu ya!',
                        'bot'
                    );
                    setQR([
                        '🗂️ Aplikasi Office',
                        '💻 Jasa Coding / Web',
                        '🛡️ Cyber Security',
                        '🎨 Desain UI/UX',
                        '💰 Tanya Harga',
                        '📩 Konsultasi'
                    ]);
                });
            }
            if (inputEl) setTimeout(function () { inputEl.focus(); }, 350);
        } else {
            fabIcon.className = 'fas fa-comment-dots chatbot-fab-icon';
        }
    };

    // ── Kirim pesan dari input teks ──────────────────────────
    window.sendChatMessage = function () {
        if (!inputEl) return;
        var text = inputEl.value.trim();
        if (!text) return;
        inputEl.value = '';
        qrBox.innerHTML = '';
        addMsg(text, 'user');
        handleStep(text);
    };

})();

// ============================================================
// Dark / Light Mode Toggle — injected into navbar .main
// ============================================================
(function () {
    var STORAGE_KEY = 'bpg-theme';

    // Buat tombol toggle
    var btn = document.createElement('button');
    btn.className    = 'theme-toggle-btn';
    btn.id           = 'themeToggleBtn';
    btn.setAttribute('aria-label', 'Toggle dark/light mode');

    // Sisipkan ke dalam .header .main, SETELAH Contact Me (elemen terakhir sebelum menu-icon)
    var headerMain = document.querySelector('.header .main');
    if (headerMain) {
        // Cari menu-icon-container, sisipkan btn sebelum dia
        var menuIconContainer = headerMain.querySelector('.menu-icon-container');
        if (menuIconContainer) {
            headerMain.insertBefore(btn, menuIconContainer);
        } else {
            headerMain.appendChild(btn);
        }
    } else {
        document.body.appendChild(btn);
    }

    function applyTheme(theme) {
        if (theme === 'light') {
            document.body.classList.add('light-mode');
            btn.innerHTML = '<i class="fas fa-moon"></i>';
            btn.title     = 'Dark Mode';
        } else {
            document.body.classList.remove('light-mode');
            btn.innerHTML = '<i class="fas fa-sun"></i>';
            btn.title     = 'Light Mode';
        }
    }

    // Baca preferensi tersimpan, fallback ke system preference
    var saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) {
        saved = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    }
    applyTheme(saved);

    btn.addEventListener('click', function () {
        var current = document.body.classList.contains('light-mode') ? 'light' : 'dark';
        var next    = current === 'dark' ? 'light' : 'dark';
        localStorage.setItem(STORAGE_KEY, next);
        applyTheme(next);
    });
})();
