import {resolve, dirname} from 'path';
import { createWriteStream } from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const pathToFile = resolve(__dirname, './files/fileToWrite.txt');


const write = async pathToFile => {
  const writableStream = createWriteStream(pathToFile);

  for await (const chunk of process.stdin) {
    writableStream.write(chunk);
  }
};

await write(pathToFile)