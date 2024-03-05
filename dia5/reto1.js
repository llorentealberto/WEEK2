// RETO 1

//Construye una función "calculadora (operación, op1, op2)" que reciba como parametros de entrada:
//-Tipo de operación.
//-Operadores (siempre dos operadores para hacerlo más sencillo).
//Las operaaciones permitidas son: suma ("sum"), resta ("subs"), multiplicación ("mult") y división ("div").
//Dependiendo del identificador de la operación, y los parámetros de entrada, la función debe decidir qué
//operación realizar y devolvernos un resultado válido.
function calculadora(a, b, c=10){
    let sum = b + c;
    let subs = b - c;
    let mult = b * c;
    let div = b / c;
    if(a == "sum"){
        console.log(sum);
    }else if(a == "subs"){
        console.log(subs);
    }else if(a == "mult"){
        console.log(mult);
    }else if(a == "div"){
        console.log(div);
    }else{
        console.log("No estoy programado para arrojar un resultado con los parámetros escogidos")
    }
    }
//Invocar a esa función para probar todas las operaciones.
calculadora("sum", 2, 2);
calculadora("subs", 2, 2);
calculadora("mult", 2, 2);
calculadora("div", 2, 2);
calculadora("raiz", 2, 2);
//Hacer el segundo parámetro un valor por defecto de tal manera que si no se incluye siempre valga 0.
calculadora("sum", 2);
calculadora("subs", 2);
calculadora("mult", 2);
calculadora("div", 2);
calculadora("raiz", 2);
//Reescribir la función utilizando la sintaxis de funciones arrow.
let calculadora = (a, b, c) => {
    let sum = b + c;
    let subs = b - c;
    let mult = b * c;
    let div = b / c;
    if(a == "sum"){
        console.log(sum);
    }else if(a == "subs"){
        console.log(subs);
    }else if(a == "mult"){
        console.log(mult);
    }else if(a == "div"){
        console.log(div);
    }else{
        console.log("No estoy programado para arrojar un resultado con los parámetros escogidos");
    }
}
calculadora("sum", 2, 2);
calculadora("subs", 2, 2);
calculadora("mult", 2, 2);
calculadora("div", 2, 2);
calculadora("raiz", 2, 2);
//Utilizar la función calculadora usando spread operator para los parámetros.
let parametroSuma = ["sum", 2, 2];
let parametroSubs = ["subs", 2, 2];
let parametroMult = ["mult", 2, 2];
let parametroDiv = ["div", 2, 2];
let parametroRaiz = ["raiz", 2, 2];

let calculadora = (a, b, c) => {
    let sum = b + c;
    let subs = b - c;
    let mult = b * c;
    let div = b / c;
    if(a == "sum"){
        console.log(sum);
    }else if(a == "subs"){
        console.log(subs);
    }else if(a == "mult"){
        console.log(mult);
    }else if(a == "div"){
        console.log(div);
    }else{
        console.log("No estoy programado para arrojar un resultado con los parámetros escogidos");
    }
}
calculadora(...parametroSuma);
calculadora(...parametroSubs);
calculadora(...parametroMult);
calculadora(...parametroDiv);
calculadora(...parametroRaiz);
//La verdad es que da mucha satisfacción, después de estar 30 minutos intentándolo, ejecutar y que
//todo salga según lo esperado.