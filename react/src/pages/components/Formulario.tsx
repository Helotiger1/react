import{ useState } from "react";
import { Link } from "react-router-dom";


export default function Formulario({
  tituloEvaluacion = "Evaluación general", configPreguntas 
}: {tituloEvaluacion :string, configPreguntas: Object}) {
  const [respuestas, setRespuestas] = useState({});
  const [mostrarResultado, setMostrarResultado] = useState(false);

  const manejarCambio = (preguntaId, opcionId) => {
    setRespuestas((prev) => ({
      ...prev,
      [preguntaId]: opcionId,
    }));
  };

  const manejarSubmit = (e) => {
    e.preventDefault();
    setMostrarResultado(true);
  };

  const calcularNota = () => {
    let correctas = 0;
    configPreguntas.forEach(({ id, correcta }) => {
      if (respuestas[id] === correcta) correctas++;
    });
    return `${correctas} / ${configPreguntas.length}`;
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10 text-black">
<Link
  to="/evaluaciones"
  className="inline-flex items-center text-black hover:text-gray-200 text-sm font-medium select-none cursor-pointer gap-1 mb-5"
>
  &#60; Volver
</Link>
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-900">
        {tituloEvaluacion}
      </h1>

      <form onSubmit={manejarSubmit} className="space-y-8">
        {configPreguntas.map(({ id, pregunta, parrafo, opciones }) => (
          <fieldset
            key={id}
            className="border border-gray-300 rounded-md p-5 hover:shadow-lg transition-shadow duration-300"
          >
            <legend className="font-semibold text-lg mb-2">{pregunta}</legend>
            {parrafo && (
              <p className="mb-4 text-gray-600 italic">{parrafo}</p>
            )}
            <div className="space-y-3">
              {opciones.map(({ id: opcionId, texto }) => {
                const esSeleccionada = respuestas[id] === opcionId;
                return (
                  <label
                    key={opcionId}
                    className={`flex items-center space-x-3 cursor-pointer rounded-md p-3 
                      transition-colors duration-300
                      ${
                        mostrarResultado
                          ? esSeleccionada
                            ? "font-semibold " +
                              (respuestas[id] ===
                              configPreguntas.find(q => q.id === id).correcta
                                ? "text-green-600 bg-green-50"
                                : "text-red-600 bg-red-50")
                            : "opacity-70"
                          : "hover:bg-blue-50 hover:text-blue-700"
                      }
                    `}
                  >
                    <input
                      type="radio"
                      name={`pregunta-${id}`}
                      value={opcionId}
                      checked={esSeleccionada}
                      onChange={() => manejarCambio(id, opcionId)}
                      disabled={mostrarResultado}
                      className="w-5 h-5 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <span>{texto}</span>
                  </label>
                );
              })}
            </div>
          </fieldset>
        ))}

        {!mostrarResultado && (
          <button
            type="submit"
            disabled={Object.keys(respuestas).length !== configPreguntas.length}
            className={`w-full py-3 rounded-md text-white font-semibold transition 
            ${
              Object.keys(respuestas).length === configPreguntas.length
                ? "bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            Enviar respuestas
          </button>
        )}
      </form>

      {mostrarResultado && (
        <div className="mt-10 bg-gray-50 p-6 rounded-md shadow-inner">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
            Resultados
          </h2>
          <ul className="space-y-6">
            {configPreguntas.map(({ id, pregunta, correcta, opciones }) => {
              const seleccionada = respuestas[id];
              const textoSeleccionado = opciones.find(
                (o) => o.id === seleccionada
              )?.texto;
              const correctaTexto = opciones.find((o) => o.id === correcta)?.texto;
              const esCorrecta = seleccionada === correcta;

              return (
                <li
                  key={id}
                  className="border border-gray-300 rounded-md p-5 bg-white"
                >
                  <p className="font-semibold mb-2">{pregunta}</p>
                  <p>
                    Tu respuesta:{" "}
                    <span
                      className={esCorrecta ? "text-green-600" : "text-red-600"}
                    >
                      {textoSeleccionado || "No respondida"}
                    </span>
                  </p>
                  {!esCorrecta && (
                    <p>
                      Respuesta correcta:{" "}
                      <span className="text-green-600">{correctaTexto}</span>
                    </p>
                  )}
                </li>
              );
            })}
          </ul>
          <h3 className="mt-8 text-xl font-bold text-center text-blue-700">
            Nota final: {calcularNota()}
          </h3>
        </div>
      )}
    </div>
  );
}
