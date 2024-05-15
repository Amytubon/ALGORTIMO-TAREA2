const readlineSync = require('readline-sync');

const totalCuenta = readlineSync.question('Ingrese el total de su cuenta en el restaurante: ');
const descuentoFidelidad = readlineSync.question('Ingrese el porcentaje de descuento por ser cliente frecuente: ');

let descuentoMonto = 0;

if (totalCuenta > 70) {
  descuentoMonto = totalCuenta * (descuentoFidelidad / 100);
}

const totalDescuento = Number (totalCuenta) - Number (descuentoMonto)
const totalConIva = totalDescuento * 1.15;

console.log(`Descuento aplicado: $`+descuentoMonto);
console.log(`Monto final con IVA: $`+ totalConIva);