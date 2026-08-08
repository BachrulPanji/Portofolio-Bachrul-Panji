'use client';

import { CAREER } from '@/lib/data';
import { Icon } from '@/lib/icons';
import Reveal from '@/components/Reveal';

function GoalCard({ title, icon, items, delay }) {
  return (
    <Reveal delay={delay} className="career-card">
      <div className="glass-card" style={{ padding: '30px 28px', height: '100%' }}>
        <h3>
          <span className="c-icon"><Icon name={icon} /></span> {title}
        </h3>
        <ul className="goal-list">
          {items.map((g, i) => (
            <li key={i}>
              <span className="g-dot"><Icon name="check" size={11} /></span> {g}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}

export default function Career() {
  return (
    <>
      <div className="section-head">
        <Reveal><span className="kicker">About My Career</span></Reveal>
        <Reveal delay={80}>
          <h2>Ringkasan & <em>Tujuan Karir</em></h2>
        </Reveal>
        <Reveal delay={140}><div className="head-line" /></Reveal>
      </div>

      <Reveal className="career-summary" style={{ maxWidth: '820px', margin: '0 auto 28px' }}>
        <div className="glass-card" style={{ padding: '26px 28px' }}>
          <p style={{ color: 'var(--text-dim)' }}>{CAREER.summary}</p>
        </div>
      </Reveal>

      <div className="career-grid">
        <GoalCard icon="road" title="Tujuan Jangka Pendek" items={CAREER.shortTerm} delay={0} />
        <GoalCard icon="rocket" title="Tujuan Jangka Panjang" items={CAREER.longTerm} delay={140} />
      </div>
    </>
  );
}