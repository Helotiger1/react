import { useParams } from "react-router-dom";
import { ContenidoNucleo } from "./Seccion";
import useContenido from "./useSeccion";


export const SeccionGenerica = () => {
    console.log("xd")
    const { seccion } = useParams();
    console.log(seccion);
    const content = useContenido(seccion)
    console.log(content)
    return <ContenidoNucleo content={content} ></ContenidoNucleo>
};