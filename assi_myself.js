const http= require('http');
const server=http.createServer((req,res)=>{
    const url= req.url;
    if(url==='/')
    {
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<body><action="/createuser" method="POST"><input type="text"><button type="submit">send</button></body>');
        res.write('</html>');
        return res.end();
    }
    if(url==='/user')
    {
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<body><h1>Heyy there</h1></body>');
        res.write('</html>');
        return res.end();
    }
    if(url==='/createuser')
    {
        const body=[];
        req.on('data',chunk=>{
            body.push(chunk);
        });
        req.on('end',()=>{
            const parsedBody =Buffer.concat(body).toString();
            console.log(parsedBody.split('=')[1]);
        });
        res.statusCode('302');
        res.setHeader('Location','/');
        res.end();

    }
});
Server.listen(3000);
