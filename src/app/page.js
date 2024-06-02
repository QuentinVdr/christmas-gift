import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>App pour offrir des cadeaux !</h1>
      <div className={styles.box}>
        <Link href="/noel-2023-papa" className={styles.linkButton}>
          noel 2023 papa
        </Link>
        <Link href="/aniv-2024-maman" className={styles.linkButton}>
          aniv 2024 maman
        </Link>
      </div>
    </main>
  );
}
