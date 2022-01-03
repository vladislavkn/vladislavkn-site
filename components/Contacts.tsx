import styles from '../styles/Contacts.module.css'
import { Contact } from '../types'
import joinClasses from '../utils/joinClasses'

export type ContactsProps = {
  contacts: Contact[]
}

const Contacts: React.FC<ContactsProps> = ({ contacts }) => (
  <section id="contacts" className="section">
    <div className={joinClasses(styles['contacts'], 'section-content-wide')}>
      <h2 className={styles['contacts__title']}>Контакты</h2>
      <ul className={styles['contacts__list']}>
        {contacts.map(({ platform, link }) => (
          <li key={platform} className={styles['contacts__item']}>
            <a
              className={styles['contacts__link']}
              href={link}
              target="_blank"
              rel="noreferrer"
            >
              {platform}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </section>
)

export default Contacts
