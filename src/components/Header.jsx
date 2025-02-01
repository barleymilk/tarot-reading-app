import styles from './Header.module.css';
import { Link, NavLink } from 'react-router-dom';

import Button from './Button';

const navItems = [
  { id: 'home', label: 'Home', to: '/' },
  { id: 'about', label: 'About', to: '/about' },
  { id: 'draw', label: 'Draw', to: '/draw' },
  { id: 'subscribe', label: 'Subscribe', to: '/subscribe' },
];

function Header() {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        {/* 이미지(로고) */}
        <div className={styles.nav__logo}>
          <img
            className={styles.nav__img}
            src="/images/logo.png"
            alt="타로 리더 로고"
          />
          <Link to="/" className={styles.nav__brand}>
            Tarot Reader
          </Link>
        </div>

        {/* 메뉴 */}
        <div className={styles.nav__menu}>
          {navItems.map(item => (
            <NavLink
              key={item.id}
              to={item.to}
              className={({ isActive }) =>
                `${styles.nav__link} ${isActive ? styles.active : ''}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <span aria-hidden="true" className={styles.divider}>
            |
          </span>
          <Link to="/signin" className={styles.sign_in}>
            Sign In
          </Link>
          <Button label="Sign Up" />
        </div>
      </nav>
    </header>
  );
}

export default Header;
