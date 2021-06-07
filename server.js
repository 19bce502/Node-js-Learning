// const http=require('http');

// const routes =require('./routes');

// const server= http.createServer(routes);
//    // //console.log(req.url,req.method,req.headers);
//    // const url=req.url;
//    // const method=req.method;
   
//    // // process.exit();


// server.listen(3000);

const http = require('http');
const express = require ('express');
const app=express()

const server = http.createServer(routes.handler);

server.listen(3000);
