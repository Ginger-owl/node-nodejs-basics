import { fork } from 'child_process';
import {resolve, dirname} from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const pathToChild= resolve(__dirname, './files/script.js');

const spawnChildProcess = async (...args) => {
  const child = fork(pathToChild, args);

  child.on("error", (err) => {
    console.log(err);
  });

  child.on("close", (code) => {
    console.log("child process exited with code " + code);
  });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(/* 1, 2, 'abc', false */);
