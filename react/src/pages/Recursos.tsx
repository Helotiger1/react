import {
  Book,
  Globe,
  FileText
} from "lucide-react"
import { motion, easeOut } from "framer-motion"

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easeOut,
    },
  },
}

const fadeUpCustom = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: easeOut,
    },
  }),
}

export default function Recursos() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10 text-white">

      {/* Título principal */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-extrabold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-white to-white"
      >
        Recursos adicionales
      </motion.h1>

      {/* Referencias recomendadas */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mb-16 bg-gray-900 bg-opacity-40 rounded-xl p-6 shadow-xl"
      >
        <h2 className="text-3xl font-semibold mb-6 flex items-center gap-2 border-b border-white pb-2">
          <Book className="w-6 h-6 text-white" /> Referencias recomendadas
        </h2>
        <ul className="space-y-6 text-gray-300">
          <li>
            <span className="text-white font-semibold">📚 Libros:</span>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-gray-400">
              <li>"Reinventar las Organizaciones" – Frederic Laloux</li>
              <li>"La Quinta Disciplina" – Peter Senge</li>
              <li>"Diagnóstico Organizacional" – Wendell L. French y Cecil Bell</li>
              <li>"Organizational Culture and Leadership" – Edgar Schein</li>
            </ul>
          </li>
          <li>
            <span className="text-white font-semibold">🌐 Blogs:</span>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-gray-400">
              {[
                { label: "Megaron - Desarrollo Organizacional", href: "https://www.megaron.com.mx/blog" },
                { label: "Forward Company", href: "https://www.forwardcompany.com/blog" },
                { label: "Talana", href: "https://web.talana.com/blog/tag/desarrollo-organizacional" }
              ].map(({ label, href }, i) => (
                <motion.li
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 250 }}
                >
                  <a href={href} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                    {label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </li>
          <li>
            <span className="text-white font-semibold">🎧 Podcasts:</span>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-gray-400">
              <li>Chartered Institute of Personnel and Development (CIPD)</li>
              <li>
                <a href="https://open.spotify.com/show/089EBfi8we7awsBu5IO4Hk?si=c5cd030841f24406" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                  ¡Reinventándonos! – Luis Salas
                </a>
              </li>
              <li>
                <a href="https://podcasts.apple.com/es/podcast/siempre-puedes-practicar-surf/id1449653407" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                  Siempre Puedes Practicar Surf – Global Humans Consultants
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </motion.section>

      {/* Organizaciones */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mb-16 bg-gray-900 bg-opacity-100 rounded-xl p-6 shadow-xl"
      >
        <h2 className="text-3xl font-semibold mb-6 flex items-center gap-2 border-b border-white pb-2">
          <Globe className="w-6 h-6 text-white" /> Organizaciones y profesionales relacionados
        </h2>
        <ul className="list-disc list-inside space-y-3 text-gray-300 ml-6">
          {[
            {
              label: "RRHH Digital – Portal especializado en recursos humanos y DO",
              href: "https://www.rrhhdigital.com/"
            },
            {
              label: "Chartered Institute of Personnel and Development (CIPD)",
              href: "https://www.cipd.co.uk/"
            }
          ].map(({ label, href }, i) => (
            <motion.li key={i} whileHover={{ scale: 1.03 }}>
              <a href={href} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                {label}
              </a>
            </motion.li>
          ))}
        </ul>
      </motion.section>

      {/* Artículos académicos */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mb-12 bg-gray-900 bg-opacity-40 rounded-xl p-6 shadow-xl"
      >
        <h2 className="text-3xl font-semibold mb-6 flex items-center gap-2 border-b border-white pb-2">
          <FileText className="w-6 h-6 text-white" /> Artículos Académicos
        </h2>
        <ul className="space-y-5 text-gray-300">
          {[
            {
              title: "Desarrollo organizacional: una revisión sistemática para Latinoamérica",
              author: "Llamoga Cuenca, S. & Morales Salazar, P. (2024)",
              source: "UCV-SCIENTIA"
            },
            {
              title: "El desarrollo organizacional como facilitador del cambio",
              author: "Henry Molina (2000)"
            },
            {
              title: "Desarrollo organizacional. Una mirada desde el ámbito académico",
              author: "Alina Segrado (2015)"
            }
          ].map(({ title, author, source }, i) => (
            <motion.li
              key={i}
              variants={fadeUpCustom}
              custom={i + 1}
              className="bg-gray-900 rounded-lg p-4 border border-gray-700 shadow-sm"
            >
              <p className="text-white font-medium">{title}</p>
              <p className="text-sm text-gray-400">
                {author} {source && <em>{source}</em>}
              </p>
            </motion.li>
          ))}
        </ul>
      </motion.section>
    </div>
  )
}
