import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./Layout.tsx";
import Inicio from "./pages/Inicio.tsx";
import Contacto from "./pages/Contacto.tsx";
import Recursos from "./pages/Recursos.tsx";
import { Evaluaciones } from "./pages/Evaluaciones/Evaluaciones.tsx";
import { EvaluacionGenerica } from "./pages/Evaluaciones/EvaluacionGenerica.tsx";
import Secciones from "./pages/Secciones/Secciones.tsx";
import { SeccionGenerica } from "./pages/Secciones/SeccionGenerica.tsx";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { index: true, element: <Inicio /> },
            { path: "/contacto", element: <Contacto /> },
            { path: "/recursos", element: <Recursos /> },
            {path: "/secciones", element: <Secciones/>, children: [{path: ":seccion", element: <SeccionGenerica/>}]},
            {path : "/evaluaciones", element: <Evaluaciones></Evaluaciones>, children: [{ path: ":evaluacion",
            element: <EvaluacionGenerica/> ,
          },]},
        ],
    },
]);

createRoot(document.getElementById("root")!).render(
    <StrictMode>

        <RouterProvider router={router}></RouterProvider>
    </StrictMode>
);
