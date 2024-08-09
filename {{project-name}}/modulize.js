import { readFileSync, writeFileSync, unlinkSync } from 'fs';

const dirName = './{{project-name}}/pkg/';

const content = readFileSync(dirName + 'package.json');

const packageJSON = JSON.parse(String(content));
packageJSON['type'] = 'module';

writeFileSync(dirName + 'package.json', JSON.stringify(packageJSON));

console.log('package.json updated to ESM');
