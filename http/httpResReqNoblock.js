const { rmSync } = require("fs")
const http = require("http")

const server = http.createServer((req,res) =>{

    if (req.url ==='/'){
        return res.end("home page")
    }
    if (req.url ==='/about'){
        return res.end("about page")
    }
    return res.end("error page")
})

server.listen(5000, ()=>{
    console.log("server is listening on port 5000.....");
})