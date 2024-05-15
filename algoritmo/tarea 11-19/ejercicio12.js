// 12. Solicitar al usuario su edad y mostrar si es mayor o menor de edad.
function ejercicio12() {
    // Solicitar al usuario que ingrese su edad
    let edad = parseInt(prompt("Ingrese su edad:"));

    // Verificar si la edad es mayor o igual a 18 y mostrar el resultado
    if (edad >= 18) {
        // Si la edad es mayor o igual a 18
        console.log("Usted es mayor de edad.");
    } else {
        // Si la edad es menor a 18
        console.log("Usted es menor de edad.");
    }
}
