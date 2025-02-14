import { useState } from 'react';
import styles from './Draw.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingButton from '../components/FloatingButton';
import SpeechBubble from '../components/SpeechBubble';
import CardLine from '../components/CardLine';
import Button from '../components/Button';

function Draw() {
  const [selectedCards, setSelectedCards] = useState([]);

  // 카드 클릭 핸들러 (index를 직접 저장)
  const handleCardClick = index => {
    if (selectedCards.length < 3 && !selectedCards.includes(index)) {
      setSelectedCards([...selectedCards, index]);
    }
    console.log(selectedCards);
  };

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

        {/* 사용자 행동 유도 UI */}
        <div className={styles.card_table}>
          <p>모든 카드를 뽑았다. 이제 뒤집어볼까?</p>
          <Button label="카드 뒤집기" />
        </div>

        {/* 선택된 카드 표시 */}
        <div className={styles.card_table}>
          <div className={styles.selected}>
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className={styles.selected_card_position}>
                {selectedCards[i] !== undefined && (
                  <div className={styles.selected_card}></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 카드 테이블 (두 줄) */}
        <div className={styles.card_table}>
          {/* 위쪽 줄 (index: 0~38) */}
          <CardLine
            cardNum={39}
            startNum={0}
            onCardClick={handleCardClick}
            selectedCards={selectedCards}
          />

          {/* 아래쪽 줄 (index: 39~77) */}
          <CardLine
            cardNum={39}
            startNum={39}
            onCardClick={handleCardClick}
            selectedCards={selectedCards}
          />
        </div>

        <FloatingButton />
      </main>
      <Footer />
    </>
  );
}

export default Draw;
