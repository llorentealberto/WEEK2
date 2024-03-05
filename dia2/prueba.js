let arr= ["alberto " , "juan" , "pepe"];

console.log(arr);

// añadimos un elemoto al final del array 
arr.push("maria");

console.log(arr);

// eliminamos el ultimo elemento  --> el valor nos lo devuelve , lo podemos guardar en una variable . 
arr.pop();

console.log(arr);

//devolvemos y eliminamos el primer elemento del array 

// aqui guardamos el elemmento en una variabel 
 let prueba_shift =arr.shift();
 console.log(prueba_shift);

console.log(arr);

// devolvemos true si el elemento esta en el array 

// nos devuelve true si el elemento esta en el array , false si no esta 

console.log(arr.includes("maria"));
console.log(arr.includes("pepe"));

// .splice  nos elimina el elemento que queramos , ( elementos desde el que contamos , numero de elementos que eliminamos , elemento que queremos añadir en esa posicion )
arr.splice(0, 1, "josemanuel");
console.log(arr);

//-----------------------------------------------------------------------------------------------------------------------------------------------------//

// OBJETOS LITERALES //

let coche1={ marca:"audi",
            puertas:4,
            color:"blaco",
            esDiesel:true , 
            extras: ["radio" , "aire acondicionado " ,"techo solar"] , 
            duenio:{nombre:"Juan",
                    apellido:"sanz",
                    aficiones:["jugar play " , "tenis " , "dormir"]}
            }

let propiedadMarca = coche1.marca;
console.log(propiedadMarca);

