// 18. Pedir al usuario un número y mostrar si es múltiplo de 3 y par.
function ejercicio18() {
    // Solicitar al usuario que ingrese un número
    let numero = parseFloat(prompt("Ingrese un número:"));

    // Verificar si el número es múltiplo de 3 y par y mostrar el resultado
    if (numero % 3 === 0 && numero % 2 === 0) {
        // Si el número es múltiplo de 3 y par
        console.log("El número ingresado es múltiplo de 3 y par.");
    } else {
        // Si el número no cumple ambas condiciones
        console.log("El número ingresado no cumple ambas condiciones.");
    }
}