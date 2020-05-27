import fs from 'fs';
import path from 'path';

import Folder from './Folder';

class File extends Folder {
  read(): Buffer {
    return fs.readFileSync(
      path.join(this.lpc.spritesFolder, ...this.path()) + '.png'
    );
  }
}

export default File;
