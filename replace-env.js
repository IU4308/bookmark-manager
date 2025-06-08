const fs = require('fs');
const path = require('path');

const distPath = path.join(__dirname, 'dist/bookmarks-manager/browser');

function replaceEnvValue(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const result = content.replace('__API_URL__', process.env.API_URL);
  fs.writeFileSync(filePath, result);
}

fs.readdirSync(distPath)
  .filter((file) => file.startsWith('main') && file.endsWith('.js'))
  .forEach((file) => replaceEnvValue(path.join(distPath, file)));
