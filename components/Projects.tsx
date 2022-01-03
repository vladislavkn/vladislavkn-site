import { Project as ProjectType } from '../types'
import styles from '../styles/Project.module.css'

export type ProjectProps = {
  project: ProjectType
}

const Project: React.FC<ProjectProps> = ({ project }) => (
  <article className={styles['project']}>
    <h3 className={styles['project__title']}>{project.name}</h3>
    <p className={styles['project__description']}>{project.description}</p>
    <ul className={styles['project-stack-list']}>
      {project.stack.map((stackItem) => (
        <li key={stackItem} className={styles['project-stack-list__item']}>
          {stackItem}
        </li>
      ))}
    </ul>
    <a
      className={styles['project__link']}
      href={project.link}
      target="_blank"
      rel="noreferrer"
    >
      Github
    </a>
  </article>
)

export default Project
