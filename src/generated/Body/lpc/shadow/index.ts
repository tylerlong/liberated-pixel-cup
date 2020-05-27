import Folder from '../../../../Folder';
import Child from './child';

class Shadow extends Folder {
  child() {
    return new Child(this.rootPath, this.path);
  }
}

export default Shadow;
