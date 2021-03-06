# Liberated Pixel Cup

This repository provides a programmatical way to generate characters from [Liberated Pixel Cup](https://opengameart.org/forums/liberated-pixel-cup).

All the credits for the assets go to the [original authors](https://github.com/sanderfrenken/Universal-LPC-Spritesheet-Character-Generator/blob/master/AUTHORS.txt).

Do NOT ask me for permissions to use those art assets because I don't own them. What I provided is just a tool to generate characters based on those assets.


## Usage

```
yarn add liberated-pixel-cup
```


```ts
import LPC, {Animations} from 'liberated-pixel-cup';
import fs from 'fs';

// I use https://github.com/sanderfrenken/Universal-LPC-Spritesheet-Character-Generator/tree/master/spritesheets
const lpc = new LPC('/local/path/to/sprite/sheet/folder');

// dark body with long blue hair
const buffer = await lpc.overlay(
  lpc.body().male().dark(),
  lpc.hair().male().long().blue()
);

// You can save the buffer as PNG file
fs.writeFileSync('test.png', buffer);

// generate png files for each animation (each row in the png file above)
const animations = await Animations.fromBuffer(buffer);
animations.saveToFile(path.join(__dirname, 'animations'));
```

Generated files in `path.join(__dirname, 'animations')` folder:

```
hurt.png       shoot-n.png    shoot-w.png    slash-n.png    slash-w.png    spellcut-n.png spellcut-w.png thrust-n.png   thrust-w.png   walk-n.png     walk-w.png
shoot-e.png    shoot-s.png    slash-e.png    slash-s.png    spellcut-e.png spellcut-s.png thrust-e.png   thrust-s.png   walk-e.png     walk-s.png
```

21 files in total.

You can save individual files as well:

```ts
fs.writeFileSync('walk-south.png', animations.walk.s);
```


## Workflow

You still need to go to the [online generator](https://sanderfrenken.github.io/Universal-LPC-Spritesheet-Character-Generator/) to create and preview the character you want.

Once you choose the character, you can write it down in code, and generate the assets.

This way, you can manage your assets by code instead of manually download and save it from the online generator.


## Sample

Sample usage in a [real project](https://github.com/tylerlong/phaser-learning/blob/master/src/assets/generate.ts)

Try the game [here](http://chuntaoliu.com/phaser-learning/).
