console.log("starting app.js");

const fs = require("fs");
const os = require("os");
const notes = require("./notes.js");

// const res = notes.addNote();

console.log("Result", notes.add(9, -2));

// const user = os.userInfo();

// fs.appendFileSync(
//   "greeting.txt",
//   `Hello ${user.username}! You are ${notes.age}.`
// );
