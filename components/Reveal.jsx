// 'use client' => komponen ini memakai useEffect & IntersectionObserver (khusus browser).
'use client';

import { useEffect, useRef } from 'react';

// Komponen "pembungkus" (wrapper). Semua yang di dalamnya akan muncul dengan animasi
// fade/slide saat pengguna menggulir dan elemen mulai terlihat (intersecting).
// Cara pakai: <Reveal delay={100}> ...konten... </Reveal>
export default function Reveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null); // ref menunjuk ke elemen <div> di bawah, untuk diobservasi

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // IntersectionObserver = "pemantau": memanggil callback saat elemen masuk layar.
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Tambahkan class 'in-view' -> CSS akan memicu transisi (opacity/translate)
            el.classList.add('in-view');
            io.unobserve(el); // berhenti memantau, biarkan animasi terjadi sekali saja
          }
        });
      },
      { threshold: 0.12 } // trigger saat 12% bagian elemen sudah terlihat
    );

    io.observe(el); // mulai memantau elemen
    return () => io.disconnect(); // bersihkan observer saat komponen dihapus
  }, []); // [] = hanya dijalankan sekali saat komponen pertama kali di-mount

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={{ transitionDelay: `${delay}ms` }} // tunda animasi agar muncul berurutan
    >
      {children}
    </div>
  );
}