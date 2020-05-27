import Folder from '../../Folder';
import Bracelets from './bracelets';
import Bracers from './bracers';
import Gloves from './gloves';

class Hands extends Folder {
  bracelets() {
    return new Bracelets(this.rootPath, this.path);
  }

  bracers() {
    return new Bracers(this.rootPath, this.path);
  }

  gloves() {
    return new Gloves(this.rootPath, this.path);
  }
}

export default Hands;
