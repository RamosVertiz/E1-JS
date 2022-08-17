// Crear el array de objetos "Pizzas". 🍕
// 👉 Debemos crear 6 objetos como mínimo.
// 👉 Cada objeto debe tener definido su id (1,2,3,etc), nombre, ingredientes (Sobre la base) y precio. (Ingredientes debe ser una lista). 

// 🔥 Crear una iteración del array que imprima en consola:
// a) Las pizzas que tengan un id impar.
// b) ¿Hay alguna pizza que valga menos de $600?
// c) El nombre de cada pizza con su respectivo precio.
// d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza actual). Ayuda: van a tener que realizar dos recorridos, ya que cada pizza del array de pizzas tiene un array de ingredientes.

// TODAS  las respuestas deben ser USER-FRIENDLY. 
// Si (como en el punto B), la respuesta es un booleano (true o false), no imprimir el booleano , imprimir en consola una respuesta que toda persona pueda entender, sepa o no de programación (Es decir, no podemos imprimir un array o un objeto en consola, por ejemplo.). 
// Manejemos esa respuesta, pensando en que un usuario promedio va a leer eso. 

// Por ejemplo: "La pizza X, tiene un valor de $XXXX”. 💸

alert('Hola! resuelto en la consola')

class Pizza {
    constructor(id, nombre, ingredientes, precio){
        this.id = id;
        this.nombre = nombre;
        this.ingredientes = ingredientes;
        this.precio = precio;
        
    }
}
const pizzas = [
    {
    id: 1,
    nombre: 'muzzarella',
    ingredientes: ['muzzarella', 'salsa de tomate', 'oregano'] , 
    precio: 800,
    },
    {
    id: 2,
    nombre: 'fugazzeta',
    ingredientes: ['muzzarella', 'cebolla', 'oregano'] , 
    precio: 900,
    },
    {
    id: 3,
    nombre: 'jamon y morron',
    ingredientes:  ['muzzarella', 'jamon', 'morron', 'oregano'] ,  
    precio: 1000,
    },
    {
    id: 4,
    nombre: 'rucula',
    ingredientes:  ['muzzarella', 'rucula', 'parmesano'] ,  
    precio: 1000,
    },
    {
    id: 5,
    nombre: 'napo',
    ingredientes: ['muzzarella', 'tomate natural', 'ajo','parmesano'] ,  
    precio: 1000,
    }, 
    {
    id: 6,
    nombre: 'canchera',
    ingredientes: ['salsa de tomate', 'ajo'],
    precio: 550,
    }   
]


// a) Las pizzas que tengan id impar. 

function a (arr) {
    arr.forEach(( arr ) => {
        if(arr.id % 2 !==0) {
        console.log('la ' + arr.nombre + ': ID ' + arr.id + ', tiene id impar.')
        }
        })
}

a(pizzas); 


//b) ¿Hay alguna pizza que valga menos de $600?

function b (arr) {

    const menos600 = arr.some ((arr)=> arr.precio < 600);
    console.log(menos600); 

}

b (pizzas)

function b2 (arr) {
    arr.forEach(( arr ) => {
        if(arr.precio < 600) {
        console.log('la ' + arr.nombre + ' vale menos de $600')
        }
        })
}

b2 (pizzas)

//c) El nombre de cada pizza con su respectivo precio.

function c (arr) {
    arr.forEach((arr) => {
        console.log('la ' + arr.nombre + ' cuesta $' + arr.precio)
    })
}

c (pizzas)


function c2(arr) {

    const nombreYPrecio = arr.map ((arr) => {
    return {
        nombre: arr.nombre,
        precio: arr.precio,
    }
    })
    console.log (nombreYPrecio);
}

c2 (pizzas)

// d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza actual). Ayuda: van a tener que realizar dos recorridos, ya que cada pizza del array de pizzas tiene un array de ingredientes.

function d (arr) {

    arr.forEach ((arr) => {
    console.log ('la ' + arr.nombre + ' lleva los siguientes ingredientes: ' + arr.ingredientes +'.')
})
}

d (pizzas)