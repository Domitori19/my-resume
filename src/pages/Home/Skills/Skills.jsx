import styles from "./Skills.module.css";

// 1. Выносим данные наружу. Это можно даже перенести в отдельный файл data/skills.js
const skillsData = [
  {
    category: "Hard Skills",
    items: [
      "JavaScript",
      "React",
      "HTML/CSS",
      "Next.js",
      "Python",
      "FastAPI",
      "SQL",
      "REST API",
      "Tailwind CSS",
      "Express.js",
    ],
  },
  {
    category: "Soft Skills",
    items: [
      "Комунікація",
      "Командна робота",
      "Вирішення проблем",
      "Тайм-менеджмент",
    ],
  },
  {
    category: "Інструменти",
    items: [
      "Git",
      "VS Code",
      "Figma",
      "Postman",
      "Webpack",
      "ESLint",
      "Prettier",
    ],
  },
  {
    category: "Мови",
    items: ["Українська", "Англійська", "Російська"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className={styles.skillsSection}>
      <h2 className={styles.skillsTitle}>
        Мої <span className={styles.highlight}>Навички</span>
      </h2>

      <div className={styles.skillsContainer}>
        {/* 2. Используем map для генерации блоков */}
        {skillsData.map((group, index) => (
          <div key={index} className={styles.skillBlock}>
            <h3 className={styles.categoryTitle}>{group.category}</h3>
            <ul className={styles.skillList}>
              {group.items.map((skill, skillIndex) => (
                <li key={skillIndex} className={styles.skillItem}>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
