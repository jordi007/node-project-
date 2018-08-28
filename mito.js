//console.log('Impreso desde mito.js');
let ages = 23;

/*module.exports.hello = function() {
    console.log('Saludando desde mito con una funcion, y me vale maseta');
}
module.exports.age = ages;
module.exports.name = 'DartXeid';
*/

// las funciones dentro del exports pueden 
module.exports = {
    age : ages,
    saludar : () => {
        console.log('Hola desde funcion dentro de un export');
    },
    restar : () => {
        console.log('esta es una resta: '+ (6 - 4) );
    },
    suma : (a, b) => console.log('esta es una suma: '+ (a + b) ),
    add  : (a, b) =>  a + b,
    sayHello : a => console.log("Hellooooo "+ a),
    
}