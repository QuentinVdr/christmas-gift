import Image from 'next/image';
import styles from './GiftBox.module.css';

export default function GiftBox({ isOpen }) {
  return (
    <div className={isOpen ? `${styles.boxBody} ${styles.boxBodyOpen}` : styles.boxBody}>
      <div className={styles.images}>
        <Image
          id={styles.circuit}
          className={styles.image}
          src="/loheac-circuit.jpg"
          alt="indice cadeau circuit de lohéac"
          width={250}
          height={150}
        />
        <Image
          id={styles.alpine}
          className={styles.image}
          src="/alpine-110S.jpg"
          alt="indice cadeau alpine 110S"
          width={250}
          height={150}
        />
      </div>
      <div className={styles.boxLid}>
        <div className={styles.boxBowtie}></div>
      </div>
    </div>
  );
}
