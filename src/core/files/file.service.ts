import {dirname, isAbsolute, join} from 'path'
import {promises} from 'fs'

export class FileService {
  private async isExist(path: string) {
    try {
      await promises.stat(path)
      return true
    } catch {
      return false
    }
  }

  public getFilePath(
    path: string,
    name: string,
    extension: string
  ): string {
    if (!isAbsolute(path)) {
      path = join(__dirname + '/' + path)
    }
    return join(dirname(path) + '/' + name + '.' + extension)
  }

  async deleteFileIfExist(path: string): Promise<void> {
    if (await this.isExist(path)) {
      promises.unlink(path)
    }
  }
}