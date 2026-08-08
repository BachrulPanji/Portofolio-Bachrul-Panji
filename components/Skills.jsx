// 'use client' : memakai useState & useEffect (butuh browser).
'use client';

import { useEffect, useState } from 'react';
import { SKILL_GROUPS } from '@/lib/data'; // data skill (nama, level, label, detail)
import { FiCode } from 'react-icons/fi';
import Reveal from '@/components/Reveal';

// Komponen kecil utk 1 kelompok skill (misal "Technical Skills").
// Props: group (data), animate (boleh mulai animasi?), delay (tunda muncul)
function SkillGroup({ group, animate, delay }) {
  return (
    <Reveal delay={delay} className="skills-col">
      <div className="glass-card" style={{ padding: '26px' }}>
        {/* Judul grup skill + garis gradien */}
        <h3 className="skills-title">
          <FiCode size={20} style={{ color: 'var(--accent)' }} /> {group.title}
          <span className="line" />
        </h3>
        {/* .map() membuat satu baris skill utk setiap item di data */}
        {group.skills.map((sk) => (
          <div className="skill-item" key={sk.name}>
            <div className="skill-top">
              <span className="skill-name">
                {sk.name}
                <small>{sk.detail}</small>
              </span>
              <span className="skill-level">{sk.label}</span>
            </div>
            {/* Bar pengisian skill. Lebarnya = level (%). 
                Awalnya 0, lalu saat `animate` bernilai true, CSS mentransisikan
                lebar ke persentase level sehingga terlihat mengisi perlahan. */}
            <div className="skill-bar">
              <div
                className="skill-fill"
                style={animate ? { width: `${sk.level}%` } : {}}
              />
            </div>
          </div>
        ))}
      </div>
    </Reveal>
  );
}

export default function Skills() {
  // animate = kapan bar skill boleh mulai mengisi (baru setelah section terlihat)
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const el = document.getElementById('skills'); // cari elemen section #skills
    if (!el) return;

    // IntersectionObserver memantau apakah section #skills sudah terlihat.
    // Jika ya -> setAnimate(true) -> semua bar mengisi dari kiri.
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimate(true);
            io.disconnect(); // sudah mulai, tak perlu memantau lagi
          }
        });
      },
      { threshold: 0.25 } // 25% section sudah terlihat baru mulai animasi
    );
    io.observe(el);
    return () => io.disconnect(); // bersihkan observer saat komponen dihapus
  }, []);

  return (
    <>
      {/* Bagian kepala section (judul + deskripsi) */}
      <div className="section-head">
        <Reveal><span className="kicker">My Expertise</span></Reveal>
        <Reveal delay={80}>
          <h2>Keterampilan & <em>Teknologi</em></h2>
        </Reveal>
        <Reveal delay={140}><div className="head-line" /></Reveal>
        <Reveal delay={200}>
          <p>Kemampuan teknis dan profesional yang saya kuasai untuk menghadirkan solusi digital yang aman dan modern.</p>
        </Reveal>
      </div>
      {/* Render setiap kelompok skill dari data */}
      <div className="skills-grid">
        {SKILL_GROUPS.map((g, i) => (
          <SkillGroup key={g.title} group={g} animate={animate} delay={i * 120} />
        ))}
      </div>
    </>
  );
}