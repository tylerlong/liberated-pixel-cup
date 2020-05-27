class Folder {
  rootPath: string;
  parentPath: string[];

  constructor(rootPath: string, parentPath: string[]) {
    this.rootPath = rootPath;
    this.parentPath = parentPath;
  }

  get path() {
    const className = this.constructor.name;
    return [
      ...this.parentPath,
      className[0].toLowerCase() + className.substring(1),
    ];
  }
}

export default Folder;
