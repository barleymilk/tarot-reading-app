import styles from './Section.module.css';

function Section({ title = 'TITLE', id, children }) {
  return (
    <section id={id} className={styles.section}>
      <h2 className={styles.section__title}>{title}</h2>
      {children}
    </section>
  );
}

export default Section;
