import Image from "next/image"
import Link from "next/link"

export const Landing3Section = () => {
    return <section id="landing3Section">
        <article>
            <div>
                <h2>Kits solares para <span>hogares</span></h2>
                <p>Energía limpia para tu casa, ahorro real para vos.</p>
                <Link href="#">Ver más</Link>
            </div>
            <Image src="/landing/card1Img.png" alt="Landing3" width={600} height={600} />
        </article>

        <article>
            <Image src="/landing/card2Img.png" alt="Landing3" width={600} height={600} />
            <div>
                <h2><span>Plantas</span> <br />fotovoltaicas</h2>
                <p>Proyectos solares a gran escala, llave en mano.</p>
                <Link href="#">Ver más</Link>
            </div>
        </article>

        <article>
            <div>
                <h2>Independencia <br /><span>solar</span></h2>
                <p>Dejá de comprar electricidad y empezá a venderla. Te asersoramos sin compromiso.</p>
                <Link href="#">Solicita una consulta gratuita</Link>
            </div>
        </article>

        <article>
            <div>
                <h2><span>Por qué</span> <br />elegirnos</h2>
                <p>Tecnología confiable. <br />
                Acompañamiento real. <br />
                Resultados medibles.</p>
                <Link href="#">Ver más</Link>
            </div>
            <Image src="/landing/card4Img.png" alt="Landing4" width={600} height={600} />
        </article>
    </section>
}