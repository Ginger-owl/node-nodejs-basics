import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { mkdir, readdir, copyFile } from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const copy = async () => {
  const folderPath = path.resolve(__dirname, 'files');
  const copyFolderPath = path.resolve(__dirname, 'files-copy');
    // Write your code here 
  const copyFolder = async (folderPath, CopyPath) => {
    fs.access(folderPath, err => {
      if (err) {
        throw new Error('FS operation failed');
      }
    })
    
    fs.access(CopyPath, err => {
      if (!err) {
        throw new Error('FS operation failed');
      } else {
        mkdir(CopyPath, { recursive: true }, err => {
          if (err) {
            throw new Error(err)
          }
        })
      }
    })
    
    readdir(folderPath, { withFileTypes: true})
    .then(files => files.forEach(file => {
      if (file.isDirectory()) {
        copyFolder(path.resolve(folderPath, file.name), path.resolve(CopyPath, file.name))
      } 
      if (file.isFile()) {
        copyFile(path.resolve(folderPath, file.name), path.resolve(CopyPath, file.name))
      }
    }))
  }
  copyFolder(folderPath, copyFolderPath)
};

await copy();
