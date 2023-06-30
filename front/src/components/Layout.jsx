import React, { useEffect } from "react";
import Nav from "./Nav";
import styles from "./Layout.module.css";


function Layout({ children, onSearch, onAddRandomCharacter }) {
  useEffect(() => {
    const audio = new Audio("/background.mp3");
    audio.play();

    return () => {
      audio.pause();
    };
  }, []);

  return (
    <>
      <Nav onSearch={onSearch} onAddRandomCharacter={onAddRandomCharacter} />
      <div className={styles.body}>
        <div className={styles["background-video"]}>
          <video autoPlay loop muted>
            <source src="/background.mp4" type="video/mp4" />
          </video>
        </div>
        {children}
      </div>
    </>
  );
}

export default Layout;
