// Definimos los valores de los cuatro números
const numero1 = 10;
const numero2 = 20;
const numero3 = 15;
const numero4 = 6;

// Función para verificar si un número es divisor de otro
function esDivisor(numero, divisor) {
  return numero % divisor === 0;
}

// Determinar si el número 1 es divisor del número 3
const esDivisorNumero1 = esDivisor(numero3, numero1);

// Determinar si el número 2 es el doble del número 4
const esDobleNumero2 = numero2 === numero4 * 2;

// Mostrar los resultados
console.log("El primer número es divisor del tercero:", esDivisorNumero1);
console.log("El segundo número es el doble del cuarto:", esDobleNumero2);
