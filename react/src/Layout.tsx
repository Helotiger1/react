import { Outlet, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Building2,
  Home,
  LayoutList,
  FileText,
  BookOpen,
  Mail
} from "lucide-react"
import ScrollToTop from './pages/components/ScrollToTop'

const navItems = [
  { path: '/', label: 'Inicio', icon: <Home className="w-4 h-4" /> },
  { path: '/secciones', label: 'Secciones', icon: <LayoutList className="w-4 h-4" /> },
  { path: '/evaluaciones', label: 'Evaluaciones', icon: <FileText className="w-4 h-4" /> },
  { path: '/recursos', label: 'Recursos', icon: <BookOpen className="w-4 h-4" /> },
  { path: '/contacto', label: 'Contacto', icon: <Mail className="w-4 h-4" /> },
]

export function Layout() {
  return (
    <div>
              <ScrollToTop></ScrollToTop>
    <div className="flex flex-col min-h-screen bg-black text-white">

      {/* Navbar animado */}
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between px-6 py-4 border-b border-gray-800 bg-black sticky top-0 z-50 shadow-md"
      >
        <div className="flex items-center gap-2 font-extrabold text-xl">
          <Building2 className="text-white" /> DO
        </div>

        <nav className="flex gap-4">
          {navItems.map(({ path, label, icon }) => (
            <motion.div
              key={path}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to={path}
                className="flex items-center gap-1 font-bold px-3 py-1 border border-gray-700 rounded-md shadow-sm hover:bg-white hover:text-black transition text-sm"
              >
                {icon}
                {label}
              </Link>
            </motion.div>
          ))}
        </nav>
      </motion.header>

      {/* Contenido dinámico con animación de entrada */}
      <main className="flex-1 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Outlet />
        </motion.div>
      </main>

      {/* Footer animado */}
      <motion.footer
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-1000 border-t border-gray-900 text-gray-400 text-sm text-center py-4 px-4"
      >
        <p className="mb-3">
          Plataforma interactiva para aprender sobre <span className="text-white">Desarrollo Organizacional</span>.
        </p>

        <div className="flex justify-center flex-wrap gap-4 mb-3">
          {navItems.map(({ path, label, icon }) => (
            <Link key={path} to={path} className="flex items-center gap-1 hover:text-white">
              {icon} {label}
            </Link>
          ))}
        </div>

        <div className="text-xs text-gray-500">
          © {new Date().getFullYear()} Plataforma DO
        </div>
      </motion.footer>
    </div>
    </div>
  )
}
