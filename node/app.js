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
console.log( mi.add(13, 8) );

/*console.log(sistema);
console.log(usuario);

let cpu_string = JSON.stringify(cpu);
fs.appendFile('pos.txt',`info del cpu: ${cpu_string} `, function(error){
    if (error){
        console.log('Error al crear el archivo pos si no');
    }

});*/