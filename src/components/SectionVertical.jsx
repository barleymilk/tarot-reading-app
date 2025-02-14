import styles from './SectionVertical.module.css';
import Button from './Button';

function SectionVertical({
  title = '제목',
  price = 0,
  content = ['콘텐츠'],
  upgrade = true,
}) {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{title}</h2>
      <article>
        <p>&#8361; {price}/월</p>
        <Button
          style={{ visibility: upgrade ? 'visible' : 'hidden', margin: '12px' }}
          label="업그레이드"
        />
        <hr className={styles.line} />
        <ul className={styles.small_dot}>
          {content.map(c => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </article>
    </section>
  );
}

export default SectionVertical;
