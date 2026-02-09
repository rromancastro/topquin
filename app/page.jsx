import { Footer, Navbar } from "./components";
import { Landing2Section, Landing3Section, LandingHeader } from "./sections";

export default function Home() {
  return (<>
    <Navbar />
    <LandingHeader />
    <Landing2Section />
    <Landing3Section />
    <Footer />
  </>)
}
