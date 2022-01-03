import Link from "next/link";
import { Textfit } from "react-textfit";

import Critter from "../assets/svg/Criatura404.svg";

import styles from "../styles/Home.module.css";

export default function No404() {
  return (
    <div className={styles.no404}>
      <div className={styles.comp404}>
        <div className={styles.critterContainer}>
          <Critter className={styles.critter} />
          <div className={styles.oopsTxt}>
            <Textfit mode="single">OOPS!</Textfit>
          </div>
        </div>

        <div className={styles.pageNotFound}>
          <Textfit mode="single">PÁGINA NO ENCONTRADA</Textfit>
        </div>

        <div className={styles.compDescripcion404}>
          <div className={styles.descripcion404}>
            <span className={styles.p404line1}>Parece que hubo un error</span>
            <span>en el enlace que intentas visitar.</span>
          </div>

          <Link href="/">
            <a className={styles.btn404}>Volver a inicio</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
