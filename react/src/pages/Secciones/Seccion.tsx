import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// 1. Define la interfaz para el objeto completo
export type ContenidoProps = {
  id?: string;
  titulo: string;
  descripcion: React.ReactNode;
  videoUrl?: string;
  imagenUrl: string;
};

export const ContenidoNucleo: React.FC<{ content: ContenidoProps }> = ({ content }) => {
  const {titulo, descripcion, imagenUrl } = content;

  return (
    <motion.div
      className="bg-black text-white min-h-screen p-4 sm:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-4xl mx-auto">
              <Link
  to="/secciones"
  className="inline-flex items-center text-white hover:text-gray-200 text-sm font-medium select-none cursor-pointer gap-1 mb-5"
>
  &#60; Volver
</Link>
        
        <header className="mb-8 border-b border-gray-700 pb-4">
          <h2 className="text-4xl sm:text-5xl font-extrabold mt-2">{titulo}</h2>
        </header>

        <main className="prose prose-invert prose-lg max-w-none">
          {descripcion}


          <div className="my-12">
            <h3 className="text-3xl font-bold mb-4">Imagen Relevante</h3>
            <img
  src={imagenUrl}
  alt={`Imagen de ${titulo}`}
  className="w-120 h-80 rounded-lg shadow-2xl mx-auto" 
  // O w-64, w-48, etc. Depende de qué tan "recortada" la quieras.
/>
          </div>
        </main>
      </div>
    </motion.div>
  );
};