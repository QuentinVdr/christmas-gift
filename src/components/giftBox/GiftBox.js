import styles from './GiftBox.module.css';

export default function GiftBox({ isOpen }) {
  return (
    <div className={isOpen ? `${styles.boxBody} ${styles.boxBodyOpen}` : styles.boxBody}>
      <div className={styles.boxLid}>
        <div className={styles.boxBowtie}></div>
      </div>
    </div>
  );
}
