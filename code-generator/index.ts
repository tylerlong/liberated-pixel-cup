/* eslint-disable node/no-unpublished-import */
import glob from 'glob';
import {snakeCase} from 'change-case';
import fs from 'fs';
import path from 'path';

const imagePaths = glob.sync('**/*.png', {
  cwd: process.env.LPC_SPRITES_FOLDER!,
});

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

const mappings: {[key: string]: string} = {};

for (const imagePath of imagePaths) {
  const normalized = normalizePath(imagePath);
  if (normalized in mappings) {
    console.log('****** dupliate paths ******');
    console.log(imagePath, ' ==> ', normalized);
    console.log(mappings[normalized], ' ==> ', normalized);
  }
  mappings[normalized] = imagePath;
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
  `const mappings: {[key: string]: string} = ${JSON.stringify(
    mappings,
    null,
    2
  )}

export default mappings
`
);

class Node {
  prefix: string;
  children: Node[];
  constructor(prefix: string) {
    this.prefix = prefix;
    this.children = Object.keys(mappings)
      .filter(s => s.startsWith(prefix))
      .map(s => s.substring(prefix.length).split('/')[0])
      .filter(s => s.length > 0)
      .filter((value, index, self) => self.indexOf(value) === index)
      .map(s => new Node(prefix + s + '/'));
  }
}

const rootNode = new Node('');

function generateCodeForNode(node: Node): void {
  const dirPath = path.join(__dirname, '..', 'src', 'generated', node.prefix);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
  }
  let className = 'Root';
  if (node.prefix.length > 0) {
    const tokens = node.prefix.split('/');
    const lastToken = tokens[tokens.length - 2];
    if (/^\d+$/.test(lastToken)) {
      className = `A${lastToken}`;
    } else {
      className = lastToken[0].toUpperCase() + lastToken.substring(1);
    }
  }
  const filePath = path.join(dirPath, 'index.ts');
  const childrenNames = node.children
    .map(c => c.prefix.split('/'))
    .map(a => a[a.length - 2])
    .map(n => ({
      folderName: n,
      className: /^\d+$/.test(n)
        ? `_${n}`
        : `${n[0].toUpperCase()}${n.substring(1)}`,
      functionName: /^\d+$/.test(n) ? `_${n}` : n,
    }));
  const parantClass = node.children.length === 0 ? 'File' : 'Folder';
  const code = `import ${parantClass} from '${node.prefix
    .split('/')
    .map(() => '..')
    .join('/')}/${parantClass}';
${childrenNames
  .map(
    ({folderName, className}) => `import ${className} from './${folderName}';`
  )
  .join('\n')}

class ${className} extends ${parantClass} {${childrenNames
    .map(
      ({functionName, className}) => `
  ${functionName}() {
    return new ${className}(this.rootPath, this.path);
  }
`
    )
    .join('')}}

export default ${className};
`;
  fs.writeFileSync(filePath, code);
  for (const child of node.children) {
    generateCodeForNode(child);
  }
}

generateCodeForNode(rootNode);
