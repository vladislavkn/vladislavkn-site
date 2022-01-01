import styles from '../styles/Header.module.css'
import Image from 'next/image'

export type HeaderProps = {
  aboutText: string
}

const Header: React.FC<HeaderProps> = ({ aboutText }) => (
  <header id="about" className="section">
    <div className={styles['header']}>
      <div className={styles['header__photo-wrapper']}>
        <Image
          width="120px"
          height="160px"
          src="/photo.jpg"
          alt="Vladislav Knyshov's photo"
        />
      </div>
      <div className={styles['header__text']}>
        <h1 className={styles['header__title']}>Владислав Кнышов</h1>
        <p className={styles['header__description']}>{aboutText}</p>
      </div>
    </div>
  </header>
)

export default Header
