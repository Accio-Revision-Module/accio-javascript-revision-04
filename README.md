# Javascript Revision-07

## Introduction to Asynchronous JavaScript

- **Description**: Difference between synchronous and asynchronous code. Importance of non-blocking operations.
- **Analogy**: Cooking multiple dishes simultaneously in the kitchen.

## Callbacks

- **Description**: Functions passed into another function as arguments, to be executed after the outer function finishes.
- **Analogy**: Leaving your number at a restaurant to get a call when your table is ready.
- **Code**:

```javascript
function fetchData(callback) {
  // Simulate fetching data
  setTimeout(() => {
    callback("Data fetched!");
  }, 2000);
}
fetchData((data) => {
  console.log(data);
});
```

## Promises

- **Description**: Handle asynchronous operations without nesting callbacks.
- **Analogy**: Ordering a product online and waiting for its delivery.
- **Code**:

```javascript
let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved!");
  }, 2000);
});
promise.then((data) => {
  console.log(data);
});
```

## Implementing Promises & Its Functions

- **Description**: Practical creation and usage of promises with their functions.
- **Analogy**: Lottery ticket results with different outcomes.
- **Code**:

```javascript
promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("Operation complete.");
  });
```

## setTimeout & setInterval

- **Description**: `setTimeout` delays a function's execution; `setInterval` repeatedly executes a function.
- **Analogy**: Oven timer vs. recurring alarm clock.
- **Code**:

```javascript
setTimeout(() => {
  console.log("Executed after 2 seconds");
}, 2000);

let interval = setInterval(() => {
  console.log("Repeated every 2 seconds");
}, 2000);
clearInterval(interval); // to stop the interval
```

## Async-Await

- **Description**: A cleaner way to handle asynchronous operations, making asynchronous code appear synchronous.
- **Analogy**: Ordering fast food with a token system.
- **Code**:

```javascript
async function fetchUserData() {
  let response = await fetch("https://api.example.com/data");
  let data = await response.json();
  return data;
}
fetchUserData().then((data) => console.log(data));
```

## Task Queue & Event Loop

- **Description**: Mechanism of JavaScript handling asynchronous tasks.
- **Analogy**: Office task trays with priorities.

## Callback Hell

- **Description**: The issue of nesting multiple callbacks leading to less readable code.
- **Analogy**: A long, conditional chain of verbal instructions.
- **Code**:

```javascript
fetchData((result1) => {
  fetchMoreData(result1, (result2) => {
    fetchEvenMoreData(result2, (result3) => {
      console.log(result3);
    });
  });
});
```
