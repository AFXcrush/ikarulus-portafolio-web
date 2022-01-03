import Image from "next/image";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import Layout from "../../components/Layout";
import Header from "../../components/Header";
import AboutTemplate from "../../components/AboutTemplate";
import { IKARUS_ABOUT } from "../../graphql/ikarusAbout";

import IkarusLogo from "../../assets/svg/ikarus-logo2v2.svg";
import IkarusLogoMovil from "../../assets/svg/ikarus-logo-movilv2.svg";

import styles from "../../styles/Home.module.css";

export default function IkarusAbout({ about }) {
  return (
    <Layout title={"Ikarus"}>
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
          pageLogo={<IkarusLogo className={styles.headerLogo} />}
          pageLogoMovil={<IkarusLogoMovil className={styles.headerLogoMovil} />}
          toFeed={"/ikarus"}
          toAbout={"/ikarus/about"}
        />

        <AboutTemplate
          redes={about.redes}
          contenido={about.contenido}
          style={styles.aboutBlack}
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
    query: IKARUS_ABOUT,
  });

  return {
    props: {
      about: data.ikarusFeedBackground,
    },
  };
}
