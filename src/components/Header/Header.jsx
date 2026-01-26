import { useState } from "react";
import styles from "@/components/Header/Header.module.css";
import { NavLink } from "react-router-dom";

const nav_links = [
  { to: "#hero", label: "Главная" },
  { to: "#skills", label: "Навички" },
  // { to: "#project", label: "Проекти" },
  { to: "#contact", label: "Контакти" },
];

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
          {/* Используем список для лучшего SEO */}
          <ul className={styles.navList}>
            {nav_links.map((link) => (
              <li key={link.to} className={styles.navItem}>
                <a
                  href={link.to}
                  className={styles.navLink}
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
