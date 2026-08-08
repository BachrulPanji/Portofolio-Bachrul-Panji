// 'use client' : menandakan komponen ini BERJALAN DI BROWSER (bukan di server).
// Karena komponen ini pakai state, useEffect, dan event scroll yang butuh browser.
'use client';

// React Hook yang kita pakai:
//   useState  -> menyimpan data yang bisa berubah & memicu re-render
//   useEffect -> menjalankan kode otomatis saat komponen "mounted"
//   useRef    -> menyimpan nilai tanpa memicu re-render (untuk counter typing)
import { useEffect, useRef, useState } from 'react';
import { Icon } from '@/lib/icons';                          // komponen ikon sendiri
import { SOCIALS, TYPE_STRINGS } from '@/lib/data';           // data sosial & kata untuk efek ketik
import { FaDownload, FaShieldAlt, FaCode } from 'react-icons/fa';
import Reveal from '@/components/Reveal';                     // animasi muncul saat discroll

export default function Hero() {
  // typed: teks yang sedang ditampilkan (misal "C", "Cy", "Cyb"...)
  const [typed, setTyped] = useState('');
  // deleting: true = sedang MENGHAPUS huruf, false = sedang MENGETIK huruf
  const [deleting, setDeleting] = useState(false);
  // useRef menyimpan nilai TANPA memicu re-render — cocok utk counter plain angka
  const wordIndex = useRef(0);   // kata ke berapa yang sedang diketik
  const charIndex = useRef(0);   // huruf ke berapa dalam kata tersebut

  // useEffect menjalankan logic efek mengetik. Dijalankan ulang setiap ada
  // perubahan pada `typed` atau `deleting` (ada di array depedensi `[typed, deleting]`).
  useEffect(() => {
    // Ambil kata saat ini secara berputar (modulo agar kembali ke awal setelah habis)
    const current = TYPE_STRINGS[wordIndex.current % TYPE_STRINGS.length];

    // JIKA sudah mengetik penuh & belum mulai menghapus => jeda 1.1 detik dulu
    if (!deleting && charIndex.current === current.length) {
      const pause = setTimeout(() => setDeleting(true), 1100);
      return () => clearTimeout(pause); // bersihkan timer saat komponen berubah (cleanup)
    }

    // Kecepatan ketik: menghapus lebih cepat (40ms) daripada mengetik (75ms)
    const delay = deleting ? 40 : 75;
    const tick = setTimeout(() => {
      if (!deleting) {
        charIndex.current += 1;   // tambah 1 huruf
      } else {
        charIndex.current -= 1;   // kurangi 1 huruf
        if (charIndex.current === 0) {
          setDeleting(false);     // sudah habis dihapus -> mulai ketik ulang
          wordIndex.current += 1; // pindah ke kata berikutnya
        }
      }
      // potong kata sesuai jumlah huruf: "Ethical Hacki[..]" dst
      setTyped(current.slice(0, charIndex.current));
    }, delay);

    return () => clearTimeout(tick); // besihkan setTimeout lama agar tidak menumpuk
  }, [typed, deleting]);

  return (
    <div className="hero">
      {/* Kolom kiri: teks perkenalan */}
      <div className="hero-copy">
        {/* Konponen <Reveal> membungkus elemen agar muncul dengan animasi saat discroll */}
        <Reveal>
          <span className="hero-tag">
            <span className="pulse-dot" />
            Open to Work & Collaboration
          </span>
        </Reveal>
        {/* delay={100} -> animasi muncul 100ms lebih lambat (efek berurutan) */}
        <Reveal delay={100}>
          <h1>
            Hallo, Saya <em>Bachrul Panji</em>
          </h1>
        </Reveal>
        <Reveal delay={180}>
          <div className="typing-line">
            <span className="typed">{typed}</span>
            <span className="typed-cursor">|</span> {/* kursor mengetik */}
          </div>
        </Reveal>
        <Reveal delay={260}>
          <p className="lead">
            Front-End Web Developer dengan hasrat mendalam untuk <strong>Cyber Security</strong> dan{' '}
            <strong>Ethical Hacking</strong>. Menggabungkan kreativitas, keterampilan teknis, dan fokus
            keamanan untuk menghadirkan antarmuka web yang responsif, aman, dan menawan.
          </p>
        </Reveal>
        <Reveal delay={340}>
          <div className="btn-row">
            {/* Tombol unduh CV */}
            <a className="btn btn-primary" href="/cv-bachrul-panji.pdf" download>
              <FaDownload /> Unduh CV
            </a>
            {/* Tombol yang mengarah ke section contact (pakai id HTML #contact) */}
            <a className="btn btn-ghost" href="#contact">
              Contact Me <Icon name="arrow-right" size={14} />
            </a>
          </div>
        </Reveal>
        <Reveal delay={420}>
          {/* Membuat daftar ikon sosial media lewat .map() dari array SOCIALS */}
          <div className="hero-socials">
            {SOCIALS.map((s) => (
              <a key={s.name} className="social-btn" href={s.url} target="_blank" rel="noreferrer" aria-label={s.name}>
                <Icon name={s.icon} />
              </a>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Kolom kanan: foto + badge */}
      <Reveal delay={200} className="hero-visual">
        <div className="hero-img-wrap">
          <img src="/assets/Bagol28.png" alt="Bachrul Panji" />
        </div>
        {/* Badge kecil yang melayang-layang (animasi di CSS) */}
        <div className="hero-badge b1">
          <span className="badge-icon"><FaShieldAlt /></span>
          <span>
            <small>Bidang Keahlian</small>
            <strong>Cyber Security</strong>
          </span>
        </div>
        <div className="hero-badge b2">
          <span className="badge-icon"><FaCode /></span>
          <span>
            <small>Front-End Web</small>
            <strong>Developer</strong>
          </span>
        </div>
      </Reveal>
    </div>
  );
}