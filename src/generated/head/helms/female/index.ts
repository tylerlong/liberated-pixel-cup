import Folder from '../../../../Folder';
import Barbarian from './barbarian';
import Barbuta from './barbuta';
import Chainhat from './chainhat';
import Legion1helmet from './legion1helmet';
import Legion2helmet from './legion2helmet';
import Legion3helmet from './legion3helmet';
import Maximus from './maximus';

class Female extends Folder {
  barbarian() {
    return new Barbarian(this.rootPath, this.path);
  }

  barbuta() {
    return new Barbuta(this.rootPath, this.path);
  }

  chainhat() {
    return new Chainhat(this.rootPath, this.path);
  }

  legion1helmet() {
    return new Legion1helmet(this.rootPath, this.path);
  }

  legion2helmet() {
    return new Legion2helmet(this.rootPath, this.path);
  }

  legion3helmet() {
    return new Legion3helmet(this.rootPath, this.path);
  }

  maximus() {
    return new Maximus(this.rootPath, this.path);
  }
}

export default Female;
