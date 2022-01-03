import Image from "next/image";
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
          pageLogo={<OrigamiLogo className={styles.headerLogo} />}
          pageLogoMovil={
            <OrigamiLogoMovil className={styles.headerLogoMovil} />
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
