// 14. Solicitar al usuario un número y mostrar si es positivo o negativo.
function ejercicio14() {
    // Solicitar al usuario que ingrese un número
    let numero = parseFloat(prompt("Ingrese un número:"));

    // Verificar si el número es positivo, negativo o cero y mostrar el resultado
    if (numero > 0) {
        // Si el número es positivo
        console.log("El número ingresado es positivo.");
    } else if (numero < 0) {
        // Si el número es negativo
        console.log("El número ingresado es negativo.");
    } else {
        // Si el número es cero
        console.log("El número ingresado es cero.");
    }
}