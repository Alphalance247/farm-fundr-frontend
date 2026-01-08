import { ReactNode } from "react";
import Head from "next/head";
import Header from "./header";
import Footer from "./footer";

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
}

const LayOuts = ({
  children,
  title = "FarmPady — Africa’s agriculture investment hub",
  description = "FarmPady — Support farm projects, connect with farmers, and unlock agribusiness opportunities across Africa.",
  keywords = "FarmPady, Agriculture investment Nigeria, Invest in farming Africa, Farm crowdfunding platform, Support farmers Nigeria, Agriculture marketplace Africa, Farm projects funding, Farm to investor connection, Sustainable agriculture investment, Farming opportunities Nigeria, AgriTech Nigeria, Agriculture startup Africa, Farm investment platform, Nigerian farmers funding, Agribusiness investment",
}: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default LayOuts;
