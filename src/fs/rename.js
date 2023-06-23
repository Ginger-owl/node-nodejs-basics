import { resolve, dirname } from 'path';
import { rename as renameAsync } from 'fs/promises';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const fileInitial = resolve(__dirname, './files/wrongFilename.txt')
const fileCopy = resolve(__dirname, './files/properFilename.md') 


const rename = async (filePath, copyPath) => {
  try {
    await renameAsync(filePath, copyPath);
  } catch {
    throw new Error('FS operation failed');
  }
};

await rename(fileInitial, fileCopy);