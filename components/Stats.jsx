'use client';

import { STATS } from '@/lib/data';
import Reveal from '@/components/Reveal';

export default function Stats() {
  return (
    <section id="stats">
      <div className="stats-bar">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 100} className="stat-card">
            <div className="stat-num">{s.value}</div>
            <div className="stat-label">{s.label}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}