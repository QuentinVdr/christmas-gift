import GiftBox from 'src/components/giftBox/GiftBox';
import giftStyles from 'src/components/giftBox/GiftBox.module.css';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Joyeux noël !</h1>
      <div className={styles.box}>
        <GiftBox>
          <div className={giftStyles.images}>
            <img
              id={giftStyles.circuit}
              className={giftStyles.image}
              src="/noel-2023-papa/loheac-circuit.jpg"
              alt="indice cadeau circuit de lohéac"
              width={250}
              height={150}
            />
            <img
              id={giftStyles.alpine}
              className={giftStyles.image}
              src="/noel-2023-papa/alpine-110S.jpg"
              alt="indice cadeau alpine 110S"
              width={250}
              height={150}
            />
          </div>
        </GiftBox>
      </div>
    </main>
  );
}
