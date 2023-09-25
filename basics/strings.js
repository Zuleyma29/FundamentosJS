// Strings
const firstName = 'Zuleyma';
const lastName = "Pelcastre";
const fullName = firstName + " " + lastName;

console.log("I'm " + firstName);
console.log('I\'m ' + firstName);

console.log(fullName);

//Strings Multilinea 
const menu =`
elige:
1 - Opcion 1
2 - Opcion 2
3 - Opcion 3
`;

console.log(menu);

// Strings Templates 
// placeholder ${}

const city = 'Atlangatepec';
const phone = '241 171 36 88';
const rol = 'Estudiante';

const presentation = `
Holaa 
Soy ${fullName }, ${ rol} en la UTT
Vivo en ${city}
Te puedes comunicar conmigo al num ${phone}
`;

console.log(presentation);