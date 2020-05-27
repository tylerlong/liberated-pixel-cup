import Folder from '../../Folder';
import Body from './body';

class Behind extends Folder {
  body() {
    return new Body(this.rootPath, this.path);
  }
}

export default Behind;
