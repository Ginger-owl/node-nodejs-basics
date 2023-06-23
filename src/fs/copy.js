import path from 'path';
import { access, cp }  from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcPath = path.resolve(__dirname, 'files');
const destPath = path.resolve(__dirname, 'files_copy');

const copy = async (srcPath, destPath) => {
  access(destPath, err => {
    if (!err) {
      throw new Error('FS operation failed');
    } 
  })
  
  cp(srcPath, destPath, { recursive: true }, (err) => {
    if (err) {
      throw new Error('FS operation failed'); 
    }
  });
};

await copy(srcPath, destPath);
