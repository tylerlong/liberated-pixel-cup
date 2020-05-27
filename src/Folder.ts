import LPC from '.';

class Folder {
  lpc: LPC;
  basePath: string[];

  constructor(lpc: LPC, basePath: string[]) {
    this.lpc = lpc;
    this.basePath = basePath;
  }

  get path() {
    const className = this.constructor.name;
    return [
      ...this.basePath,
      className[0].toLowerCase() + className.substring(1),
    ];
  }
}

export default Folder;
