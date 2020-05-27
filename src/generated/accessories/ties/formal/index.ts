import Folder from '../../../../Folder';
import Bowtie from './bowtie';
import Necktie from './necktie';

class Formal extends Folder {
  bowtie() {
    return new Bowtie(this.rootPath, this.path);
  }

  necktie() {
    return new Necktie(this.rootPath, this.path);
  }
}

export default Formal;
