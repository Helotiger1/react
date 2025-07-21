import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom"; // Importante

type CardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string; // La prop 'link' es la que hace todo el trabajo
};

export const Card: React.FC<CardProps> = ({ icon: Icon, title, description, link }) => {
  return (
    <motion.div
      className="bg-white text-black rounded-2xl p-6 shadow-xl w-full sm:w-96 hover:scale-105 transition-transform duration-300 flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Icon className="w-12 h-12 text-blue-600 mb-4" />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700 mb-4 flex-grow">{description}</p>
      
      {/* El botón ahora es un enlace que maneja la navegación por sí mismo. */}
      <Link
        to={link}
        className="mt-auto block w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        Explorar núcleo
      </Link>
    </motion.div>
  );
};