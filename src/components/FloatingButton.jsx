import { useEffect, useState } from 'react';
import styles from './FloatingButton.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

function FloatingButton() {
  const [isVisible, setIsVisible] = useState(false);

  // 스크롤 감지하여 버튼 표시 여부 설정
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // 맨 위로 이동하는 함수
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      className={`${styles.floating_button} ${isVisible ? styles.visible : styles.hidden}`}
      onClick={scrollToTop}
    >
      <FontAwesomeIcon
        className={styles.floating_button_icon}
        icon={faArrowUp}
      />
    </button>
  );
}

export default FloatingButton;
