import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.container}>
      <img
        className={styles.logo}
        src="/assets/shared/logo.jpg"
        alt="coffee logo"
        width="236"
        height="26"
      />
      <div className={styles.links_container}>
        <Link href="/">
          <a>HOME</a>
        </Link>
        <Link href="/about">
          <a>ABOUT US</a>
        </Link>
        <Link href="/">
          <a> Create Subscription</a>
        </Link>
      </div>
      <div className={styles.social_container}>
        <Link href="/">
          <a>
            <Image
              src="/assets/icons/icon-facebook.svg"
              alt="facebook"
              width="24"
              height="24"
            />
          </a>
        </Link>
        <Link href="/">
          <a>
            <Image
              src="/assets/icons/icon-twitter.svg"
              alt="twitter"
              width="24"
              height="24"
            />
          </a>
        </Link>
        <Link href="/">
          <a>
            <Image
              src="/assets/icons/icon-instagram.svg"
              alt="instagram"
              width="24"
              height="24"
            />
          </a>
        </Link>
      </div>
    </footer>
  );
};
