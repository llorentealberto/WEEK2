// RETO 6

//Reescribe la siguiente función basándote en ECMASCRIPT.
//Pre-ECMAScript:
function multiply(x, y){
    return x * y;
}
console.log(multiply(10, 10));
//Post ECMAScript:
let multiplica = (x, y) => {
    // return x * y;
    let resultado = x * y;
    console.log(resultado)
}
// console.log(multiplica(5, 5));
multiplica(5, 5);
//NOTA PARA LOS PROFESORES: Tengo entendido que para una estructura básica para funciones arrow
//no es necesrio introducir la palabra reservada "return", en cualquier caso la comento por si
//estuviera equivocado.