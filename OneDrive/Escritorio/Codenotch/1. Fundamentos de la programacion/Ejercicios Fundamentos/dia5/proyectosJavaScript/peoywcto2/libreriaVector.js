// defino la funcion que crea el vector 
// creo el vector vacio
let vector=[];

function crearVector(n,m){

         for(let i=0 ; i<n ; i++){

            let numalet=Math.round(Math.random()*(m+1));

            vector.push(numalet)

         }

         console.log(vector);

}

crearVector(6,4);

//-------------------------------------------------//

// suma dos vectores si y solo si tienen el mismo numero de elementos y devuelve el vector de dicha summa 

// creo dos vectores 

let v1=[4,5,3,6,7,6];

let v2=[3,5,6,7,8,7];

// hago la funcion 
function sumaVectores(v1 , v2){
    // creo el vector resultado vacio 
    let vresult=[];
    if(v1.length === v2.length){
        // si se cumple la condicion va a ir rellenando cada elemento del array resultado con la suma de los elementos de los arrays de los parametros .
        for(let i=0 ; i<v1.length ; i++){

            vresult[i]=v1[i]+v2[i];
        }
        
    }
    return vresult;
}


console.log(sumaVectores(v1,v2));