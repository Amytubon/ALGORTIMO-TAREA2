// Definimos los cuatro números
const numero1 = 10;
const numero2 = 20;
const numero3 = 3;
const numero4 = 12;

// Función para verificar si un número es divisor de otro
function esDivisor(numero, divisor) {
  return numero % divisor === 0;
}

// Verificar si el número 1 es la mitad del número 2
const esMitad = numero1 * 2 === numero2;

// Verificar si el número 3 es divisor del número 4
const esDivisible = esDivisor(numero4, numero3);

// Mostrar los resultados
console.log("El primer número es la mitad del segundo:", esMitad);
console.log("El tercer número es divisor del cuarto:", esDivisible);
