const fs = require("fs");
const path = require("path");

const dataFolder = path.join(__dirname, "data");

// create data folder id it does not exist
if (!fs.existsSync(dataFolder)) {
  fs.mkdirSync(dataFolder);
  console.log("data folder created");
}

//sync way of creating the file
const filePath = path.join(dataFolder, "example.txt");
fs.writeFileSync(filePath, "Hello from node js");
console.log("file created successfully");

//read content from file
const readContentFromFile = fs.readFileSync(filePath, "utf8");
console.log("File content:", readContentFromFile);

// Add new line to the file
fs.appendFileSync(filePath, "\nThis is a new line added to that file");
console.log("new file content added");

//async way of creating the file
const asyncFilePath = path.join(dataFolder, "async-example.txt");
fs.writeFile(asyncFilePath, "Hello, Async node js", (err) => {
  if (err) throw err;
  console.log("Async file is created successfully");

  fs.readFile(asyncFilePath, "utf8", (err, data) => {
    if (err) throw err;
    console.log("Async file content:", data);

    fs.appendFile(asyncFilePath, "\nThis is another line added", (err) => {
      if (err) throw err;
      console.log("New line added to async file");

      fs.readFile(asyncFilePath, "utf8", (err, updatedData) => {
        if (err) throw err;
        console.log("Updated file content", updatedData);
      });
    });
  });
});
