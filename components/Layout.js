import Head from "next/head";

export default function Layout({ children, title }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="Ikaro portfolio site" content="Developed by AFX" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {children}
    </div>
  );
}
