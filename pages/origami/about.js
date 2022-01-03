import Image from "next/image";
import Link from "next/link";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import Layout from "../../components/Layout";
import Header from "../../components/Header";
import AboutTemplate from "../../components/AboutTemplate";
import { ORIGAMI_ABOUT } from "../../graphql/origamiAbout";

import OrigamiLogo from "../../assets/svg/Origami-logo2.svg";
import OrigamiLogoMovil from "../../assets/svg/Origami-logo-movil.svg";

import styles from "../../styles/Home.module.css";

export default function TautoAbout({ about }) {
  return (
    <Layout title={"Origami"}>
      <div className={styles.aboutContainer}>
        <div className={styles.background}>
          <Image
            src={about.background.url}
            alt="background"
            layout="fill"
            objectFit="cover"
          />
        </div>
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

        <AboutTemplate
          redes={about.redes}
          contenido={about.contenido}
          style={styles.aboutWhite}
        />
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: process.env.STRAPI_API,
    cache: new InMemoryCache(),
  });
  const { data } = await client.query({
    query: ORIGAMI_ABOUT,
  });

  return {
    props: {
      about: data.origamiAboutBackground,
    },
  };
}
