import Folder from '../../../../Folder';
import Male from './male';
import Sarashirt from './sarashirt';
import Black from './black';
import Blue from './blue';
import Forest from './forest';
import Gray from './gray';
import Green from './green';
import Lavender from './lavender';
import Leather from './leather';
import Maroon from './maroon';
import Navy from './navy';
import Orange from './orange';
import Pink from './pink';
import Purple from './purple';
import Red from './red';
import Sky from './sky';
import Tan from './tan';
import Teal from './teal';
import Walnut from './walnut';
import White from './white';
import Yellow from './yellow';

class Sleeveless extends Folder {
  male() {
    return new Male(this.rootPath, this.path);
  }

  sarashirt() {
    return new Sarashirt(this.rootPath, this.path);
  }

  black() {
    return new Black(this.rootPath, this.path);
  }

  blue() {
    return new Blue(this.rootPath, this.path);
  }

  forest() {
    return new Forest(this.rootPath, this.path);
  }

  gray() {
    return new Gray(this.rootPath, this.path);
  }

  green() {
    return new Green(this.rootPath, this.path);
  }

  lavender() {
    return new Lavender(this.rootPath, this.path);
  }

  leather() {
    return new Leather(this.rootPath, this.path);
  }

  maroon() {
    return new Maroon(this.rootPath, this.path);
  }

  navy() {
    return new Navy(this.rootPath, this.path);
  }

  orange() {
    return new Orange(this.rootPath, this.path);
  }

  pink() {
    return new Pink(this.rootPath, this.path);
  }

  purple() {
    return new Purple(this.rootPath, this.path);
  }

  red() {
    return new Red(this.rootPath, this.path);
  }

  sky() {
    return new Sky(this.rootPath, this.path);
  }

  tan() {
    return new Tan(this.rootPath, this.path);
  }

  teal() {
    return new Teal(this.rootPath, this.path);
  }

  walnut() {
    return new Walnut(this.rootPath, this.path);
  }

  white() {
    return new White(this.rootPath, this.path);
  }

  yellow() {
    return new Yellow(this.rootPath, this.path);
  }
}

export default Sleeveless;
