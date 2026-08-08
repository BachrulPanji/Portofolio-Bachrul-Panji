// 'use client' => komponen ini butuh browser (pakai event scroll & window).
"use client";

import { useActiveSection } from "@/lib/useActiveSection"; // hook utk tahu section mana yang aktif di scroll
import { Icon } from "@/lib/icons";
import { NAV_ITEMS } from "@/lib/data"; // daftar menu navigasi
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";

// Komponen Header menerima props (variabel) dari page.js:
//   isDark        : true = dark mode, false = light mode
//   menuOpen      : true = menu mobile terbuka
//   onToggleTheme : fungsi untuk mengganti tema (dipanggil saat tombol diklik)
//   setMenuOpen   : fungsi untuk membuka/menutup menu mobile
export default function Header({ isDark, menuOpen, onToggleTheme, setMenuOpen }) {
  // active = id section yang sedang terlihat di layar (misal 'home', 'skills', dst)
  const active = useActiveSection(NAV_ITEMS.map((n) => n.id));

  return (
    // className `scrolled` ditambahkan jika pengguna sudah scroll > 10px (header jadi solid)
    <header className={`header ${typeof window !== "undefined" && window.scrollY > 10 ? "scrolled" : ""}`} id="header">
      {/* Logo - klik menuju ke bagian paling atas (#home) */}
      <a href="#home" className="logo" onClick={() => setMenuOpen(false)}>
        <span>
          Bachrul&nbsp;<b>Panji Gumilang</b>
        </span>
      </a>

      {/* Navigasi utama. class 'open' = menu mobile ditampilkan (geser dari kanan) */}
      <nav className={`navbar ${menuOpen ? "open" : ""}`}>
        {NAV_ITEMS.map((item) => (
          <a
            key={item.id} // key wajib untuk list di React
            href={`#${item.id}`} // anchor link ke section dengan id tsb
            className={active === item.id ? "active" : ""} // highlight menu yang aktif
            onClick={() => setMenuOpen(false)} // klik menu = menu mobile tertutup
          >
            <Icon name={item.icon} size={14} />
            {item.label}
          </a>
        ))}
      </nav>

      {/* Tombol aksi di kanan */}
      <div className="main">
        {/* Tombol ganti tema. Ikon bulan = dark, matahari = light */}
        <button className="icon-btn" onClick={onToggleTheme} aria-label="Toggle theme">
          {isDark ? <FaMoon /> : <FaSun />}
        </button>
        {/* Tombol hamburger (hanya muncul di layar kecil). Ikon berubah jadi X saat menu terbuka */}
        <button className="icon-btn menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
}
