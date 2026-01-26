import styles from "@/pages/Home/Hero/Hero.module.css";
export default function Hero() {
  return (
    <section className={styles.heroSection} id="hero">
      <div className={styles.container}>
        <div className={styles.badge}>👋 Привіт, я Дмитро Дегтяр</div>

        <h1 className={styles.title}>
          Розробка сучасних <br />
          <span className={styles.colorText}>веб-інтерфейсів</span>
        </h1>

        <p className={styles.subtitle}>
          {/* Я создаю быстрые и удобные интерфейсы. Люблю минимализм, чистый код и
          современные веб-технологии. */}
          Розробляю SPA та адаптивні сайти. Використовую сучасний JS (React),
          пишу чистий код та дбаю про зручність інтерфейсу.
        </p>

        {/* <div className={styles.buttons}>
          <a href="#projects" className={`${styles.btn} ${styles.btnPrimary}`}>
            Мої роботи
          </a>

          <a href="#" className={`${styles.btn} ${styles.btnOutline}`}>
            Завантажити CV
          </a>
        </div> */}
      </div>

      <div className={styles.heroGlow}></div>
    </section>
  );
}
