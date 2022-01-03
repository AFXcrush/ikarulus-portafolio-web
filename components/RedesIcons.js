import FBLogo from "../assets/svg/rs-FB.svg";
import InstaLogo from "../assets/svg/rs-Insta.svg";
import BehanceLogo from "../assets/svg/rs-Be.svg";
import ArtStationLogo from "../assets/svg/rs-ArtStation.svg";
import YTLogo from "../assets/svg/rs-YT.svg";
import DiscordLogo from "../assets/svg/rs-Discord.svg";
import VimeoLogo from "../assets/svg/rs-Vimeo.svg";

import styles from "../styles/Home.module.css";

export default function RedesIcons({ redActiva, redURL }) {
  return (
    <div className={styles.redIconLogoContainer}>
      {/* FACEBOOK */}
      {redActiva === true && redURL.indexOf("facebook") > -1 ? (
        <a
          className={styles.redIconLogo}
          href={redURL}
          target="_blank"
          rel="noreferrer"
        >
          <FBLogo />
        </a>
      ) : (
        ""
      )}

      {/* INSTAGRAM */}
      {redActiva === true && redURL.indexOf("instagram") > -1 ? (
        <a
          className={styles.redIconLogo}
          href={redURL}
          target="_blank"
          rel="noreferrer"
        >
          <InstaLogo />
        </a>
      ) : (
        ""
      )}

      {/* BEHANCE */}
      {redActiva === true && redURL.indexOf("behance") > -1 ? (
        <a
          className={styles.redIconLogo}
          href={redURL}
          target="_blank"
          rel="noreferrer"
        >
          <BehanceLogo />
        </a>
      ) : (
        ""
      )}

      {/* ARTSTATION */}
      {redActiva === true && redURL.indexOf("artstation") > -1 ? (
        <a
          className={styles.redIconLogo}
          href={redURL}
          target="_blank"
          rel="noreferrer"
        >
          <ArtStationLogo />
        </a>
      ) : (
        ""
      )}

      {/* YOUTUBE */}
      {redActiva === true && redURL.indexOf("youtube") > -1 ? (
        <a
          className={styles.redIconLogo}
          href={redURL}
          target="_blank"
          rel="noreferrer"
        >
          <YTLogo />
        </a>
      ) : (
        ""
      )}

      {/* DISCORD */}
      {redActiva === true && redURL.indexOf("discord") > -1 ? (
        <a
          className={styles.redIconLogo}
          href={redURL}
          target="_blank"
          rel="noreferrer"
        >
          <DiscordLogo />
        </a>
      ) : (
        ""
      )}

      {/* VIMEO */}
      {redActiva === true && redURL.indexOf("vimeo") > -1 ? (
        <a
          className={styles.redIconLogo}
          href={redURL}
          target="_blank"
          rel="noreferrer"
        >
          <VimeoLogo />
        </a>
      ) : (
        ""
      )}
    </div>
  );
}
