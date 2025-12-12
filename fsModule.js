const fs = require("fs");

fs.writeFile("text.txt", '\nThis is 2nd line', (err) => {
    if(err) console.log(err.message);
});


fs.readFile("text.txt", (error, data) => {
    if(error) console.log(error.message);
    else console.log(data.toString());
})

fs.unlink("text.txt", (err) => {
    if(err) console.log(err.message);
})

function readFilePromise(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}
async function getFileData() {
  try {
    const data = await readFilePromise("text.txt");
    console.log("File Content using Async/Await:", data);
  } catch (err) {
    console.log(err.message);
  }
}
getFileData();