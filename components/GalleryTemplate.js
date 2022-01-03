import { useState } from "react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

import CloseBtn from "../assets/svg/close-btn.svg";
import LinkIcon from "../assets/svg/link-icon.svg";
import LightBulb from "../assets/svg/bulb-icon.svg";

import styles from "../styles/Home.module.css";

export default function GalleryTemplate({ gallery }) {
  const [openModal, setOpenModal] = useState([]);

  const handleModal = (id) => {
    setOpenModal(
      openModal.indexOf(id) === -1 ? [id] : openModal.filter((x) => x !== id)
    );
  };

  const handleClick = (e) => {
    if (e.target.classList.contains("Home_modalContainer__RUPnO")) {
      setOpenModal([]);
    }
  };

  const replaceVideoLink = (link) => {
    return link.replace("watch?v=", "embed/");
  };

  const replaceSlashForEnter = (string) => {
    return string.replaceAll("\n", "<br></br>");
  };

  return (
    <main className={styles.galleryGrid}>
      {gallery.map((ik) => (
        <div key={ik.id} className={styles.galleryEntry}>
          <div
            className={styles.galleryThumbnailContainer}
            role="button"
            tabIndex={0}
            onClick={() => {
              handleModal(ik.id);
            }}
            onKeyPress={(e) => e.key === "Enter" && handleModal(ik.id)}
          >
            <Image
              className={styles.galleryThumbnail}
              src={ik.thumbnail.url}
              alt={ik.titulo}
              width={374}
              height={530}
            />
          </div>

          <span className={styles.galleryTitle}>{ik.titulo}</span>

          {openModal.indexOf(ik.id) === -1 ? null : (
            <div
              className={styles.modalContainer}
              role="button"
              tabIndex={0}
              onClick={handleClick}
              onKeyPress={(e) => e.key === "Escape" && handleClick}
            >
              <CloseBtn
                className={styles.closeBtn}
                role="button"
                tabIndex={0}
                onClick={() => {
                  handleModal(ik.id);
                }}
                onKeyPress={(e) => e.key === "Escape" && handleModal(ik.id)}
              />

              <h1 className={styles.bigCenterTitle}>{ik.titulo}</h1>

              <div className={styles.modalContentContainer}>
                {ik.contenido.map((cont, index) => {
                  return (
                    <div key={index} className={styles.modalContent}>
                      {/* DESCRIPCION */}
                      {cont.descripcion ? (
                        <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                          {replaceSlashForEnter(cont.descripcion)}
                        </ReactMarkdown>
                      ) : (
                        ""
                      )}

                      {/* IMAGEN */}
                      {cont.imagen ? (
                        <img
                          src={cont.imagen.url}
                          alt={cont.imagen.name}
                          loading="lazy"
                        />
                      ) : (
                        ""
                      )}

                      {/* VIDEO EMBED */}
                      {cont.embed ? (
                        <iframe
                          src={replaceVideoLink(cont.embed)}
                          title="YouTube video player"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      ) : (
                        ""
                      )}

                      {/* HIPERVINCULO */}
                      {cont.texto_hipervinculo ? (
                        <div className={styles.txtHyperContainer}>
                          <LinkIcon />
                          <a href={cont.url} target="_blank" rel="noreferrer">
                            {cont.texto_hipervinculo}
                          </a>
                        </div>
                      ) : (
                        ""
                      )}

                      {/* TEXTO RESALTADO */}
                      {cont.texto_resaltado ? (
                        <div className={styles.txtHLContainer}>
                          <LightBulb />
                          <h3>{cont.texto_resaltado}</h3>
                        </div>
                      ) : (
                        ""
                      )}

                      {/* SKETCHFAB */}
                      {cont.sketchfab ? (
                        <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                          {cont.sketchfab}
                        </ReactMarkdown>
                      ) : (
                        ""
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      ))}
    </main>
  );
}
