import React from "react";
import styles from "../Home/Home.module.css";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className={styles.container} id="homepage-container">
      <div className={styles.content} id="homepage-content">
        <h1>FIND NEW THINGS TO DO</h1>
        <p>
          <Link to="/events" className={styles.link}>
            READ MORE ➜
          </Link>
        </p>
      </div>
    </div>
  );
}
export default Home;
