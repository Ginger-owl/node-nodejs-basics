import {resolve, dirname} from 'path';
import { createReadStream, createWriteStream} from 'fs';
import { fileURLToPath } from 'url';
import { createGzip } from 'zlib';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const pathToFile = resolve(__dirname, './files/fileToCompress.txt');
const pathToCompressedFile = resolve(__dirname, './files/archive.gz');

const compress = async (file, compressedFile) => {
  const gzip = createGzip();
  const input = createReadStream(file);
  const output = createWriteStream(compressedFile);
  input.pipe(gzip).pipe(output);  
};

await compress(pathToFile, pathToCompressedFile);