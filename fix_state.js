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

walkDir(srcDir, (filePath) => {
  if (filePath.endsWith('.jsx') || filePath.endsWith('.js') || filePath.endsWith('.tsx')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let lines = content.split('\n');
    let modified = false;

    let newLines = lines.map(line => {
      // Find single line comments that have setX(...) or X(...) after them
      // Common pattern: // comment setSomething(...)
      if (line.includes('//')) {
        let parts = line.split('//');
        let beforeComment = parts[0];
        let commentBody = parts.slice(1).join('//');
        
        // Match state setters or function calls that were likely joined
        // Examples: " setFormData(", " setLoading(", " alert(", " console."
        let codeMatches = commentBody.match(/\b(set[A-Z][a-zA-Z0-9]*|alert|console|navigate|auth|localStorage|JSON|Math|new Date)\b/);
        
        if (codeMatches) {
          let keywordPos = commentBody.indexOf(codeMatches[0]);
          if (keywordPos > 0) {
            let comment = commentBody.substring(0, keywordPos);
            let code = commentBody.substring(keywordPos);
            modified = true;
            return beforeComment + '//' + comment + '\n' + code;
          }
        }
      }
      return line;
    });

    if (modified) {
      fs.writeFileSync(filePath, newLines.join('\n'), 'utf8');
      console.log(`Fixed state cleaners: ${filePath}`);
    }
  }
});
