const http =require("http")


const server=http.createServer((req,res)=>{
    const url=req.url;
    if(url==='/'){
        res.writeHead(200, {'content-Type' : 'Text/plain'});
        res.end("Home page")
    }
    else if(url==='/projects'){
        res.writeHead(200, {'content-Type' : 'Text/plain'});
        res.end("Welcome to projects page");
    }
    else{
        res.writeHead(404, {'content-Type' : 'Text/plain'});
        res.end("404 \nThis page is not found");
    }
});

const PORT=3000
server.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
})