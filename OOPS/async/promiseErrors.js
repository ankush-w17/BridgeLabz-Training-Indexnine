
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

function validateUser(user) {
  return new Promise((resolve, reject) => {
    if (!user.name) {
      reject(new ValidationError("User must have a name"));
    } else if (user.age < 18) {
      reject(new ValidationError("User must be at least 18"));
    } else {
      resolve(user);
    }
  });
}

const user1 = { name: "", age: 17 };
const user2 = { name: "Ankush", age: 21 };

validateUser(user1)
  .then((u) => {
    console.log("Valid user:", u);
  })
  .catch((err) => {
    if (err instanceof ValidationError) {
      console.error("Validation error:", err.message);
    } else {
      console.error("Unknown error:", err);
    }
  });

validateUser(user2)
  .then((u) => {
    console.log("Valid user:", u);
  })
  .catch((err) => {
    console.error("Unexpected error:", err);
  });
