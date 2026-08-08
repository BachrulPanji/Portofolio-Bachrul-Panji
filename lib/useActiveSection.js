// 'use client' => hook ini butuh browser (window, scroll).
// 'use' di awal nama = React CUSTOM HOOK. Hook biasa dipanggil komponen lain.
'use client';

import { useEffect, useState } from 'react';

// Fungsi ini menentukan section MANA yang sedang "aktif" saat pengguna scroll.
// Kegunaan: menandai menu navigasi yang sedang terbuka di header.
export function useActiveSection(sectionIds) {
  // State `active` menyimpan id section yang aktif. Awalnya section pertama.
  const [active, setActive] = useState(sectionIds[0] || 'home');

  useEffect(() => {
    const onScroll = () => {
      // 1) Jika sudah scroll lebih dari 10px -> tambah class 'scrolled' ke header
      //    (agar header menjadi solid/glass, lihat CSS). Jika balik atas -> dihapus.
      const header = document.getElementById('header');
      if (header) {
        header.classList.toggle('scrolled', window.scrollY > 10);
      }

      // 2) Cari section mana yang paling dekat dengan atas layar.
      const offset = window.innerHeight * 0.3; // garis "mayang" di 30% tinggi layar
      let current = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= offset) {
          current = id; // section ini yang paling atas melewati garis
        }
      }
      setActive(current); // update state -> Header menandai menu yang aktif
    };

    onScroll(); // jalankan sekali di awal
    window.addEventListener('scroll', onScroll, { passive: true }); // perbarui saat scroll
    return () => window.removeEventListener('scroll', onScroll); // bersihkan saat komponen dihapus
  }, [sectionIds]);

  return active; // komponen pemakai menerima nilai id section aktif
}