import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";


import styles from "./Nav.module.css";

const Nav = ({ onSearch }) => {
  return (
    <div className={styles["nav-bar"]}>
      <div className={styles.links}>
        <Link to="/about" className={styles.link}>
          <button className={styles["about-button"]}>ABOUT</button>
        </Link>
        <Link to="/" className={styles.link}>
          <button className={styles["home-button"]}>HOME</button>
        </Link>
        <Link to="/form" className={styles.link}>
          <button className={styles["contact-button"]}>CONTACT</button>
        </Link>
      </div>
      {!!onSearch && (
        <div className={styles["search-bar"]}>
          <SearchBar onSearch={onSearch} />
        </div>
      )}
    </div>
  );
};

export default Nav;
