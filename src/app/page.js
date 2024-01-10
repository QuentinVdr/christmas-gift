'use client';

import { useState } from 'react';
import GiftBox from 'src/components/giftBox/GiftBox';
import styles from './page.module.css';

export default function Home() {
  const [isGiftOpen, setIsGiftOpen] = useState(false);

  return (
    <main className={styles.main}>
      <h1>Joyeux noël !</h1>
      <div className={styles.box}>
        <button
          className={styles.giftButton}
          onClick={() => {
            setIsGiftOpen(!isGiftOpen);
          }}
        >
          <GiftBox isOpen={isGiftOpen} />
        </button>
      </div>
    </main>
  );
}
