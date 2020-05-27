import axios from 'axios';

import Folder from './Folder';

class File extends Folder {
  async download(): Promise<Buffer> {
    const r = await axios.get(
      `https://github.com/tylerlong/Universal-LPC-spritesheet/raw/master/${this.path().join(
        '/'
      )}.png`,
      {responseType: 'arraybuffer'}
    );
    return r.data;
  }
}

export default File;
