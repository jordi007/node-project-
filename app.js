const fs = require('fs');

console.log('inicio');

let data = fs.readFileSync('data.txt', 'utf-8');
console.log(data);


/*
fs.readFile('data.txt',  'utf-8', (error, data)=>{
    if(error){
        console.log(`Error ${error}`);
    }else{
        console.log(data);
    }
});
*/

console.log('fin');