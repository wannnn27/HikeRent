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
    
    // Put newlines back based on common JS patterns
    let newContent = content;
    
    // Fix imports and exports that got smushed
    newContent = newContent.replace(/import{/g, 'import {');
    newContent = newContent.replace(/}from"/g, '} from "');
    newContent = newContent.replace(/from"react"/g, 'from "react"');
    newContent = newContent.replace(/from"react-router-dom"/g, 'from "react-router-dom"');
    newContent = newContent.replace(/import /g, '\nimport ');
    newContent = newContent.replace(/const /g, '\nconst ');
    newContent = newContent.replace(/export /g, '\nexport ');
    newContent = newContent.replace(/return\(/g, '\nreturn (');
    newContent = newContent.replace(/};/g, '};\n');
    newContent = newContent.replace(/;/g, ';\n');
    newContent = newContent.replace(/{/g, '{\n');
    newContent = newContent.replace(/}/g, '\n}\n');
    
    // Fix common smushing mistakes
    newContent = newContent.replace(/from"/g, 'from "');
    newContent = newContent.replace(/import"/g, 'import "');
    
    if (content !== newContent) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`Re-formatted: ${filePath}`);
    }
  }
});
