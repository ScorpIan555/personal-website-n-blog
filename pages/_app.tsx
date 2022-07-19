import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import App from "next/app";
import { useEffect, useState } from "react";

// const getStaticProps: GetStaticProps = async (context) => {
//   const staticProps: any =
//   // ...
// }

// const getStaticPaths: GetStaticPaths = async (context) => {
//   // ...
// }

// const getServerSideProps: GetServerSideProps = async (context) => {
//   // ...
// }

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [isServer, setIsServer] = useState();

  useEffect(() => {
    // Update the document title using the browser API
  });

  return (
    <>
      <Layout {...pageProps}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default MyApp;
