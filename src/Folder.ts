class Folder {
  basePath: string[];

  constructor(basePath: string[]) {
    this.basePath = basePath;
  }

  path() {
    const className = this.constructor.name;
    return [
      ...this.basePath,
      className[0].toLowerCase() + className.substring(1),
    ];
  }
}

export default Folder;
