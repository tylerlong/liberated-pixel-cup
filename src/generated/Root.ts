import Hair from './Hair';
import Body from './Body';

class Root {
  path: string;

  constructor(path: string) {
    this.path = path;
  }

  body() {
    return new Body(this.path, []);
  }

  hair() {
    return new Hair(this.path, []);
  }
}

export default Root;
