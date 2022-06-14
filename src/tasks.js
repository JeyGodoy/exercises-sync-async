const colors = require("colors");

const style = colors.setTheme({
  tk1: "cyan",
  tk2: "green",
  tk3: "magenta",
  tk4: "red"
});


const baseTask = (message, time) => {
  time = time * 1000;
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve(message);
    }, time);
  });
}

const task1 = () => {
  return baseTask('Terminou a Task 1 em 10 segundos'.tk1, 10);
};

const task2 = () => {
  return baseTask('Terminou a Task 2 em 5 segundos'.tk2, 5);
};

const task3 = () => {
  return baseTask('Terminou a Task 3 em 4 segundos'.tk3, 4);
};

const task4 = () => {
  return baseTask('Terminou a Task 4 em 4 segundos'.tk4, 4);
};

module.exports = { task1, task2, task3, task4 };