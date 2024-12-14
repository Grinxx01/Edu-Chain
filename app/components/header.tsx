import React from "react";
import styles from "../page.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>My Website</h1>
      <nav>
        <ul className={styles.navList}>
          <li><a href="#home" className={styles.link}>Home</a></li>
          <li><a href="#about" className={styles.link}>About</a></li>
          <li><a href="#contact" className={styles.link}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
