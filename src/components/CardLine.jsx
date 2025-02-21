import { useState } from 'react';
import styles from './CardLine.module.css';

function CardLine({
  cardNum = 0,
  startNum = 0,
  onCardClick,
  selectedCards,
  cardCount = 3,
}) {
  const [clickedCard, setClickedCard] = useState(null);

  const handleClick = i => {
    if (!selectedCards.includes(i) && selectedCards.length < cardCount) {
      setClickedCard(i);
      setTimeout(() => {
        onCardClick(i); // 애니메이션 후 카드 선택
      }, 600); // 애니메이션 시간(0.6초) 후에 실행
    }
  };

  return (
    <div className={styles.card_table}>
      <div className={styles.card_wrapper}>
        {Array.from({ length: cardNum }).map((_, i) => (
          <div
            key={i + startNum}
            className={`${styles.card} ${clickedCard === i + startNum ? styles.clicked : ''}`}
            onClick={() => {
              handleClick(i + startNum);
            }}
            style={{
              visibility: selectedCards.includes(i + startNum)
                ? 'hidden'
                : 'visible',
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default CardLine;
