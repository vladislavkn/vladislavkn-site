import { Project as ProjectType } from '../types'
import styles from '../styles/ProjectList.module.css'
import Project from './Projects'

export type ProjectListProps = {
  projects: ProjectType[]
}

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => (
  <section id="projects" className="section">
    <div className={styles['projects']}>
      <h2 className={styles['projects__title']}>Мои проекты</h2>
      <div className={styles['projects__list']}>
        {projects.map((project) => (
          <Project key={project.name} project={project} />
        ))}
      </div>
    </div>
  </section>
)

export default ProjectList
