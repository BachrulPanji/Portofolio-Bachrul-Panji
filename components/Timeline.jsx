'use client';

import { TIMELINE_EVENTS } from '@/lib/data';
import { Icon } from '@/lib/icons';
import Reveal from '@/components/Reveal';

export default function Timeline() {
  return (
    <>
      <div className="section-head">
        <Reveal><span className="kicker">My Journey</span></Reveal>
        <Reveal delay={80}>
          <h2>Perjalanan <em>Belajar</em></h2>
        </Reveal>
        <Reveal delay={140}><div className="head-line" /></Reveal>
        <Reveal delay={200}>
          <p>Perjalanan Bachrul Panji dalam mempelajari dunia pemrograman dan keamanan siber dari awal hingga sekarang.</p>
        </Reveal>
      </div>

      <div className="timeline">
        {TIMELINE_EVENTS.map((e, i) => (
          <Reveal key={i} className="timeline-item" delay={i * 60}>
            <div
              className="timeline-dot"
              style={{ background: e.color, boxShadow: `0 0 20px ${e.color}99` }}
            >
              <Icon name={e.icon} size={13} />
            </div>
            <div className="timeline-card">
              <div className="timeline-year" style={{ color: e.color }}>{e.year}</div>
              <h3>{e.title}</h3>
              <div className="timeline-subtitle">{e.subtitle}</div>
              <p>{e.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </>
  );
}