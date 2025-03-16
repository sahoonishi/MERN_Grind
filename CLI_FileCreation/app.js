import readline from "readline";
import fs from "fs/promises";
import path from "path";


const rl = readline.createInterface({
  input:process.stdin,
  output:process.stdout
})

const showMenu=()=>{
  rl.question("Enter file name:",handleInput);
}
const handleInput=(fileName)=>{
  const filename = fileName + ".txt";
  rl.question("Enter Content: ",(content)=>{
    fs.writeFile(filename,content,"utf-8").then(()=>console.log(`file created : ${filename}`)).catch((err)=>console.log(err));
  })
  
  
}
showMenu();