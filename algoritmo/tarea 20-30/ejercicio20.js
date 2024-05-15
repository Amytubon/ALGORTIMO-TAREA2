//Pedir al usuario un número y mostrar si es mayor 0 y menor o igual a 100.

const readlineSync = require('readline-sync');

const num = parseInt(readlineSync.question('Enter a number: '));

if (num > 0 && num <= 100) {
  console.log('El número es mayor que 0 y menor o igual a 100.');
} 

else {
  console.log('El número no está dentro del rango.');
}

