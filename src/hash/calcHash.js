import { resolve, dirname } from 'path';
import { readFile } from 'fs';
import { fileURLToPath } from 'url';
import { createHash } from 'crypto';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const pathToFile = resolve(__dirname, './files/fileToCalculateHashFor.txt');

const calculateHash = async () => {
  readFile(pathToFile, 'utf8', (err, data) => {
    if (err) {
      throw new Error('FS operation failed');
    }
    const string = data;

    const hashRes = createHash('sha256').update(string).digest('hex');
    console.log(hashRes)
  });
};

await calculateHash(pathToFile);