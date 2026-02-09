import Link from "next/link"
import { ImCheckmark } from "react-icons/im";

export const Servicios3Section = () => {
    return <section id="servicios3Section">
            <article></article>

            <article>
                <div>
                    <h2>
                        Kits solares para <span>hogares</span>
                    </h2>
                    <p>Soluciones solares diseñadas para hogares. Nuestros kits permiten generar energía limpia y reducir costos mensuales sin modificar la estética de tu vivienda. Configuramos el sistema ideal para tu consumo real y acompañamos cada paso, desde la elección de componentes hasta la instalación final.</p>
                    <Link href="#">Consultar gratis</Link>
                </div>
                <div>
                    <div>
                        <ImCheckmark className="checkIcon"/>
                        <h3>Reducción real en tu factura</h3>
                    </div>
                    <div>
                        <ImCheckmark className="checkIcon"/>
                        <h3>Instalación simple y segura</h3>
                    </div>
                    <div>
                        <ImCheckmark className="checkIcon"/>
                        <h3>Ahorro a largo plazo</h3>
                    </div>
                    <div>
                        <ImCheckmark className="checkIcon"/>
                        <h3>Adaptable a casas nuevas o existentes</h3>
                    </div>
                </div>
            </article>

            <article></article>

            <article>
                <div>
                    <h2>
                        <span>Plantas</span> <br />
                        fotovoltaicas
                    </h2>
                    <p>Desarrollamos plantas fotovoltaicas para emprendimientos, industrias, empresas y campos. Priorizamos rendimiento, eficiencia y escalabilidad. Desde la evaluación técnica hasta la selección de proveedores, construimos soluciones solares confiables que generan energía limpia a gran escala.</p>
                    <Link href="#">Consultar gratis</Link>
                </div>
                <div>
                    <div>
                        <ImCheckmark  className="checkIcon"/>
                        <h3>Sistemas escalables</h3>
                    </div>
                    <div>
                        <ImCheckmark  className="checkIcon"/>
                        <h3>Alta eficiencia y estabilidad</h3>
                    </div>
                    <div>
                        <ImCheckmark  className="checkIcon"/>
                        <h3>Diseño adaptado al sitio y la demanda</h3>
                    </div>
                    <div>
                        <ImCheckmark  className="checkIcon"/>
                        <h3>Retorno de inversión planificado</h3>
                    </div>
                </div>
            </article>

            <article>
                <h2>
                    <span>Asesoría</span> y <span>Gestión</span> <br />
                    de Proveedores
                </h2>
                <p>En Topquin te acompañamos durante todo el proceso. Evaluamos tus necesidades energéticas, definimos la solución ideal y conectamos con proveedores confiables, certificados y con experiencia. Nuestra misión es simplificar tu acceso a la energía solar.</p>
                <Link href="#">Consultar gratis</Link>
            </article>
    </section>
}