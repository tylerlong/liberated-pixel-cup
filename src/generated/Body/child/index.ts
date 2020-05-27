import Folder from '../../../Folder';
import Walk from './walk';

class Child extends Folder {
  walk() {
    return new Walk(this.rootPath, this.path);
  }
}

export default Child;
