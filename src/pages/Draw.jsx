import styles from './Draw.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingButton from '../components/FloatingButton';
import SpeechBubble from '../components/SpeechBubble';
import CardLine from '../components/CardLine';

function Draw() {
  return (
    <>
      <Header />
      <main className="container">
        {/* 두꺼비 타로 리더 */}
        <div className={styles.counselor}>
          <div className={styles.image_box}>
            <img
              className={styles.image}
              src="/images/toad.png"
              alt="두꺼비 마녀"
            />
          </div>
          <SpeechBubble text="카드를 3장 골라주세요!" />
        </div>

        {/* 뽑은 카드 */}
        <div className={styles.card_table}>
          <div className={styles.selected}>
            <div className={styles.selected_card_position}>
              <div
                className={`${styles.selected_card} ${!styles.hidden}`}
              ></div>
            </div>
            <div className={styles.selected_card_position}>
              <div className={`${styles.selected_card} ${styles.hidden}`}></div>
            </div>
            <div className={styles.selected_card_position}>
              <div className={`${styles.selected_card} ${styles.hidden}`}></div>
            </div>
          </div>
        </div>

        {/* 카드 테이블 */}
        <div className={styles.card_table}>
          <CardLine cardNum={38} />
          <CardLine cardNum={38} />
        </div>

        <FloatingButton />
      </main>
      <Footer />
    </>
  );
}

export default Draw;
