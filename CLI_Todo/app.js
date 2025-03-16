import readline from "readline";
const rl = readline.createInterface({
  input :process.stdin,
  output:process.stdout
});
const todo=[];
const showTodo=()=>{
 console.log("1:Add new task");
 console.log("2:View All tasks");
 console.log("3:Exit");
 rl.question("Choose an option",handleInput);         
}
const handleInput=(option)=>{
  if(option === "1"){
    rl.question("Enter the task",(task)=>{
          todo.push(task);
          console.log(`Task added :- ${task}`);
          showTodo();
    })
  }else if(option === "2"){
      console.log("Here is the tasks:");
      todo.forEach((task,index)=>{
        console.log(`${index+1}. ${task}`);
      })
      showTodo();
  }else if(option === "3"){
    console.log("Good Bye");
    rl.close();
  }else{
    console.log("Invalid option");
    showTodo();
  }
}
showTodo();