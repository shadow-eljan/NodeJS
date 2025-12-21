import fs from "fs";
const logger = (req, res, next) =>{
    const today = new Date();
    const timeDate = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()} Time: ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`
    const start = Date.now();
    res.on("finish", ()=>{
        const end = Date.now();
        let holder =`${timeDate} :: ${req.method}, ${req.originalUrl}, ${end - start}ms\n`;
        console.log(holder);
        fs.appendFile("store.txt", holder, (err) =>{
            if(err) console.log("Error.")
            else console.log("Successfully stored logging details.")
        })
    })
    next();
}
export default logger;