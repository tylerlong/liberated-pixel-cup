import Blue from './Blue';

class Long {
  basePath: string[];

  constructor(basePath: string[]) {
    this.basePath = basePath;
  }

  path() {
    return [...this.basePath, 'long'];
  }

  blue() {
    return new Blue(this.path());
  }
}

export default Long;
