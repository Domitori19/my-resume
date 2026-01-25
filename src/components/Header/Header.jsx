import { useState } from "react";
import styles from "@/components/Header/Header.module.css";
import { NavLink } from "react-router-dom";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Функция для переключения меню
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  // Закрываем меню при клике на ссылку (важно для UX)
  const closeMenu = () => {
    setIsOpen(false);
  };

  // Простые якорные ссылки внутри страницы

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <NavLink to="/" className={styles.logo} onClick={closeMenu}>
          Domitori<span>.</span>
        </NavLink>

        {/* Кнопка Гамбургер */}
        <button
          className={`${styles.hamburger} ${isOpen ? styles.open : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>

        {/* Навигация */}
        {/* Добавляем класс .open если стейт true */}
        <nav className={`${styles.nav} ${isOpen ? styles.open : ""}`}>
          <ul className={styles.navList}>
            <li>
              <a href="#hero" className={styles.navLink} onClick={closeMenu}>
                Главная
              </a>
            </li>
            <li>
              <a href="#skills" className={styles.navLink} onClick={closeMenu}>
                Навички
              </a>
            </li>
            <li>
              <a href="#project" className={styles.navLink} onClick={closeMenu}>
                Проекти
              </a>
            </li>
            <li>
              <a href="#contact" className={styles.navLink} onClick={closeMenu}>
                Контакти
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
