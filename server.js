const http = require("http");
const fs = require("fs");

const user = {
    username: "John Doe",
};

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    // res.write("Hello im server pro max.");
    // res.setHeader("Content-Type", "text/html");
    // res.write("<h2> Hello, I'm server pro max plus ultra </h2>");
    // res.end();
    // fs.readFile("hello.html", (err, data) => {
    //     res.end(data);
    // });

    // const url = req.url;
    // if(url == "/"){
    //     res.end("<h1> Home Page<h1>");
    // }else if (url == "/portfolio"){
    //     res.end("<h1>Protfolio Page</h1>")
    // }else{
    //     res.statusCode = 404;
    //     res.end("<h1> Not Found<h1>")
    // };

    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(user));
});

server.listen(3000, ()=> console.log("Server is up and runnning. :)"));

// node --watch server.js