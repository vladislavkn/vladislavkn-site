import styles from '../styles/Nav.module.css'

export type NavProps = {
  links: { name: string; href: string }[]
}

const Nav: React.FC<NavProps> = ({ links }) => (
  <nav className={styles['nav']}>
    <ul className={styles['nav__links']}>
      {links.map(({ name, href }) => (
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
