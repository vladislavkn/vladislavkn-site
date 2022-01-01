import path from 'path'
import fs from 'fs'
import YAML from 'yaml'
import { Contact } from '../types'

const getContacts = (): Contact[] | null => {
  try {
    const contactsFilePath = path.join('data', 'contacts.yaml')
    const contactsFile = fs.readFileSync(contactsFilePath, 'utf8')

    const contactsMap = YAML.parse(contactsFile) as {
      [key: string]: string
    }

    return Object.entries(contactsMap).reduce(
      (acc, [platform, link]) => [...acc, { platform, link }],
      [] as Contact[]
    )
  } catch (e) {
    console.error(e)
    return null
  }
}

export default getContacts
