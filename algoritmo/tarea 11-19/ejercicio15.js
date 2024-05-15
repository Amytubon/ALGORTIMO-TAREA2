// 15. Pedir al usuario dos números y mostrar si son iguales o diferentes.
function ejercicio15() {
    // Solicitar al usuario que ingrese dos números
    let numero1 = parseFloat(prompt("Ingrese el primer número:"));
    let numero2 = parseFloat(prompt("Ingrese el segundo número:"));

    // Verificar si los números son iguales o diferentes y mostrar el resultado
    if (numero1 === numero2) {
        // Si los números son iguales
        console.log("Los números ingresados son iguales.");
    } else {
        // Si los números son diferentes
        console.log("Los números ingresados son diferentes.");
    }
}