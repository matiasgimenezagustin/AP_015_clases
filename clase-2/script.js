


/* truthy / falsy */


/* Falsy:
-null
-undefined
-''
-0 / -0
-NaN
-false
*/

/* 
let condicion = [].length

if(condicion){
    console.log('es un truthy')
}
else{
    console.log('es un falsy')
} */
/* OPERADOR TERNARIO */
/* let condicion = ''
let condicion2 = 'pepe' */

/* condicion && condicion2
? console.log('pepe') 
: (
    condicion2 
    ? console.log('pedro')
    : console.log('maria')
) */
/* console.log(condicion || condicion2)


console.log(condicion ?? condicion2) */


/* console.log(condicion && condicion2) */


/* let edad = prompt('Ingresa tu edad')

console.log(edad ?? 18) */

/* let aceptoTerYCond = null


console.log(aceptoTerYCond ?? false ? console.log('acepto'): console.log('se nego')) */

/* Si la condicion es falsa, ejecuta el hola */
/* let condicion = ''

!condicion && console.log('holaaaaa') */


/* let isLiked = true


isLiked ? `<button>Dislike</button>` : `<button>Like</button>` */


/* let showModal = true

showModal && `<div><h1>Soy un modal</h1></div>` */


/* 
Crear un array de 5 objetos donde cada objeto tenga la sig estructura:

nombre
precio
stock
id
*/


const frutas = [{
    nombre: "Manzana",
    precio: 500,
    stock: 2,
    id: "0"
}, {
    nombre: "Pera",
    precio: 400,
    stock: 40,
    id: "1"
}, {
    nombre: "Uva",
    precio: 700,
    stock: 50,
    id: "2"
}, {
    nombre: "Naranja",
    precio: 500,
    stock: 6,
    id: "3"
}, {
    nombre: "Mandarina",
    precio: 500,
    stock: 30,
    id: "4"
},
{
    nombre: "Uva",
    precio: 900,
    stock: 20,
    id: "5"
}]

let uva = frutas.find((fruta ) => {
    console.log('me ejecuto')
    return fruta.nombre == 'Uva'
})

let uva2 = frutas.find((fruta ) =>  fruta.nombre == 'Uva')

let uvas = frutas.filter((fruta ) =>  fruta.nombre == 'Uva')

/* Crear la funcion getFruitById que reciba un id y nos devuelva la fruta con ese id, en caso de no encontrarla debera devolver un 'product not found' 
-USAR EL METODO AVANZADO FIND
*/

/* 
Crear la funcion obtenerProductosMayoresA(precio) que nos devolvera todos los productos mayores al precio recibido por parametro
*/

const getFruitById = (id) =>{
    let fruta = frutas.find(fruta => fruta.id == id)
  
    return fruta ? fruta : 'Product not found'
}

const getFruitById2 = (id) =>{
    let fruta = frutas.find(fruta => {
        return fruta.id == id
    })
  
    return fruta ? fruta : 'Product not found'
}



