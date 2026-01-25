import styles from "@/pages/Home/Project/Project.module.css";
const projectData = [
  {
    id: 1,
    title: "Project 1",
    description: "---",
  },
  {
    id: 2,
    title: "Project 2",
    description: "---",
  },
];
export default function Project() {
  return (
    <section id="project" className={styles.projectSection}>
      <h2 className={styles.Title}>
        Мої <span style={{ color: "var(--primary2)" }}>Проєкти</span>
      </h2>
      <div className={styles.projectContainer}>
        {projectData.map((project) => (
          <div className={styles.projectCard} key={project.id}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
