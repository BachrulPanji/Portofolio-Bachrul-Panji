'use client';

import { useState } from 'react';
import { PROJECTS } from '@/lib/data';
import { Icon } from '@/lib/icons';
import Reveal from '@/components/Reveal';

export default function Projects() {
  const [modal, setModal] = useState(null);

  return (
    <>
      <div className="section-head">
        <Reveal><span className="kicker">My Works</span></Reveal>
        <Reveal delay={80}>
          <h2>Project <em>Pilihan</em></h2>
        </Reveal>
        <Reveal delay={140}><div className="head-line" /></Reveal>
        <Reveal delay={200}>
          <p>Eksplorasi portofolio inovatif yang mengintegrasikan desain web modern, rekayasa perangkat lunak andal, dan praktik keamanan siber terdepan.</p>
        </Reveal>
      </div>

      <div className="projects-grid">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.title} delay={(i % 3) * 100} className="glass-card project-card">
            <div className="project-thumb">
              <img src={p.img} alt={p.title} loading="lazy" />
              <div className="thumb-overlay">
                <button className="ov-btn" onClick={() => setModal(p)} aria-label="Preview"><Icon name="eye" /></button>
                <a className="ov-btn" href={p.github} target="_blank" rel="noreferrer" aria-label="Source code"><Icon name="github" /></a>
              </div>
            </div>
            <div className="project-body">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="project-meta">
                <span className="badge">{p.badge}</span>
                <a href={p.github} target="_blank" rel="noreferrer">
                  Source <Icon name="github" size={13} />
                </a>
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