import Blue from './Blue';
import BaseClass from '../../../BaseClass';

class Long extends BaseClass {
  blue() {
    return new Blue(this.path());
  }
}

export default Long;
