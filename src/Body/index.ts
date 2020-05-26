import BaseClass from '../BaseClass';
import Male from './Male';

class Body extends BaseClass {
  male() {
    return new Male(this.path());
  }
}

export default Body;
