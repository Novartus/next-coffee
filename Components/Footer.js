import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.container}>
      {/* <Image
        className={styles.logo}
        src=""
        alt="coffee logo"
        width="236"
        height="26"
      /> */}
      <div className={styles.links_container}>
        <Link href="/">HOME</Link>
        <Link href="/">ABOUT US</Link>
      </div>
      <div className={styles.social_container}>
        <a href="#">
          <Image
            src="/assets/icons/icon-facebook.svg"
            alt="facebook"
            width="24"
            height="24"
          />
        </a>
        <a href="#">
          <Image
            src="/assets/icons/icon-twitter.svg"
            alt="twitter"
            width="24"
            height="24"
          />
        </a>
        <a href="#">
          <Image
            src="/assets/icons/icon-instagram.svg"
            alt="instagram"
            width="24"
            height="24"
          />
        </a>
      </div>
    </footer>
  );
};
