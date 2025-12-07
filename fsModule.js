const fs = require("fs");

fs.writeFile("text.txt", 'This is written from fs module', (err) => {
    if(err) console.log(err.message);
});