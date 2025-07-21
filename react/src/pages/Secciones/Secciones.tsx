
import { useOutlet } from "react-router-dom";
import { Card } from "../components/Card";
import { Users, Lightbulb, Building2, Zap, Clock, History, Settings, UserCheck } from "lucide-react";
// Ya no se necesita useNavigate aquí

export default function Secciones() {
  // La configuración de cada tarjeta ahora solo contiene los datos a mostrar.
  const outlet = useOutlet();
  const cards = [
    {
      icon: Users,
      title: "Introducción al Desarrollo Organizacional",
      description: "El proceso planificado para mejorar la efectividad y clima organizacional.",
      link: "/secciones/nucleo1",
    },
    {
      icon: Zap,
      title: "Cambio Organizacional",
      description: "Estrategias y modelos para gestionar la transición y adaptación.",
      link: "/secciones/nucleo2",
    },
    {
      icon: Clock,
      title: "Fases del Desarrollo Organizacional",
      description: "Etapas estructuradas y metodologías para implementar cambios efectivos.",
      link: "/secciones/nucleo3",
    },
    {
      icon: History,
      title: "Historia del Desarrollo Organizacional",
      description: "Evolución y pioneros que sentaron las bases de esta disciplina.",
      link: "/secciones/nucleo4",
    },
    {
      icon: Settings,
      title: "Enfoques Clásicos",
      description: "Teorías tradicionales que fundamentan el desarrollo organizacional.",
      link: "/secciones/nucleo5",
    },
    {
      icon: UserCheck,
      title: "Estrategia del Desarrollo Organizacional",
      description: "Técnicas y herramientas para diagnosticar e intervenir en las organizaciones.",
      link: "/secciones/nucleo6",
    },
    {
      icon: Lightbulb,
      title: "Diagnóstico e Investigación",
      description: "Métodos cuantitativos y cualitativos para evaluar la salud organizacional.",
      link: "/secciones/nucleo7",
    },
    {
      icon: Building2,
      title: "Funciones del Consultor",
      description: "Roles, competencias y prácticas éticas del consultor en D.O.",
      link: "/secciones/nucleo8",
    },
  ];

  return (<>
      {outlet ? (
        outlet
      ) : (
    <section className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-8 text-center text-white">
        <header className="mb-16 max-w-4xl mx-auto">
          <h2 className="text-5xl font-extrabold mb-4">Núcleos Temáticos</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Explora cada núcleo para aprender, crecer y aplicar en tu entorno profesional.
          </p>
        </header>

        <div className="flex flex-col items-center gap-10">
          {/* El mapeo ahora es más simple: solo pasas las props directamente. */}
          {cards.map((card, idx) => (
            <Card
              key={idx}
              icon={card.icon}
              title={card.title}
              description={card.description}
              link={card.link} 
            />
          ))}
        </div>
      </div>
    </section>)}
    </>
  );
}

