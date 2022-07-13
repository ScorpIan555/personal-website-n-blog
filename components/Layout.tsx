import { AppProps } from "next/app";
import Head from "next/head";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Ian's Blog</title>
        <meta name="description" content="Ian's Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </>
  );
};

export default Layout;
