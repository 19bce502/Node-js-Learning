const fetchdata=callback=>{
    const promise=new Promise((resolve ,reject)=>{

        
    });
setTimeout(()=>{
    callback('Done');
},1500);
}
setTimeout(()=>{
    console.log("Timer is done");
    fetchdata(text=>{

        console.log(text);
    });
},2000)
console.log("Hello");
console.log("Hi");

const fetchdata=callback=>{
setTimeout(()=>{
    callback('Done');
},1500);
}