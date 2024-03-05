

// Crea una variable denominada cadena que almacene una cadena de texto.

let cadena = "hola mundo";

//Crea otra variable denominada número que almacene un número.

let numero= 13;

// Finalmente crea una variable booleana que almacene un valor verdadero o falso.

let bool = true;

//Crea una variable array que contenga los valores almacenados en las anteriores variables 

let arr =[cadena , numero , bool ];

//console.log(arr);


// ---------------------------------------------------RETO 2 ----------------------------------------//


let miMapa = new Map ();

miMapa.set("numero",1)
miMapa.set(1,1)
miMapa.set("string","Mi String")
miMapa.set(2,"mi String")
miMapa.set("boolean",true)
miMapa.set(3,true)
miMapa.set("array",[1,2,3,4])
miMapa.set(4 , ["juan", "pepe","ana","jorge"])

//------------------------------------------------- RETO 3 -----------------------------------------------------//




// muestra por pantalla el Mapa     
//console.log(miMapa);

// muestra por consola el tamaño del Mapa

//console.log(miMapa.size);

// muestra por consola el valor de la clave 3 

//console.log(miMapa.get(3));

// elimino la tupla "string " y muestro el mapa 

miMapa.delete("string");

//console.log(miMapa);




//-------------------------------------------------- RETO 4 -----------------------------------------//


let miSet= new Set()

miSet.add(1)
miSet.add("1")
miSet.add("saludo")
miSet.add([1,2,3,4])
miSet.add(1)

//muestro por consola el contenido del Set 

//console.log(miSet);

// muestro por consola el tamaño del Set 

//console.log(miSet.size);

// muestro por consola si existe el valor 2 en el Set --> true si existe , false si no 

//console.log(miSet.has(2));

// elimino el elemento "1"

miSet.delete("1");

//console.log(miSet);


//------------------------------------------RETO 5 --------------------------------------------------//



// Hacer una array de cinco elementos de tipo string

let palabras=["hola" , "mundo " , "que" , "tal " , "estamos"];

//hacer un array de tres arrays y llamarle matriz 

let arr1=[1,2,3,4,5];

let arr2=["jose" , "manu" , "silvia"]



let matriz =[arr1 , arr2 , palabras]

// mostrar matriz[2]

console.log(matriz[2]);

//mostrar el elemento cuatro del segundo array de Matiz 

console.log(matriz[2][4]);

//mostrar el segundo caracter del anterior elemento 

console.log(matriz[2][4][1]);

// sustitumimos el eelemeeento 2 por otro array dee nummeros 

let otros_numeros =[ 2 ,4 ,6, 7 ,8];

console.log(matriz.splice([2], 1, otros_numeros));

console.log(matriz);

// SUSTITUIMOS el elemeento [1,3] por un  booleano 
//DUDAAAAAAAA!!!!!!!!!!!
let rest = true;

console.log(matriz.splice(matriz[1][3], 1, rest));

console.log(matriz);

// INSERTAR UN NUEVO STRING EN EL PRIMER ARRAY

nombres.push("gloria");

console.log(nombres);
// eliminar el primer eleento del primer array 

nombres.shift();

console.log(arr1);

// ordenar alfabeticamentee el array 2 

colores.sort();

console.log(arr2);

//--------------------------------------- RETO 6 ----------------------------//


// creeamos el objeto 

let persona ={
    "nombre": "pepe" ,
    "edad" :25 ,
    "esVaron" :true ,
    "aficiones" : ["nadar" , "patinar" , "leer"] ,
    "dni" :{
        "numero" : 70260158 ,
        "fechaExpedicion" : "20 enero 30"
    }
}

// mostramos su nombre 

console.log(persona.nombre);

// mostramos aficiones 

console.log(persona.aficiones);

//  mostramos solo su seegunda aficion 

console.log(persona.aficiones[1]);

// mostrar tiodos los datos del dni 

console.log ( persona.dni);

//modificar datos de exzpedicion del dni 

persona.dni.fechaExpedicion= "30 marzo 2031";
console.log(persona.dni);

// vamos a eliminar  la segunda aficion 

(persona.aficiones).splice(1,1);

console.log(persona.aficiones);

// añadir una nueva aficion 

(persona.aficiones).push("estudiar");

console.log(persona.aficiones);




//------------------------------------------------------ RETO 7 --------------------------------------//


// creamos el ojeto literal 

let direccion = {
    "calle" :"segovia" ,
    "numero" :4 ,
    "piso" : "segundo" ,
    "puerta" : " b"
}

let direccion2 =direccion ;

let direccion3 ={...direccion};

direccion.ciudad ="segovia";

console.log(direccion);

console.log(direccion2);

console.log(direccion3);

// al estar igualadas la direeccion 1 y la 2 se modifica tambien la direccion 2 , en cambio la direccion 3 esta copiada , pero copiada en el momento de la creaccion 
// de direccion 1 , y posteeriormeente esta se ha mmodificado , peero sin alterar la copia original de direeccion 3 


// creo un array nombres

let nombres =["jaime" , "alfonso " , "ruben "];

let nombres2 = nombres ;



//------------------------------------------------ RETO 8 --------------------------------------// 

// creamos el objeto 

let persona={
    nombre : "alberto" ,
    apellidos: ["llorente" ,"magdaleno"],
    edad : 28 ,
    padres :[{ nombre : "alberto",
                apellidos : ["llorente" ,"lazaro"],
                 edad : 55 ,
                padres :    [{nombre : "manolo" ,
                            apellidos : ["llorente" ,"lazaro"],
                            edad : 83} ,
                            {nombre : "iluminada" ,
                            apellidos : ["pedrazuela" ,"lazaro"],
                            edad : 85 } ]
                },
                {nombre : "sofia" ,
                apellidos : ["magdaleno" ,"olmos"],
                 edad : 50 ,
                padres :    [{nombre : "aurelio" ,
                            apellidos : ["magdaleno" ,"olmos"],
                            edad : 83} ,
                            {nombre : "asuncion" ,
                            apellidos : ["olmos" ,"olmos"],
                            edad : 85 } ]
                }] 
                            
                
};

// mostramos por consola el nombre del abuelo por parte de madre 

console.log( persona.padres[1].padres[0].nombre);

// mostramos por consola el apellido de la abuela por parte de padre 

console.log(persona.padres[0].apellidos[1]);

// sumamos la edad de la madre y del abuelo por parte de padre 

let suma = persona.padres[1].edad + persona.padres[0].padres[0].edad ;

console.log(suma);

 //intercambiamos las edades de los abuelos por parte de padre 

let otraEdad=persona.padres[0].padres[0].edad

persona.padres[0].padres[0].edad=persona.padres[0].padres[1].edad;

persona.padres[0].padres[1].edad =otraEdad;
console.log(persona.padres[0].padres[1].edad);


// añadirle a la abuela por parte de madre  el segundo apellido  del abuelo por parte de padre 

let apeabu= persona.padres[0].padres[0].apellidos[1];

persona.padres[1].padres[1].apellidos.push(apeabu);

console.log(persona.padres[1].padres[1].apellidos);

//eliminar el primer apellido de la madre 


(persona.padres[1].apellidos).shift();


console.log(persona.padres[1].apellidos);

// mostrar la ultima letra del segundo apelldo del abuelo por parte de padre 

console.log(persona.padres[0].padres[0].apellidos[1].charAt(persona.padres[0].padres[0].apellidos[1].length-1));





