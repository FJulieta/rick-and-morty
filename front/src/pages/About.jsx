import React from "react";
import Layout from "../components/Layout";
import styles from "./About.module.css";

function AboutPage() {
  return (
    <Layout>
      <div>
        <p className={styles["about-text"]}>¡Hola! Soy Juli! el creador de esta aplicación</p>
        <p className={styles["about-text"]}>Me encanta programar y aprender nuevas tecnologías.</p>
        <img className={styles["about-image"]} src="/me.png" alt="Mi foto"/>
      </div>
    </Layout>
  );
}

export default AboutPage;
