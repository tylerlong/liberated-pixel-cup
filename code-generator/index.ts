/* eslint-disable node/no-unpublished-import */
import glob from 'glob';
import {snakeCase} from 'change-case';
import fs from 'fs';
import path from 'path';

const imagePaths = glob.sync('**/*.png', {cwd: process.env.SPRITES_FOLDER!});

const manualMapping: {[key: string]: string} = {
  'legs/pants/male/red_pants_male.png': 'legs/pants/male/red2',
  'weapons/left hand/male/kiteshield_gray_gray.png':
    'weapons/left/hand/male/kiteshield/gray2',
};

function normalizePath(filePath: string): string {
  return (
    manualMapping[filePath] ||
    snakeCase(filePath.toLowerCase().split('.png')[0])
      .split('_')
      .filter((value, index, self) => self.indexOf(value) === index) // remove duplicate
      .join('/')
  );
}

const mapping: {[key: string]: string} = {};

for (const imagePath of imagePaths) {
  const normalized = normalizePath(imagePath);
  if (normalized in mapping) {
    console.log('****** dupliate paths ******');
    console.log(imagePath, ' ==> ', normalized);
    console.log(mapping[normalized], ' ==> ', normalized);
  }
  mapping[normalized] = imagePath;
  if (/[^a-zA-Z0-9/.]/.test(normalized)) {
    console.log('****** special chars ******');
    console.log(imagePath, ' ==> ', normalized);
  }
  if ((normalized.match(/female/g) || []).length > 1) {
    console.log('****** duplicate tokens ******');
    console.log(imagePath, ' ==> ', normalized);
  }
}

fs.writeFileSync(
  path.join(__dirname, '..', 'src', 'generated', 'mappings.ts'),
  `const mappings: {[key: string]: string} = ${JSON.stringify(mapping, null, 2)}

export default mappings
`
);
