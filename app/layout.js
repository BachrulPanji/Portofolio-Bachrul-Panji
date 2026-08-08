// layout.js = "kerangka" global untuk SEMUA halaman (wajib ada di Next.js App Router).
// Berisi <html> dan <body>, serta metadata SEO yang berlaku di seluruh situs.
import './globals.css'; // import CSS global (style semua halaman)

// metadata = info untuk SEO (judul, deskripsi, Google, Open Graph, favicon).
// Next.js otomatis memasukkan ini ke tag <head>.
export const metadata = {
  metadataBase: new URL('https://portofolio-bachrul-panji.vercel.app'), // URL dasar situs
  title: 'Bachrul Panji | Front-End Developer & Cyber Security', // judul tab browser
  description:
    'Portofolio resmi Bachrul Panji. Front-End Web Developer, Network Engineer, Programmer, dan pakar di bidang Cyber Security dan Ethical Hacking.',
  keywords:
    'Bachrul Panji, portfolio Bachrul Panji, web developer, front-end developer, network engineer, programmer, cyber security, ethical hacking',
  authors: [{ name: 'Bachrul Panji' }],
  openGraph: { // metadata untuk preview saat link dibagikan (WhatsApp/Medsos)
    title: 'Bachrul Panji | Portfolio',
    description: 'Front-End Web Developer & Cyber Security Enthusiast',
    type: 'website',
    url: 'https://portofolio-bachrul-panji.vercel.app/',
    siteName: 'Portofolio Bachrul Panji'
  },
  robots: { index: true, follow: true }, // izinkan Google mengindex & mengikuti link
  verification: {
    google: 'VhNfmntTn5jc7S-yrOSxkNZaxcTrhl6__3f8d0QrwmY' // verifikasi Google Search Console
  },
  icons: {
    icon: '/assets/favicons/favicon.png' // ikon tab browser
  }
};

// RootLayout = komponen kerangka. `children` = isi halaman yang sedang dibuka.
export default function RootLayout({ children }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body>
        {/* bg-fx = latar belakang animasi (gradasi + grid), lihat globals.css */}
        <div className="bg-fx" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}