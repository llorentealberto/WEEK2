// importo el paquete colors 
const color= require('colors');

// creo una variable cadena que sea un texto 

let cadena = ' hello world';

//creo una variable que sea un numero 
let num = 95;

//creo una variable que sea de tipo boolean 
let bool= true;

// muestro por consola cada variable cada una de un color 
console.log(cadena.bgGreen);

console.log(color.red(num));

console.log(color.blue(bool));

// hago la raiz cuadrada de 1369 y la pinto en amarillo 

let raiz = 1369 ;

console.log(color.red(Math.sqrt(raiz)));


// creo un numero aleatorio entre 0 y 10 y lo pinto de azul 

let random=Math.trunc( Math.random()*10);

console.log((' el numero aleatorio entre 0 y 10 es: ' + random).bgCyan);
 
// guardo en variables el nombre y apellidos de una persona 

let name='alberto ';

let surname='llorente';

let text= 'el otro dia ' + name + ' que se apellidaba ' + surname + ' trajo una serpiente a clase ';

let text2= ` el otro dia ${name}  ${surname} comio en el comedor de abajo  `;

console.log(text.bgCyan);
console.log(text2.bgMagenta);


// CREO UNA VARAIBLE Y MUESTRO LA CANTIDAD DE CARACTERES DE ESA VARIABLE 

let word = "hola buenas que tal estammos ";

let length= word.length;

console.log(length);

// muestro el caracter de la poscion 3 de la variabel length 

let posicion= word[3];
console.log(posicion);

// busco a ver si la variabel string tiene la palabra codenotch 

let  palabraBuscada=" codentoch";

console.log(word.indexOf(palabraBuscada));


