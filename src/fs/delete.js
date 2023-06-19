import { resolve, dirname } from 'path';
import { unlink } from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const pathToFile = resolve(__dirname, './files/fileToRemove.txt');

const remove = async () => {
  unlink(pathToFile, err => {
    if (err) {
      throw new Error('FS operation failed');
    }
  })
};

await remove();