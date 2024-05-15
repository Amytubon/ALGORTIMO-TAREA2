//. Pide al usuario el precio total de una compra en una tienda en línea y el cupón de
//descuento a aplicar en porcentaje. Si el precio total de la compra supera los $10,
//aplica el descuento, de lo contrario, no aplica ningún descuento. Calcula y muestra el
//monto final con el descuento con el IVA del 15%.




const readlineSync = require('readline-sync');

const precioTotal = readlineSync.question('Ingrese el precio total de la compra: ')
const descuento = readlineSync.question('Ingrese el cupón de descuento en porcentaje: ')

let montoDescuento = 0;

if (precioTotal > 10) {
  montoDescuento = precioTotal * (descuento / 100);
  console.log(`Descuento aplicado: $`+montoDescuento);
} else {
  console.log('No se aplica descuento.');
}

const precioConDescuento = Number (precioTotal) - Number(montoDescuento);
const precioConIva = precioConDescuento * 1.15;

console.log(`Monto final con IVA: $`+precioConIva);