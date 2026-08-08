/** @type {import('next').NextConfig} */
// File konfigurasi Next.js (.mjs = pakai sintaks ES module).
const nextConfig = {
  reactStrictMode: true,   // mode ketat React -> menangkap bug sejak dini di development
  output: 'export',        // membangun jadi FILE STATIS di folder `out/`
                           // (cocok utk GitHub Pages/Vercel tanpa server)
  images: {
    unoptimized: true      // Next tidak memproses/optimasi gambar
                           // (karena mode static export, kita pakai tag <img> biasa)
  },
  trailingSlash: true      // URL menjadi /skills/ (tambah garis miring di akhir)
};

export default nextConfig;