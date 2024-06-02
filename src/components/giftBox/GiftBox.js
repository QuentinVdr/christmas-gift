'use client';

import { useState } from 'react';
import styles from './GiftBox.module.css';

export default function GiftBox({ children: gift }) {
  const [isGiftOpen, setIsGiftOpen] = useState(false);

  return (
    <button
      className={styles.giftButton}
      onClick={() => {
        setIsGiftOpen((prevIsGiftOpen) => !prevIsGiftOpen);
      }}
    >
      <div className={isGiftOpen ? `${styles.boxBody} ${styles.boxBodyOpen}` : styles.boxBody}>
        <div className={styles.images}>{gift}</div>
        <div className={styles.boxLid}>
          <div className={styles.boxBowtie}></div>
        </div>
      </div>
    </button>
  );
}
