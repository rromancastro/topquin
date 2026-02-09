import { Footer, Navbar } from "../components";
import { Servicios2Section, Servicios3Section, ServiciosHeader } from "../sections";

export default function Servicios() {
    return (<>
        <Navbar />
        <ServiciosHeader />
        <Servicios2Section />
        <Servicios3Section />
        <Footer />
    </>)
}