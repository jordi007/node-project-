const os  = require ('os');
const fs = require('fs');

const mi = require('./mito');

let cpu = os.cpus();
let sistema = os.platform();
let usuario = os.hostname();

//console.log(mi.age + '\n' + mi.name );
//mi.hello();
/*mi.saludar();
mi.restar();
mi.suma();
console.log(mi.age);*/
/*
// llamadas a el otro archivo donde se mantiene la logica
let res = mi.add(13, 8);
console.log(res);
mi.suma(3, 11);
mi.sayHello("jordi");
*/

// funcion que se ejecuta cada cierto tiempo el cual se especifica despues de la "," de la funcion 
setTimeout( () => {
    console.log("impresion desde un setTimeout function")
} , 2000);

/*console.log(sistema);
console.log(usuario);

let cpu_string = JSON.stringify(cpu);
fs.appendFile('pos.txt',`info del cpu: ${cpu_string} `, function(error){
    if (error){
        console.log('Error al crear el archivo pos si no');
    }

});*/