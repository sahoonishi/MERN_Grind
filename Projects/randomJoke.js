import https from "https";


const getJoke=()=>{
  const url = "https://official-joke-api.appspot.com/random_joke";
  https.get(url,(res)=>{
    let data='';
    res.on('data',(chunk)=>{
      data+=chunk;
    });
    res.on('end',()=>{
      const joke = JSON.parse(data);
      console.log(joke.type);
      console.log(joke.setup);
      console.log(joke.punchline);
    })
    res.on('error',(error)=>{
      console.log(error.message);
    })
  })
}
getJoke();