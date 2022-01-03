import { ApolloClient, InMemoryCache } from "@apollo/client";
import { IKARUS_GALLERY } from "../../graphql/ikarusGallery";

import Layout from "../../components/Layout";
import Header from "../../components/Header";
import GalleryTemplate from "../../components/GalleryTemplate";

import IkarusLogo from "../../assets/svg/ikarus-logo2v2.svg";
import IkarusLogoMovil from "../../assets/svg/ikarus-logo-movilv2.svg";

import styles from "../../styles/Home.module.css";

export default function IkarusGallery({ gallery }) {
  return (
    <Layout title={"Ikarus"}>
      <div className={styles.galleryPage}>
        <Header
          pageLogo={<IkarusLogo className={styles.headerLogo} />}
          pageLogoMovil={<IkarusLogoMovil className={styles.headerLogoMovil} />}
          toFeed={"/ikarus"}
          toAbout={"/ikarus/about"}
        />
        <h1 className={styles.bigCenterTitle}>proyectos personales</h1>

        <GalleryTemplate gallery={gallery} />
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
    query: IKARUS_GALLERY,
  });

  return {
    props: {
      gallery: data.ikarusFeeds,
    },
  };
}
