// setTimeout - setTimeout delays a function's execution
setTimeout(() => {
  console.log("5 seconds passed");
}, 5000);

// setInterval - repeatedly executes a function
let count = 0;
let intervalId = null;
intervalId = setInterval(() => {
  count++;
  console.log("This function ran " + count + " times");

  if (count == 10) {
    clearInterval(intervalId);
  }
}, 1000);

function customInterval(cb, delay) {
  function loop() {
    setTimeout(() => {
      cb();
      loop();
    }, delay);
  }
  loop();
}

let customCount = 0;
customInterval(() => {
  customCount++;
  console.log("This function has been called " + customCount + " times");
}, 2000);
