//Pedir al usuario su nota en un examen y determinar si ha aprobado o reprobado,
//considerando que la nota mínima de aprobación es 60 puntos. Si la nota es mayor a
//40 y menor a 60 se queda para recuperación caso contario pierde la materia


const readlineSync = require('readline-sync');

const exam = parseInt(readlineSync.question('Ingrese su nota en el examen: '));

if (exam < 0 || exam > 100) {
  console.log('La nota debe ser un valor entre 0 y 100.');
} else if (exam < 40) {
  console.log('Lo siento, ha perdido la materia.');
} else if (exam < 60) {
  console.log('Se queda para recuperación.');
} else {
  console.log('¡Felicidades, ha aprobado la materia!');
}