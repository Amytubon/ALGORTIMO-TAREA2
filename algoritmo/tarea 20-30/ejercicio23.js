//Solicitar al usuario el precio de un producto y el porcentaje de descuento aplicado.
//Calcular y mostrar el precio final luego de aplicar el descuento siempre cuando el
//precio sea mayor $100.

const readlineSync = require('readline-sync')

const num = readlineSync.question('Ingrese el precio de su producto:$ ')
const porce = readlineSync.question("ingrese el porcentaje de su descuento: ")


if(num>100){
    subtotal= (num * porce) / 100 
    total= num - subtotal
    console.log ("el precio del porducto es:$ "+ total)

}
else{
    console.log ("No se aplica descuento para precios menores o iguales a $100 ")

}


