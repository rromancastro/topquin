import { ImCheckmark } from "react-icons/im";
import Link from "next/link"

export const About3Section = () => {
    return (
        <section id="about3Section">
            <div id="about3SectionCardsContainer">
                <article>
                    <h3>Jefe de operaciones</h3>
                </article>

                <article>
                    <h3>CEO</h3>
                </article>

                <article>
                    <h3>Ingeniero especialista en energias renovables</h3>
                </article>
            </div>



            <article id="about3SectionElement2">
                <div>
                    <h2>
                        El equipo
                    </h2>
                    <p>Soluciones solares diseñadas para hogares. Nuestros kits permiten generar energía limpia y reducir costos mensuales sin modificar la estética de tu vivienda. Configuramos el sistema ideal para tu consumo real y acompañamos cada paso, desde la elección de componentes hasta la instalación final.</p>
                    <Link href="#">Consultar gratis</Link>
                </div>
                <div>
                    <div>
                        <ImCheckmark className="checkIcon" />
                        <h3>+10 años de experiencia</h3>
                    </div>
                    <div>
                        <ImCheckmark className="checkIcon" />
                        <h3>Contacto directo con proveedores</h3>
                    </div>
                    <div>
                        <ImCheckmark className="checkIcon" />
                        <h3>Adaptable a casas nuevas o existentes</h3>
                    </div>
                </div>
            </article>
        </section>
    )
}