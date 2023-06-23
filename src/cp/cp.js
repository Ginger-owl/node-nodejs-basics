import { spawn } from 'child_process';
import {resolve, dirname} from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const pathToChild= resolve(__dirname, './files/script.js');

const spawnChildProcess = async (args) => {
  const childProcess = spawn('node', [pathToChild, ...args]);
  
  childProcess.stdout.on('data', (data) => {
    process.stdout.write(`Child's output: ${data}`)
  })

  process.stdin.on('data', (data) => {
    childProcess.stdin.write(data);
  });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(["Here", "we", "are", "agaim", 1]);
