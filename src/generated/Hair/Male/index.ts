import Folder from '../../../Folder';
import Bangs from './bangs';
import Bangslong from './bangslong';
import Bangslong2 from './bangslong2';
import Bangsshort from './bangsshort';
import Bedhead from './bedhead';
import Bunches from './bunches';
import Halfmessy from './halfmessy';
import Jewfro from './jewfro';
import Long from './long';
import Longhawk from './longhawk';
import Longknot from './longknot';
import Loose from './loose';
import Braid from './braid';
import Curly from './curly';
import Single from './single';
import Messy1 from './messy1';
import Messy2 from './messy2';
import Mohawk from './mohawk';
import Page from './page';
import Page2 from './page2';
import Parted from './parted';
import Pixie from './pixie';
import Plain from './plain';
import Ponytail from './ponytail';
import Ponytail2 from './ponytail2';
import Princess from './princess';
import Shorthawk from './shorthawk';
import Shortknot from './shortknot';
import Shoulderl from './shoulderl';
import Shoulderr from './shoulderr';
import Swoop from './swoop';
import Unkempt from './unkempt';
import Xlong from './xlong';
import Xlongknot from './xlongknot';

class Male extends Folder {
  bangs() {
    return new Bangs(this.rootPath, this.path);
  }

  bangslong() {
    return new Bangslong(this.rootPath, this.path);
  }

  bangslong2() {
    return new Bangslong2(this.rootPath, this.path);
  }

  bangsshort() {
    return new Bangsshort(this.rootPath, this.path);
  }

  bedhead() {
    return new Bedhead(this.rootPath, this.path);
  }

  bunches() {
    return new Bunches(this.rootPath, this.path);
  }

  halfmessy() {
    return new Halfmessy(this.rootPath, this.path);
  }

  jewfro() {
    return new Jewfro(this.rootPath, this.path);
  }

  long() {
    return new Long(this.rootPath, this.path);
  }

  longhawk() {
    return new Longhawk(this.rootPath, this.path);
  }

  longknot() {
    return new Longknot(this.rootPath, this.path);
  }

  loose() {
    return new Loose(this.rootPath, this.path);
  }

  braid() {
    return new Braid(this.rootPath, this.path);
  }

  curly() {
    return new Curly(this.rootPath, this.path);
  }

  single() {
    return new Single(this.rootPath, this.path);
  }

  messy1() {
    return new Messy1(this.rootPath, this.path);
  }

  messy2() {
    return new Messy2(this.rootPath, this.path);
  }

  mohawk() {
    return new Mohawk(this.rootPath, this.path);
  }

  page() {
    return new Page(this.rootPath, this.path);
  }

  page2() {
    return new Page2(this.rootPath, this.path);
  }

  parted() {
    return new Parted(this.rootPath, this.path);
  }

  pixie() {
    return new Pixie(this.rootPath, this.path);
  }

  plain() {
    return new Plain(this.rootPath, this.path);
  }

  ponytail() {
    return new Ponytail(this.rootPath, this.path);
  }

  ponytail2() {
    return new Ponytail2(this.rootPath, this.path);
  }

  princess() {
    return new Princess(this.rootPath, this.path);
  }

  shorthawk() {
    return new Shorthawk(this.rootPath, this.path);
  }

  shortknot() {
    return new Shortknot(this.rootPath, this.path);
  }

  shoulderl() {
    return new Shoulderl(this.rootPath, this.path);
  }

  shoulderr() {
    return new Shoulderr(this.rootPath, this.path);
  }

  swoop() {
    return new Swoop(this.rootPath, this.path);
  }

  unkempt() {
    return new Unkempt(this.rootPath, this.path);
  }

  xlong() {
    return new Xlong(this.rootPath, this.path);
  }

  xlongknot() {
    return new Xlongknot(this.rootPath, this.path);
  }
}

export default Male;
