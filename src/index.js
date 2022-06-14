const { task1, task2, task3, task4 } = require("./tasks");
const process = require('node:process');

const synchronousExecution = async() => {
  console.log(await task1());
  console.log(await task2());
  console.log(await task3());
  console.log(await task4());
};

const asynchronousExecution = async() => {
  task1().then((res)=>{console.log(res)});
  task2().then((res)=>{console.log(res)});
  task3().then((res)=>{console.log(res)});
  task4().then((res)=>{console.log(res)});
};

const arg = process.argv[2];

(arg === 'sync') ? synchronousExecution() : -1;
(arg === 'async') ? asynchronousExecution() : -1;