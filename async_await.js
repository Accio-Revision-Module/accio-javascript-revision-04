async function getData() {
  try {
    console.log("hi");
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    console.log(data);
    console.log("hi2");
  } catch (e) {
    console.log("There was an error: ", e);
  }
}

getData();

console.log("hi");
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log("There was an error: ", err);
  });

console.log("hi2");
