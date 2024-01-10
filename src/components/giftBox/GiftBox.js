import styles from './GiftBox.module.css';

export default function GiftBox({ isOpen }) {
  return (
    <div className={isOpen ? `${styles.boxBody} ${styles.boxBodyOpen}` : styles.boxBody}>
      <div className={styles.images}>
        <img
          id={styles.circuit}
          className={styles.image}
          src="https://via.placeholder.com/150"
          alt="cadeau - image circuit"
          width={150}
          height={150}
        />
        <img
          id={styles.alpine}
          className={styles.image}
          src="https://via.placeholder.com/150"
          alt="cadeau - image alpine"
          width={150}
          height={150}
        />
      </div>
      <div className={styles.boxLid}>
        <div className={styles.boxBowtie}></div>
      </div>
    </div>
  );
}
