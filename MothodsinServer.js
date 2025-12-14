const http = require("http");
const url = require("url");

const notes = [
    {id: 1, title: "Apple", Content: " I love eating apples."},
    {id: 2, title: "Banana", Content: "I love eating banana."}
];

const server = http.createServer((req,res) => {
    const method = req.method;
    const urlobj = url.parse(req.url, true);
    console.log(urlobj)
    res.setHeader("Content-Type", "application/json");
    if(method == "GET"){
        if(urlobj.pathname == "/api/notes"){
            res.end(JSON.stringify(notes));
        }
    }else{
        
    }
})

server.listen(4000, ()=> console.log("Server is up."))
