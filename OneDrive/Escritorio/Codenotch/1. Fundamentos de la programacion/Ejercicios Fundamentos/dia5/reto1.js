// creo los tipos de operaciones y los tipos de operadores


// creo la funcion calculadora con los parametros de operacion y los dos operadores :

function calculadora(operacion,op1,op2){

        if (operacion == "sum"){

            return op1 + op2 ;
        }else if (operacion == "subs"){

            return op1-op2;
        } else if (operacion == "mult"){

            return op1*op2 ;
        }else if (operacion == "div"){

            return op1/op2 ;
        }else {
            return "Error , algo que has puesto esta mal ";
        }

}

console.log(calculadora("sum" , 3 , 5 ));

// para darle un valor por defecto al segundo parametro lo igualariamos a 0 , asi si no le damos un valor siempre valdra 0 

function calculadora(operacion,op1,op2=0){

    if (operacion == "sum"){

        return op1 + op2 ;
    }else if (operacion == "subs"){

        return op1-op2;
    } else if (operacion == "mult"){

        return op1*op2 ;
    }else if (operacion == "div"){

        return op1/op2 ;
    }else {
        return "Error , algo que has puesto esta mal ";
    }

}

console.log(calculadora("sum" , 3 , 7));



// reescribo la funcion para de que tenga la sintaxis de una funcion arrow 

let calculadoraArrow = (operacion , op1 , op2) => {
    if (operacion == "sum"){

        console.log( op1 + op2) ;
    }else if (operacion == "subs"){

        console.log( op1-op2);
    } else if (operacion == "mult"){

        console.log( op1*op2) ;
    }else if (operacion == "div"){

        console.log( op1/op2) ;
    }else {
        console.log( "Error , algo que has puesto esta mal ");
    }

    

}

calculadoraArrow("mult",3,5);


// voy a usar spread operator en los parametros de la funcion calculadora 

let calculadoraSpreadOperator=(op1,op2) => op1+op2;

let operadores=[5,2];

console.log(calculadoraSpreadOperator(...operadores));



sdfs
