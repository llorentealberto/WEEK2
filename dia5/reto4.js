// RETO 4.

//Redefine la función "sumaVector" para implementarla utilizando el método .forEach
//suponiendo que tanto v1 como v2 tienen el mismo número de elementos.
let sumaVector = (v1, v2) => {
    let resultadoSumaVectores = [];
    v1.forEach((element, i) => {
        resultadoSumaVectores.push(element + v2[i]);
    });
    return resultadoSumaVectores;
}
console.log(sumaVector2([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]));
//Redefine la función sumaVector implementándola utilizando el método ".map"
//suponiendo que tanto v1 como v2 tienen el mismo número de elementos.
let sumaVector2 = (v1, v2) => {
    return v1.map((element, i) => element + v2[i])
}
console.log(sumaVector([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]));
//Implementa la función filtrarPares(v) que devuelva el vector resultante de eliminar los
//número impares almacenados en v, utilizando el método ".filter".
let filtrarPares = (v) => {
    return v.filter((value) => value % 2 === 0);
}
console.log(filtrarPares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
//Implementa la función sumatorio(v) que devuelve la suma de los elementos del vector
//v usando el método ".reduce".
let sumatorio = (v) => {
    return v.reduce((acumulador, elemento) => acumulador + elemento);
}
console.log(sumatorio([1, 2, 3, 4, 5]));