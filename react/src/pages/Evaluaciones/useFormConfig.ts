import {
  preguntasNucleo1,
  preguntasNucleo2,
  preguntasNucleo3,
  preguntasNucleo4,
  preguntasNucleo5,
  preguntasNucleo6,
  preguntasNucleo7,
  preguntasNucleo8,
} from "./CuestionariosConfig"; // ajusta la ruta si es necesario

export default function useFormConfig(name: string) {
  // Extraemos el número del núcleo, por ejemplo "nucleo3" => "3"
  const numeroNucleo = name.replace("nucleo", "");

  // Mapeo entre el número y el array de preguntas
  const cuestionariosPorNucleo: Record<string, typeof preguntasNucleo1> = {
    "1": preguntasNucleo1,
    "2": preguntasNucleo2,
    "3": preguntasNucleo3,
    "4": preguntasNucleo4,
    "5": preguntasNucleo5,
    "6": preguntasNucleo6,
    "7": preguntasNucleo7,
    "8": preguntasNucleo8,
  };

  const configPreguntas = cuestionariosPorNucleo[numeroNucleo] || [];

  const tituloEvaluacion = `Evaluación general de núcleo ${numeroNucleo}`;

  return { configPreguntas, tituloEvaluacion };
}
