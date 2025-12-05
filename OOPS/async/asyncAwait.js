

// Callback-style function
function callbackTimeout(ms, callback) {
  setTimeout(() => {
    callback(null, `Waited for ${ms} ms`);
  }, ms);
}

// Promisify: turn callback API into Promise API
function timeoutPromise(ms) {
  return new Promise((resolve, reject) => {
    callbackTimeout(ms, (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
}

async function runAsyncExample() {
  try {
    console.log("Starting async/await example...");
    const res1 = await timeoutPromise(300);
    console.log("res1:", res1);
    const res2 = await timeoutPromise(500);
    console.log("res2:", res2);
  } catch (err) {
    console.error("Error in runAsyncExample:", err);
  }
}

runAsyncExample();
