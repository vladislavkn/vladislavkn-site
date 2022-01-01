import type { GetStaticProps, NextPage } from 'next'
import getContacts from '../lib/getContacts'
import getProjects from '../lib/getProjects'
import getAboutText from '../lib/getAboutText'
import { Contact } from '../types'
import Nav, { NavProps } from '../components/Nav'
import Header from '../components/Header'
import ProjectList from '../components/ProjectList'
import Contacts from '../components/Contacts'

type HomeProps = {
  contacts: Contact[] | null
  projects: any[] | null
  aboutText: string | null
}

const links: NavProps['links'] = [
  {
    name: 'Обо мне',
    href: '#about',
  },
  {
    name: 'Проекты',
    href: '#projects',
  },
  {
    name: 'Контакты',
    href: '#contacts',
  },
]

const Home: NextPage<HomeProps> = (props) => {
  const { aboutText, contacts, projects } = props
  return (
    <>
      <Nav links={links} />
      {aboutText && <Header aboutText={aboutText} />}
      {projects && <ProjectList projects={projects} />}
      {contacts && <Contacts contacts={contacts} />}
    </>
  )
}

export const getStaticProps: GetStaticProps<HomeProps> = () => ({
  props: {
    contacts: getContacts(),
    projects: getProjects(),
    aboutText: getAboutText(),
  },
})

export default Home
