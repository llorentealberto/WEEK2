//1. Crea y devuelve un vector de "n" números aleatorios que van desde 0 hasta "m".
let crearVector = (n, m) => {
    let number = [];
    for(let i = 0; i < n; i++){
        number.push(Math.floor(Math.random() * m));        
    }
    return number;
}
crearVector(5, 10);
//2. Sumas dos vectores (v1 y v2) si y solo si tienen el mismo número de elementos y
//devuelve el vector resultado de dicha suma.
//NOTA PARA EL PROFESOR: Entiendo que en este ejercicio los vectores me los tengo
//que inventar.
let sumaVector = (v1, v2) => {
    let resultadoSumaVectores = [];
    for(let i = 0; i < 5; i++){
        if(v1.length === v2.length){
            resultadoSumaVectores.push(v1[i] + v2[i]);   
        }
    }
    if(v1.length != v2.length){
        resultadoSumaVectores = "[Vector no operado]" //Introducto esta línea de código para que en pantalla
                                                //no muestre los corchetes vacíos "[]".
        console.log("Los parámetros introducidos no cumplen los requisitos para devolver un resultado. Inténtelo de nuevo.")
    }
    return resultadoSumaVectores;
}
sumaVector([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]);
//3. Multiplica el vector "v" por el numero y devuelve el vector resultado de dicho producto.
//NOTA PARA EL PROFESOR: Este enunciado es ambiguo, no sé por qué número multiplicar el vector "v".
//¿tal vez multiplicar el vector "v" por el número "n"? ¿multiplicar el vector "v" por un número al azar?
//Voy a suponer que el número por el que tengo que multiplicar el vector "v" es el valor de "n".
let productoNumeroVector = (n, v) => {
    let vectorResultado = [];
    for(let i = 0; i < 5; i++){
        vectorResultado.push(v[i] * n);
    }
    return vectorResultado;
}
productoNumeroVector(2, [1, 2, 3, 4, 5]);
//Resta dos vectores v1 y v2 si y solo si tienen el mismo numero de elementos y devuelve el vector
//resultado de dicha resta.
let restaVector = (v1, v2) => {
    let vectorResultado = [];
    for(let i = 0; i < 5; i++){
        if(v1.length === v2.length){
            vectorResultado.push(v1[i] - v2[i]);
        }
    }
    if(v1.length != v2.length){
        vectorResultado = "[Vector no operado]" //Introducto esta línea de código para que en pantalla
                                                //no muestre los corchetes vacíos "[]".
        console.log("Los parámetros introducidos no cumplen los requisitos para devolver un resultado. Inténtelo de nuevo.");
    }
    return vectorResultado;
}
restaVector([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]);
//Multiplica dos vectores v1 y v2 si y solo si tienen el mismo número de elementos y devuelve el
//vector resultado de dicho producto.
let productoVector = (v1, v2) => {
    let vectorResultado = [];
    for(let i = 0; i < 5; i++){
        if(v1.length === v2.length){
            vectorResultado.push(v1[i] * v2[i]);
        }
    }
    if(v1.length != v2.length){
        vectorResultado = "[Vector no operado]" //Introducto esta línea de código para que en pantalla
                                                //no muestre los corchetes vacíos "[]".
        console.log("Los parámetros introducidos no cumplen los requisitos para devolver un resultado. Inténtelo de nuevo.")
    }
    return vectorResultado;
}
productoVector([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]);
//Crea un nuevo fichero que llame a las funciones definidas en el fichero libreríaVector.js y
//prueba todas sus funciones.
module.exports = {crearVector, sumaVector, productoNumeroVector, restaVector, productoVector};