import { useParams } from "react-router-dom";
import useFormConfig from "./useFormConfig";
import Formulario from "../components/Formulario";

export const EvaluacionGenerica = () => {
    const { evaluacion } = useParams();
    const {configPreguntas, tituloEvaluacion} = useFormConfig(evaluacion);
    return <Formulario key={evaluacion} configPreguntas={configPreguntas} tituloEvaluacion={tituloEvaluacion}></Formulario>;
};
