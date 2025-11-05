const fs= require("fs");
const path =require ("path")

const exampleFolder=path.join(__dirname,"exampleFolder");//storing folder path for exampleFolder

if(!fs.existsSync(exampleFolder)){//Checking if the folder already exists or not, if not then we will create it
    fs.mkdirSync(exampleFolder);
}

const exampleFile=path.join(exampleFolder,"exampleFile")

const fileContent="This is the text to be placed inside the exampleFile";

fs.writeFileSync(exampleFile,fileContent);//Creating file inside the exampleFolder with the content;

console.log("File Created Successfully")

//now we will read the content from the file

const content=fs.readFileSync(exampleFile,'utf8');

console.log("File content : ", content);

//now we will add more content to the file

fs.appendFileSync(exampleFile,"\n This is the new content added to the file");

console.log("File content : ", content);