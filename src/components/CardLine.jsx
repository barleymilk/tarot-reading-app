import styles from './CardLine.module.css';

function CardLine({ cardNum = 0 }) {
  return (
    <div className={styles.card_table}>
      <div className={styles.card_wrapper}>
        {Array.from({ length: cardNum }).map((_, i) => (
          <div key={i} className={styles.card}></div>
        ))}
      </div>
    </div>
  );
}

export default CardLine;
