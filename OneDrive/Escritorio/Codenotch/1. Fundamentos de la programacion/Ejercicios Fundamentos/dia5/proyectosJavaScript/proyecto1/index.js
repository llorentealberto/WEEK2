
// creo las funciones de las distintas operaciones por separado 


function suma(op1,op2){

    console.log(op1+op2);
}

function resta(op1,op2){
    console.log(op1-op2);
}

function multiplication(op1,op2){

    console.log(op1*op2);
}

function division(op1,op2){

    console.log(op1/op2);
}

// exporto todas las fuiinciones , para poder llamarlas y utilizarlas en otro archivo . 
module.exports={suma , resta , multiplication , division };