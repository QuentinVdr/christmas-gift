import GiftBox from 'src/components/giftBox/GiftBox';
import giftStyles from 'src/components/giftBox/GiftBox.module.css';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Joyeux anniversaire maman !</h1>
      <div className={styles.box}>
        <GiftBox>
          <div>
            <img
              id={giftStyles.massage}
              className={giftStyles.image}
              src="/aniv-2024-maman/massageCalicéo.png"
              alt="indice cadeau circuit de lohéac"
              width={300}
              height={225}
            />
          </div>
        </GiftBox>
      </div>
    </main>
  );
}
