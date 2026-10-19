
import { useEffect, useState } from "react";
import "./App.css";

import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import SobreMi from "./components/SobreMi";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";

const modoDiseno = false;

function App() {
    const [fase, setFase] = useState("loading");

    // ANIMACIÓN NORMAL: descomentar cuando modoDiseno sea false.
    
    useEffect(() => {
        const tiempoVisible = 2500;
        const tiempoSalida = 500;

        const timerSalida = setTimeout(() => {
            setFase("exiting");
        }, tiempoVisible);

        const timerFinal = setTimeout(() => {
            setFase("done");
        }, tiempoVisible + tiempoSalida);

        return () => {
            clearTimeout(timerSalida);
            clearTimeout(timerFinal);
        };
    }, []);
    


    return (
        <>
            {modoDiseno ? (
                <Preloader exiting={false} />
            ) : (
                fase !== "done" && (
                    <Preloader exiting={fase === "exiting"} />
                )
            )}

            <div
                className={`portfolio ${
                    fase === "done" && !modoDiseno
                        ? "portfolio-visible"
                        : "portfolio-loading"
                }`}
            >
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
        </>
    );
}

export default App;
