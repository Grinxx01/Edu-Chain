import React from "react";
import styles from "../page.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>EduChain</h1>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li><a href="#home" className={styles.link}>Home</a></li>
          <li><a href="#about" className={styles.link}>Education</a></li>
          <li><a href="#contact" className={styles.link}>Docs</a></li>
          <div className={styles.login}>
            <a href="#login" className={styles.link}>Login</a>
          </div>
          <div>
            <a href="#register" className={styles.link}>SignUp</a>
          </div>
        </ul>
        
      </nav>
    </header>
  );
};
export default Header;
