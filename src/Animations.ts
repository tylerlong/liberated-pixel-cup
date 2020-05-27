import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

type DirectedAnimations = {
  n: Buffer;
  w: Buffer;
  s: Buffer;
  e: Buffer;
};

const unitWidth = 64;
const unitHeight = 64;

export class Animations {
  spellcut!: DirectedAnimations;
  thrust!: DirectedAnimations;
  walk!: DirectedAnimations;
  slash!: DirectedAnimations;
  shoot!: DirectedAnimations;
  hurt!: Buffer;

  static async fromBuffer(buffer: Buffer): Promise<Animations> {
    const s = sharp(buffer);
    const animations = new Animations();
    animations.spellcut = {
      n: await s
        .extract({
          left: 0,
          top: unitHeight * 0,
          height: unitHeight,
          width: unitWidth * 7,
        })
        .toBuffer(),
      w: await s
        .extract({
          left: 0,
          top: unitHeight * 1,
          height: unitHeight,
          width: unitWidth * 7,
        })
        .toBuffer(),
      s: await s
        .extract({
          left: 0,
          top: unitHeight * 2,
          height: unitHeight,
          width: unitWidth * 7,
        })
        .toBuffer(),
      e: await s
        .extract({
          left: 0,
          top: unitHeight * 3,
          height: unitHeight,
          width: unitWidth * 7,
        })
        .toBuffer(),
    };
    animations.thrust = {
      n: await s
        .extract({
          left: 0,
          top: unitHeight * 4,
          height: unitHeight,
          width: unitWidth * 8,
        })
        .toBuffer(),
      w: await s
        .extract({
          left: 0,
          top: unitHeight * 5,
          height: unitHeight,
          width: unitWidth * 8,
        })
        .toBuffer(),
      s: await s
        .extract({
          left: 0,
          top: unitHeight * 6,
          height: unitHeight,
          width: unitWidth * 8,
        })
        .toBuffer(),
      e: await s
        .extract({
          left: 0,
          top: unitHeight * 7,
          height: unitHeight,
          width: unitWidth * 8,
        })
        .toBuffer(),
    };
    animations.walk = {
      n: await s
        .extract({
          left: 0,
          top: unitHeight * 8,
          height: unitHeight,
          width: unitWidth * 9,
        })
        .toBuffer(),
      w: await s
        .extract({
          left: 0,
          top: unitHeight * 9,
          height: unitHeight,
          width: unitWidth * 9,
        })
        .toBuffer(),
      s: await s
        .extract({
          left: 0,
          top: unitHeight * 10,
          height: unitHeight,
          width: unitWidth * 9,
        })
        .toBuffer(),
      e: await s
        .extract({
          left: 0,
          top: unitHeight * 11,
          height: unitHeight,
          width: unitWidth * 9,
        })
        .toBuffer(),
    };
    animations.slash = {
      n: await s
        .extract({
          left: 0,
          top: unitHeight * 12,
          height: unitHeight,
          width: unitWidth * 6,
        })
        .toBuffer(),
      w: await s
        .extract({
          left: 0,
          top: unitHeight * 13,
          height: unitHeight,
          width: unitWidth * 6,
        })
        .toBuffer(),
      s: await s
        .extract({
          left: 0,
          top: unitHeight * 14,
          height: unitHeight,
          width: unitWidth * 6,
        })
        .toBuffer(),
      e: await s
        .extract({
          left: 0,
          top: unitHeight * 15,
          height: unitHeight,
          width: unitWidth * 6,
        })
        .toBuffer(),
    };
    animations.shoot = {
      n: await s
        .extract({
          left: 0,
          top: unitHeight * 16,
          height: unitHeight,
          width: unitWidth * 13,
        })
        .toBuffer(),
      w: await s
        .extract({
          left: 0,
          top: unitHeight * 17,
          height: unitHeight,
          width: unitWidth * 13,
        })
        .toBuffer(),
      s: await s
        .extract({
          left: 0,
          top: unitHeight * 18,
          height: unitHeight,
          width: unitWidth * 13,
        })
        .toBuffer(),
      e: await s
        .extract({
          left: 0,
          top: unitHeight * 19,
          height: unitHeight,
          width: unitWidth * 13,
        })
        .toBuffer(),
    };
    animations.hurt = await s
      .extract({
        left: 0,
        top: unitHeight * 20,
        height: unitHeight,
        width: unitWidth * 6,
      })
      .toBuffer();
    return animations;
  }

  saveToFile(folderPath: string) {
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath);
    }

    fs.writeFileSync(path.join(folderPath, 'spellcut-n.png'), this.spellcut.n);
    fs.writeFileSync(path.join(folderPath, 'spellcut-w.png'), this.spellcut.w);
    fs.writeFileSync(path.join(folderPath, 'spellcut-s.png'), this.spellcut.s);
    fs.writeFileSync(path.join(folderPath, 'spellcut-e.png'), this.spellcut.e);

    fs.writeFileSync(path.join(folderPath, 'thrust-n.png'), this.thrust.n);
    fs.writeFileSync(path.join(folderPath, 'thrust-w.png'), this.thrust.w);
    fs.writeFileSync(path.join(folderPath, 'thrust-s.png'), this.thrust.s);
    fs.writeFileSync(path.join(folderPath, 'thrust-e.png'), this.thrust.e);

    fs.writeFileSync(path.join(folderPath, 'walk-n.png'), this.walk.n);
    fs.writeFileSync(path.join(folderPath, 'walk-w.png'), this.walk.w);
    fs.writeFileSync(path.join(folderPath, 'walk-s.png'), this.walk.s);
    fs.writeFileSync(path.join(folderPath, 'walk-e.png'), this.walk.e);

    fs.writeFileSync(path.join(folderPath, 'slash-n.png'), this.slash.n);
    fs.writeFileSync(path.join(folderPath, 'slash-w.png'), this.slash.w);
    fs.writeFileSync(path.join(folderPath, 'slash-s.png'), this.slash.s);
    fs.writeFileSync(path.join(folderPath, 'slash-e.png'), this.slash.e);

    fs.writeFileSync(path.join(folderPath, 'shoot-n.png'), this.shoot.n);
    fs.writeFileSync(path.join(folderPath, 'shoot-w.png'), this.shoot.w);
    fs.writeFileSync(path.join(folderPath, 'shoot-s.png'), this.shoot.s);
    fs.writeFileSync(path.join(folderPath, 'shoot-e.png'), this.shoot.e);

    fs.writeFileSync(path.join(folderPath, 'hurt.png'), this.hurt);
  }
}

export default Animations;
