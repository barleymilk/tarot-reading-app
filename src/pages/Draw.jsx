import { useState } from 'react';
import styles from './Draw.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingButton from '../components/FloatingButton';
import CardLine from '../components/CardLine';
import Button from '../components/Button';
import { card } from '../db/card.json';

// 0~77 사이에서 중복 없이 랜덤 숫자 생성
const generateRandomCards = num => {
  const numbers = new Set();
  while (numbers.size < num) {
    numbers.add(Math.floor(Math.random() * 78));
  }
  return Array.from(numbers);
};

function DrawPrac() {
  const [step, setStep] = useState(1);
  const [userQuestion, setUserQuestion] = useState('');
  const [cardCount, setCardCount] = useState(3);
  const [selectedCards, setSelectedCards] = useState([]);
  const [revealedCardImages, setRevealedCardImages] = useState([]);
  const [flippingStates, setFlippingStates] = useState([]);

  const handleQuestionChange = e => {
    setUserQuestion(e.target.value);
  };

  const goToNextStep = () => {
    if (userQuestion.trim() !== '') setStep(2);
  };

  const selectCardCount = cnt => {
    setCardCount(cnt);
    setStep(3);
  };

  const selectCard = index => {
    if (selectedCards.length < cardCount && !selectedCards.includes(index)) {
      setSelectedCards([...selectedCards, index]);
    }
  };

  const revealCards = () => {
    const randomCards = generateRandomCards(cardCount);
    let newRevealedImages = [...revealedCardImages];
    let newFlippingStates = new Array(cardCount).fill(false);

    randomCards.forEach((cardId, index) => {
      setTimeout(
        () => {
          newRevealedImages[index] =
            card.find(data => data.id === cardId)?.img_path || '';
          newFlippingStates[index] = true;

          setRevealedCardImages([...newRevealedImages]);
          setFlippingStates([...newFlippingStates]);
        },
        (index + 1) * 600,
      );
    });

    setTimeout(() => setStep(4), (cardCount + 1) * 600);
  };

  const resetDraw = () => {
    setStep(1);
    setUserQuestion('');
    setCardCount(3);
    setSelectedCards([]);
    setRevealedCardImages([]);
    setFlippingStates([]);
  };

  return (
    <>
      <Header />
      <main className="container" style={{ minHeight: '400px' }}>
        {/* 1. 질문 입력 단계 */}
        {step === 1 && (
          <>
            <div className={styles.cardSection}>
              <h3>어떤 질문을 하려고 오셨나요?</h3>
            </div>
            <div className={`${styles.cardSection} ${styles.questionBox}`}>
              <input
                type="text"
                value={userQuestion}
                onChange={handleQuestionChange}
                placeholder="질문을 입력하세요...(예: 취업운이 궁금합니다.)"
                className={styles.input}
              />
              <Button label="다음" onClick={goToNextStep} />
            </div>
          </>
        )}

        {/* 2. 카드 개수 선택 */}
        {step === 2 && (
          <>
            <div className={styles.cardSection}>몇 장을 뽑길 원하시나요?</div>
            <div
              className={`${styles.cardSection} ${styles.cardCountSelection}`}
            >
              {[1, 3, 5].map(cnt => (
                <Button
                  key={cnt}
                  label={`${cnt}장`}
                  onClick={() => selectCardCount(cnt)}
                />
              ))}
            </div>
          </>
        )}

        {/* 3. 카드 뽑기 */}
        {step === 3 && (
          <>
            <div className={`${styles.cardSection} ${styles.selectCardArea}`}>
              <h3>
                카드를 뽑아주세요 ({selectedCards.length}/{cardCount})
              </h3>
              <Button label="해석 보기" onClick={revealCards} />
            </div>

            {/* 선택된 카드 표시 */}
            <div className={styles.cardSection}>
              <div className={styles.selectedCards}>
                {Array.from({ length: cardCount }).map((_, i) => (
                  <div key={i} className={styles.cardSlot}>
                    {selectedCards[i] !== undefined && (
                      <div
                        className={`${styles.card} ${flippingStates[i] ? styles.flipping : ''}`}
                        style={{
                          backgroundImage: revealedCardImages[i]
                            ? `url(${revealedCardImages[i]})`
                            : 'url(/images/cards/card_back.png)',
                        }}
                      ></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* 카드 스프레드 */}
            <div className={styles.cardSection}>
              <CardLine
                cardNum={39}
                startNum={0}
                onCardClick={selectCard}
                selectedCards={selectedCards}
                cardCount={cardCount}
              />
              <CardLine
                cardNum={39}
                startNum={39}
                onCardClick={selectCard}
                selectedCards={selectedCards}
                cardCount={cardCount}
              />
            </div>
          </>
        )}

        {/* 4. 카드 해석 */}
        {step === 4 && (
          <>
            <div className={styles.cardSection}>
              <h3>당신이 뽑은 카드의 의미</h3>
            </div>

            {/* 선택된 카드 표시 */}
            <div className={styles.cardSection}>
              <div className={styles.selectedCards}>
                {Array.from({ length: cardCount }).map((_, i) => (
                  <div key={i} className={styles.cardSlot}>
                    <div
                      className={`${styles.card} ${flippingStates[i] ? styles.flipping : ''}`}
                      style={{
                        backgroundImage: revealedCardImages[i]
                          ? `url(${revealedCardImages[i]})`
                          : 'url(/images/cards/card_back.png)',
                      }}
                    ></div>
                  </div>
                ))}
              </div>
            </div>

            {/* 해석 및 버튼 */}
            <div className={`${styles.cardSection} ${styles.readingBox}`}>
              <article>
                📌 해석 내용이 여기에 들어갑니다. 뽑은 카드에 따른 의미를
                제공하세요.
              </article>
              <div>
                <Button label="다시 질문하기" onClick={resetDraw} />
                <Button label="카드 저장하기" />
              </div>
            </div>
          </>
        )}

        <FloatingButton />
      </main>
      <Footer />
    </>
  );
}

export default DrawPrac;
