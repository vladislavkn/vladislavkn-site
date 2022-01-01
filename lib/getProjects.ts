import { Project } from '../types'
import path from 'path'
import fs from 'fs'
import YAML from 'yaml'

const getProjects = (): Project[] | null => {
  try {
    const projectsDirPath = path.join('data', 'projects')
    const projectFiles = fs.readdirSync(projectsDirPath)

    return projectFiles.reduce((acc, cur) => {
      const projectFilePath = path.join(projectsDirPath, cur)
      const projectFile = fs.readFileSync(projectFilePath, 'utf-8')
      const projectData = YAML.parse(projectFile)

      return [...acc, projectData]
    }, [] as Project[])
  } catch (e) {
    console.error(e)
    return null
  }
}

export default getProjects
