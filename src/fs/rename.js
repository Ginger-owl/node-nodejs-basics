import { resolve, dirname } from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const wrongFilePath = resolve(__dirname, './files/wrongFilename.txt')
const rightFilePath = resolve(__dirname, './files/properFilename.md') 


const rename = async (filePath, copyPath) => {
  fs.access(copyPath, err => {
    if (!err) {
      throw new Error('FS operation failed');
    }
  })
  fs.access(filePath , err => {
    if (err) {
      throw new Error('FS operation failed');
    }
  })

    fs.rename(filePath, copyPath, (err) => {
      if (err) {
        throw new Error('FS operation failed');
      }
  });
};

await rename(rightFilePath, wrongFilePath);