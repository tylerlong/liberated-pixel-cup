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
    for (const action of ['spellcut', 'thrust', 'walk', 'slash', 'shoot']) {
      for (const direction of ['n', 'w', 's', 'e']) {
        fs.writeFileSync(
          path.join(folderPath, `${action}-${direction}.png`),
          (this as any)[action][direction]
        );
      }
    }
    fs.writeFileSync(path.join(folderPath, 'hurt.png'), this.hurt);
  }
}

export default Animations;
