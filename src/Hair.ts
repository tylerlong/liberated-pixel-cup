import Male from './Male';

class Hair {
  basePath: string[];

  constructor(basePath: string[]) {
    this.basePath = basePath;
  }

  path() {
    return [...this.basePath, 'hair'];
  }

  male() {
    return new Male(this.path());
  }
}

export default Hair;
