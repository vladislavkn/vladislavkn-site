import styles from '../styles/Nav.module.css'

export type NavProps = {
  links: { [key: string]: string }
}

const Nav: React.FC<NavProps> = ({ links }) => (
  <nav className={styles['nav']}>
    <ul className={styles['nav__links']}>
      {Object.entries(links).map(([name, href]) => (
        <li key={name} className={styles['nav__link-item']}>
          <a href={href} className={styles['nav__link']}>
            {name}
          </a>
        </li>
      ))}
    </ul>
  </nav>
)

export default Nav
