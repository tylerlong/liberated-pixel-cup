import Long from './Long';

class Male {
  basePath: string[];

  constructor(basePath: string[]) {
    this.basePath = basePath;
  }

  path() {
    return [...this.basePath, 'male'];
  }

  long() {
    return new Long(this.path());
  }
}

export default Male;
