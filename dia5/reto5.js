// RETO 5

//Crea una función que imprima siempre lo que se le pasa por parámetro, y si no se le pasa
//ningún parámetro, informe de esta situación (utiliza ECMASCRIPT).
let imprimir = (a = "No se introdujo ningún parametro. Inténtelo de nuevo.") => {
    return a;
}
console.log(imprimir());