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


// accedemos a las propiedades del objeto 
let propiedadMarca = coche1.marca;
console.log(propiedadMarca);

let propiedadExtras= coche1.extras[1];

console.log(propiedadExtras);

let propiedadduenio= coche1.duenio.apellido ;

let propiedadDuenioAficion=coche1.duenio.aficiones[1];

console.log(propiedadduenio);
console.log(propiedadDuenioAficion);

