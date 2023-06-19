import {resolve, dirname} from 'path';
import { createReadStream } from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const pathToFile = resolve(__dirname, './files/fileToRead.txt');

const read = async (pathToFile) => {
  const readStream  = createReadStream(pathToFile);
  readStream.on('data', (chunk) => {
    process.stdout.write(chunk);
 });
};

await read(pathToFile);