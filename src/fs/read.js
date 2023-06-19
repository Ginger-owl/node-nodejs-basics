import { readFile } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const pathToFile = resolve(__dirname, './files/fileToRead.txt');

const read = async (pathToFile) => {
    readFile(pathToFile, 'utf8', (err, data) => {
      if (err) {
        throw new Error('FS operation failed');
      }
      console.log(data);
    });
};

await read(pathToFile);