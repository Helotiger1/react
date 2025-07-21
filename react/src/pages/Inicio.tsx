import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
}

export default function Inicio() {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-6 mt-20">
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold text-white drop-shadow"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={1}
      >
        Explora el mundo del Desarrollo Organizacional
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl text-gray-300 max-w-xl"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={2}
      >
        Descubre cómo potenciar equipos, liderazgos y estructuras organizacionales
        a través de herramientas, secciones temáticas y evaluaciones interactivas.
      </motion.p>

      <motion.div
        className="flex flex-wrap justify-center gap-4 mt-4"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={3}
      >
        <Link
          className="px-5 py-2 rounded-md border border-white text-white hover:bg-white hover:text-black transition"
          to="/secciones"
        >
          Empezar ahora
        </Link>
      </motion.div>
    </div>
  )
}
