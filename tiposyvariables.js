//Tipos en Javascript
// number, string, boolean, object, undefined
// typeof nos dice el tipo de dato 

console.log(12);
console.log(typeof(12));

console.log('string');
console.log(typeof('string'));

console.log(true);
console.log(typeof(true));

let variable;
console.log(typeof(variable));

console.log([1,2,3]);
console.log(typeof([1,2,3]));

// Variables en Javascript
// versiones anteriores ES6 var 
var firsName = 'Tony Stark';

// const y let de ES6 en adelante
// constantes const (variables de solo lctura)
// siempre debe inisializarse
//No permite reasignaciones 

const PI = 3.14;
// PI = 3.14;

//Variables con let 
// declarar 
let lastName; // undefined
lastName ='Perez';
lastName = true;
lastName = 25;