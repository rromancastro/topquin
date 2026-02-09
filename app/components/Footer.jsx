import Image from "next/image"

export const Footer = () => {
    return <footer id="footer">
        <div>
            <h2>Independencia solar <br />
                así de <span>simple</span>
            </h2>
            <p><span>Contacto</span> <br />
                e-mail: <br />
                telefono:
            </p>
        </div>
        <Image src="/footerLogo.png" alt="footer" width={180} height={180} />
    </footer>
}