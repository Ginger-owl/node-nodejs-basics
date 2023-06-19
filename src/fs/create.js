import { access, F_OK, writeFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const create = async () => {
  const pathToFile = path.resolve(__dirname, './files/fresh.txt');

  // try access path to file
  access(pathToFile, F_OK, (e) => {
    // if file is not found - create fresh.txt
    if (e) {
      const content = 'I am fresh and young';
      writeFileSync(pathToFile, content);
      return
    } else {
      throw new Error('FS operation failed');
    }
    // else throw error
  })
};

await create();