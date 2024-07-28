import React from "react";
import styles from "../Stay/Stay.module.css";
import { Link } from "react-router-dom";
function Stay() {
  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <div className={styles.stayHeader}>
          <h1 className={styles.stayHeaderTitle}>Hotels & Accommodations</h1>
          <p className={styles.stayHeaderDesc}>
            Taniti has a wide variety of accommodations - from luxury hotels to
            quaint bed and breakfasts, from resorts to hostels - if you're
            looking for a place to lay your head in Taniti during your stay,
            look no further.
          </p>
        </div>
      </div>
      <div className={styles.optionsContainer}>
        <div className={styles.hotel} id={styles.hotelCard}>
          <h1 className={styles.hotelName}>
            <Link to="/book">Hotels</Link>
          </h1>
          <p className={styles.hotelDescription}>
            For staying close to the action
          </p>
        </div>

        <div className={styles.hotel} id={styles.bedAndBreakfastsCard}>
          <h1 className={styles.hotelName}>
            <Link to="/book">Bed & Breakfasts</Link>
          </h1>
          <p className={styles.hotelDescription}>For that cozy home feeling</p>
        </div>
        <div className={styles.hotel} id={styles.privateRentalsCard}>
          <h1 className={styles.hotelName}>
            <Link to="/book">Private Rentals</Link>
          </h1>
          <p className={styles.hotelDescription}>
            For that private luxury getaway
          </p>
        </div>
        <div className={styles.hotel} id={styles.resortCard}>
          <h1 className={styles.hotelName}>
            <Link to="/book">Resorts</Link>
          </h1>
          <p className={styles.hotelDescription}>For the all-inclusive stay </p>
        </div>
      </div>
    </div>
  );
}

export default Stay;
