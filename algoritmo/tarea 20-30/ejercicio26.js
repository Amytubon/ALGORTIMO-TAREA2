//Pide al usuario el precio de un artículo y el porcentaje de impuesto de ventas aplicado
//en su región. Si el precio del artículo supera los $200, aplica el impuesto de ventas,
//de lo contrario, no se aplica impuesto. Calcula y muestra el precio final luego de
//aplicar el impuesto

const readlineSync = require('readline-sync');

const precio = readlineSync.question('Ingrese el precio del artículo: ');
const impuestos = readlineSync.question('Ingrese el porcentaje de impuesto de ventas aplicado en su región: ');

if (precio < 200) {
  console.log(`El precio final del artículo es $`+precio);
} else {
  const tax = (precio * impuestos) / 100;
  const final = Number(precio) + Number(tax);
  console.log(`El precio final de su artículo es:$ `+final);
}