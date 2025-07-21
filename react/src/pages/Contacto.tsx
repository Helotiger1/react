import { Mail, Phone } from 'lucide-react'
import { motion, easeOut } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: easeOut,  // Importado y usado como objeto, no string
    },
  }),
}

export default function Contacto() {
  return (
    <div className="max-w-2xl mx-auto text-center space-y-12 px-4 py-7">

      {/* Título */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold text-white m-5"
      >
        Contacto
      </motion.h1>

      {/* Descripción */}
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-gray-300 text-lg m-5"
      >
        ¿Tienes dudas, sugerencias o quieres comunicarte con nosotros? Aquí puedes encontrarnos:
      </motion.p>

      {/* Tarjetas de contacto */}
      <motion.div
        className="grid gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {[{
          nombre: 'Anghelo Aguilera',
          descripcion: 'Desarrollador y responsable técnico del proyecto.',
          email: 'angheloaguilera@gmail.com',
          telefono: '+58 4120948781'
        }, {
          nombre: 'William Sanchez',
          descripcion: 'Soporte, documentación y revisión de contenido.',
          email: 'williamsanchez@gmail.com',
          telefono: '+58 424-8430708'
        }].map((persona, index) => (
          <motion.div
            key={persona.email}
            custom={index + 1}
            variants={fadeUp}
            className="bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col items-center"
          >
            <h2 className="text-xl font-semibold text-white mb-2">{persona.nombre}</h2>
            <p className="text-gray-400 text-sm mb-4">{persona.descripcion}</p>
            <div className="flex flex-col sm:flex-row gap-4 text-gray-300">
              <a
                href={`mailto:${persona.email}`}
                className="flex items-center gap-2 hover:text-white transition"
              >
                <Mail className="w-5 h-5" /> {persona.email}
              </a>
              <a
                href={`tel:${persona.telefono}`}
                className="flex items-center gap-2 hover:text-white transition"
              >
                <Phone className="w-5 h-5" /> {persona.telefono}
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Mensaje final */}
      <motion.p
        className="text-sm text-gray-500 mt-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        viewport={{ once: true }}
      >
        Gracias por visitar nuestra plataforma de Desarrollo Organizacional. ¡Estamos para ayudarte!
      </motion.p>
    </div>
  )
}
