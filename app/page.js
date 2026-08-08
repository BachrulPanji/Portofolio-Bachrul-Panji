// 'use client' : karena halaman ini mengelola state tema & menu (butuh browser/useState).
'use client';

import { useState, useEffect } from 'react';
// Import setiap "section" sebagai komponen terpisah agar kode rapi & mudah diurus.
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Services from '@/components/Services';
import Career from '@/components/Career';
import Hobbies from '@/components/Hobbies';
import Timeline from '@/components/Timeline';
import Certificates from '@/components/Certificates';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Page() {
  // isDark  : tema yang dipakai user. Default = dark (true).
  const [isDark, setIsDark] = useState(true);
  // menuOpen: apakah menu mobile sedang terbuka.
  const [menuOpen, setMenuOpen] = useState(false);

  // Saat halaman pertama dimuat, baca pilihan tema user dari localStorage
  // (penyimpanan browser yang bertahan walau halaman di-refresh).
  useEffect(() => {
    const saved = localStorage.getItem('bpg-theme');
    if (saved === 'light') {
      setIsDark(false);
    }
  }, []); // [] = hanya dijalankan sekali saat komponen di-mount

  // Setiap isDark berubah, tambah/hapus class 'light-mode' di <body>.
  // Class tsb dipakai CSS (di globals.css) untuk mengubah warna sesuai tema.
  useEffect(() => {
    document.body.classList.toggle('light-mode', !isDark);
  }, [isDark]);

  // Fungsi untuk membalik tema (dipanggil tombol moon/sun pada Header).
  const toggleTheme = () => {
    const next = !isDark;   // balik nilainya (dark -> light, dst)
    setIsDark(next);        // simpan supaya tampilan ikut berubah
    localStorage.setItem('bpg-theme', next ? 'dark' : 'light'); // ingat pilhan user
  };

  // Komposisi halaman: Header di atas, lalu SECTION-SECTION, lalu Footer.
  // Setiap <section id="..."> menyediakan "target" untuk navigasi anchor (#skills dll).
  return (
    <>
      {/* Header menerima props state & fungsi agar Header bisa mengubah tema/menu */}
      <Header isDark={isDark} menuOpen={menuOpen} onToggleTheme={toggleTheme} setMenuOpen={setMenuOpen} />

      {/* Overlay gelap di belakang menu mobile; diklik = menu tertutup */}
      <div className={`nav-overlay ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(false)} />

      <main className="page">
        <section id="home" className="section">
          <Hero />
        </section>
        <Stats />
        <section id="skills" className="section">
          <Skills />
        </section>
        <section id="projects" className="section">
          <Projects />
        </section>
        <section id="services" className="section">
          <Services />
        </section>
        <section id="career" className="section">
          <Career />
        </section>
        <section id="hobbies" className="section">
          <Hobbies />
        </section>
        <section id="timeline" className="section">
          <Timeline />
        </section>
        <section id="certificates" className="section">
          <Certificates />
        </section>
        <section id="contact" className="section">
          <Contact />
        </section>
      </main>

      <Footer />
    </>
  );
}