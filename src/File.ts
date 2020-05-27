import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

import Folder from './Folder';
import mappings from './generated/mappings';

class File extends Folder {
  read(): Buffer {
    return fs.readFileSync(path.join(this.rootPath, this.filePath));
  }

  get filePath(): string {
    return mappings[this.path.slice(1).join('/')];
  }

  async overlay(...files: File[]): Promise<Buffer> {
    return await sharp(this.read())
      .composite(files.map(f => ({input: f.read()})))
      .toBuffer();
  }
}

export default File;
