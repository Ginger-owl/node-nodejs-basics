import { cpus }from 'os';
import { Worker } from 'worker_threads';
import { fileURLToPath } from 'url';
import { resolve, dirname } from 'path';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const pathToWorker = resolve(__filename, '../worker.js')


const performCalculations = async (pathToWorker) => {
  
  const systemCpuCores = cpus();

  for (let i= 0; i < systemCpuCores.length; i++ ) {
    const worker = new Worker(pathToWorker, {
      workerData: {
        value: 10 + i,
        path: pathToWorker
      }
    });
     
    worker.on('message', (result) => {
      console.log(result);
    });
  }
  
};

await performCalculations(pathToWorker);