const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, '..', 'dist', 'index.html');
const dst = path.join(__dirname, '..', 'dist', '404.html');

if (fs.existsSync(src)) {
  fs.copyFileSync(src, dst);
  console.log('404.html created for GitHub Pages fallback.');
}