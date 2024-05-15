// Pedir al usuario que ingrese un número
var numero = parseFloat(prompt("Por favor, ingresa un número:"));

// Verificar si el número es negativo y menor que -20
if (numero < -20) {
    console.log("El número es negativo y menor que -20.");
} else {
    // Verificar si el número es positivo
    if (numero >= 0) {
        console.log("El número es positivo.");

        // Verificar si el número es par o impar
        if (numero % 2 === 0) {
            console.log("El número es par.");
        } else {
            console.log("El número es impar.");
        }

        // Verificar si el número es múltiplo de 7
        if (numero % 7 === 0) {
            console.log("El número es múltiplo de 7.");
        } else {
            console.log("El número no es múltiplo de 7.");
        }
    } else {
        console.log("El número es negativo.");
    }
}
