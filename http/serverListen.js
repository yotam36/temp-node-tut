const { log } = require("console")
const http = require("http")
i = 0

const server = http.createServer((req,res) =>{
    i++
    console.log("request event: " + i)
    res.end("hello world")
})

server.listen(5000, ()=>{
    console.log("server listenin on port 5000.....")
})