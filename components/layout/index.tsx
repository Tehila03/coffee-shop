import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import NavBar from "../library/navBar";
import Footer from "../library/footer";
import Hero from "../../public/assets/background.png";

const styles = require("./layout.module.scss");

type LayoutProps = {
  children: React.ReactElement;
  pageMeta?: {};
};

const Layout: React.FC<LayoutProps> = ({ children, pageMeta }) => {
  const router = useRouter();

  // Default meta tags if not otherwise set via the pageMeta prop
  const meta = {
    title: "COFFEE SHOP",
    description: "coffee first, questions later",
    type: "website",
    image: Hero.src,
    twitterImage:
      "https://coffee-shop.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcoffee-hero.794201de.jpg&w=750&q=75",
    imageAlt:
      "A coffee shop arpund the world",
    url: `https://coffee-shop.vercel.app${router.asPath}`,
    ...pageMeta,
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="COFFEE SHOP" />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:url" content={meta.url} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.layoutContainer}>
        <NavBar />
        <main className={styles.contentContainer}>
          {React.cloneElement(children)}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
