import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const styles = require("./footer.module.scss");

type FooterProps = {};

const Footer: React.FC<FooterProps> = (props: FooterProps) => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerItems}>
        <div className={styles.brandItems}>
          <Link href="/">
            <a className={styles.logo}>COFFEE</a>
          </Link>
          <div className={styles.socialContainer}>
            <a
              className={styles.socialIcon}
              href="https://github.com/Tehila03"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
            <a
              className={styles.socialIcon}
              href="www.linkedin.com/in/tehilashapiro"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
        <div className={styles.storeItems}>
        </div>
      </div>
    </div>
  );
};

export default Footer;
