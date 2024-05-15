// 19. Solicitar al usuario un número y mostrar si es divisible por 2 o impar.
function ejercicio19() {
    // Solicitar al usuario que ingrese un número
    let numero = parseFloat(prompt("Ingrese un número:"));

    // Verificar si el número es divisible por 2 o impar y mostrar el resultado
    if (numero % 2 === 0) {
        // Si el número es divisible por 2
        console.log("El número ingresado es divisible por 2.");
    } else {
        // Si el número es impar
        console.log("El número ingresado es impar.");
    }
}
