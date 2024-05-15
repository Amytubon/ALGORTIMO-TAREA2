//Pide al usuario su salario actual y la cantidad de años de antigüedad. Calcule el valor
//del bono de antigüedad del empleado aplicando el 3% del salario por el número de
//años de antigüedad siempre y cuando supere los 3 años, caso contrario el bono de
//antigüedad es de cero. Se pide mostrar el salaria y el bono de antigüedad.

const readlineSync = require('readline-sync');

const salarioActual = readlineSync.question('Ingrese su salario actual: ')
const antiguedad = readlineSync.question('Ingrese su antigüedad en años: ')

let bonoAntiguedad = 0;

if (antiguedad > 3) {
  bonoAntiguedad = salarioActual * (3 / 100) * antiguedad;
  total = Number(salarioActual)+ Number(bonoAntiguedad)
}

console.log(`Su salario actual es: $ `+salarioActual);
console.log(`Su bono de antigüedad es: $ `+bonoAntiguedad);
console.log(`Su salario total con bono de antigüedad es: $ `+total);