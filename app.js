const express= require('express');
const app=express;
app.use((req,res,next)=> {
//res.send("In the middleware");
console.log('<h1>First middleware</h1>');
next();
});

app.use((req,res,next)=>{
   
    console.log('<h1>Second Middleware </h1>');
    res.send('Assignemnt solved ');
    });

// app.use('/',(req,res,next)=>{
// res.send("In the  another middleware");
// console.log('<h1>hey slash</h1>');
// next();
// });
// app.use('/user',(req,res,next)=>{
//     res.send("In the  another middleware");
//     console.log('<h1>hey slash</h1>');
//     });

app.listen(3000);