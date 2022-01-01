import fs from 'fs'
import path from 'path'

const getAboutText = (): string | null => {
  try {
    const aboutFilePath = path.join('data', 'about.txt')
    return fs.readFileSync(aboutFilePath, 'utf-8')
  } catch (e) {
    console.error(e)
    return null
  }
}

export default getAboutText
