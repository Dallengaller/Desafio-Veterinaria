// index.js

const operaciones = require('./operaciones');

const args = process.argv.slice(2);


if (args.length > 0) {
    const operacion = args[0].toLowerCase();

    switch (operacion) {
        case 'registrar':

            if (args.length === 6) {
                const nombre = args[1];
                const edad = args[2];
                const animal = args[3];
                const color = args[4];
                const enfermedad = args[5];
                const numCita = operaciones.registrarCita(nombre, edad, animal, color, enfermedad);
                console.log(`Se ha registrado la cita. Número de cita: ${numCita}`);
            } else {
                console.log("Error: Argumentos insuficientes para registrar cita.");
            }
            break;
        case 'leer':
            operaciones.mostrarCitasRegistradas();
            break;
        default:
            console.log("Operación no válida. Las operaciones válidas son 'registrar' y 'leer'.");
    }
} else {
    console.log("Error: Se requiere al menos un argumento para especificar la operación (registrar/leer).");
}
