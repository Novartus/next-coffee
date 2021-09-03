import Link from "next/link";
import { GiCoffeePot } from "react-icons/gi";
import {
  RiFacebookCircleLine,
  RiInstagramLine,
  RiTwitterLine,
} from "react-icons/ri";
import styles from "../styles/Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.container}>
      <Link href="/">
        <a>
          <GiCoffeePot className={styles.logo} size={32} />
        </a>
      </Link>
      <div className={styles.links_container}>
        <Link href="/">
          <a>HOME</a>
        </Link>
        <Link href="/about">
          <a>ABOUT US</a>
        </Link>
        <Link href="/buy-coffee">
          <a> Buy Coffee</a>
        </Link>
      </div>
      <div className={styles.social_container}>
        <Link href="/">
          <a>
            <RiFacebookCircleLine size={32} className={styles.social_link} />
          </a>
        </Link>
        <Link href="/">
          <a>
            <RiInstagramLine size={32} className={styles.social_link} />
          </a>
        </Link>
        <Link href="/">
          <a>
            <RiTwitterLine size={32} className={styles.social_link} />
          </a>
        </Link>
      </div>
    </footer>
  );
};
