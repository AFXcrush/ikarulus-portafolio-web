import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ORIGAMI_GALLERY } from "../../graphql/origamiGallery";

import Layout from "../../components/Layout";
import Header from "../../components/Header";
import GalleryTemplate from "../../components/GalleryTemplate";

import OrigamiLogo from "../../assets/svg/Origami-logo2.svg";
import OrigamiLogoMovil from "../../assets/svg/Origami-logo-movil.svg";

import styles from "../../styles/Home.module.css";

export default function OrigamiGallery({ gallery }) {
  return (
    <Layout title={"Origami"}>
      <div className={styles.galleryPage}>
        <Header
          pageLogo={<OrigamiLogo className={styles.headerLogo} />}
          pageLogoMovil={
            <OrigamiLogoMovil className={styles.headerLogoMovil} />
          }
          toFeed={"/origami/gallery"}
          toAbout={"/origami/about"}
        />
        <h1 className={styles.bigCenterTitle}>proyectos</h1>

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
    query: ORIGAMI_GALLERY,
  });

  return {
    props: {
      gallery: data.origamiFeeds,
    },
  };
}
