import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import classNames from "classnames";

import RedesIcons from "./RedesIcons";
import ContactForm from "./ContactForm";

import styles from "../styles/Home.module.css";

export default function AboutTemplate({ redes, contenido, style }) {
  const replaceSlashForEnter = (string) => {
    return string.replaceAll("\n", "<br></br>");
  };

  return (
    <div className={classNames(styles.about, style)}>
      <section className={styles.redes}>
        {redes.map((red, index) => {
          return (
            <RedesIcons
              key={index}
              redActiva={red.red_activa}
              redURL={red.red_url}
            />
          );
        })}
      </section>

      {contenido.map((cont, index) => {
        return (
          <section key={index} className={styles.aboutContent}>
            {cont.titulo ? <h1>{cont.titulo}</h1> : ""}

            {cont.texto ? (
              <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                {replaceSlashForEnter(cont.texto)}
              </ReactMarkdown>
            ) : (
              ""
            )}

            {cont.imagen ? (
              <img
                src={cont.imagen.url}
                alt="foto ikarulus"
                className={styles.aboutImagen}
              />
            ) : (
              ""
            )}
          </section>
        );
      })}

      <ContactForm />

      <div className={styles.ignoreThisEmptySpaceThankYou}>
        IGNORE THIS EMPTY SPACE, THANK YOU
      </div>
    </div>
  );
}
