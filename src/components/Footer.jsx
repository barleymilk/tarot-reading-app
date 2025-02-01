import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faYoutube,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.footer__title}>Tarot Reader</p>
      <div className={styles.footer__social}>
        <Link
          className={styles.footer__link}
          to="#"
          target="_blank"
          title="타로리더 유튜브 링크"
        >
          <FontAwesomeIcon className={styles.footer__icon} icon={faYoutube} />
        </Link>

        <Link
          className={styles.footer__link}
          to="#"
          target="_blank"
          title="타로리더 인스타그램 링크"
        >
          <FontAwesomeIcon className={styles.footer__icon} icon={faInstagram} />
        </Link>

        <Link
          className={styles.footer__link}
          to="#"
          target="_blank"
          title="타로리더 깃헙 링크"
        >
          <FontAwesomeIcon className={styles.footer__icon} icon={faGithub} />
        </Link>
      </div>
      <p className={styles.footer__copy}>
        Copyright &copy; 2025 barleymilk All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
