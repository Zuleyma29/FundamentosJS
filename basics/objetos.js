// Objetos en javascrip 
/*
objeto= {
    key: value, 
    key: value
}
objeto.key
objeto['key']
*/

const subject = {
    name: 'Aplicaciones Web',
    cuatri: 3,
    professor: 'Fransisco',
    classroom: 'LaB Redes I',
    'total hours':70,
    weekHours: 5
}

console.log(subject);
console.log(subject.name);
console.log(subject.professor);
console.log(subject['classroom']);
console.log(subject['total hours']);

subject.professor =  'Francisco Lopez';
subject.career = 'TIADSM';
console.log(subject);

const student = {
    neme: 'Laura Alicia ',
    age: 21,
    califications: [10,10,8],
    city: 'Apizaco'
}

const group = {
    name: '4B',
    student: [student,student,student],
    subject: [subject, subject, subject]
}

console.log(group);
console.log(group.subject[0].professor);
console.log(group.student[1].califications);
console.log(group.student[1].califications[0]);
