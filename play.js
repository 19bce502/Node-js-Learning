// const Name="sakshi";
// let  age=20;
// const hobbies=true;
// const summerize = (usename,userage,userhobbies) => 
// {
//     return (
//         'Name is '+
//     usename+
//     ', age is '+
//     userage+
//     ' Hobiies  are  '+
//     userhobbies
//     );
//};
// const add=(a,b) =>  a+b;
// const addRandom= () => 1+2;
// const addOne= a=>a+1;
// console.log(addRandom());
// console.log(addOne(1));
// console.log(add(10,20));
// console.log(summerize(Name , age , hobbies));

//using this keyword
// const person={
//     name:'sakshi ankleshwariya ',
//     age:29,
//     greet()
//     {
//         console.log('Hi I am '+this.name);
//         console.log('Hi my age is '+this.age);
//     }
// };
// person.greet();

//using arrays 
 //const hobbies=["dancing","basketball"];
 
// for(let a of hobbies)
// {
//     console.log(a);
// }

// console.log(hobbies.map(hobby=>'Hobby:'+hobby));
// console.log(hobbies);
// hobbies.push("music");
// console.log(hobbies);
// const coppiedArray=hobbies;
// console.log(coppiedArray);

// const coppiedArray=[...hobbies];
// console.log(coppiedArray);

// const toArray= (...args) =>{
//     return args;
// };
// console.log(toArray(1,2,3));
//object destructing 
// const person={
//          Name:'sakshi ankleshwariya ',
//          age:29,
//          greet()
//          {
//              console.log('Hi I am '+this.Name);
//              console.log('Hi my age is '+this.age);
//          }
//      };
//      const{Name,age}=person;
//      console.log(Name,age);
const hobbies=['dancing','basketball'];
const[hobby1,hobby2]=hobbies;
console.log(hobby1,hobby2);