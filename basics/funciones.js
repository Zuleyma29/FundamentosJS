// funciones en Javascript 

// funcion sin parametrosy sin retorno
function saluda(){
    console.log('Holaaaa!')
}
saluda();
// funcion con parematros y sin retorno
function addOne(num){
    console.log(`el ${num} + 1 = ${num + 1}`);
}
addOne(15);

//funcion con parematros y con retorno
function suma(num1, num2){
    return num1 + num2;
}
const result = suma(12, 34);
console.log(result);

// funciones como constantes
// funciones anonimas 
const resta = function (num1, num2){
    return num1-num2;
}
const resultado = resta(12, 2);
console.log(resultado);


// Funciones de Flecha Arrow Functions
(param1, param2) => {
    // Code 
    // return
}

const duplica = (num) => {
    return num * 2;
}

const multiplica = (num1, num2) => {
    console.log('Multiplia numeros');
    return num1 * num2;
}

const doble = duplica(16); 
console.log(doble);

const resultM = multiplica(13,26); 
console.log(resultM);
   
//Simplificando arrow Functions
let cambiaMinusculas = (word) =>{
    return word.toLowerCase();
}

//Si solo es un unico parametro se puede omitir parentesis
//si la unica linea es el return se puede omitir llaves y return 
cambiaMinusculas = word => word.toLowerCase();
