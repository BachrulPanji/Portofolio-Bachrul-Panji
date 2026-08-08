// 'use client' : form berinteraksi (menyimpan input & mengirim ke server) => butuh browser.
'use client';

import { useState } from 'react';
import { Icon } from '@/lib/icons';
import { SOCIALS } from '@/lib/data';
import { MdEmail, MdLocationOn } from 'react-icons/md';
import { FaInstagram } from 'react-icons/fa';
import Reveal from '@/components/Reveal';

// Data kontak yang ditampilkan di panel kiri (ikon sudah berupa elemen JSX).
const INFO = [
  { icon: <MdEmail />, label: 'Email', value: 'bachrulpanji0038@gmail.com' },
  { icon: <FaInstagram />, label: 'Instagram', value: '@bagol28' },
  { icon: <MdLocationOn />, label: 'Lokasi', value: 'Subang, Jawa Barat' }
];

export default function Contact() {
  // State untuk form & status pengiriman:
  const [form, setForm] = useState({ name: '', subject: '', message: '' }); // isi form
  const [error, setError] = useState('');   // pesan error (kosong = tidak ada)
  const [loading, setLoading] = useState(false); // true = sedang mengirim
  const [success, setSuccess] = useState(false); // true = pesan berhasil terkirim

  // Fungsi update: mengembalikan handler onChange.
  // Contoh: onChange={update('name')} => mengubah form.name sesuai yang diketik.
  const update = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  // Fungsi submit: dipanggil saat form disubmit (tombol "Kirim Pesan").
  // `async/await` dipakai karena fetch (kirim ke internet) bersifat asinkron.
  const submit = async (e) => {
    e.preventDefault(); // cegah halaman reload otomatis dari perilaku default form

    // Validasi sederhana: pastikan semua kolom terisi.
    if (!form.name || !form.subject || !form.message) {
      setError('Harap isi semua kolom');
      return; // berhenti, jangan kirim
    }

    setError('');      // bersihkan error
    setLoading(true);  // tampilkan "Mengirim..."
    try {
      // Kirim data form ke Formspree (layanan gratis menangkap pesan form ke email).
      const res = await fetch('https://formspree.io/f/xbdqdnnr', {
        method: 'POST',
        body: JSON.stringify(form), // ubah data jadi format JSON
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' }
      });
      if (!res.ok) throw new Error('Failed'); // jika respons bukan sukses -> lempar error
      setSuccess(true); // sukses -> tampilkan kotak "Berhasil Terkirim"
    } catch {
      setError('Gagal mengirim pesan. Silakan coba lagi.'); // ada masalah jaringan/dll
    } finally {
      setLoading(false); // selalu matikan loading, baik sukses maupun gagal
    }
  };

  // Reset form kembali ke kondisi awal (dipakai tombol "OK" setelah sukses).
  const reset = () => {
    setForm({ name: '', subject: '', message: '' });
    setSuccess(false);
    setError('');
  };

  return (
    <>
      <div className="section-head">
        <Reveal><span className="kicker">Get In Touch</span></Reveal>
        <Reveal delay={80}>
          <h2>Hubungi <em>Saya</em></h2>
        </Reveal>
        <Reveal delay={140}><div className="head-line" /></Reveal>
        <Reveal delay={200}>
          <p>Silakan hubungi saya jika ingin berkolaborasi, berkonsultasi, atau sekadar bertanya.</p>
        </Reveal>
      </div>

      <div className="contact-grid">
        {/* Panel kiri: info kontak + ikon sosial */}
        <Reveal className="glass-card contact-info">
          {INFO.map((row) => (
            <div className="info-row" key={row.label}>
              <span className="i-box">{row.icon}</span>
              <span>
                <span>{row.label}</span>
                <p>{row.value}</p>
              </span>
            </div>
          ))}
          <div className="socials-row">
            {SOCIALS.map((s) => (
              <a key={s.name} className="social-btn" href={s.url} target="_blank" rel="noreferrer" aria-label={s.name}>
                <Icon name={s.icon} />
              </a>
            ))}
          </div>
        </Reveal>

        {/* Panel kanan: form. 
            Ternary: jika !success -> tampilkan form. Jika success -> tampilkan ucapan terima kasih. */}
        <Reveal delay={120} className="glass-card contact-form">
          {!success ? (
            <form onSubmit={submit}>
              <div className="form-group">
                <label htmlFor="name">Nama</label>
                <input id="name" type="text" value={form.name} onChange={update('name')} placeholder="Masukkan nama Anda" required />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subjek</label>
                <input id="subject" type="text" value={form.subject} onChange={update('subject')} placeholder="Masukkan subjek pesan" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Pesan</label>
                <textarea id="message" rows="5" value={form.message} onChange={update('message')} placeholder="Tulis pesan Anda di sini..." required />
              </div>
              {error && <div className="form-error">{error}</div>}
              <button className="btn btn-primary" type="submit" disabled={loading} style={{ width: '100%', justifyContent: 'center' }}>
                {loading ? 'Mengirim...' : 'Kirim Pesan'}
              </button>
            </form>
          ) : (
            <div className="success-box">
              <div className="s-icon">✓</div>
              <h3>Berhasil Terkirim!</h3>
              <p>Terima kasih atas pesan Anda. Saya akan segera menghubungi Anda kembali.</p>
              <button className="btn btn-primary" onClick={reset}>OK</button>
            </div>
          )}
        </Reveal>
      </div>
    </>
  );
}