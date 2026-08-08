'use client';

import { useState } from 'react';
import { HOBBIES } from '@/lib/data';
import { Icon } from '@/lib/icons';
import Reveal from '@/components/Reveal';

export default function Hobbies() {
  const [modal, setModal] = useState(null);

  return (
    <>
      <div className="section-head">
        <Reveal><span className="kicker">Hobbies & Activities</span></Reveal>
        <Reveal delay={80}>
          <h2>Hobi & <em>Sertifikasi</em></h2>
        </Reveal>
        <Reveal delay={140}><div className="head-line" /></Reveal>
        <Reveal delay={200}>
          <p>Kumpulan hobi, sertifikasi, dan pencapaian profesional dalam pengembangan TI dan keamanan siber.</p>
        </Reveal>
      </div>

      <div className="projects-grid hobbies-grid">
        {HOBBIES.map((h, i) => (
          <Reveal key={h.title} delay={(i % 3) * 100} className="glass-card project-card">
            <div className="project-thumb">
              <img src={h.img} alt={h.title} loading="lazy" />
              <div className="thumb-overlay">
                <button className="ov-btn" onClick={() => setModal(h)} aria-label="View"><Icon name="search-plus" /></button>
              </div>
            </div>
            <div className="project-body">
              <h3>{h.title}</h3>
              <p>{h.desc}</p>
              <div className="project-meta">
                <span className="badge">{h.badge}</span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

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