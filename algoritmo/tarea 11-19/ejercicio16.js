// 16. Solicitar al usuario un carácter y mostrar si es una vocal o consonante.
function ejercicio16() {
    // Solicitar al usuario que ingrese un carácter
    let caracter = prompt("Ingrese un carácter:");

    // Verificar si el carácter es una vocal, consonante o no válido y mostrar el resultado
    if (caracter.length === 1) {
        // Si se ingresa solo un carácter
        if ("aeiou".includes(caracter.toLowerCase())) {
            // Si el carácter es una vocal
            console.log("El carácter ingresado es una vocal.");
        } else {
            // Si el carácter es una consonante
            console.log("El carácter ingresado es una consonante.");
        }
    } else {
        // Si se ingresa más de un carácter
        console.log("Por favor, ingrese solo un carácter.");
    }
}
