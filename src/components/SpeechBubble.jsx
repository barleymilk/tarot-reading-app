import styles from './SpeechBubble.module.css';

function SpeechBubble({ text }) {
  return (
    <div className={styles.speech_bubble}>
      <p className={styles.speech}>{text}</p>
    </div>
  );
}

export default SpeechBubble;
