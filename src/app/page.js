import Home from "@/_components/Home";
import Experience from "@/_components/Experience";
import Skillset from "@/_components/Skillset";
import Projects from "@/_components/Projects";
import About from "@/_components/About";
import Contact from "@/_components/Contact";
import PortfolioMotion from "@/_components/PortfolioMotion";

export default function page() {
    return (
        <PortfolioMotion>
            <Home />
            <Skillset />
            <Experience />
            <Projects />
            <About />
            <Contact />
        </PortfolioMotion>
    );
}
