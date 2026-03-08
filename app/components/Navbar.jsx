import Image from "next/image"
import Link from "next/link"

export const Navbar = () => {
    return <nav id="navbar">
        <Image id="navLogo" src="/logo.png" alt="Logo" width={120} height={40} />
        <Link className="navLink" href="/">Inicio</Link>
        <Link className="navLink" href="/servicios">Servicios</Link>
        <Link className="navLink" href="/quienes-somos">Quienes somos</Link>
        <Link className="navLink" href="">Contacto</Link>
        <Link className="navLink" href="">Consulta gratis</Link>
    </nav>
}