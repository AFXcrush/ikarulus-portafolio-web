import Link from "next/link";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ORIGAMI_CLIMAX } from "../../graphql/origamiClimax";

import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import Layout from "../../components/Layout";
import Header from "../../components/Header";

import OrigamiLogo from "../../assets/svg/Origami-logo2.svg";
import OrigamiLogoMovil from "../../assets/svg/Origami-logo-movil.svg";

import styles from "../../styles/Home.module.css";

export default function OrigamiIndex({ climax }) {
  return (
    <Layout title={"Origami"}>
      <Header
        pageLogo={
          <div className={styles.headerLogo}>
            <Link href={"/origami"}>
              <a>
                <OrigamiLogo className={styles.headerLogo} />
              </a>
            </Link>
          </div>
        }
        pageLogoMovil={
          <div className={styles.headerLogoMovil}>
            <Link href={"/origami"}>
              <a>
                <OrigamiLogoMovil className={styles.headerLogoMovil} />
              </a>
            </Link>
          </div>
        }
        toFeed={"/origami/gallery"}
        toAbout={"/origami/about"}
      />
      <Fade duration={6000}>
        {climax.map((ic) => {
          return (
            <div key={ic.id} className={styles.sliderContainer}>
              <img
                src={ic.background.url}
                alt={ic.titulo}
                style={{ position: "absolute" }}
              />

              <div className={styles.sliderText}>
                <h1>{ic.titulo}</h1>
                <p>{ic.descripcion}</p>
              </div>
            </div>
          );
        })}
      </Fade>
    </Layout>
  );
}

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: process.env.STRAPI_API,
    cache: new InMemoryCache(),
  });
  const { data } = await client.query({
    query: ORIGAMI_CLIMAX,
  });

  return {
    props: {
      climax: data.origamiClimaxes,
    },
  };
}
