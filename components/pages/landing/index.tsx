import React from "react";
import Link from "next/link";
import Image from "next/image";
import Menu from "../../library/menu";

import HeroImage from "../../../public/assets/cofffee-hero.jpg";
import CoffeeCupsImage from "../../../public/assets/cofffee-cups.jpg";
import ShopImage from "../../../public/assets/astro-shop.jpg";

const styles = require("./landing.module.scss");

type LandingViewProps = {};

const LandingView: React.FC<LandingViewProps> = (props: LandingViewProps) => {
  return (
    <>
      <div className={styles.heroImageContainer}>
        <Image
          src={HeroImage}
          alt="Coffee shop"
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          priority={true}
        />
      </div>
      <div className={styles.landingPageContainer}>
        <Menu />
        {/* About Card */}
        <div className={styles.aboutCardContainer}>
          <div className={styles.aboutImageContainer} id="about">
            <Image
              src={CoffeeCupsImage}
              alt="Coffee cups"
              layout="fill"
              objectFit="cover"
              placeholder="blur"
            />
            <h1 className={styles.aboutTitleText}>ABOUT</h1>
          </div>
          <div className={styles.aboutTextContainer}>
            <div className={styles.blockQuoteContainer}>
              <p className={styles.blockQuoteText}>
                You, my dear reader, are about to embark on the most epic
                journey of your lifetime
              </p>
            </div>
            <div className={styles.aboutBodyText}>
              <p>
                At Café Odyssey, we are passionate about crafting an immersive
                experience where the enticing aroma and rich flavors of our
                coffee blend seamlessly, transporting you to different corners
                of the globe.
              </p>
              <p>
                Our dedicated baristas curate unique and exceptional beverages
                inspired by the world`s finest coffee traditions. Café Odyssey
                is more than just a coffee shop; it`s your passport to a world
                of coffee adventures.
              </p>
              <p>
                Join us in celebrating the diverse and exquisite coffee cultures
                that transform each cup into a global masterpiece. Embark on
                your coffee journey at Café Odyssey and savor the richness of
                our global coffee offerings. Enjoy!
              </p>
            </div>
          </div>
        </div>

        {/* Shop Card */}
        <div className={styles.shopCardContainer}>
          <div className={styles.imageContainer}>
            <Link href={"/shop"}>
              <a className={styles.imageColorOverlay} />
            </Link>
            <Image
              src={ShopImage}
              alt="Astronaut drinking coffee and working at a laptop"
              layout="fill"
              objectFit="cover"
              placeholder="blur"
            />
            <h1 className={styles.shopTitleText}>SHOP</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingView;
