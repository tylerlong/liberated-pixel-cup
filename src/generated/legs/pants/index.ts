import Folder from '../../../Folder';
import Child from './child';
import Female from './female';
import Male from './male';
import Black from './black';
import Blue from './blue';
import Brown from './brown';

class Pants extends Folder {
  child() {
    return new Child(this.rootPath, this.path);
  }

  female() {
    return new Female(this.rootPath, this.path);
  }

  male() {
    return new Male(this.rootPath, this.path);
  }

  black() {
    return new Black(this.rootPath, this.path);
  }

  blue() {
    return new Blue(this.rootPath, this.path);
  }

  brown() {
    return new Brown(this.rootPath, this.path);
  }
}

export default Pants;
