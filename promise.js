// promise -> state, value
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved");
  }, 2000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // if (Math.floor(Math.random() * 2)) {
    //   resolve("Promise resolved");
    // } else {
    reject(new Error("Promise rejected"));
    // }
  }, 2000);
});

const p3 = new Promise((res, rej) => {
  setTimeout(() => {
    res("resolveed");
  }, 1000);
});

const p = Promise.race([p1, p2, p3]);
p.then((data) => {
  console.log(data);
});
