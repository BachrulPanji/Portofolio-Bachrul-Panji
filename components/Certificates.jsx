// 'use client' : komponen ini punya interaksi (filter & modal) yang butuh state React.
'use client';

import { useMemo, useState } from 'react';
import { CERTS, CERT_FILTERS } from '@/lib/data'; // data sertifikat & daftar tombol filter
import { Icon } from '@/lib/icons';
import Reveal from '@/components/Reveal';

// Angka-angka statistik yang ditampilkan di atas grid sertifikat.
const STATS_LIST = [
  { num: '13+', label: 'Certificates' },
  { num: '8+', label: 'Institutions' },
  { num: '5', label: 'Fields' },
  { num: '2', label: 'International' }
];

export default function Certificates() {
  // filter : kategori yang sedang dipilih (default 'all' = tampilkan semua)
  const [filter, setFilter] = useState('all');
  // modal  : sertifikat yang sedang dibuka besar (null = modal tertutup)
  const [modal, setModal] = useState(null);

  // useMemo = menghitung hasil yang bergantung pada `filter`.
  // Hasil hanya dihitung ulang saat `filter` berubah (lebih efisien).
  const filtered = useMemo(
    () => (filter === 'all' ? CERTS : CERTS.filter((c) => c.tag === filter)),
    [filter]
  );

  return (
    <>
      <div className="section-head">
        <Reveal><span className="kicker">Achievements</span></Reveal>
        <Reveal delay={80}>
          <h2>My <em>Certificates</em></h2>
        </Reveal>
        <Reveal delay={140}><div className="head-line" /></Reveal>
      </div>

      {/* Baris statistik angka */}
      <Reveal className="cert-stats">
        {STATS_LIST.map((s) => (
          <div className="cert-stat" key={s.label}>
            <div className="num">{s.num}</div>
            <div className="lbl">{s.label}</div>
          </div>
        ))}
      </Reveal>

      {/* Tombol filter. Kita saat aktif diberi class 'active' (menyala). 
          Klik = setFilter(kategori). */}
      <Reveal className="cert-filters">
        {CERT_FILTERS.map((f) => (
          <button
            key={f.key}
            className={`filter-btn ${filter === f.key ? 'active' : ''}`}
            onClick={() => setFilter(f.key)}
          >
            {f.label}
          </button>
        ))}
      </Reveal>

      {/* Grid sertifikat — hanya menampilkan hasil yang sudah difilter */}
      <div className="cert-grid">
        {filtered.map((c, i) => (
          <Reveal key={c.title} delay={(i % 3) * 80} className="glass-card cert-card">
            {/* Klik pada gambar -> buka modal (setModal(c)) */}
            <div className="cert-thumb" onClick={() => setModal(c)}>
              <img src={c.img} alt={c.title} loading="lazy" />
              <span className="view-hint">
                <Icon name="search-plus" size={26} />
                View Certificate
              </span>
            </div>
            <div className="cert-body">
              <span className="cert-tag">
                <Icon name={c.tagIcon} size={11} /> {c.tagLabel}
              </span>
              <h3>{c.title}</h3>
              <div className="cert-issuer">
                <Icon name="building" size={12} /> {c.issuer}
              </div>
              <p className="cert-desc">{c.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* MODAL = tampilan besar di tengah layar.
          Jika `modal` tidak null, tampilkan gambar sertifikat tsb.
          Klik area gelap = setModal(null) = menutup. */}
      {modal && (
        <div className="modal" onClick={() => setModal(null)}>
          <div className="modal-inner">
            <button className="modal-close" onClick={() => setModal(null)} aria-label="Close">✕</button>
            <img src={modal.img} alt={modal.title} />
          </div>
        </div>
      )}
    </>
  );
}