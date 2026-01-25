import styles from "@/pages/Home/Contact/Contact.module.css";

const contacts = [
  {
    id: 1,
    name: "Email",
    value: "dmitrydegtyar19@gmail.com",
    link: "mailto:dmitrydegtyar19@gmail.com",
  },
  {
    id: 2,
    name: "Телефон",
    value: "+380 -- --- ----",
    link: "tel:+380 -- --- ----",
  },
];

export default function Contact() {
  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.contactContainer}>
        <h2 className={styles.title}>Контакти зі мною</h2>
        <a href="https://t.me/@telegram" className={styles.subtitle}>
          @telegram
        </a>

        <div className={styles.grid}>
          {contacts.map(({ id, name, value, link }) => (
            <div key={id} className={styles.card}>
              <h3>{name}</h3>
              <a href={link} className={styles.link}>
                {value}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
