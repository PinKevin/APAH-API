import { MultipartFile } from '@adonisjs/core/types/bodyparser'
import drive from '@adonisjs/drive/services/main'
import { randomUUID } from 'node:crypto'

export default class FileService {
  async saveFileToDisk(file: MultipartFile) {
    const fileName = `${randomUUID()}.${file.extname}`
    await file.moveToDisk(fileName)
    return fileName
  }

  async getFromDisk(key: string) {
    const metadata = await drive.use('fs').getMetaData(key)
    const stream = await drive.use('fs').getStream(key)
    return { metadata, stream }
  }
}
