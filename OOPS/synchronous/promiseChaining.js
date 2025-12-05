
function fakeFetchData(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Fetched data for id: ${id}`);
      resolve({ id, value: `Value for ${id}` });
    }, 500);
  });
}

// Promise chaining
fakeFetchData(1)
  .then((result1) => {
    console.log("result1:", result1);
    return fakeFetchData(2); // chain
  })
  .then((result2) => {
    console.log("result2:", result2);
  })
  .catch((err) => {
    console.error("Error in chain:", err);
  });

// Promise API: Promise.all and Promise.race
const p1 = fakeFetchData("A");
const p2 = fakeFetchData("B");
const p3 = fakeFetchData("C");

Promise.all([p1, p2, p3]).then((results) => {
  console.log("Promise.all results:", results);
});

Promise.race([p1, p2, p3]).then((first) => {
  console.log("Promise.race first result:", first);
});
