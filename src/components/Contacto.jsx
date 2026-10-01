import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import "../styles/contacto.css";

function Contacto() {
    const formRef = useRef();

    const [sending, setSending] = useState(false);
    const [status, setStatus] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        setSending(true);
        setStatus("");

        try {
            await emailjs.sendForm(
                "service_3p4jwsz",
                "template_jefrip1",
                formRef.current,
                {
                    publicKey: "xtOgdyrmpQ8iRPcZy",
                },
            );

            setStatus("success");
            formRef.current.reset();

            setTimeout(() => {
                setStatus("");
            }, 4000);
        } catch (error) {
            console.error("Error al enviar el mensaje:", error);

            setStatus("error");
        } finally {
            setSending(false);
        }
    };

    return (
        <section id='contacto' className='contact-section'>
            <div className='contact-header'>
                <p className='section-label'>CONTACTO</p>

                <h2>
                    ¿Hablamos sobre
                    <span> un proyecto?</span>
                </h2>

                <p className='contact-description'>
                    Si estás buscando un desarrollador junior o querés conocer
                    más sobre mis proyectos, podés escribirme.
                </p>
            </div>

            <div className='contact-content'>
                <div className='contact-info'>
                    <div className='contact-info-item'>
                        <span className='contact-info-label'>EMAIL</span>

                        <a
                            href='mailto:basualdocarlos691@gmail.com'
                            className='contact-info-value'
                        >
                            Contactarme por email →
                        </a>
                    </div>

                    <div className='contact-info-item'>
                        <span className='contact-info-label'>GITHUB</span>

                        <a
                            href='https://github.com/CNBasualdo'
                            target='_blank'
                            rel='noreferrer'
                            className='contact-info-value'
                        >
                            github.com/CNBasualdo
                        </a>
                    </div>

                    <div className='contact-info-item'>
                        <span className='contact-info-label'>LINKEDIN</span>

                        <a
                            href='https://www.linkedin.com/in/carlosnbasualdo233/'
                            target='_blank'
                            rel='noreferrer'
                            className='contact-info-value'
                        >
                            LinkedIn
                        </a>
                    </div>
                </div>

                <form
                    ref={formRef}
                    className='contact-form'
                    onSubmit={handleSubmit}
                >
                    <div className='form-group'>
                        <label htmlFor='name'>Nombre</label>

                        <input
                            type='text'
                            id='name'
                            name='name'
                            placeholder='Tu nombre'
                            required
                        />
                    </div>

                    <div className='form-group'>
                        <label htmlFor='email'>Email</label>

                        <input
                            type='email'
                            id='email'
                            name='email'
                            placeholder='tu@email.com'
                            required
                        />
                    </div>

                    <div className='form-group'>
                        <label htmlFor='message'>Mensaje</label>

                        <textarea
                            id='message'
                            name='message'
                            rows='6'
                            placeholder='Contame brevemente en qué puedo ayudarte...'
                            required
                        ></textarea>
                    </div>

                    <button
                        type='submit'
                        className='contact-submit'
                        disabled={sending}
                    >
                        {sending ? "Enviando..." : "Enviar mensaje"}
                    </button>

                    {status === "success" && (
                        <p className='contact-status success'>
                            Mensaje enviado correctamente.
                        </p>
                    )}

                    {status === "error" && (
                        <p className='contact-status error'>
                            No se pudo enviar el mensaje. Intentá nuevamente.
                        </p>
                    )}
                </form>
            </div>
        </section>
    );
}

export default Contacto;
