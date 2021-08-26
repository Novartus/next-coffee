import React, { useState } from "react";
import styles from "../styles/NavBar.module.scss";
import Link from "next/link";

export const Navbar = () => {
  const [hamburgerClicked, setHamburgerClicked] = useState(false);

  return (
    <header className={styles.container}>
      <img
        className={styles.logo}
        src=""
        alt="coffee logo"
        width="236"
        height="26"
      />

      <div className={styles.link_container}>
        <Link href="/">Home</Link>
        <Link href="/">About us</Link>
      </div>

      {hamburgerClicked === true ? (
        <img
          src=""
          alt="hamburger icon"
          width="16"
          height="16"
          className={styles.hamburger}
          onClick={() => setHamburgerClicked(!hamburgerClicked)}
        />
      ) : (
        <img
          src="/assets/shared/mobile/icon-hamburger.svg"
          alt="hamburger icon"
          width="16"
          height="16"
          className={styles.hamburger}
          onClick={() => setHamburgerClicked(!hamburgerClicked)}
        />
      )}

      <div
        className={styles.menu_container}
        style={hamburgerClicked ? { display: "block" } : { display: "none" }}
      >
        <div className={styles.menu_links_container}>
          <Link href="/">Home</Link>
          <Link href="/">About us</Link>
        </div>
      </div>
    </header>
  );
};
