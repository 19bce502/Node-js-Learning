
const express = require ('express');
const app =express();

app.use('/',(req,res,next)=>{
    console.log('This always run');
    next();
   // res.send('<h1>hello from express</h1>')
    });
app.use('/add-product',(req,res,next)=>{
console.log('Add product page ');
res.send('<h1>This is product page</h1>')
next();
});

app.use('/',(req,res,next)=>{
    console.log('In the next  middleware!');
    res.send('<h1>hello from express</h1>')
    });
//const server =http.createServer(app);
app.listen(3000);


