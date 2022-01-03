import type { GetStaticProps, NextPage } from 'next'
import getContacts from '../lib/getContacts'
import getProjects from '../lib/getProjects'
import getAboutText from '../lib/getAboutText'
import { Contact, Project } from '../types'
import Nav, { NavProps } from '../components/Nav'
import Header from '../components/Header'
import ProjectList from '../components/ProjectList'
import Contacts from '../components/Contacts'
import Head from 'next/head'

type HomeProps = {
  contacts: Contact[] | null
  projects: Project[] | null
  aboutText: string | null
}

const links: NavProps['links'] = {
  'Обо мне': '#about',
  Проекты: '#projects',
  Контакты: '#contacts',
}

const Home: NextPage<HomeProps> = (props) => {
  const { aboutText, contacts, projects } = props
  return (
    <>
      <Head>
        <title>Владислав Кнышов (vladislavkn) - Портфолио</title>
        <meta name="description" content={aboutText ?? ''} />
      </Head>
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
