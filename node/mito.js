//console.log('Impreso desde mito.js');
let ages = 23;

/*module.exports.hello = function() {
    console.log('Saludando desde mito con una funcion, y me vale maseta');
}
module.exports.age = ages;
module.exports.name = 'DartXeid';
*/
module.exports = {
    age : ages,
    saludar : () => {
        console.log('Hola desde funcion dentro de un export');
    },
    restar : () => {
        console.log('esta es una resta: '+ (6 - 4) );
    },
    suma : () => {
        console.log('esta es una suma: '+ (7 + 6) );
    },
    add  : (a, b) => {
        return a + b;
    }
}