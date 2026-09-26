require('dotenv').config()
const express = require('express');
  
const app = express();

const port = 3000;

app.get('/', (req,res) => {
  res.send('Hello World!');
});

app.get('/twitter', (req,res) => {
  res.send('ishmeetsingh_01')
} )

app.get('/login',(req,res)=> {
  res.send('<h1> Please login at Development </hi> ')  //the project nake in the node js environment id deploymentbackend
})

app.get('/youtube',(req ,res) =>{
  res.send("<h2> Chai aur code  </h2>")// just an checkup in the detail that is the tesing with hitesh sir thanks 
})

app.listen(process.env.PORT , () => {
  console.log(`Example app listening on port ${port}`);
});