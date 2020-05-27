import Folder from '../../../../Folder';
import Blue from './blue';
import W from './w';
import Overskirt from './overskirt';
import Overskirtdark from './overskirtdark';
import Underdress from './underdress';
import Underdressdark from './underdressdark';

class Female extends Folder {
  blue() {
    return new Blue(this.rootPath, this.path);
  }

  w() {
    return new W(this.rootPath, this.path);
  }

  overskirt() {
    return new Overskirt(this.rootPath, this.path);
  }

  overskirtdark() {
    return new Overskirtdark(this.rootPath, this.path);
  }

  underdress() {
    return new Underdress(this.rootPath, this.path);
  }

  underdressdark() {
    return new Underdressdark(this.rootPath, this.path);
  }
}

export default Female;
