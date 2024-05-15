//Solicita al usuario su sueldo actual y el porcentaje de incremento salarial anual. Si el
//sueldo actual es menor que 500, aplica el incremento del 5%, de lo contrario, no
//aplica ningún incremento. Calcula y muestra el sueldo esperado con el incremento
//aplicado.


const readlineSync = require('readline-sync');

const sueldoActual = readlineSync.question('Ingrese su sueldo actual: ');

if (sueldoActual < 500) {
  const incremento = sueldoActual * (5 / 100);
  const sueldoEsperado = Number (sueldoActual) + Number(incremento);
  console.log(`Su sueldo esperado con el incremento aplicado es:$ `+sueldoEsperado);
} else {
  console.log(`Su sueldo actual es:$ `+sueldoActual);
}