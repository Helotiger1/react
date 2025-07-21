import type { ContenidoProps } from "./Seccion";

export const contenidoDO_1: ContenidoProps = {
    id: "do-introduccion",
    titulo: "Introducción al Desarrollo Organizacional",
    descripcion: (
        <div className="text-white">
            <p className="mb-4">
                El{" "}
                <strong className="font-semibold">
                    Desarrollo Organizacional (DO)
                </strong>{" "}
                es un proceso planificado y sistemático que busca mejorar la
                efectividad, la salud y la competitividad de una organización
                mediante intervenciones estratégicas en su estructura, cultura,
                procesos y recursos humanos. Se enfoca en el cambio
                organizacional para adaptarse a entornos dinámicos y fomentar un
                clima laboral positivo.
            </p>
            <h3 className="text-lg font-semibold mb-2">
                Características clave del DO:
            </h3>
            <ul className="list-disc list-inside mb-4">
                <li>
                    <span className="font-semibold">
                        Enfoque en el cambio planificado:
                    </span>{" "}
                    No es espontáneo; sigue una metodología estructurada.
                </li>
                <li>
                    <span className="font-semibold">Orientación humana:</span>{" "}
                    Promueve la participación, el trabajo en equipo y el
                    desarrollo de las personas.
                </li>
                <li>
                    <span className="font-semibold">Visión sistémica:</span>{" "}
                    Analiza la organización como un todo interconectado
                    (equipos, procesos, cultura).
                </li>
                <li>
                    <span className="font-semibold">
                        Objetivos a largo plazo:
                    </span>{" "}
                    Busca mejoras sostenibles, no soluciones rápidas.
                </li>
            </ul>
            <h3 className="text-lg font-semibold mb-2">
                Objetivos principales:
            </h3>
            <ul className="list-disc list-inside mb-4">
                <li>Mejorar la comunicación y la colaboración.</li>
                <li>Fortalecer la cultura organizacional.</li>
                <li>Aumentar la adaptabilidad al cambio.</li>
                <li>Optimizar procesos y eficiencia.</li>
                <li>Fomentar el liderazgo participativo.</li>
            </ul>
            <h3 className="text-lg font-semibold mb-2">
                Herramientas y técnicas comunes:
            </h3>
            <ul className="list-disc list-inside mb-4">
                <li>Diagnóstico organizacional (encuestas, entrevistas).</li>
                <li>Team building (actividades para cohesionar equipos).</li>
                <li>Capacitación y coaching.</li>
                <li>Reestructuración de roles y procesos.</li>
                <li>Gestión del cambio (modelos como el de Lewin o Kotter).</li>
            </ul>
            <h3 className="text-lg font-semibold mb-2">Beneficios:</h3>
            <ul className="list-disc list-inside mb-4">
                <li>Mayor productividad y clima laboral.</li>
                <li>Reducción de conflictos.</li>
                <li>Organizaciones más ágiles e innovadoras.</li>
            </ul>
            <h3 className="text-lg font-semibold mb-2">Ejemplo:</h3>
            <p className="mb-4">
                Una empresa que implementa DO podría reorganizar sus equipos
                para trabajar por proyectos (en lugar de departamentos rígidos),
                capacitar a sus líderes en habilidades blandas y fomentar una
                cultura de feedback constante.
            </p>
            <p className="mb-4">
                En resumen, el DO es una disciplina que combina psicología,
                gestión y estrategia para transformar organizaciones hacia
                modelos más humanos y eficientes. ¿Necesitas detalles sobre
                algún aspecto en particular?
            </p>
            <p>
                <span className="font-semibold">
                    Si quieres aprender mas sobre el tema;
                </span>
            </p>
            <a
                href="https://www.youtube.com/watch?v=DA0HK4-eahk      "
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline">
                https://www.youtube.com/watch?v=DA0HK4-eahk      
            </a>
        </div>
    ),
    videoUrl: "URL_DEL_VIDEO_1",
    imagenUrl: "/images/Imagen7.png",
};

export const contenidoDO_2: ContenidoProps = {
    id: "do-cambio-organizacional",
    titulo: "Cambio Organizacional",
    descripcion: (
        <div className="text-white">
            <p className="mb-4">
                La <strong className="font-semibold">gestión del cambio</strong>{" "}
                es un componente clave del Desarrollo Organizacional (DO) y se
                refiere al conjunto de estrategias, herramientas y procesos
                diseñados para facilitar la transición de una organización desde
                un estado actual hacia un estado deseado, minimizando la
                resistencia y maximizando la adopción de nuevas prácticas.
            </p>
            <h2 className="text-xl font-semibold mb-2">
                1. Proceso de Cambio Organizacional
            </h2>
            <p className="mb-4">
                El cambio en las organizaciones sigue etapas estructuradas para
                garantizar su éxito. Algunos modelos clásicos son:
            </p>
            <h3 className="text-lg font-semibold mb-2">
                A. Modelo de Lewin (3 etapas)
            </h3>
            <ul className="list-disc list-inside mb-4">
                <li>
                    <strong className="font-semibold">
                        Descongelamiento (Unfreeze):
                    </strong>
                    <ul className="list-disc list-inside ml-4">
                        <li>Crear conciencia de la necesidad de cambio.</li>
                        <li>Romper con viejos hábitos y estructuras.</li>
                        <li>Comunicar los beneficios y urgencia del cambio.</li>
                    </ul>
                </li>
                <li>
                    <strong className="font-semibold">Cambio (Change):</strong>
                    <ul className="list-disc list-inside ml-4">
                        <li>
                            Implementar nuevas políticas, tecnologías o
                            estructuras.
                        </li>
                        <li>
                            Capacitar al personal y fomentar nuevos
                            comportamientos.
                        </li>
                        <li>Probar pilotos y ajustar estrategias.</li>
                    </ul>
                </li>
                <li>
                    <strong className="font-semibold">
                        Recongelamiento (Refreeze):
                    </strong>
                    <ul className="list-disc list-inside ml-4">
                        <li>
                            Estabilizar los cambios (normas, cultura, sistemas).
                        </li>
                        <li>
                            Reforzar los nuevos comportamientos con incentivos.
                        </li>
                    </ul>
                </li>
            </ul>
            <h3 className="text-lg font-semibold mb-2">
                B. Modelo de Kotter (8 pasos)
            </h3>
            <ul className="list-decimal list-inside mb-4">
                <li>Crear sentido de urgencia.</li>
                <li>Formar una coalición guía (líderes comprometidos).</li>
                <li>Desarrollar una visión clara.</li>
                <li>Comunicar la visión ampliamente.</li>
                <li>Eliminar obstáculos.</li>
                <li>Generar victorias tempranas (éxitos rápidos).</li>
                <li>Consolidar ganancias y profundizar cambios.</li>
                <li>Anclar el cambio en la cultura.</li>
            </ul>
            <h3 className="text-lg font-semibold mb-2">
                C. Modelo ADKAR (Prosci)
            </h3>
            <p className="mb-4">Enfoque individual para el cambio:</p>
            <ul className="list-disc list-inside mb-4">
                <li>Awareness (Conciencia del cambio).</li>
                <li>Desire (Deseo de participar).</li>
                <li>Knowledge (Conocimiento para cambiar).</li>
                <li>Ability (Habilidad para implementar).</li>
                <li>Reinforcement (Refuerzo sostenible).</li>
            </ul>
            <h2 className="text-xl font-semibold mb-2">
                2. Gestión del Cambio: Estrategias Clave
            </h2>
            <p className="mb-4">
                Para que el cambio sea exitoso, se requieren acciones
                específicas:
            </p>
            <h3 className="text-lg font-semibold mb-2">
                A. Diagnóstico Inicial
            </h3>
            <ul className="list-disc list-inside mb-4">
                <li>
                    Análisis FODA (Fortalezas, Oportunidades, Debilidades,
                    Amenazas).
                </li>
                <li>Encuestas de clima laboral.</li>
                <li>
                    Identificación de resistencias (ej.: miedo al fracaso, falta
                    de información).
                </li>
            </ul>
            <h3 className="text-lg font-semibold mb-2">
                B. Comunicación Efectiva
            </h3>
            <ul className="list-disc list-inside mb-4">
                <li>
                    Transparencia sobre los motivos y beneficios del cambio.
                </li>
                <li>Canales abiertos para preguntas y feedback.</li>
                <li>
                    Mensajes adaptados a diferentes audiencias (ej.: empleados,
                    gerentes).
                </li>
            </ul>
            <h3 className="text-lg font-semibold mb-2">
                C. Participación y Liderazgo
            </h3>
            <ul className="list-disc list-inside mb-4">
                <li>Involucrar a los empleados en el diseño del cambio.</li>
                <li>Formar "campeones del cambio" (líderes influyentes).</li>
                <li>
                    Capacitar en nuevas habilidades (ej.: digitalización,
                    trabajo en equipo).
                </li>
            </ul>
            <h3 className="text-lg font-semibold mb-2">
                D. Manejo de Resistencia
            </h3>
            <ul className="list-disc list-inside mb-4">
                <li>
                    Causas comunes: miedo a lo desconocido, pérdida de control,
                    sobrecarga laboral.
                </li>
                <li>
                    Soluciones:
                    <ul className="list-disc list-inside ml-4">
                        <li>Escuchar preocupaciones.</li>
                        <li>Mostrar ejemplos de éxito.</li>
                        <li>Ofrecer apoyo psicológico (ej.: mentoring).</li>
                    </ul>
                </li>
            </ul>
            <h3 className="text-lg font-semibold mb-2">
                E. Evaluación y Ajuste
            </h3>
            <ul className="list-disc list-inside mb-4">
                <li>
                    Métricas de éxito (ej.: productividad, satisfacción
                    laboral).
                </li>
                <li>
                    Retroalimentación continua (encuestas post-implementación).
                </li>
                <li>Flexibilidad para corregir rumbo.</li>
            </ul>
            <h2 className="text-xl font-semibold mb-2">3. Ejemplo Práctico</h2>
            <p className="mb-4">
                Caso: Digitalización en una empresa tradicional
            </p>
            <ul className="list-disc list-inside mb-4">
                <li>
                    <span className="font-semibold">Diagnóstico:</span> La
                    competencia usa IA, pero la empresa sigue con procesos
                    manuales.
                </li>
                <li>
                    <span className="font-semibold">Comunicación:</span>{" "}
                    Reuniones para explicar la necesidad de cambiar.
                </li>
                <li>
                    <span className="font-semibold">Capacitación:</span> Cursos
                    en herramientas digitales.
                </li>
                <li>
                    <span className="font-semibold">Piloto:</span> Un
                    departamento prueba un nuevo software.
                </li>
                <li>
                    <span className="font-semibold">Ajuste:</span> Corregir
                    errores antes de escalar.
                </li>
                <li>
                    <span className="font-semibold">Institucionalización:</span>{" "}
                    Integrar la digitalización en la cultura.
                </li>
            </ul>
            <h2 className="text-xl font-semibold mb-2">
                4. Errores Comunes en la Gestión del Cambio
            </h2>
            <ul className="list-disc list-inside mb-4">
                <li>
                    <span className="font-semibold">
                        ❌ Falta de comunicación clara
                    </span>{" "}
                    → Rumores y resistencia.
                </li>
                <li>
                    <span className="font-semibold">
                        ❌ Ignorar la cultura organizacional
                    </span>{" "}
                    → El cambio no "pega".
                </li>
                <li>
                    <span className="font-semibold">
                        ❌ No medir resultados
                    </span>{" "}
                    → No se sabe si funciona.
                </li>
                <li>
                    <span className="font-semibold">
                        ❌ Apresurar el proceso
                    </span>{" "}
                    → Estrés y rechazo.
                </li>
            </ul>
            <h2 className="text-xl font-semibold mb-2">Conclusión</h2>
            <p className="mb-4">
                La gestión del cambio es un proceso estructurado que requiere
                liderazgo, comunicación y adaptabilidad. Cuando se maneja bien,
                lleva a organizaciones más innovadoras, competitivas y humanas.
            </p>
            <p>
                <span className="font-semibold">
                    Quieres saber mas del tema:
                </span>
            </p>
            <a
                href="https://youtu.be/q7-8HY2rE3A"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline">
                https://youtu.be/q7-8HY2rE3A
            </a>
        </div>
    ),
    videoUrl: "URL_DEL_VIDEO_2",
    imagenUrl: "/images/Imagen6.png",
};

export const contenidoDO_3: ContenidoProps = {
    id: "do-fases",
    titulo: "Fases del Desarrollo Organizacional",
    descripcion: (
        <div className="text-white">
            <p className="mb-4">
                Etapas y Metodologías del Proceso de Desarrollo Organizacional
                (DO)
            </p>
            <p className="mb-4">
                El{" "}
                <strong className="font-semibold">
                    Desarrollo Organizacional (DO)
                </strong>{" "}
                es un proceso estructurado que sigue fases específicas para
                lograr cambios efectivos y sostenibles en una organización. A
                continuación, se detallan las etapas clave y las metodologías
                más utilizadas en su implementación.
            </p>
            <h2 className="text-xl font-semibold mb-2">
                1. Etapas del Proceso de Desarrollo Organizacional
            </h2>
            <h3 className="text-lg font-semibold mb-2">
                1. Diagnóstico Organizacional
            </h3>
            <ul className="list-disc list-inside mb-4">
                <li>
                    <span className="font-semibold">Objetivo:</span> Identificar
                    problemas, oportunidades y áreas de mejora.
                </li>
                <li>
                    <span className="font-semibold">Herramientas:</span>
                    <ul className="list-disc list-inside ml-4">
                        <li>Encuestas de clima laboral.</li>
                        <li>Entrevistas con empleados y líderes.</li>
                        <li>
                            Análisis FODA (Fortalezas, Oportunidades,
                            Debilidades, Amenazas).
                        </li>
                        <li>Observación directa de procesos.</li>
                    </ul>
                </li>
            </ul>
            <h3 className="text-lg font-semibold mb-2">
                2. Planificación del Cambio
            </h3>
            <ul className="list-disc list-inside mb-4">
                <li>
                    <span className="font-semibold">Objetivo:</span> Diseñar
                    estrategias para abordar los problemas detectados.
                </li>
                <li>
                    <span className="font-semibold">Acciones clave:</span>
                    <ul className="list-disc list-inside ml-4">
                        <li>
                            Establecer objetivos SMART (Específicos, Medibles,
                            Alcanzables, Relevantes, Temporales).
                        </li>
                        <li>
                            Seleccionar metodologías de intervención (ej.: Team
                            Building, Coaching, Reingeniería).
                        </li>
                        <li>Definir métricas de éxito (KPI’s).</li>
                    </ul>
                </li>
            </ul>
            <h3 className="text-lg font-semibold mb-2">
                3. Implementación de Intervenciones
            </h3>
            <ul className="list-disc list-inside mb-4">
                <li>
                    <span className="font-semibold">Objetivo:</span> Ejecutar
                    acciones para mejorar la organización.
                </li>
                <li>
                    <span className="font-semibold">Enfoques comunes:</span>
                    <ul className="list-disc list-inside ml-4">
                        <li>
                            Cambios en la estructura: Rediseño de roles,
                            departamentos o jerarquías.
                        </li>
                        <li>
                            Desarrollo de personas: Capacitación, mentoring,
                            liderazgo participativo.
                        </li>
                        <li>
                            Cultura organizacional: Programas de valores,
                            comunicación interna, reconocimiento.
                        </li>
                        <li>
                            Tecnología: Digitalización, automatización de
                            procesos.
                        </li>
                    </ul>
                </li>
            </ul>
            <h3 className="text-lg font-semibold mb-2">
                4. Evaluación y Retroalimentación
            </h3>
            <ul className="list-disc list-inside mb-4">
                <li>
                    <span className="font-semibold">Objetivo:</span> Medir
                    resultados y ajustar estrategias.
                </li>
                <li>
                    <span className="font-semibold">Métodos:</span>
                    <ul className="list-disc list-inside ml-4">
                        <li>Encuestas post-intervención.</li>
                        <li>
                            Análisis de productividad, rotación, clima laboral.
                        </li>
                        <li>Reuniones de feedback con equipos.</li>
                    </ul>
                </li>
            </ul>
            <h3 className="text-lg font-semibold mb-2">
                5. Institucionalización del Cambio
            </h3>
            <ul className="list-disc list-inside mb-4">
                <li>
                    <span className="font-semibold">Objetivo:</span> Integrar
                    las mejoras a largo plazo en la cultura y procesos.
                </li>
                <li>
                    <span className="font-semibold">Acciones:</span>
                    <ul className="list-disc list-inside ml-4">
                        <li>Documentar nuevas prácticas.</li>
                        <li>Capacitación continua.</li>
                        <li>Reconocimiento a quienes adoptan el cambio.</li>
                    </ul>
                </li>
            </ul>
            <h2 className="text-xl font-semibold mb-2">
                2. Metodologías más Usadas en el DO
            </h2>
            <h3 className="text-lg font-semibold mb-2">
                A. Modelo de Investigación-Acción (Action Research)
            </h3>
            <ul className="list-disc list-inside mb-4">
                <li>
                    <span className="font-semibold">Enfoque:</span> Ciclo
                    iterativo de diagnóstico, acción y evaluación.
                </li>
                <li>
                    <span className="font-semibold">Pasos:</span>
                    <ul className="list-disc list-inside ml-4">
                        <li>Identificar el problema.</li>
                        <li>Recolectar datos.</li>
                        <li>Planear acciones.</li>
                        <li>Implementar cambios.</li>
                        <li>Evaluar resultados.</li>
                        <li>Repetir el proceso.</li>
                    </ul>
                </li>
            </ul>
            <h3 className="text-lg font-semibold mb-2">
                B. Modelo de los 7 Pasos de Lippitt
            </h3>
            <ul className="list-decimal list-inside mb-4">
                <li>Diagnóstico del problema.</li>
                <li>Evaluación de la capacidad de cambio.</li>
                <li>Establecimiento de objetivos.</li>
                <li>Selección de estrategias.</li>
                <li>Implementación.</li>
                <li>Evaluación.</li>
                <li>Generalización y estabilización.</li>
            </ul>
            <h3 className="text-lg font-semibold mb-2">
                C. Metodología Appreciative Inquiry (AI)
            </h3>
            <ul className="list-disc list-inside mb-4">
                <li>
                    <span className="font-semibold">Enfoque positivo:</span> Se
                    centra en las fortalezas de la organización en lugar de los
                    problemas.
                </li>
                <li>
                    <span className="font-semibold">Fases (4-D):</span>
                    <ul className="list-disc list-inside ml-4">
                        <li>Discover (Descubrir lo que funciona bien).</li>
                        <li>Dream (Imaginar el futuro ideal).</li>
                        <li>Design (Diseñar estrategias).</li>
                        <li>Destiny (Implementar y sostener).</li>
                    </ul>
                </li>
            </ul>
            <h3 className="text-lg font-semibold mb-2">D. Six Sigma (DMAIC)</h3>
            <ul className="list-disc list-inside mb-4">
                <li>
                    <span className="font-semibold">
                        Usado para mejorar procesos:
                    </span>
                    <ul className="list-disc list-inside ml-4">
                        <li>Define (Definir el problema).</li>
                        <li>Measure (Medir variables clave).</li>
                        <li>Analyze (Analizar causas raíz).</li>
                        <li>Improve (Implementar mejoras).</li>
                        <li>Control (Monitorear resultados).</li>
                    </ul>
                </li>
            </ul>
            <h3 className="text-lg font-semibold mb-2">
                E. Agile Organizational Development
            </h3>
            <ul className="list-disc list-inside mb-4">
                <li>
                    <span className="font-semibold">
                        Inspirado en metodologías ágiles:
                    </span>
                    <ul className="list-disc list-inside ml-4">
                        <li>Trabajo por sprints (ciclos cortos).</li>
                        <li>Equipos multidisciplinarios.</li>
                        <li>Retroalimentación constante.</li>
                    </ul>
                </li>
            </ul>
            <h2 className="text-xl font-semibold mb-2">
                3. Ejemplo de Aplicación Práctica
            </h2>
            <p className="mb-4">
                Caso: Mejora de la comunicación en una empresa
            </p>
            <ul className="list-disc list-inside mb-4">
                <li>
                    <span className="font-semibold">Diagnóstico:</span>{" "}
                    Encuestas revelan falta de alineación entre áreas.
                </li>
                <li>
                    <span className="font-semibold">Planificación:</span>{" "}
                    Talleres de Team Building y nueva plataforma digital.
                </li>
                <li>
                    <span className="font-semibold">Implementación:</span>{" "}
                    Capacitación en comunicación asertiva.
                </li>
                <li>
                    <span className="font-semibold">Evaluación:</span> 80% de
                    empleados reportan mejor colaboración.
                </li>
                <li>
                    <span className="font-semibold">Institucionalización:</span>{" "}
                    Reuniones semanales interdepartamentales.
                </li>
            </ul>
            <h2 className="text-xl font-semibold mb-2">
                4. Factores Críticos de Éxito
            </h2>
            <ul className="list-disc list-inside mb-4">
                <li>✔ Compromiso de la alta dirección.</li>
                <li>✔ Participación activa de los empleados.</li>
                <li>✔ Comunicación clara y transparente.</li>
                <li>✔ Flexibilidad para ajustar estrategias.</li>
                <li>✔ Medición continua de resultados.</li>
            </ul>
            <h2 className="text-xl font-semibold mb-2">Conclusión</h2>
            <p className="mb-4">
                El DO es un proceso cíclico y estructurado que combina
                diagnóstico, planificación, acción y evaluación. Las
                metodologías varían según las necesidades, pero todas buscan
                transformar la organización de manera sostenible.
            </p>
            <p>
                <span className="font-semibold">
                    Quieres saber mas del tema:
                </span>
            </p>
            <a
                href="https://www.youtube.com/watch?v=spMVae5PPSk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline">
                https://www.youtube.com/watch?v=spMVae5PPSk
            </a>
        </div>
    ),
    videoUrl: "URL_DEL_VIDEO_3",
    imagenUrl: "/images/Imagen5.png",
};

export const contenidoDO_4: ContenidoProps = {
    id: "do-historia",
    titulo: "Historia del Desarrollo Organizacional",
    descripcion: (
        <div className="text-white">
            <p className="mb-4">
                El Desarrollo Organizacional (DO) surgió como una disciplina en
                la década de 1950-1960, fusionando teorías de la psicología,
                sociología, gestión empresarial y dinámica de grupos. Su
                evolución está ligada a la necesidad de las organizaciones de
                adaptarse a entornos cambiantes y mejorar el bienestar laboral.
            </p>
            <h2 className="text-xl font-semibold mb-2">
                1. Antecedentes y Orígenes
            </h2>
            <h3 className="text-lg font-semibold mb-2">
                Década de 1920-1940: Influencias Tempranas
            </h3>
            <ul className="list-disc list-inside mb-4">
                <li>
                    <strong className="font-semibold">
                        Elton Mayo (Experimentos Hawthorne, 1924-1932):
                    </strong>
                    <ul className="list-disc list-inside ml-4">
                        <li>
                            Demostró que el factor humano (atención, motivación,
                            relaciones sociales) influye más en la productividad
                            que las condiciones físicas.
                        </li>
                        <li>Base para la Teoría de las Relaciones Humanas.</li>
                    </ul>
                </li>
                <li>
                    <strong className="font-semibold">
                        Kurt Lewin (Años 1940):
                    </strong>
                    <ul className="list-disc list-inside ml-4">
                        <li>
                            Padre del DO moderno y de la dinámica de grupos.
                        </li>
                        <li>
                            Introdujo conceptos clave como:
                            <ul className="list-disc list-inside ml-4">
                                <li>
                                    Cambio en 3 etapas
                                    (Descongelamiento-Cambio-Recongelamiento).
                                </li>
                                <li>
                                    Investigación-Acción (ciclo de diagnóstico e
                                    intervención).
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
            <h2 className="text-xl font-semibold mb-2">
                2. Década de 1950-1960: Nacimiento del DO
            </h2>
            <p className="mb-4">
                En esta etapa, el DO se consolidó como disciplina académica y
                práctica.
            </p>
            <h3 className="text-lg font-semibold mb-2">Pioneros Clave</h3>
            <ul className="list-disc list-inside mb-4">
                <li>
                    <strong className="font-semibold">
                        Douglas McGregor (Teoría X y Y, 1960):
                    </strong>
                    <ul className="list-disc list-inside ml-4">
                        <li>
                            Teoría X: Los empleados son perezosos y necesitan
                            control.
                        </li>
                        <li>
                            Teoría Y: Los empleados son creativos y se
                            automotivan si se les da autonomía.
                        </li>
                        <li>
                            Su trabajo impulsó modelos de liderazgo
                            participativo.
                        </li>
                    </ul>
                </li>
                <li>
                    <strong className="font-semibold">
                        Rensis Likert (Escala de Likert, 1961):
                    </strong>
                    <ul className="list-disc list-inside ml-4">
                        <li>
                            Estudió estilos de liderazgo y su impacto en la
                            eficacia organizacional.
                        </li>
                        <li>
                            Promovió el modelo de organizaciones participativas
                            (Sistema IV).
                        </li>
                    </ul>
                </li>
                <li>
                    <strong className="font-semibold">
                        Chris Argyris (Teoría del Aprendizaje Organizacional,
                        1957):
                    </strong>
                    <ul className="list-disc list-inside ml-4">
                        <li>
                            Concepto de{" "}
                            <strong className="font-semibold">
                                "Single-Loop vs. Double-Loop Learning"
                            </strong>
                            :
                            <ul className="list-disc list-inside ml-4">
                                <li>
                                    Single-Loop: Corregir errores sin cuestionar
                                    normas.
                                </li>
                                <li>
                                    Double-Loop: Revisar supuestos y transformar
                                    la organización.
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <strong className="font-semibold">
                        Richard Beckhard (Fundador del término "DO", 1969):
                    </strong>
                    <ul className="list-disc list-inside ml-4">
                        <li>
                            Definición clásica: "Esfuerzo planificado y
                            sostenido para mejorar la salud organizacional
                            mediante intervenciones en procesos, estructuras y
                            cultura".
                        </li>
                    </ul>
                </li>
            </ul>
            <h2 className="text-xl font-semibold mb-2">
                3. Década de 1970-1980: Expansión y Enfoques Sistémicos
            </h2>
            <p className="mb-4">El DO incorporó teorías más complejas:</p>
            <ul className="list-disc list-inside mb-4">
                <li>
                    <strong className="font-semibold">Warren Bennis:</strong>
                    <ul className="list-disc list-inside ml-4">
                        <li>
                            Estudió el liderazgo transformacional y la
                            adaptabilidad organizacional.
                        </li>
                    </ul>
                </li>
                <li>
                    <strong className="font-semibold">Edgar Schein:</strong>
                    <ul className="list-disc list-inside ml-4">
                        <li>
                            Analizó la cultura organizacional y procesos de
                            cambio.
                        </li>
                        <li>
                            Modelo de "Consultoría de Procesos" (facilitación
                            grupal).
                        </li>
                    </ul>
                </li>
                <li>
                    <strong className="font-semibold">
                        Peter Senge (Años 1990):
                    </strong>
                    <ul className="list-disc list-inside ml-4">
                        <li>
                            Popularizó el concepto de{" "}
                            <strong className="font-semibold">
                                "Organizaciones que Aprenden"
                            </strong>{" "}
                            (The Fifth Discipline).
                        </li>
                    </ul>
                </li>
            </ul>
            <h2 className="text-xl font-semibold mb-2">
                4. Década de 1990-Presente: Innovación y Globalización
            </h2>
            <ul className="list-disc list-inside mb-4">
                <li>
                    Enfoque en agilidad y digitalización: Metodologías como
                    Agile y Lean.
                </li>
                <li>
                    Diversidad e inclusión: Integración de equipos
                    multiculturales.
                </li>
                <li>
                    Sostenibilidad: DO alineado con responsabilidad social
                    corporativa (RSC).
                </li>
            </ul>
            <h2 className="text-xl font-semibold mb-2">
                5. Evolución de las Metodologías
            </h2>
            <table className="table-auto border-collapse border border-gray-400 mb-4">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border border-gray-400 px-4 py-2">
                            Década
                        </th>
                        <th className="border border-gray-400 px-4 py-2">
                            Enfoque Principal
                        </th>
                        <th className="border border-gray-400 px-4 py-2">
                            Contribuyentes Clave
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-gray-400 px-4 py-2">
                            1920-1940
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                            Relaciones Humanas
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                            Elton Mayo, Kurt Lewin
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-gray-400 px-4 py-2">
                            1950-1960
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                            Dinámica de Grupos
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                            McGregor, Likert, Argyris
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-gray-400 px-4 py-2">
                            1970-1980
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                            Cultura y Liderazgo
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                            Schein, Bennis
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-gray-400 px-4 py-2">
                            1990-2000
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                            Aprendizaje Organizacional
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                            Peter Senge
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-gray-400 px-4 py-2">
                            2000-act.
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                            Agilidad y Transformación Digital
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                            Innovadores en Agile/Lean
                        </td>
                    </tr>
                </tbody>
            </table>
            <h2 className="text-xl font-semibold mb-2">
                6. Caso Histórico: El Proyecto Tavistock (1950s)
            </h2>
            <ul className="list-disc list-inside mb-4">
                <li>
                    <strong className="font-semibold">Institución:</strong>{" "}
                    Tavistock Institute (Londres).
                </li>
                <li>
                    <strong className="font-semibold">Aportación:</strong>{" "}
                    Demostró que las estructuras organizacionales afectan el
                    comportamiento humano.
                </li>
                <li>
                    <strong className="font-semibold">Método:</strong>{" "}
                    Intervenciones en sistemas sociotécnicos (equilibrio entre
                    tecnología y personas).
                </li>
            </ul>
            <h2 className="text-xl font-semibold mb-2">Conclusión</h2>
            <p className="mb-4">
                El DO evolucionó desde estudios de motivación y grupos hasta
                enfoques sistémicos y digitales. Sus pioneros sentaron las bases
                para entender que las organizaciones son sistemas vivos que
                requieren adaptación constante.
            </p>
            <p>
                <span className="font-semibold">
                    Quieres saber mas del tema:
                </span>
            </p>
            <a
                href="https://www.youtube.com/watch?v=fghGiqphAxI"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline">
                https://www.youtube.com/watch?v=fghGiqphAxI
            </a>
        </div>
    ),
    videoUrl: "URL_DEL_VIDEO_4",
    imagenUrl: "/images/Imagen4.png",
};

export const contenidoDO_5: ContenidoProps = {
    id: "do-enfoques-clasicos",
    titulo: "Enfoques Clásicos",
    descripcion: (
        <div className="text-white">
            <p className="mb-4">
                Teorías y Enfoques Tradicionales del Desarrollo Organizacional
                (DO)
            </p>
            <p className="mb-4">
                El **Desarrollo Organizacional (DO)** se basa en teorías
                clásicas que surgieron entre los años 1940 y 1980, enfocadas en
                mejorar la eficiencia, clima laboral y adaptabilidad de las
                organizaciones. Estas teorías sentaron las bases de la
                disciplina y siguen siendo relevantes hoy.
            </p>
            <h2 className="text-xl font-semibold mb-2">
                1. Teorías Clásicas del DO
            </h2>
            <h3 className="text-lg font-semibold mb-2">
                A. Teoría de las Relaciones Humanas (Elton Mayo, 1920-1930)
            </h3>
            <ul className="list-disc list-inside mb-4">
                <li>
                    <span className="font-semibold">Enfoque:</span> Las
                    relaciones sociales y la motivación psicológica influyen más
                    en la productividad que las condiciones físicas.
                </li>
                <li>
                    <span className="font-semibold">Aportes clave:</span>
                    <ul className="list-disc list-inside ml-4">
                        <li>
                            Experimentos Hawthorne: Mostraron que la atención a
                            los trabajadores mejora su rendimiento.
                        </li>
                        <li>
                            Importancia de la comunicación y el trabajo en
                            equipo.
                        </li>
                    </ul>
                </li>
            </ul>
            <h3 className="text-lg font-semibold mb-2">
                B. Teoría de los Sistemas Sociales (Kurt Lewin, 1940s)
            </h3>
            <ul className="list-disc list-inside mb-4">
                <li>
                    <span className="font-semibold">Enfoque:</span> Las
                    organizaciones son sistemas dinámicos donde interactúan
                    personas, estructuras y tecnología.
                </li>
                <li>
                    <span className="font-semibold">Conceptos clave:</span>
                    <ul className="list-disc list-inside ml-4">
                        <li>
                            Campo de fuerzas: Factores que facilitan o resisten
                            el cambio.
                        </li>
                        <li>
                            Investigación-Acción: Ciclo de diagnóstico,
                            intervención y evaluación.
                        </li>
                    </ul>
                </li>
            </ul>
            <h3 className="text-lg font-semibold mb-2">
                C. Teoría X y Teoría Y (Douglas McGregor, 1960)
            </h3>
            <ul className="list-disc list-inside mb-4">
                <li>
                    <span className="font-semibold">Enfoque:</span> Dos visiones
                    opuestas sobre la naturaleza humana en el trabajo:
                    <ul className="list-disc list-inside ml-4">
                        <li>
                            Teoría X: Los empleados son perezosos y necesitan
                            supervisión estricta.
                        </li>
                        <li>
                            Teoría Y: Los empleados son creativos y se
                            automotivan si se les da autonomía.
                        </li>
                    </ul>
                </li>
                <li>
                    <span className="font-semibold">Impacto en el DO:</span>{" "}
                    Promovió estilos de liderazgo participativo.
                </li>
            </ul>
            <h3 className="text-lg font-semibold mb-2">
                D. Modelo de Likert (Rensis Likert, 1961)
            </h3>
            <ul className="list-disc list-inside mb-4">
                <li>
                    <span className="font-semibold">Enfoque:</span> Clasificó
                    organizaciones en 4 sistemas de gestión:
                    <ul className="list-disc list-inside ml-4">
                        <li>
                            Autoritario-exploitador (decisión centralizada).
                        </li>
                        <li>
                            Autoritario-benevolente (recompensas pero poco
                            empowerment).
                        </li>
                        <li>Consultivo (comunicación bidireccional).</li>
                        <li>Participativo (equipos autodirigidos).</li>
                    </ul>
                </li>
                <li>
                    <span className="font-semibold">Recomendación:</span> Las
                    empresas deben migrar al Sistema 4 para mayor eficacia.
                </li>
            </ul>
            <h3 className="text-lg font-semibold mb-2">
                E. Teoría del Aprendizaje Organizacional (Chris Argyris, 1970s)
            </h3>
            <ul className="list-disc list-inside mb-4">
                <li>
                    <span className="font-semibold">Enfoque:</span> Las
                    organizaciones deben aprender a adaptarse y cuestionar sus
                    normas.
                </li>
                <li>
                    <span className="font-semibold">Conceptos clave:</span>
                    <ul className="list-disc list-inside ml-4">
                        <li>
                            Single-Loop Learning: Corregir errores sin cambiar
                            procesos.
                        </li>
                        <li>
                            Double-Loop Learning: Revisar supuestos y
                            transformar la organización.
                        </li>
                    </ul>
                </li>
            </ul>
            <h2 className="text-xl font-semibold mb-2">
                2. Enfoques Tradicionales de Intervención en DO
            </h2>
            <h3 className="text-lg font-semibold mb-2">
                A. Desarrollo de Equipos (Team Building)
            </h3>
            <ul className="list-disc list-inside mb-4">
                <li>
                    <span className="font-semibold">Objetivo:</span> Mejorar la
                    colaboración y comunicación en grupos.
                </li>
                <li>
                    <span className="font-semibold">Técnicas:</span>
                    <ul className="list-disc list-inside ml-4">
                        <li>Talleres de roles y responsabilidades.</li>
                        <li>Dinámicas de retroalimentación (feedback).</li>
                    </ul>
                </li>
            </ul>
            <h3 className="text-lg font-semibold mb-2">
                B. Encuestas de Retroalimentación (Survey Feedback)
            </h3>
            <ul className="list-disc list-inside mb-4">
                <li>
                    <span className="font-semibold">Método:</span>
                    <ul className="list-disc list-inside ml-4">
                        <li>Recoger datos mediante encuestas anónimas.</li>
                        <li>Analizar resultados con equipos.</li>
                        <li>Implementar cambios basados en insights.</li>
                    </ul>
                </li>
                <li>
                    <span className="font-semibold">Ejemplo:</span> Medir clima
                    laboral y ajustar políticas.
                </li>
            </ul>
            <h3 className="text-lg font-semibold mb-2">
                C. Consultoría de Procesos (Edgar Schein, 1960s)
            </h3>
            <ul className="list-disc list-inside mb-4">
                <li>
                    <span className="font-semibold">Enfoque:</span> Mejorar cómo
                    se hacen las cosas (procesos, comunicación, toma de
                    decisiones).
                </li>
                <li>
                    <span className="font-semibold">Herramientas:</span>
                    <ul className="list-disc list-inside ml-4">
                        <li>Observación de reuniones.</li>
                        <li>Facilitación de conflictos.</li>
                    </ul>
                </li>
            </ul>
            <h3 className="text-lg font-semibold mb-2">
                D. Grid Gerencial (Blake & Mouton, 1964)
            </h3>
            <ul className="list-disc list-inside mb-4">
                <li>
                    <span className="font-semibold">Modelo:</span> Matriz que
                    evalúa líderes en dos ejes:
                    <ul className="list-disc list-inside ml-4">
                        <li>Preocupación por las personas (eje Y).</li>
                        <li>Preocupación por la producción (eje X).</li>
                    </ul>
                </li>
                <li>
                    <span className="font-semibold">Estilos de liderazgo:</span>
                    <ul className="list-disc list-inside ml-4">
                        <li>1,1 (Empobrecido): Mínimo esfuerzo.</li>
                        <li>
                            9,1 (Autoritario): Enfoque en resultados, no en
                            personas.
                        </li>
                        <li>
                            1,9 (Club campestre): Ambiente amistoso, pero baja
                            productividad.
                        </li>
                        <li>
                            9,9 (Equipo): Alto rendimiento y relaciones sólidas
                            (ideal).
                        </li>
                    </ul>
                </li>
            </ul>
            <h3 className="text-lg font-semibold mb-2">
                E. Análisis Transaccional (Eric Berne, 1960s)
            </h3>
            <ul className="list-disc list-inside mb-4">
                <li>
                    <span className="font-semibold">Enfoque:</span> Mejorar las
                    interacciones humanas en el trabajo.
                </li>
                <li>
                    <span className="font-semibold">Estados del Yo:</span>
                    <ul className="list-disc list-inside ml-4">
                        <li>Padre (normativo).</li>
                        <li>Adulto (racional).</li>
                        <li>Niño (emocional).</li>
                    </ul>
                </li>
                <li>
                    <span className="font-semibold">Aplicación:</span> Reducir
                    conflictos mediante comunicación asertiva.
                </li>
            </ul>
            <h2 className="text-xl font-semibold mb-2">
                3. Caso de Estudio: General Electric (1950s-1960s)
            </h2>
            <ul className="list-disc list-inside mb-4">
                <li>
                    <span className="font-semibold">Problema:</span> Burocracia
                    excesiva y baja innovación.
                </li>
                <li>
                    <span className="font-semibold">Solución:</span>{" "}
                    Implementación de Grid Gerencial (Blake & Mouton).
                </li>
                <li>
                    <span className="font-semibold">Resultado:</span> Mejora en
                    trabajo en equipo y eficiencia operativa.
                </li>
            </ul>
            <h2 className="text-xl font-semibold mb-2">
                4. Críticas a los Enfoques Tradicionales
            </h2>
            <ul className="list-disc list-inside mb-4">
                <li>
                    Demasiado centrados en lo humano: Algunos ignoran factores
                    estructurales y tecnológicos.
                </li>
                <li>
                    Rigidez: Modelos como el Grid Gerencial pueden ser
                    simplistas.
                </li>
                <li>
                    Contexto cambiante: Surgieron nuevas necesidades (ej.:
                    digitalización, globalización).
                </li>
            </ul>
            <h2 className="text-xl font-semibold mb-2">Conclusión</h2>
            <p className="mb-4">
                Las teorías tradicionales del DO destacan la importancia de:
            </p>
            <ul className="list-disc list-inside mb-4">
                <li>✅ Las relaciones humanas.</li>
                <li>✅ El liderazgo participativo.</li>
                <li>✅ El aprendizaje continuo.</li>
            </ul>
            <p className="mb-4">
                Aunque han evolucionado, siguen siendo la base de prácticas
                modernas como el coaching, la agilidad y la transformación
                digital.
            </p>
            <p>
                <span className="font-semibold">
                    ¿Quieres saber más del tema?
                </span>
            </p>
            <a
                href="https://www.youtube.com/watch?v=qn5OgHivt-g&pp=0gcJCdgAo7VqN5tD"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline">
                https://www.youtube.com/watch?v=qn5OgHivt-g&pp=0gcJCdgAo7VqN5tD
            </a>
        </div>
    ),
    videoUrl: "URL_DEL_VIDEO_5", // Placeholder, replace with actual video URL if available
    imagenUrl: "/images/dddddd.jpg", // Placeholder, replace with actual image URL if available
};

export const contenidoDO_6: ContenidoProps = {
    id: "do-estrategia",
    titulo: "Estrategia del Desarrollo Organizacional",
    descripcion: (
        <div className="text-white">
            <p className="mb-4">
                Técnicas y Herramientas de Intervención Organizacional
            </p>
            <p className="mb-4">
                El{" "}
                <strong className="font-semibold">
                    Desarrollo Organizacional (DO)
                </strong>{" "}
                utiliza diversas técnicas para diagnosticar problemas,
                implementar cambios y mejorar el desempeño de una organización.
                Estas herramientas se aplican según las necesidades específicas
                de cada empresa.
            </p>
            <h2 className="text-xl font-semibold mb-2">
                1. Técnicas de Diagnóstico
            </h2>
            <p className="mb-4">
                Antes de intervenir, es clave analizar la situación actual.
            </p>
            <h3 className="text-lg font-semibold mb-2">
                A. Encuestas de Clima Laboral
            </h3>
            <ul className="list-disc list-inside mb-4">
                <li>
                    <span className="font-semibold">Objetivo:</span> Medir
                    satisfacción, comunicación y ambiente de trabajo.
                </li>
                <li>
                    <span className="font-semibold">Herramientas:</span>
                    <ul className="list-disc list-inside ml-4">
                        <li>Cuestionarios anónimos (ej.: Gallup Q12).</li>
                        <li>
                            Plataformas digitales (SurveyMonkey, Google Forms).
                        </li>
                    </ul>
                </li>
            </ul>
            <h3 className="text-lg font-semibold mb-2">
                B. Entrevistas Individuales y Grupales
            </h3>
            <ul className="list-disc list-inside mb-4">
                <li>
                    <span className="font-semibold">Uso:</span> Recoger
                    percepciones de empleados y líderes.
                </li>
                <li>
                    <span className="font-semibold">Ejemplo:</span> Entrevistas
                    estructuradas para identificar resistencias al cambio.
                </li>
            </ul>
            <h3 className="text-lg font-semibold mb-2">C. Análisis FODA</h3>
            <ul className="list-disc list-inside mb-4">
                <li>
                    <span className="font-semibold">Aplicación:</span> Evaluar
                    Fortalezas, Oportunidades, Debilidades y Amenazas.
                </li>
                <li>
                    <span className="font-semibold">Variante:</span> FODA
                    participativo (talleres con equipos).
                </li>
            </ul>
            <h3 className="text-lg font-semibold mb-2">
                D. Mapeo de Procesos (Flowcharts)
            </h3>
            <ul className="list-disc list-inside mb-4">
                <li>
                    <span className="font-semibold">Utilidad:</span> Visualizar
                    flujos de trabajo y cuellos de botella.
                </li>
                <li>
                    <span className="font-semibold">Software:</span> Lucidchart,
                    Microsoft Visio.
                </li>
            </ul>
            <h2 className="text-xl font-semibold mb-2">
                2. Técnicas de Intervención en Personas y Equipos
            </h2>
            <h3 className="text-lg font-semibold mb-2">
                A. Team Building (Construcción de Equipos)
            </h3>
            <ul className="list-disc list-inside mb-4">
                <li>
                    <span className="font-semibold">Objetivo:</span> Mejorar
                    cohesión y colaboración.
                </li>
                <li>
                    <span className="font-semibold">Actividades:</span>
                    <ul className="list-disc list-inside ml-4">
                        <li>
                            Dinámicas de roles (ej.: "El puente del éxito").
                        </li>
                        <li>Retiros fuera de la oficina (outdoor training).</li>
                    </ul>
                </li>
            </ul>
            <h3 className="text-lg font-semibold mb-2">
                B. Coaching y Mentoring
            </h3>
            <ul className="list-disc list-inside mb-4">
                <li>
                    <span className="font-semibold">Coaching:</span> Sesiones
                    individuales para desarrollar habilidades.
                </li>
                <li>
                    <span className="font-semibold">Mentoring:</span> Guía de
                    empleados senior a junior.
                </li>
            </ul>
            <h3 className="text-lg font-semibold mb-2">
                C. Grupos T (Sensibilización Grupal)
            </h3>
            <ul className="list-disc list-inside mb-4">
                <li>
                    <span className="font-semibold">Origen:</span> Kurt Lewin
                    (1940s).
                </li>
                <li>
                    <span className="font-semibold">Enfoque:</span> Mejorar
                    autoconocimiento y dinámicas grupales mediante discusiones
                    abiertas.
                </li>
            </ul>
            <h3 className="text-lg font-semibold mb-2">
                D. Role-Playing (Juego de Roles)
            </h3>
            <ul className="list-disc list-inside mb-4">
                <li>
                    <span className="font-semibold">Uso:</span> Simular
                    conflictos laborales para entrenar soluciones.
                </li>
                <li>
                    <span className="font-semibold">Ejemplo:</span> Practicar
                    manejo de objeciones en ventas.
                </li>
            </ul>
            <h2 className="text-xl font-semibold mb-2">
                3. Técnicas de Intervención en Estructura y Procesos
            </h2>
            <h3 className="text-lg font-semibold mb-2">
                A. Reingeniería de Procesos
            </h3>
            <ul className="list-disc list-inside mb-4">
                <li>
                    <span className="font-semibold">Definición:</span> Rediseñar
                    procesos desde cero para eficiencia.
                </li>
                <li>
                    <span className="font-semibold">Metodología:</span> BPM
                    (Business Process Management).
                </li>
            </ul>
            <h3 className="text-lg font-semibold mb-2">
                B. Rediseño Organizacional
            </h3>
            <ul className="list-disc list-inside mb-4">
                <li>
                    <span className="font-semibold">Enfoques:</span>
                    <ul className="list-disc list-inside ml-4">
                        <li>Estructuras planas (menos jerarquías).</li>
                        <li>
                            Organización por proyectos (equipos
                            multidisciplinarios).
                        </li>
                    </ul>
                </li>
            </ul>
            <h3 className="text-lg font-semibold mb-2">C. Benchmarking</h3>
            <ul className="list-disc list-inside mb-4">
                <li>
                    <span className="font-semibold">Objetivo:</span> Compararse
                    con empresas líderes para adoptar mejores prácticas.
                </li>
            </ul>
            <h3 className="text-lg font-semibold mb-2">D. Six Sigma (DMAIC)</h3>
            <ul className="list-disc list-inside mb-4">
                <li>
                    <span className="font-semibold">Fases:</span> Definir,
                    Medir, Analizar, Mejorar, Controlar.
                </li>
                <li>
                    <span className="font-semibold">Uso:</span> Reducir errores
                    en procesos industriales y servicios.
                </li>
            </ul>
            <h2 className="text-xl font-semibold mb-2">
                4. Técnicas de Cambio Cultural
            </h2>
            <h3 className="text-lg font-semibold mb-2">
                A. Appreciative Inquiry (AI)
            </h3>
            <ul className="list-disc list-inside mb-4">
                <li>
                    <span className="font-semibold">Enfoque:</span> Basado en
                    fortalezas, no en problemas.
                </li>
                <li>
                    <span className="font-semibold">Fases 4-D:</span>
                    <ul className="list-disc list-inside ml-4">
                        <li>Descubrir (qué funciona bien).</li>
                        <li>Soñar (visión ideal).</li>
                        <li>Diseñar (plan estratégico).</li>
                        <li>Destino (implementación).</li>
                    </ul>
                </li>
            </ul>
            <h3 className="text-lg font-semibold mb-2">
                B. Storytelling Organizacional
            </h3>
            <ul className="list-disc list-inside mb-4">
                <li>
                    <span className="font-semibold">Uso:</span> Comunicar
                    valores y visión a través de narrativas.
                </li>
                <li>
                    <span className="font-semibold">Ejemplo:</span> CEO
                    compartiendo historias de éxito en reuniones.
                </li>
            </ul>
            <h3 className="text-lg font-semibold mb-2">
                C. Programas de Reconocimiento
            </h3>
            <ul className="list-disc list-inside mb-4">
                <li>
                    <span className="font-semibold">Herramientas:</span>
                    <ul className="list-disc list-inside ml-4">
                        <li>Sistemas de puntos (ej.: Bonusly).</li>
                        <li>Premios públicos (ej.: "Empleado del mes").</li>
                    </ul>
                </li>
            </ul>
            <h2 className="text-xl font-semibold mb-2">
                5. Técnicas de Gestión del Cambio
            </h2>
            <h3 className="text-lg font-semibold mb-2">
                A. Modelo de los 8 Pasos de Kotter
            </h3>
            <ul className="list-disc list-inside mb-4">
                <li>Crear urgencia.</li>
                <li>Formar una coalición.</li>
                <li>Definir visión.</li>
                <li>Comunicar.</li>
                <li>Eliminar obstáculos.</li>
                <li>Generar victorias rápidas.</li>
                <li>Consolidar.</li>
                <li>Anclar en la cultura.</li>
            </ul>
            <h3 className="text-lg font-semibold mb-2">B. ADKAR (Prosci)</h3>
            <ul className="list-disc list-inside mb-4">
                <li>
                    <span className="font-semibold">Pasos:</span>
                    <ul className="list-disc list-inside ml-4">
                        <li>Conciencia del cambio.</li>
                        <li>Deseo de participar.</li>
                        <li>Conocimiento para cambiar.</li>
                        <li>Habilidad para implementar.</li>
                        <li>Refuerzo sostenible.</li>
                    </ul>
                </li>
            </ul>
            <h3 className="text-lg font-semibold mb-2">
                C. Matriz de Impacto/Esfuerzo
            </h3>
            <ul className="list-disc list-inside mb-4">
                <li>
                    <span className="font-semibold">Uso:</span> Priorizar
                    iniciativas de cambio según su viabilidad.
                </li>
            </ul>
            <h2 className="text-xl font-semibold mb-2">
                6. Herramientas Digitales para el DO
            </h2>
            <table className="table-auto border-collapse border border-gray-400 mb-4">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border border-gray-400 px-4 py-2">
                            Herramienta
                        </th>
                        <th className="border border-gray-400 px-4 py-2">
                            Uso
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-gray-400 px-4 py-2">
                            Slack / Teams
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                            Comunicación interna.
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-gray-400 px-4 py-2">
                            Trello / Asana
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                            Gestión ágil de proyectos.
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-gray-400 px-4 py-2">
                            Tableau / Power BI
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                            Análisis de datos organizacionales.
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-gray-400 px-4 py-2">
                            LMS (Moodle, Udemy)
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                            Capacitación en línea.
                        </td>
                    </tr>
                </tbody>
            </table>
            <h2 className="text-xl font-semibold mb-2">
                7. Caso Práctico: Transformación en una Empresa de Retail
            </h2>
            <ul className="list-disc list-inside mb-4">
                <li>
                    <span className="font-semibold">Problema:</span> Baja
                    colaboración entre áreas.
                </li>
                <li>
                    <span className="font-semibold">Intervenciones:</span>
                    <ul className="list-disc list-inside ml-4">
                        <li>Encuesta de clima → Identificar conflictos.</li>
                        <li>Team Building → Mejorar relaciones.</li>
                        <li>Rediseño de procesos (flujos claros).</li>
                    </ul>
                </li>
                <li>
                    <span className="font-semibold">Resultado:</span> +30% en
                    satisfacción laboral en 6 meses.
                </li>
            </ul>
            <h2 className="text-xl font-semibold mb-2">Conclusión</h2>
            <p className="mb-4">
                Las técnicas de intervención en DO son diversas y deben
                seleccionarse según:
            </p>
            <ul className="list-disc list-inside mb-4">
                <li>🔹 Tipo de problema (cultural, estructural, humano).</li>
                <li>🔹 Recursos disponibles (tiempo, presupuesto).</li>
                <li>🔹 Objetivos estratégicos.</li>
            </ul>
            <p>
                <span className="font-semibold">
                    Quieres saber mas del tema:
                </span>
            </p>
            <a
                href="https://www.youtube.com/watch?v=eO8-rnAbuK8"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline">
                https://www.youtube.com/watch?v=eO8-rnAbuK8
            </a>
        </div>
    ),
    videoUrl: "URL_DEL_VIDEO_6",
    imagenUrl: "/images/nucleo6.webp",
};

export const contenidoDO_7: ContenidoProps = {
    id: "do-diagnostico-investigacion",
    titulo: "Diagnóstico e Investigación",
    descripcion: (
        <div className="text-white">
            <p className="mb-4">
                Métodos de Diagnóstico y Medición de la Salud Organizacional
            </p>
            <p className="mb-4">
                La{" "}
                <strong className="font-semibold">salud organizacional</strong>{" "}
                se refiere a la capacidad de una empresa para funcionar de
                manera eficiente, adaptarse al cambio y mantener un ambiente
                laboral positivo. Para evaluarla, se utilizan métodos
                cuantitativos y cualitativos que analizan cultura, clima
                laboral, estructura, procesos y desempeño.
            </p>
            <h2 className="text-xl font-semibold mb-2">
                1. Métodos Cuantitativos
            </h2>
            <h3 className="text-lg font-semibold mb-2">
                A. Encuestas de Clima Laboral
            </h3>
            <ul className="list-disc list-inside mb-4">
                <li>
                    <span className="font-semibold">Objetivo:</span> Medir la
                    percepción de los empleados sobre:
                    <ul className="list-disc list-inside ml-4">
                        <li>Liderazgo.</li>
                        <li>Comunicación.</li>
                        <li>Satisfacción laboral.</li>
                        <li>Relaciones interpersonales.</li>
                    </ul>
                </li>
                <li>
                    <span className="font-semibold">Herramientas:</span>
                    <ul className="list-disc list-inside ml-4">
                        <li>Gallup Q12 (mide engagement).</li>
                        <li>
                            OCAI (Organizational Culture Assessment Instrument).
                        </li>
                        <li>
                            Cuestionarios personalizados (Google Forms,
                            SurveyMonkey).
                        </li>
                    </ul>
                </li>
            </ul>
            <h3 className="text-lg font-semibold mb-2">
                B. Análisis de KPIs (Indicadores Clave de Desempeño)
            </h3>
            <ul className="list-disc list-inside mb-4">
                <li>
                    <span className="font-semibold">Métricas comunes:</span>
                    <ul className="list-disc list-inside ml-4">
                        <li>Rotación de personal (¿alta deserción?).</li>
                        <li>
                            Productividad (ventas por empleado, tiempo de
                            entrega).
                        </li>
                        <li>
                            Ausentismo laboral (índice de faltas
                            injustificadas).
                        </li>
                        <li>
                            Retroalimentación de clientes (NPS, satisfacción).
                        </li>
                    </ul>
                </li>
            </ul>
            <h3 className="text-lg font-semibold mb-2">
                C. Benchmarking Comparativo
            </h3>
            <ul className="list-disc list-inside mb-4">
                <li>
                    <span className="font-semibold">
                        Comparar métricas con:
                    </span>
                    <ul className="list-disc list-inside ml-4">
                        <li>Estándares de la industria.</li>
                        <li>Empresas líderes en el sector.</li>
                    </ul>
                </li>
            </ul>
            <h2 className="text-xl font-semibold mb-2">
                2. Métodos Cualitativos
            </h2>
            <h3 className="text-lg font-semibold mb-2">
                A. Entrevistas Individuales y Grupales
            </h3>
            <ul className="list-disc list-inside mb-4">
                <li>
                    <span className="font-semibold">Enfoque:</span> Profundizar
                    en problemas específicos.
                </li>
                <li>
                    <span className="font-semibold">Ejemplo:</span>
                    <ul className="list-disc list-inside ml-4">
                        <li>
                            Entrevistas con líderes para evaluar estilos de
                            gestión.
                        </li>
                        <li>
                            Focus groups con empleados sobre obstáculos en
                            procesos.
                        </li>
                    </ul>
                </li>
            </ul>
            <h3 className="text-lg font-semibold mb-2">
                B. Observación Directa (Shadowing)
            </h3>
            <ul className="list-disc list-inside mb-4">
                <li>
                    <span className="font-semibold">Técnica:</span> Analizar
                    comportamientos y dinámicas en el día a día.
                </li>
                <li>
                    <span className="font-semibold">Casos de uso:</span>
                    <ul className="list-disc list-inside ml-4">
                        <li>Identificar cuellos de botella en procesos.</li>
                        <li>Evaluar comunicación en equipos.</li>
                    </ul>
                </li>
            </ul>
            <h3 className="text-lg font-semibold mb-2">
                C. Análisis Documental
            </h3>
            <ul className="list-disc list-inside mb-4">
                <li>
                    <span className="font-semibold">Revisar:</span>
                    <ul className="list-disc list-inside ml-4">
                        <li>Manuales de procedimientos.</li>
                        <li>Informes de desempeño.</li>
                        <li>Registros de reuniones.</li>
                    </ul>
                </li>
            </ul>
            <h2 className="text-xl font-semibold mb-2">
                3. Modelos Integrados de Diagnóstico
            </h2>
            <h3 className="text-lg font-semibold mb-2">
                A. Modelo de los 6 Bloques de Weisbord
            </h3>
            <p className="mb-4">Evalúa seis áreas clave:</p>
            <ul className="list-disc list-inside mb-4">
                <li>Propósito (¿La empresa tiene una misión clara?).</li>
                <li>Estructura (¿La jerarquía es eficiente?).</li>
                <li>Relaciones (¿Hay conflictos entre áreas?).</li>
                <li>Recompensas (¿El sistema de incentivos motiva?).</li>
                <li>Liderazgo (¿Los gerentes inspiran?).</li>
                <li>
                    Mecanismos de ayuda (¿Hay soporte para resolver problemas?).
                </li>
            </ul>
            <h3 className="text-lg font-semibold mb-2">
                B. Diagnóstico SOAR (Strengths, Opportunities, Aspirations,
                Results)
            </h3>
            <ul className="list-disc list-inside mb-4">
                <li>
                    <span className="font-semibold">
                        Alternativa al FODA, con enfoque en potencial y
                        oportunidades.
                    </span>
                    <ul className="list-disc list-inside ml-4">
                        <li>Identificar fortalezas.</li>
                        <li>Explorar oportunidades.</li>
                        <li>Definir aspiraciones.</li>
                        <li>Medir resultados.</li>
                    </ul>
                </li>
            </ul>
            <h3 className="text-lg font-semibold mb-2">
                C. Organizational Health Index (OHI) - McKinsey
            </h3>
            <ul className="list-disc list-inside mb-4">
                <li>
                    <span className="font-semibold">Evalúa 9 dimensiones:</span>
                    <ul className="list-disc list-inside ml-4">
                        <li>Dirección estratégica.</li>
                        <li>Cultura y clima.</li>
                        <li>Estructura organizacional.</li>
                        <li>Liderazgo.</li>
                        <li>Capacidades individuales.</li>
                        <li>Motivación y recompensas.</li>
                        <li>Procesos internos.</li>
                        <li>Sistemas de control.</li>
                        <li>Innovación.</li>
                    </ul>
                </li>
            </ul>
            <h2 className="text-xl font-semibold mb-2">
                4. Herramientas Tecnológicas para el Diagnóstico
            </h2>
            <table className="table-auto border-collapse border border-gray-400 mb-4">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border border-gray-400 px-4 py-2">
                            Herramienta
                        </th>
                        <th className="border border-gray-400 px-4 py-2">
                            Uso
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-gray-400 px-4 py-2">
                            Plataformas de Engagement (Glint, Culture Amp)
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                            Encuestas y análisis de clima laboral.
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-gray-400 px-4 py-2">
                            Software de People Analytics (Workday, SAP
                            SuccessFactors)
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                            Medir rotación, desempeño.
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-gray-400 px-4 py-2">
                            Herramientas de BI (Power BI, Tableau)
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                            Visualización de datos organizacionales.
                        </td>
                    </tr>
                </tbody>
            </table>
            <h2 className="text-xl font-semibold mb-2">
                5. Ejemplo Práctico: Diagnóstico en una Empresa con Baja
                Productividad
            </h2>
            <ul className="list-disc list-inside mb-4">
                <li>
                    <span className="font-semibold">Encuesta de clima:</span>{" "}
                    Revela falta de claridad en roles.
                </li>
                <li>
                    <span className="font-semibold">
                        Entrevistas con equipos:
                    </span>{" "}
                    Identifica duplicación de funciones.
                </li>
                <li>
                    <span className="font-semibold">Análisis de KPIs:</span>{" "}
                    Alta rotación en un departamento clave.
                </li>
                <li>
                    <span className="font-semibold">Solución:</span>
                    <ul className="list-disc list-inside ml-4">
                        <li>Rediseño de estructura organizacional.</li>
                        <li>Programa de capacitación en liderazgo.</li>
                    </ul>
                </li>
            </ul>
            <h2 className="text-xl font-semibold mb-2">
                6. ¿Cómo Interpretar los Resultados?
            </h2>
            <ul className="list-disc list-inside mb-4">
                <li>
                    Comparar datos cuantitativos y cualitativos para validar
                    hallazgos.
                </li>
                <li>
                    Priorizar problemas según impacto (ej.: alta rotación &gt;
                    bajo engagement).
                </li>
                <li>
                    Involucrar a líderes y empleados en la discusión de
                    resultados.
                </li>
            </ul>
            <h2 className="text-xl font-semibold mb-2">Conclusión</h2>
            <p className="mb-4">
                Un diagnóstico preciso de la salud organizacional requiere:
            </p>
            <ul className="list-disc list-inside mb-4">
                <li>
                    ✅ Combinar métodos cuantitativos (encuestas, KPIs) y
                    cualitativos (entrevistas, observación).
                </li>
                <li>✅ Usar modelos estructurados (Weisbord, OHI, SOAR).</li>
                <li>✅ Aplicar tecnología para análisis avanzado.</li>
            </ul>
            <p>
                <span className="font-semibold">
                    Quieres saber mas del tema:
                </span>
            </p>
            <a
                href="https://www.youtube.com/watch?v=fgWwJtm7fgI"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline">
                https://www.youtube.com/watch?v=fgWwJtm7fgI
            </a>
        </div>
    ),
    videoUrl: "URL_DEL_VIDEO_7",
    imagenUrl: "/images/Imagen2.png",
};

export const contenidoDO_8: ContenidoProps = {
    id: "do-funciones-consultor",
    titulo: "Funciones del Consultor",
    descripcion: (
        <div className="text-white">
            <p className="mb-4">
                Roles y Competencias del Consultor en Desarrollo Organizacional
                (DO)
            </p>
            <p className="mb-4">
                El **consultor en DO** es un agente de cambio que ayuda a las
                organizaciones a mejorar su eficiencia, clima laboral y
                adaptabilidad mediante intervenciones estratégicas. Su labor
                combina análisis, facilitación y gestión del cambio.
            </p>
            <h2 className="text-xl font-semibold mb-2">
                1. Roles del Consultor en DO
            </h2>
            <h3 className="text-lg font-semibold mb-2">
                A. Diagnóstico Organizacional
            </h3>
            <ul className="list-disc list-inside mb-4">
                <li>
                    <span className="font-semibold">Función:</span> Identificar
                    problemas y oportunidades mediante:
                    <ul className="list-disc list-inside ml-4">
                        <li>Encuestas, entrevistas y análisis de datos.</li>
                        <li>Evaluación de cultura, estructura y procesos.</li>
                    </ul>
                </li>
                <li>
                    <span className="font-semibold">Ejemplo:</span> Realizar un
                    análisis FODA participativo con equipos.
                </li>
            </ul>
            <h3 className="text-lg font-semibold mb-2">
                B. Facilitador de Procesos Grupales
            </h3>
            <ul className="list-disc list-inside mb-4">
                <li>
                    <span className="font-semibold">Función:</span> Guiar
                    talleres y dinámicas para:
                    <ul className="list-disc list-inside ml-4">
                        <li>Mejorar la comunicación.</li>
                        <li>Resolver conflictos.</li>
                        <li>Fomentar la colaboración.</li>
                    </ul>
                </li>
                <li>
                    <span className="font-semibold">Ejemplo:</span> Implementar
                    team building para cohesionar equipos remotos.
                </li>
            </ul>
            <h3 className="text-lg font-semibold mb-2">
                C. Diseñador de Intervenciones
            </h3>
            <ul className="list-disc list-inside mb-4">
                <li>
                    <span className="font-semibold">Función:</span> Crear
                    estrategias personalizadas para el cambio, como:
                    <ul className="list-disc list-inside ml-4">
                        <li>Programas de liderazgo.</li>
                        <li>Rediseño de procesos.</li>
                        <li>Transformación cultural.</li>
                    </ul>
                </li>
                <li>
                    <span className="font-semibold">Ejemplo:</span> Aplicar
                    Appreciative Inquiry para reforzar fortalezas
                    organizacionales.
                </li>
            </ul>
            <h3 className="text-lg font-semibold mb-2">D. Agente de Cambio</h3>
            <ul className="list-disc list-inside mb-4">
                <li>
                    <span className="font-semibold">Función:</span> Gestionar la
                    transición hacia nuevos modelos, minimizando resistencias.
                </li>
                <li>
                    <span className="font-semibold">Herramientas:</span>
                    <ul className="list-disc list-inside ml-4">
                        <li>Modelo de Kotter (8 pasos).</li>
                        <li>Metodología ADKAR.</li>
                    </ul>
                </li>
                <li>
                    <span className="font-semibold">Ejemplo:</span> Acompañar a
                    una empresa en su digitalización con capacitaciones y
                    soporte continuo.
                </li>
            </ul>
            <h3 className="text-lg font-semibold mb-2">
                E. Coach Organizacional
            </h3>
            <ul className="list-disc list-inside mb-4">
                <li>
                    <span className="font-semibold">Función:</span> Asesorar a
                    líderes y equipos en:
                    <ul className="list-disc list-inside ml-4">
                        <li>
                            Desarrollo de habilidades blandas (liderazgo,
                            comunicación).
                        </li>
                        <li>Alineación con la visión empresarial.</li>
                    </ul>
                </li>
                <li>
                    <span className="font-semibold">Ejemplo:</span> Sesiones de
                    coaching ejecutivo para mejorar la toma de decisiones.
                </li>
            </ul>
            <h2 className="text-xl font-semibold mb-2">
                2. Competencias Clave del Consultor en DO
            </h2>
            <h3 className="text-lg font-semibold mb-2">
                A. Competencias Técnicas
            </h3>
            <table className="table-auto border-collapse border border-gray-400 mb-4">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border border-gray-400 px-4 py-2">
                            Habilidad
                        </th>
                        <th className="border border-gray-400 px-4 py-2">
                            Descripción
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-gray-400 px-4 py-2">
                            Diagnóstico organizacional
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                            Capacidad para analizar cultura, clima y procesos
                            con herramientas validadas (ej.: encuestas, focus
                            groups).
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-gray-400 px-4 py-2">
                            Diseño de intervenciones
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                            Crear planes de acción basados en evidencia (ej.:
                            cambio cultural, reestructuraciones).
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-gray-400 px-4 py-2">
                            Gestión del cambio
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                            Dominio de metodologías como Lewin, Kotter o ADKAR.
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-gray-400 px-4 py-2">
                            Facilitación grupal
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                            Conducir talleres efectivos (ej.: dinámicas de team
                            building, retroalimentación 360°).
                        </td>
                    </tr>
                </tbody>
            </table>
            <h3 className="text-lg font-semibold mb-2">
                B. Competencias Blandas
            </h3>
            <table className="table-auto border-collapse border border-gray-400 mb-4">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border border-gray-400 px-4 py-2">
                            Habilidad
                        </th>
                        <th className="border border-gray-400 px-4 py-2">
                            Por qué es importante
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-gray-400 px-4 py-2">
                            Escucha activa
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                            Para entender necesidades reales de empleados y
                            líderes.
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-gray-400 px-4 py-2">
                            Comunicación asertiva
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                            Transmitir hallazgos y recomendaciones con claridad.
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-gray-400 px-4 py-2">
                            Empatía
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                            Conectar con las emociones y resistencias durante el
                            cambio.
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-gray-400 px-4 py-2">
                            Flexibilidad
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                            Adaptarse a diferentes culturas organizacionales y
                            contextos.
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-gray-400 px-4 py-2">
                            Negociación
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                            Mediar entre intereses contrapuestos (ej.: gerencia
                            vs. colaboradores).
                        </td>
                    </tr>
                </tbody>
            </table>
            <h3 className="text-lg font-semibold mb-2">
                C. Competencias Analíticas
            </h3>
            <ul className="list-disc list-inside mb-4">
                <li>
                    <span className="font-semibold">
                        Interpretación de datos:
                    </span>{" "}
                    Usar métricas (KPIs, encuestas) para tomar decisiones.
                </li>
                <li>
                    <span className="font-semibold">
                        Pensamiento sistémico:
                    </span>{" "}
                    Ver la organización como un todo interconectado.
                </li>
                <li>
                    <span className="font-semibold">
                        Evaluación de impacto:
                    </span>{" "}
                    Medir resultados post-intervención (ej.: aumento de
                    productividad, reducción de rotación).
                </li>
            </ul>
            <h2 className="text-xl font-semibold mb-2">
                3. Diferencias Entre Consultor Interno y Externo
            </h2>
            <table className="table-auto border-collapse border border-gray-400 mb-4">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border border-gray-400 px-4 py-2">
                            Consultor Interno
                        </th>
                        <th className="border border-gray-400 px-4 py-2">
                            Consultor Externo
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-gray-400 px-4 py-2">
                            - Conoce la cultura organizacional.
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                            - Ofrece perspectiva fresca y objetiva.
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-gray-400 px-4 py-2">
                            - Menor resistencia al cambio.
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                            - Mayor independencia para criticar.
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-gray-400 px-4 py-2">
                            - Limitado por jerarquías internas.
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                            - Puede ser percibido como "ajeno".
                        </td>
                    </tr>
                </tbody>
            </table>
            <h2 className="text-xl font-semibold mb-2">
                4. Ejemplo Práctico: Caso de un Consultor en DO
            </h2>
            <ul className="list-disc list-inside mb-4">
                <li>
                    <span className="font-semibold">Situación:</span> Una
                    empresa familiar con baja innovación y conflictos
                    generacionales.
                </li>
                <li>
                    <span className="font-semibold">Intervención:</span>
                    <ul className="list-disc list-inside ml-4">
                        <li>
                            Diagnóstico: Entrevistas revelan falta de alineación
                            estratégica.
                        </li>
                        <li>
                            Talleres: Dinámicas para mejorar comunicación entre
                            jóvenes y veteranos.
                        </li>
                        <li>
                            Plan de sucesión: Estructurar roles para la
                            transición generacional.
                        </li>
                    </ul>
                </li>
                <li>
                    <span className="font-semibold">Resultado:</span> +20% en
                    satisfacción laboral y creación de un comité de innovación.
                </li>
            </ul>
            <h2 className="text-xl font-semibold mb-2">
                5. Errores Comunes que Debe Evitar un Consultor en DO
            </h2>
            <ul className="list-disc list-inside mb-4">
                <li>
                    ❌ Imponer soluciones genéricas (sin adaptarse al contexto).
                </li>
                <li>
                    ❌ Ignorar resistencias al cambio (no escuchar a los
                    empleados).
                </li>
                <li>
                    ❌ Falta de seguimiento (no medir resultados
                    post-intervención).
                </li>
            </ul>
            <h2 className="text-xl font-semibold mb-2">Conclusión</h2>
            <p className="mb-4">Un consultor en DO efectivo debe ser:</p>
            <ul className="list-disc list-inside mb-4">
                <li>🔹 Analítico (para diagnosticar problemas).</li>
                <li>🔹 Estratégico (para diseñar soluciones).</li>
                <li>🔹 Humano (para gestionar emociones y resistencias).</li>
            </ul>
            <p>
                <span className="font-semibold">
                    Quieres saber mas del tema
                    <br></br>

<a className="hover:text-blue-800" href="https://www.youtube.com/watch?v=sFIud-VQhpY">https://www.youtube.com/watch?v=sFIud-VQhpY</a>

                </span>
            </p>
        </div>
    ),
    videoUrl: "URL_DEL_VIDEO_8",
    imagenUrl: "/images/Imagen1.png",
};
