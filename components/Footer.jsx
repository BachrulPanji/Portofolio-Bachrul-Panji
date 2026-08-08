'use client';

import { SOCIALS } from '@/lib/data';
import { Icon } from '@/lib/icons';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="left">© {new Date().getFullYear()} • BPG • All Rights Reserved</div>
      <div className="f-socials">
        {SOCIALS.map((s) => (
          <a key={s.name} href={s.url} target="_blank" rel="noreferrer" aria-label={s.name}>
            <Icon name={s.icon} size={16} />
          </a>
        ))}
      </div>
    </footer>
  );
}