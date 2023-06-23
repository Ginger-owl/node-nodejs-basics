import { cpus }from 'os';
import { Worker, isMainThread } from 'worker_threads';
import { fileURLToPath } from 'url';
import { resolve, dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const pathToWorker = resolve(__dirname, './worker.js')

const performCalculations = async () => {
  const startNum = 10;
  const numOfCpuCores = cpus().length;

  const promises = Array.from({ length: numOfCpuCores }, (_, i) => i).map((_, i) => {
    if (isMainThread) {
      return new Promise((resolve) => {
        const worker = new Worker(pathToWorker, { workerData: startNum + i });
        worker.on('message', (data) => resolve({ status: "resolved",data }));
        worker.on('error', () => resolve({ status: "error",data: null }));
      });
    }
  });

  const results =  await Promise.all(promises)
  console.log(results);
};

await performCalculations(pathToWorker);