import Folder from '../../../../../../../Folder';
import Blue from './blue';
import Green from './green';
import Orange from './orange';

class Gray extends Folder {
  blue() {
    return new Blue(this.rootPath, this.path);
  }

  green() {
    return new Green(this.rootPath, this.path);
  }

  orange() {
    return new Orange(this.rootPath, this.path);
  }
}

export default Gray;
