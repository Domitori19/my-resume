import styles from "@/pages/Home/Experience/Experience.module.css";
export default function Experience() {
  return (
    <section id="experience" className={styles.experienceSection}>
      <h2 className={styles.experienceTitle}>Досвід роботи</h2>
      <p className={styles.experienceText}>
        Я працював у компанії <span className={styles.highlight}>GudTool</span>,
        де основна діяльність була пов’язана з програмним кодом: додаванням
        товарів, зміною логіки, переписом стилів та компонентів. Я писав та
        оптимізував код, вносив нові функції і редагував існуючі, щоб покращити
        продуктивність і зовнішній вигляд сайту.
      </p>
    </section>
  );
}
