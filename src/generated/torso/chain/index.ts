import Folder from '../../../Folder';
import Formal from './formal';
import Mail from './mail';
import Tabard from './tabard';

class Chain extends Folder {
  formal() {
    return new Formal(this.rootPath, this.path);
  }

  mail() {
    return new Mail(this.rootPath, this.path);
  }

  tabard() {
    return new Tabard(this.rootPath, this.path);
  }
}

export default Chain;
