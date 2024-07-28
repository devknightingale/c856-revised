import styles from "../../components/Book/Book.module.css";
import React from "react";

function Book() {
  return (
    <div className={styles.container}>
      <div className={styles.bookingHeaderContainer}>
        <div className={styles.bookingHeader}>
          <h1>Find a place to stay</h1>
        </div>
      </div>
      <div className={styles.bookOptionsContainer}>
        <div className={styles.bookOption}>
          <div className={styles.bookImageHotel}></div>
          <div className={styles.optionTitle}>
            <h1>Hotel</h1>
            <p>1-2 guests</p>
          </div>
          <div className={styles.bookPrice}>
            <h2>$654 - $1,234</h2>
            <h3>per night</h3>
          </div>
        </div>
        <div className={styles.bookOption}>
          <div className={styles.bookImageBNB}></div>
          <div className={styles.optionTitle}>
            <h1>B&B</h1>
            <p>1-4 guests</p>
          </div>
          <div className={styles.bookPrice}>
            <h2>$354 - $834</h2>
            <h3>per night</h3>
          </div>
        </div>
        <div className={styles.bookOption}>
          <div className={styles.bookImageCondo}></div>
          <div className={styles.optionTitle}>
            <h1>Private Rental</h1>
            <p>1-6 guests</p>
          </div>
          <div className={styles.bookPrice}>
            <h2>$1,654 - $3,234</h2>
            <h3>per night</h3>
          </div>
        </div>
        <div className={styles.bookOption}>
          <div className={styles.bookImageResort}></div>
          <div className={styles.optionTitle}>
            <h1>Resort</h1>
            <p>2-12 guests</p>
          </div>
          <div className={styles.bookPrice}>
            <h2>$350 - $875</h2>
            <h3>per night per person</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Book;
