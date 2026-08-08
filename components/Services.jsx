'use client';

import { SERVICES } from '@/lib/data';
import { Icon } from '@/lib/icons';
import Reveal from '@/components/Reveal';

export default function Services() {
  return (
    <>
      <div className="section-head">
        <Reveal><span className="kicker">What I Offer</span></Reveal>
        <Reveal delay={80}>
          <h2>Layanan <em>Jasa</em></h2>
        </Reveal>
        <Reveal delay={140}><div className="head-line" /></Reveal>
        <Reveal delay={200}>
          <p>Transformasi digital end-to-end untuk mengakselerasi pertumbuhan bisnis Anda.</p>
        </Reveal>
      </div>

      <div className="services-grid">
        {SERVICES.map((s, i) => (
          <Reveal key={s.title} delay={(i % 4) * 100} className="glass-card service-card">
            <div className="service-icon"><Icon name={s.icon} /></div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
            <ul className="service-list">
              {s.items.map((it) => (
                <li key={it}><Icon name="check" size={13} /> {it}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </>
  );
}