import "./App.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import SobreMi from "./components/SobreMi";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";

function App() {
    return (
        <div className='portfolio'>
            <NavBar />
            <main>
                <Hero />
                <SobreMi />
                <Skills />
                <Projects />
                <Contacto />
            </main>
            <Footer />
        </div>
    );
}

export default App;
