function fetchData(callback) {
  // Simulate fetching data
  console.log("Fetching data...");
  const data = { name: "Jayesh", age: "99", color: "red" };
  setTimeout(() => {
    callback(data, manipulateData);
    console.log("Data fetched");
  }, 2000);

  console.log("Function ended");
}

function showInConsole(data, cb) {
  console.log(data);
  cb(data);
}

function manipulateData(data) {
  const name = data.name;
  const age = data.age;
  setTimeout(() => {
    console.log("Name", name);
    console.log("Age", age);
  }, 1000);
}

fetchData((data) => {
  console.log(data);
  (data) => {
    setTimeout(() => {
      const name = data.name;
      const age = data.age;
      console.log("Name", name);
      console.log("Age", age);
    }, 1000);
  };
});
