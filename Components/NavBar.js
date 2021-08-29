import React, { useState } from "react";
import styles from "../styles/NavBar.module.scss";
import Link from "next/link";

export const Navbar = () => {
  const [hamburgerClicked, setHamburgerClicked] = useState(false);

  return (
    <header className={styles.container}>
      <Link href="/">
        <img
          className={styles.logo}
          src="/assets/shared/logo.jpg"
          alt="coffee logo"
          width="236"
          height="26"
        />
      </Link>

      <div className={styles.link_container}>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a> About us</a>
        </Link>
        <Link href="/">
          <a> Create Subscription</a>
        </Link>
      </div>

      {hamburgerClicked === true ? (
        <img
          src="/assets/icons/hamburger-menu-close.svg"
          alt="hamburger icon"
          width="16"
          height="16"
          className={styles.hamburger}
          onClick={() => setHamburgerClicked(!hamburgerClicked)}
        />
      ) : (
        <img
          src="/assets/icons/hamburger-menu.svg"
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
          <Link href="/">
            <a
              onClick={() => {
                setHamburgerClicked(!hamburgerClicked);
              }}
            >
              Home
            </a>
          </Link>
          <Link href="/about">
            <a
              onClick={() => {
                setHamburgerClicked(!hamburgerClicked);
              }}
            >
              About us
            </a>
          </Link>
          <Link href="/">
            <a
              onClick={() => {
                setHamburgerClicked(!hamburgerClicked);
              }}
            >
              Create Subscription
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
};
