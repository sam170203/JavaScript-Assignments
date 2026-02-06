// ## Write to a file

// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.
const fs = require("fs");

console.log("Start");

fs.writeFile("output.txt", "Hello from Node.js!", "utf-8", (err) => {
    if (err) {
        console.log("Error writing file");
        return;
    }
    console.log("File write completed");
});

console.log("End");
