import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

import styles from "../styles/Home.module.css";

export default function ContactForm() {
  const [result, setResult] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.EMAIL_SERVICE,
        process.env.EMAIL_TEMPLATE,
        form.current,
        "user_LwaXO3UVx9iSwtIUC9xY9"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setResult(true);
  };

  setTimeout(() => {
    setResult(false);
  }, 5000);

  return (
    <section className={styles.formContainer}>
      <h1>Contacto:</h1>

      <form className={styles.form} ref={form} onSubmit={sendEmail}>
        <div className={styles.formContent}>
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            placeholder="Tu nombre aquí"
            name="name"
            required
          />

          <label htmlFor="email">Correo</label>
          <input
            type="email"
            placeholder="correo@correo.com"
            name="email"
            required
          />

          <label htmlFor="asunto">Asunto</label>
          <input type="text" placeholder="..." name="subject" required />

          <label htmlFor="asunto">Mensaje</label>
          <textarea
            rows="5"
            placeholder="Cuéntame tu idea"
            name="message"
            required
          ></textarea>
        </div>
        <button type="submit">ENVIAR</button>
        {result ? <h3>Mensaje enviado con éxito</h3> : null}
      </form>
    </section>
  );
}
