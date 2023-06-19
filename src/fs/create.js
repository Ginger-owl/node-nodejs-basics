import { access, F_OK, writeFileSync } from 'fs';
import path from 'path';

const create = async () => {
  const pathToFile = path.resolve('./files/fresh.txt');

  // try access path to file
  access(pathToFile, F_OK, (e) => {
    // if file is not found - create fresh.txt
    if (e) {
      const content = 'I am fresh and young';
      writeFileSync('./files/fresh.txt', content);
      return
    }
    // else throw error
    throw new Error('FS operation failed');
  })
};

await create();