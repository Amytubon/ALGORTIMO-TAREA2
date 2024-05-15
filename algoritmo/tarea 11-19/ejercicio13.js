// 13. Pedir al usuario un número y mostrar si es par o impar.
function ejercicio13() {
    // Solicitar al usuario que ingrese un número
    let numero = parseInt(prompt("Ingrese un número:"));

    // Verificar si el número es par o impar y mostrar el resultado
    if (numero % 2 === 0) {
        // Si el número es par
        console.log("El número ingresado es par.");
    } else {
        // Si el número es impar
        console.log("El número ingresado es impar.");
    }
}