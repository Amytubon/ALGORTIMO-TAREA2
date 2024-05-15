// 11. Pedir al usuario un número y mostrar si es mayor o menor que 10.
function ejercicio11() {
    // Solicitar al usuario que ingrese un número
    let numero = parseFloat(prompt("Ingrese un número:"));

    // Verificar si el número es mayor, menor o igual que 10 y mostrar el resultado
    if (numero > 10) {
        // Si el número es mayor que 10
        console.log("El número ingresado es mayor que 10.");
    } else if (numero < 10) {
        // Si el número es menor que 10
        console.log("El número ingresado es menor que 10.");
    } else {
        // Si el número es igual a 10
        console.log("El número ingresado es igual a 10.");
    }
}