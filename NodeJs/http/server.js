const http = require("http")

const server=http.createServer((req,res)=>{
    console.log("Req : ",req);
    res.writeHead(200,{'content-Type': 'Text/plain'});
    res.end("Hello from the server.js file")
})

const PORT=3000;
server.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
})