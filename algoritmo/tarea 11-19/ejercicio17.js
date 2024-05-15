// 17. Pedir dos nombres e indicar si son iguales, si el primero es mayor que el segundo o menor que el segundo.
function ejercicio17() {
    // Solicitar al usuario que ingrese dos nombres
    let nombre1 = prompt("Ingrese el primer nombre:");
    let nombre2 = prompt("Ingrese el segundo nombre:");

    // Comparar los nombres y mostrar el resultado
    if (nombre1 === nombre2) {
        // Si los nombres son iguales
        console.log("Los nombres ingresados son iguales.");
    } else if (nombre1 > nombre2) {
        // Si el primer nombre es mayor que el segundo
        console.log("El primer nombre es mayor que el segundo.");
    } else {
        // Si el primer nombre es menor que el segundo
        console.log("El primer nombre es menor que el segundo.");
    }
}