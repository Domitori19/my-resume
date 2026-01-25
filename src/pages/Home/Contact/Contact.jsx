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

        <a
          href="https://t.me/domitor9"
          className={styles.telegramLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/500px-Telegram_2019_Logo.svg.png"
            alt="telegram logo"
            width={25}
            height={25}
          />
          <span>Мій телеграм</span>
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
