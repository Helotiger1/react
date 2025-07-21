

export interface Opcion {
  id: string;       // ej: "a", "b", etc.
  texto: string;    // ej: "París"
}

export interface PreguntaConfig {
  id: number;
  pregunta: string;
  parrafo: string;
  opciones: Opcion[];
  correcta: string; // id de la opción correcta, ej: "b"
}


export const preguntasNucleo1: PreguntaConfig[] = [
  {
    id: 1,
    pregunta: "¿Cuál es el objetivo principal del Desarrollo Organizacional (DO)?",
    parrafo: "El DO busca mejorar la ______ de la organización.",
    opciones: [
      { id: "a", texto: "Efectividad y salud organizacional" },
      { id: "b", texto: "Recaudación de impuestos" },
      { id: "c", texto: "Marketing digital" }
    ],
    correcta: "a"
  },
  {
    id: 2,
    pregunta: "¿Qué característica NO describe al DO?",
    parrafo: "Selecciona la opción que no corresponde.",
    opciones: [
      { id: "a", texto: "Orientación humana" },
      { id: "b", texto: "Visión sistémica" },
      { id: "c", texto: "Cambio espontáneo" }
    ],
    correcta: "c"
  },
  {
    id: 3,
    pregunta: "¿Cuál de los siguientes es un beneficio del DO?",
    parrafo: "Elige la respuesta correcta.",
    opciones: [
      { id: "a", texto: "Mayor productividad y clima laboral" },
      { id: "b", texto: "Mayor rotación de personal" },
      { id: "c", texto: "Más conflictos internos" }
    ],
    correcta: "a"
  },
  {
    id: 4,
    pregunta: "Una intervención típica de DO para cohesionar equipos es…",
    parrafo: "Escoge la respuesta adecuada.",
    opciones: [
      { id: "a", texto: "Team building" },
      { id: "b", texto: "Despido masivo" },
      { id: "c", texto: "Auditoría fiscal" }
    ],
    correcta: "a"
  }
];

export const preguntasNucleo2: PreguntaConfig[] = [
  {
    id: 1,
    pregunta: "¿Cuál es la primera etapa del modelo de Lewin para el cambio organizacional?",
    parrafo: "Modelo de Lewin (3 etapas).",
    opciones: [
      { id: "a", texto: "Descongelamiento (Unfreeze)" },
      { id: "b", texto: "Cambio (Change)" },
      { id: "c", texto: "Recongelamiento (Refreeze)" }
    ],
    correcta: "a"
  },
  {
    id: 2,
    pregunta: "En el modelo ADKAR, la letra 'A' inicial significa…",
    parrafo: "Selecciona la opción correcta.",
    opciones: [
      { id: "a", texto: "Awareness (Conciencia)" },
      { id: "b", texto: "Ability (Habilidad)" },
      { id: "c", texto: "Adaptability (Adaptabilidad)" }
    ],
    correcta: "a"
  },
  {
    id: 3,
    pregunta: "¿Qué acción recomienda Kotter para mantener el impulso del cambio?",
    parrafo: "Modelo de los 8 pasos de Kotter.",
    opciones: [
      { id: "a", texto: "Generar victorias tempranas" },
      { id: "b", texto: "Crear burocracia adicional" },
      { id: "c", texto: "Minimizar la comunicación" }
    ],
    correcta: "a"
  },
  {
    id: 4,
    pregunta: "¿Cuál de los siguientes es un error común en la gestión del cambio?",
    parrafo: "Identifica la opción correcta.",
    opciones: [
      { id: "a", texto: "Falta de comunicación clara" },
      { id: "b", texto: "Medir resultados" },
      { id: "c", texto: "Involucrar a los empleados" }
    ],
    correcta: "a"
  }
];

export const preguntasNucleo3: PreguntaConfig[] = [
  {
    id: 1,
    pregunta: "¿Cuál es la primera fase del proceso de Desarrollo Organizacional?",
    parrafo: "Etapas y metodologías del DO.",
    opciones: [
      { id: "a", texto: "Diagnóstico organizacional" },
      { id: "b", texto: "Implementación de intervenciones" },
      { id: "c", texto: "Evaluación y retroalimentación" }
    ],
    correcta: "a"
  },
  {
    id: 2,
    pregunta: "Los objetivos establecidos en la planificación del cambio deben ser…",
    parrafo: "Selecciona la respuesta correcta.",
    opciones: [
      { id: "a", texto: "SMART" },
      { id: "b", texto: "Vagos" },
      { id: "c", texto: "A corto plazo únicamente" }
    ],
    correcta: "a"
  },
  {
    id: 3,
    pregunta: "En Appreciative Inquiry, la fase dedicada a diseñar estrategias se llama…",
    parrafo: "Fases 4‑D.",
    opciones: [
      { id: "a", texto: "Design" },
      { id: "b", texto: "Destiny" },
      { id: "c", texto: "Discover" }
    ],
    correcta: "a"
  },
  {
    id: 4,
    pregunta: "¿Cuál de las siguientes corresponde a la implementación de intervenciones?",
    parrafo: "Escoge la opción adecuada.",
    opciones: [
      { id: "a", texto: "Capacitación del personal" },
      { id: "b", texto: "Encuesta de clima previa" },
      { id: "c", texto: "Definición de KPI’s" }
    ],
    correcta: "a"
  }
];

export const preguntasNucleo4: PreguntaConfig[] = [
  {
    id: 1,
    pregunta: "¿Quién es considerado padre de la dinámica de grupos y del DO moderno?",
    parrafo: "Historia del DO.",
    opciones: [
      { id: "a", texto: "Kurt Lewin" },
      { id: "b", texto: "Elton Mayo" },
      { id: "c", texto: "Peter Senge" }
    ],
    correcta: "a"
  },
  {
    id: 2,
    pregunta: "¿Qué teoría de Douglas McGregor influyó en el liderazgo participativo?",
    parrafo: "Selecciona la opción correcta.",
    opciones: [
      { id: "a", texto: "Teoría X y Y" },
      { id: "b", texto: "Grid Gerencial" },
      { id: "c", texto: "Modelo de Likert" }
    ],
    correcta: "a"
  },
  {
    id: 3,
    pregunta: "¿En qué década se consolidó el DO como disciplina académica y práctica?",
    parrafo: "Selecciona la década correcta.",
    opciones: [
      { id: "a", texto: "1950‑1960" },
      { id: "b", texto: "1920‑1930" },
      { id: "c", texto: "1990‑2000" }
    ],
    correcta: "a"
  },
  {
    id: 4,
    pregunta: "El concepto de “Organizaciones que Aprenden” fue popularizado por…",
    parrafo: "Escoge el autor correcto.",
    opciones: [
      { id: "a", texto: "Peter Senge" },
      { id: "b", texto: "Rensis Likert" },
      { id: "c", texto: "Chris Argyris" }
    ],
    correcta: "a"
  }
];

export const preguntasNucleo5: PreguntaConfig[] = [
  {
    id: 1,
    pregunta: "¿Cuál teoría se basa en los experimentos Hawthorne?",
    parrafo: "Enfoques clásicos del DO.",
    opciones: [
      { id: "a", texto: "Teoría de las Relaciones Humanas" },
      { id: "b", texto: "Teoría X y Y" },
      { id: "c", texto: "Teoría del Aprendizaje Organizacional" }
    ],
    correcta: "a"
  },
  {
    id: 2,
    pregunta: "En el Grid Gerencial, el estilo 9,9 representa…",
    parrafo: "Selecciona la afirmación correcta.",
    opciones: [
      { id: "a", texto: "Alto interés por personas y producción" },
      { id: "b", texto: "Bajo interés por personas y producción" },
      { id: "c", texto: "Alto interés por producción, bajo por personas" }
    ],
    correcta: "a"
  },
  {
    id: 3,
    pregunta: "La Teoría del Aprendizaje Organizacional distingue entre…",
    parrafo: "Escoge la respuesta adecuada.",
    opciones: [
      { id: "a", texto: "Single‑Loop y Double‑Loop" },
      { id: "b", texto: "Teoría X y Teoría Y" },
      { id: "c", texto: "Sistema III y Sistema IV" }
    ],
    correcta: "a"
  },
  {
    id: 4,
    pregunta: "La Teoría X describe a los empleados como…",
    parrafo: "Selecciona la opción correcta.",
    opciones: [
      { id: "a", texto: "Perezosos que necesitan control estricto" },
      { id: "b", texto: "Creativos y automotivados" },
      { id: "c", texto: "Expertos en tecnología" }
    ],
    correcta: "a"
  }
];

export const preguntasNucleo6: PreguntaConfig[] = [
  {
    id: 1,
    pregunta: "¿Cuál técnica de diagnóstico mide satisfacción y clima laboral?",
    parrafo: "Técnicas y herramientas de intervención.",
    opciones: [
      { id: "a", texto: "Encuestas de clima laboral" },
      { id: "b", texto: "Benchmarking" },
      { id: "c", texto: "Reingeniería de procesos" }
    ],
    correcta: "a"
  },
  {
    id: 2,
    pregunta: "Reingeniería de procesos busca…",
    parrafo: "Selecciona la opción correcta.",
    opciones: [
      { id: "a", texto: "Rediseñar procesos desde cero para eficiencia" },
      { id: "b", texto: "Mantener procesos existentes" },
      { id: "c", texto: "Incrementar jerarquías" }
    ],
    correcta: "a"
  },
  {
    id: 3,
    pregunta: "El modelo de gestión del cambio de 8 pasos fue propuesto por…",
    parrafo: "Escoge la respuesta correcta.",
    opciones: [
      { id: "a", texto: "John Kotter" },
      { id: "b", texto: "Kurt Lewin" },
      { id: "c", texto: "Rensis Likert" }
    ],
    correcta: "a"
  },
  {
    id: 4,
    pregunta: "¿Cuál técnica de cambio cultural se basa en las fortalezas?",
    parrafo: "Selecciona la opción adecuada.",
    opciones: [
      { id: "a", texto: "Appreciative Inquiry" },
      { id: "b", texto: "Six Sigma" },
      { id: "c", texto: "Análisis Transaccional" }
    ],
    correcta: "a"
  }
];

export const preguntasNucleo7: PreguntaConfig[] = [
  {
    id: 1,
    pregunta: "¿Qué mide una encuesta de clima laboral?",
    parrafo: "Indicadores clave para evaluar la salud organizacional.",
    opciones: [
      { id: "a", texto: "Satisfacción, comunicación y liderazgo" },
      { id: "b", texto: "Precio de los productos" },
      { id: "c", texto: "Horas de almuerzo por empleado" }
    ],
    correcta: "a"
  },
  {
    id: 2,
    pregunta: "¿Qué representa el modelo de Weisbord?",
    parrafo: "Modelo estructurado de diagnóstico organizacional.",
    opciones: [
      { id: "a", texto: "Seis bloques clave para evaluar una organización" },
      { id: "b", texto: "Reglas para contratar personal" },
      { id: "c", texto: "Esquema de beneficios laborales" }
    ],
    correcta: "a"
  },
  {
    id: 3,
    pregunta: "¿Cuál de estas herramientas es cualitativa?",
    parrafo: "Distingue entre métodos cualitativos y cuantitativos.",
    opciones: [
      { id: "a", texto: "Entrevistas grupales" },
      { id: "b", texto: "Análisis de KPIs" },
      { id: "c", texto: "Encuesta de satisfacción" }
    ],
    correcta: "a"
  },
  {
    id: 4,
    pregunta: "¿Qué evalúa el Organizational Health Index?",
    parrafo: "Herramienta para medir salud organizacional integral.",
    opciones: [
      { id: "a", texto: "Nueve dimensiones clave como liderazgo y cultura" },
      { id: "b", texto: "Solamente los beneficios económicos" },
      { id: "c", texto: "Cantidad de productos vendidos" }
    ],
    correcta: "a"
  }
];

export const preguntasNucleo8: PreguntaConfig[] = [
  {
    id: 1,
    pregunta: "¿Qué rol cumple el consultor en un proceso de DO?",
    parrafo: "Funciones y responsabilidades del consultor externo o interno.",
    opciones: [
      { id: "a", texto: "Facilitador del cambio y guía del proceso" },
      { id: "b", texto: "Auditor financiero" },
      { id: "c", texto: "Supervisor de planta" }
    ],
    correcta: "a"
  },
  {
    id: 2,
    pregunta: "¿Cuál es una competencia clave para un consultor de DO?",
    parrafo: "Escoge la más relevante.",
    opciones: [
      { id: "a", texto: "Habilidad de escucha activa" },
      { id: "b", texto: "Conocimiento en programación web" },
      { id: "c", texto: "Capacidad de venta agresiva" }
    ],
    correcta: "a"
  },
  {
    id: 3,
    pregunta: "¿Qué distingue a una intervención ética en DO?",
    parrafo: "Escoge la mejor descripción.",
    opciones: [
      { id: "a", texto: "Transparencia, consentimiento y respeto al cliente" },
      { id: "b", texto: "Uso de tácticas de manipulación" },
      { id: "c", texto: "Acciones sin participación del cliente" }
    ],
    correcta: "a"
  },
  {
    id: 4,
    pregunta: "¿Cuál de estas acciones representa una práctica ética en DO?",
    parrafo: "Selecciona la opción correcta.",
    opciones: [
      { id: "a", texto: "Comunicar claramente los objetivos y límites del proceso" },
      { id: "b", texto: "Ocultar información para evitar resistencia" },
      { id: "c", texto: "Tomar decisiones sin consultar al cliente" }
    ],
    correcta: "a"
  }
];