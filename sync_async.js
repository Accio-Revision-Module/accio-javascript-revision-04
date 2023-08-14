// Synchronous code

const nameVar = prompt("What's your name?");
const age = prompt("What's your age?");

console.log("Hello, " + nameVar + ", so you are " + age + " years old.");

// Asynchronous code
console.log("1");
setTimeout(() => {
  console.log("2");
}, 2000);
console.log("3");
