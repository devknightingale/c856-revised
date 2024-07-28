import React from "react";
import { Link } from "react-router-dom";
import styles from "../Navbar/Navbar.module.css";
function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Logo</div>
      <nav className={styles.navbar}>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/stay">Stay</a>
          </li>
          <li>
            <a href="/dining">Dining</a>
          </li>
          <li>
            <a href="/events">Events</a>
          </li>

          {/* ... other links */}
        </ul>
      </nav>
    </div>
  );
}
export default Navbar;
