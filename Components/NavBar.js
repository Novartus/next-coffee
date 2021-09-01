import React, { useState } from "react";
import Link from "next/link";
import { GiCoffeePot, GiHamburgerMenu } from "react-icons/gi";
import { GrFormClose } from "react-icons/gr";
import styles from "../styles/NavBar.module.scss";

export const Navbar = () => {
  const [hamburgerClicked, setHamburgerClicked] = useState(false);

  return (
    <header className={styles.container}>
      <Link href="/">
        <a>
          <GiCoffeePot size={44} />
        </a>
      </Link>

      <div className={styles.link_container}>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a> About us</a>
        </Link>
        <Link href="/buy-coffee">
          <a> Buy Coffee</a>
        </Link>
      </div>

      {hamburgerClicked === true ? (
        <GrFormClose
          className={styles.hamburger}
          onClick={() => setHamburgerClicked(!hamburgerClicked)}
        />
      ) : (
        <GiHamburgerMenu
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
          <Link href="/buy-coffee">
            <a
              onClick={() => {
                setHamburgerClicked(!hamburgerClicked);
              }}
            >
              Buy Coffee
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
};
