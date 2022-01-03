import { useState } from "react";
import classNames from "classnames";
import Link from "next/link";

import IkarulusLogo from "../assets/svg/Ikarulus-logo.svg";
import IkarulusLogoMovil from "../assets/svg/Ikarulus-logo-movil.svg";
import MenuBars from "../assets/svg/menubars.svg";

import styles from "../styles/Home.module.css";

export default function Header({ pageLogo, pageLogoMovil, toFeed, toAbout }) {
  const [toggleMenu, setToggleMenu] = useState(false);

  const showMenuBars = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        {pageLogo}
        {pageLogoMovil}

        <div className={styles.menuContainer}>
          <ul className={styles.headerUl}>
            <li>
              <Link href={toFeed}>
                <a className={styles.headerLink}>Galería</a>
              </Link>
            </li>

            <li className={styles.headerLink}>|</li>

            <li>
              <Link href={toAbout}>
                <a className={styles.headerLink}>Acerca de</a>
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.menubarContainer}>
          <MenuBars className={styles.menubar} onClick={showMenuBars} />
        </div>

        <Link href="/">
          <a className={styles.headerIkarulusContainer}>
            <IkarulusLogo
              className={classNames(styles.headerLogo, styles.headerIkarulus)}
            />
            <IkarulusLogoMovil
              className={classNames(
                styles.headerLogo,
                styles.headerIkarulusMovil
              )}
            />
          </a>
        </Link>
      </nav>

      {toggleMenu && (
        <div className={styles.menuContainerMovil}>
          <ul>
            <li>
              <Link href={toFeed}>
                <a className={styles.headerLink}>Galería</a>
              </Link>
            </li>

            <li>
              <Link href={toAbout}>
                <a className={styles.headerLink}>Acerca de</a>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
