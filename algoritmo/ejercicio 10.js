// Función para calcular el nuevo límite de crédito
function nuevoLimite(tipoTarjeta) {
    let aumento = 0;

    // Determinar el aumento basado en el tipo de tarjeta
    switch (tipoTarjeta) {
        case 1:
            aumento = 100;
            break;
        case 2:
            aumento = 200;
            break;
        case 3:
            aumento = 300;
            break;
        default:
            aumento = 500;
            break;
    }

    // Calcular el nuevo límite de crédito
    let nuevoLimite = aumento * 1.1; // Aumento del 10%

    return nuevoLimite;
}

// Ejemplo de uso
const tipoTarjetaCliente = 2; // Tipo de tarjeta del cliente
const nuevoLimiteCliente = nuevoLimite(tipoTarjetaCliente);

console.log("El nuevo límite de crédito para el cliente será: $" + nuevoLimiteCliente);
