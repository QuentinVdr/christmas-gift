import styles from './GiftBox.module.css';

export default function GiftBox() {
  return (
    <div className={styles.boxBody}>
      <div className={styles.boxLid}>
        <div className={styles.boxBowtie}></div>
      </div>
    </div>
  );
}
