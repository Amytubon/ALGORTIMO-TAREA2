const readlineSync = require('readline-sync');

const num = parseInt(readlineSync.questionInt('Ingrese un numero: '));

if (num >= 0 && num < 10) {
  console.log('El número ingresado es un número de un solo dígito.');
} else {
  console.log('El número ingresado no es un número de un solo dígito.');
}