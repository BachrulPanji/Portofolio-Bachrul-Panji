// File ini = "peta ikon". Mengubah nama ikon bertulisan (string) menjadi komponen ikon nyata.
// Kenapa? Karena data di lib/data.js memakai nama teks seperti 'home', 'github', 'shield',
// agar mudah diedit tanpa menulis JSX. Di sini nama teks tsb "dipetakan" ke ikon sebenarnya.

// Import ikon dari library react-icons (semua ikon dalam bentuk komponen React).
import {
  FaHome, FaCode, FaFolderOpen, FaConciergeBell, FaGraduationCap, FaHeart, FaRoad,
  FaTrophy, FaEnvelope, FaYoutube, FaInstagram, FaLinkedin, FaGithub, FaFileInvoice,
  FaShieldAlt, FaPaintBrush, FaCube, FaAward, FaMicrophone, FaRobot, FaCheck, FaArrowRight,
  FaDownload, FaEye, FaSearchPlus, FaBuilding, FaGlobe, FaLaptopCode, FaBriefcase, FaUniversity, FaRocket
} from 'react-icons/fa';      // Font Awesome
import { SiJavascript, SiNextdotjs } from 'react-icons/si'; // Simple Icons (logo brand)
import { MdEmail, MdLocationOn } from 'react-icons/md';     // Material Design

// Objek pemetaan: "nama teks" -> "komponen ikon".
// (kunci yang ada tanda hubung '-' harus ditulis dalam tanda kutip).
const iconMap = {
  home: FaHome,
  code: FaCode,
  folder: FaFolderOpen,
  briefcase: FaConciergeBell,
  graduation: FaGraduationCap,
  heart: FaHeart,
  road: FaRoad,
  trophy: FaTrophy,
  mail: FaEnvelope,
  youtube: FaYoutube,
  instagram: FaInstagram,
  linkedin: FaLinkedin,
  github: FaGithub,
  'file-invoice': FaFileInvoice,
  shield: FaShieldAlt,
  'shield-alt': FaShieldAlt,
  paint: FaPaintBrush,
  cubes: FaCube,
  award: FaAward,
  mic: FaMicrophone,
  robot: FaRobot,
  js: SiJavascript,
  nextjs: SiNextdotjs,
  rocket: FaRocket,
  check: FaCheck,
  'arrow-right': FaArrowRight,
  download: FaDownload,
  eye: FaEye,
  'search-plus': FaSearchPlus,
  building: FaBuilding,
  globe: FaGlobe,
  'laptop-code': FaLaptopCode,
  career: FaBriefcase,
  university: FaUniversity
};

// Komponen <Icon> : pemakai cukup menulis <Icon name="github" size={20} />
// Lalu komponen ini mencari ikon yang cocok dan menggambarnya.
// Jika nama tidak ditemukan, fallback ke FaCode agar tidak error.
export function Icon({ name, size, className, style }) {
  const Cmp = iconMap[name] || FaCode; // ambil komponen ikon dari peta
  return <Cmp size={size} className={className} style={style} />;
}

// Turunan lain (apabila ingin akses peta ikon dari file lain).
export const ICONS = iconMap;