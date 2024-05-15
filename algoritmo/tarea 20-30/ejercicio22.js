//Pedir al usuario el monto total de una factura y el año de la compra. Luego, calcular
//y mostrar el monto total a pagar incluyendo el IVA. Si el año de la compra es menor
//al 2024 el porcentaje del IVA es del 12% caso contrario aplicar el IVA del 15%.
//
//
//Entrada: pedir el total de factura y el año 
//proceso :calcular          factura + iva 
//salidad: mostrar el total con el iva 
//

const readlineSync = require('readline-sync')

const num = readlineSync.question('Ingrese su factura: ')
const año = readlineSync.question("ingrese el año de la compra: ")

if(año < 2024 ){
    subto= num *0.12
    total= Number(subto) + Number(num)
    console.log("el total es: "+total)
}

    else{
        subto= num *0.15
    total= Number(subto) + Number(num)
    console.log("el total es: "+total)

    }







