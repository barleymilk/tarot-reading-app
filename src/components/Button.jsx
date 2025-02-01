import styles from './Button.module.css';

function Button({
  label = 'Click Me',
  onClick,
  variant = 'primary',
  disabled = false,
  ...props
}) {
  return (
    <button
      className={`${styles.button} ${styles[variant]}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {label}
    </button>
  );
}

export default Button;
