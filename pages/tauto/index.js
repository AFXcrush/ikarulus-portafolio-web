import { ApolloClient, InMemoryCache } from "@apollo/client";
import { TAUTO_GALLERY } from "../../graphql/tautoGallery";

import Layout from "../../components/Layout";
import Header from "../../components/Header";
import GalleryTemplate from "../../components/GalleryTemplate";

import TautoLogo from "../../assets/svg/Tauto-logo2.svg";
import TautoLogoMovil from "../../assets/svg/Tauto-logo-movil.svg";

import styles from "../../styles/Home.module.css";

export default function TautoGallery({ gallery }) {
  return (
    <Layout title={"Tauto"}>
      <div className={styles.galleryPage}>
        <Header
          pageLogo={<TautoLogo className={styles.headerLogo} />}
          pageLogoMovil={<TautoLogoMovil className={styles.headerLogoMovil} />}
          toFeed={"/tauto"}
          toAbout={"/tauto/about"}
        />
        <h1 className={styles.bigCenterTitle}>impresiones 3D</h1>

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
    query: TAUTO_GALLERY,
  });

  return {
    props: {
      gallery: data.tautoFeeds,
    },
  };
}
