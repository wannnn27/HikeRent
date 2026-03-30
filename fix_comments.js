import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

const srcDir = path.join(__dirname, 'src');

const keywords = ['if', 'const', 'return', 'export', 'import', 'useEffect', 'useState', 'let', 'var', 'function', 'async', 'await', 'switch', 'for', 'while', 'do', 'try', 'catch', 'finally', 'class'];

walkDir(srcDir, (filePath) => {
  if (filePath.endsWith('.jsx') || filePath.endsWith('.js') || filePath.endsWith('.tsx')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let lines = content.split('\n');
    let modified = false;

    let newLines = lines.map(line => {
      // Find single line comments that have code keywords after them
      // Example: // some comment if (condition) {
      if (line.includes('//')) {
        let parts = line.split('//');
        let beforeComment = parts[0];
        let commentBody = parts.slice(1).join('//');
        
        for (let keyword of keywords) {
          let regex = new RegExp(`(^|\\s)${keyword}\\b`);
          if (regex.test(commentBody)) {
            // Found a keyword inside the comment!
            // But we only want to split it if it looks like code follows a comment.
            // Example: "// some comment const x = 1;"
            // We'll split it at the keyword.
            let keywordPos = commentBody.search(regex);
            if (keywordPos > 0) {
              let comment = commentBody.substring(0, keywordPos);
              let code = commentBody.substring(keywordPos);
              modified = true;
              return beforeComment + '//' + comment + '\n' + code;
            }
          }
        }
      }
      return line;
    });

    if (modified) {
      fs.writeFileSync(filePath, newLines.join('\n'), 'utf8');
      console.log(`Fixed comments: ${filePath}`);
    }
  }
});
