import { resolve, dirname } from 'path';
import { readdir, stat } from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const folderPath = resolve(__dirname, 'files')

const list = async (folderPath) => {
  readdir(folderPath,
    (err, files) => {
    if (err) {
      throw new Error('FS operation failed');
    } else {
      files.forEach(file => {
        stat(resolve(folderPath, file), (err, stats) => {
          if (err) {
            throw new Error('FS operation failed');
          } else {
            if (stats.isFile()) {
              const fileName = file.split('.')[0];
              console.log(`${fileName}`);
            }
          }
        });
      })
    }
  });
};



await list(folderPath);