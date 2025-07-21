import { FileText, ArrowRightCircle } from "lucide-react";
import { Link, Outlet, useOutlet } from "react-router-dom";

export const Evaluaciones = () => {
  const outlet = useOutlet();

  const cuestionarios = [
    { id: 1, nombre: "Núcleo 1 - Introducción al DO", link: "/evaluaciones/nucleo1" },
    { id: 2, nombre: "Núcleo 2 - Cambio Organizacional", link: "/evaluaciones/nucleo2" },
    { id: 3, nombre: "Núcleo 3 - Fases del DO", link: "/evaluaciones/nucleo3" },
    { id: 4, nombre: "Núcleo 4 - Historia del DO", link: "/evaluaciones/nucleo4" },
    { id: 5, nombre: "Núcleo 5 - Enfoques clásicos del DO", link: "/evaluaciones/nucleo5" },
    { id: 6, nombre: "Núcleo 6 - Estrategias de intervención", link: "/evaluaciones/nucleo6" },
    { id: 7, nombre: "Núcleo 7 - Diagnóstico organizacional", link: "/evaluaciones/nucleo7" },
    { id: 8, nombre: "Núcleo 8 - Funciones del consultor", link: "/evaluaciones/nucleo8" },
  ];

  return (
    <>
      {outlet ? (
        outlet
      ) : (
        <div className="max-w-4xl mx-auto px-6 py-16 text-white">
          {/* Header general */}
          <div className="mb-8 text-center max-w-xl mx-auto">
            <h1 className="text-3xl font-extrabold mb-4">Centro de Evaluación</h1>
            <p className="text-lg text-gray-300">
              ¡Pon a prueba tus habilidades y crece profesionalmente! <br />
              Selecciona un cuestionario y demuestra lo que sabes.
            </p>
          </div>

          {/* Contenedor de cuestionarios */}
          <div className="bg-black border border-white/10 rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold mb-8">Cuestionarios por Núcleo Temático</h3>

            <div className="space-y-6">
              {cuestionarios.map((q) => (
                <div
                  key={q.id}
                  className="flex items-center justify-between bg-white text-black rounded-xl px-6 py-5 shadow-md hover:shadow-lg transition"
                >
                  <div className="flex items-center gap-4">
                    <FileText className="text-blue-600 w-7 h-7" />
                    <span className="text-lg font-semibold">{q.nombre}</span>
                  </div>

                  <Link
                    to={q.link}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                  >
                    Iniciar
                    <ArrowRightCircle className="w-5 h-5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
