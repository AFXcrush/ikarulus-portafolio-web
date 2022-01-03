import Image from "next/image";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import Layout from "../../components/Layout";
import Header from "../../components/Header";
import AboutTemplate from "../../components/AboutTemplate";
import { TAUTO_ABOUT } from "../../graphql/tautoAbout";

import TautoLogo from "../../assets/svg/Tauto-logo2.svg";
import TautoLogoMovil from "../../assets/svg/Tauto-logo-movil.svg";

import styles from "../../styles/Home.module.css";

export default function TautoAbout({ about }) {
  return (
    <Layout title={"Tauto"}>
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
          pageLogo={<TautoLogo className={styles.headerLogo} />}
          pageLogoMovil={<TautoLogoMovil className={styles.headerLogoMovil} />}
          toFeed={"/tauto"}
          toAbout={"/tauto/about"}
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
    query: TAUTO_ABOUT,
  });

  return {
    props: {
      about: data.tautoAboutBackground,
    },
  };
}
