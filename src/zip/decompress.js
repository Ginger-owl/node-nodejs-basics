import {resolve, dirname} from 'path';
import { createReadStream, createWriteStream} from 'fs';
import { fileURLToPath } from 'url';
import { createUnzip } from 'zlib';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const pathToCompressedFile = resolve(__dirname, './files/archive.gz');
const pathToFile = resolve(__dirname, './files/fileToCompress.txt');

const decompress = async (compressedFile, file) => {
  const unzip = createUnzip();
  const input = createReadStream(compressedFile);
  const output = createWriteStream(file);
  input.pipe(unzip).pipe(output);
};

await decompress(pathToCompressedFile, pathToFile);