import Link from "next/link";
import Image from "next/image";
import Particles from "react-tsparticles";
import classNames from "classnames";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { LANDING_PAGE } from "../graphql/landingPage";

import Layout from "../components/Layout";
import Footer from "../components/Footer";

import IkarulusLogo from "../assets/svg/Ikarulus-logo.svg";
import IkarusLogo from "../assets/svg/ikarus-logov2.svg";
import OrigamiLogo from "../assets/svg/Origami-logo.svg";
import TautoLogo from "../assets/svg/Tauto-logo.svg";

import styles from "../styles/Home.module.css";

export default function Home({ landingPage }) {
  return (
    <Layout title={"Ikarulus"}>
      <div className={styles.landingpage}>
        <div className={styles.background}>
          <Image
            src={landingPage.background.url}
            alt="background"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <Particles
          id="tsparticles"
          options={{
            fpsLimit: 60,
            interactivity: {
              events: {
                onClick: { enable: true, mode: "repulse" },
                onHover: {
                  enable: true,
                  mode: "bubble",
                  parallax: { enable: false, force: 2, smooth: 10 },
                },
                resize: true,
              },
              modes: {
                bubble: {
                  distance: 400,
                  duration: 0.3,
                  opacity: 1,
                  size: 4,
                  speed: 3,
                },
                grab: { distance: 400, line_linked: { opacity: 0.5 } },
                push: { particles_nb: 4 },
                remove: { particles_nb: 2 },
                repulse: { distance: 200, duration: 0.4 },
              },
            },
            particles: {
              color: { value: "#fff" },
              links: {
                color: "#ffffff",
                distance: 500,
                enable: false,
                opacity: 0.4,
                width: 2,
              },
              move: {
                attract: { enable: false, rotateX: 600, rotateY: 1200 },
                direction: "bottom",
                enable: true,
                outMode: "out",
                random: false,
                size: true,
                speed: 2,
                straight: false,
              },
              number: { density: { enable: true, area: 800 }, value: 60 },
              opacity: {
                random: true,
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                random: true,
                value: 5,
              },
            },
            detectRetina: true,
          }}
        />

        <div className={styles.logoHeader}>
          <IkarulusLogo className={styles.ikarulusLogo} />
        </div>

        <section className={styles.logoRubros}>
          <Link href="/ikarus">
            <a className={classNames(styles.logoContainer, styles.ikarusLogo)}>
              <IkarusLogo className={styles.logoHome} />
            </a>
          </Link>

          <Link href="/origami">
            <a className={classNames(styles.logoContainer, styles.origamiLogo)}>
              <OrigamiLogo className={styles.logoHome} />
            </a>
          </Link>

          <Link href="/tauto">
            <a className={classNames(styles.logoContainer, styles.tautoLogo)}>
              <TautoLogo className={styles.logoHome} />
            </a>
          </Link>
        </section>

        <Footer />
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
    query: LANDING_PAGE,
  });

  return {
    props: {
      landingPage: data.landingPageBackground,
    },
  };
}
