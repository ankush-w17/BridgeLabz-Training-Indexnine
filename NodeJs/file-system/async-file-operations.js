const fs=require("fs")
const path=require("path")


const exampleFolder=path.join(__dirname,"exampleFolder");


const asyncFile=path.join(exampleFolder,"asyncFile");

fs.writeFile(asyncFile,"This is the Async file's Content",(err)=>{
    if(err){
        throw err;
    }
        console.log("Async File created Successfully")

    fs.readFile(asyncFile,'utf8', (err, data)=>{
        if(err) throw err;
        console.log("The file content is : ", data);


        fs.appendFile(asyncFile,"\n This is the appended line", (err)=>{
            if(err) throw err;
            console.log("New line appended");

            fs.readFile(asyncFile,'utf8', (err, updatedData)=>{
                if(err) throw err;
                console.log("Update file content : ", updatedData);
            })
        })
    })
});
