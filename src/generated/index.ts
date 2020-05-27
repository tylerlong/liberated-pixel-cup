import Folder from '../Folder';
import Accessories from './accessories';
import Arms from './arms';
import Behind from './behind';
import Belt from './belt';
import Body from './body';
import Facial from './facial';
import Feet from './feet';
import Hair from './hair';
import Hands from './hands';
import Head from './head';
import Legs from './legs';
import Shoulders from './shoulders';
import Torso from './torso';
import Weapons from './weapons';

class Root extends Folder {
  accessories() {
    return new Accessories(this.rootPath, this.path);
  }

  arms() {
    return new Arms(this.rootPath, this.path);
  }

  behind() {
    return new Behind(this.rootPath, this.path);
  }

  belt() {
    return new Belt(this.rootPath, this.path);
  }

  body() {
    return new Body(this.rootPath, this.path);
  }

  facial() {
    return new Facial(this.rootPath, this.path);
  }

  feet() {
    return new Feet(this.rootPath, this.path);
  }

  hair() {
    return new Hair(this.rootPath, this.path);
  }

  hands() {
    return new Hands(this.rootPath, this.path);
  }

  head() {
    return new Head(this.rootPath, this.path);
  }

  legs() {
    return new Legs(this.rootPath, this.path);
  }

  shoulders() {
    return new Shoulders(this.rootPath, this.path);
  }

  torso() {
    return new Torso(this.rootPath, this.path);
  }

  weapons() {
    return new Weapons(this.rootPath, this.path);
  }
}

export default Root;
