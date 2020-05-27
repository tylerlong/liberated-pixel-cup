class Folder {
  rootPath: string;
  parentPath: string[];

  constructor(rootPath: string, parentPath: string[]) {
    this.rootPath = rootPath;
    this.parentPath = parentPath;
  }

  get path() {
    let className = this.constructor.name;
    if (/^A\d+$/.test(className)) {
      className = className.substring(1);
    }
    return [...this.parentPath, className.toLowerCase()];
  }
}

export default Folder;
