//Solicitar al usuario el precio de venta de un vehículo nuevo y su año de fabricación.
//Si el año de fabricación está entre el 2020 y 2023, aplicar un descuento del 5% sobre
//el precio de venta. mostrar el precio final incluyendo el 15% del IVA.

const readlineSync = require('readline-sync');

const auto = parseFloat(readlineSync.question('Ingrese el valor de su vehiculo: '));
const año = parseInt(readlineSync.question('Ingrese el año de su vehículo: '));

if(año < 2020 || año > 2023 ){
    console.log(`El vehículo debe tener un año de fabricación entre 2020 y 2023 para ser elegible para el descuento.`);
}
else {
    const discount = auto * 0.05;
    const subtotal = auto - discount;
    const iva = subtotal * 0.15;
    const final = subtotal + iva;

    console.log("El precio a pagar es: $" + final);
}