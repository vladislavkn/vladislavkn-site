import { Project as ProjectType } from '../types'
import styles from '../styles/ProjectList.module.css'
import Project from './Project'
import joinClasses from '../utils/joinClasses'

export type ProjectListProps = {
  projects: ProjectType[]
}

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => (
  <section id="projects" className="section">
    <div className={joinClasses(styles['projects'], 'section-content-wide')}>
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
