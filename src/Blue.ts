class Blue {
  basePath: string[];

  constructor(basePath: string[]) {
    this.basePath = basePath;
  }

  path() {
    return [...this.basePath, 'blue'];
  }
}

export default Blue;
