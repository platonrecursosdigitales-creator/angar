const fs = require('fs');
const path = require('path');

const walk = (dir) => {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.html') || file.endsWith('.css')) {
        results.push(file);
      }
    }
  });
  return results;
};

const files = walk(path.join(__dirname, 'src'));
files.push(path.join(__dirname, 'index.html'));

let modifiedCount = 0;
files.forEach((file) => {
  const content = fs.readFileSync(file, 'utf8');
  if (content.includes('/src/assets/')) {
    const newContent = content.replace(/\/src\/assets\//g, '/assets/');
    fs.writeFileSync(file, newContent, 'utf8');
    modifiedCount++;
    console.log(`Updated ${file}`);
  }
});

console.log(`Finished updating paths in ${modifiedCount} files.`);
