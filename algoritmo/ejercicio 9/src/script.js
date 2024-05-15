// Solicitar al usuario que ingrese su salario actual
var salarioActual = parseFloat(prompt("Ingrese su salario actual:"));

// Solicitar al usuario que ingrese el porcentaje de aumento
var porcentajeAumento = parseFloat(prompt("Ingrese el porcentaje de aumento (%):"));

// Calcular el aumento
var aumento = salarioActual * (porcentajeAumento / 100);

// Calcular el nuevo salario
var nuevoSalario = salarioActual + aumento;

// Mostrar el nuevo salario
console.log("Su nuevo salario después del aumento será: $" + nuevoSalario.toFixed(2));
