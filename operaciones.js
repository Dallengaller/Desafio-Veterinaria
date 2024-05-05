// operaciones.js

const fs = require('fs');
const citasFilePath = 'citas.json';

function registrarCita(nombreAnimal, edadAnimal, tipoAnimal, colorAnimal, enfermedad) {

    let citasVeterinaria = [];
    try {
        citasVeterinaria = JSON.parse(fs.readFileSync(citasFilePath, 'utf8'));
    } catch (error) {
        console.error('Error al leer el archivo de citas:', error);
    }


    let cita = {
        nombreAnimal: nombreAnimal,
        edadAnimal: edadAnimal,
        tipoAnimal: tipoAnimal,
        colorAnimal: colorAnimal,
        enfermedad: enfermedad
    };


    citasVeterinaria.push(cita);

    try {
        fs.writeFileSync(citasFilePath, JSON.stringify(citasVeterinaria));
    } catch (error) {
        console.error('Error al escribir en el archivo de citas:', error);
    }


    return citasVeterinaria.length;
}


function mostrarCitasRegistradas() {

    try {
        const citasVeterinaria = JSON.parse(fs.readFileSync(citasFilePath, 'utf8'));

        if (citasVeterinaria.length === 0) {
            console.log("No hay citas registradas.");
            return;
        }


        citasVeterinaria.forEach((cita, index) => {
            console.log(`Cita ${index + 1}:`);
            console.log(`Nombre del animal: ${cita.nombreAnimal}`);
            console.log(`Edad del animal: ${cita.edadAnimal}`);
            console.log(`Tipo de animal: ${cita.tipoAnimal}`);
            console.log(`Color del animal: ${cita.colorAnimal}`);
            console.log(`Enfermedad: ${cita.enfermedad}`);
            console.log("------------------------");
        });
    } catch (error) {
        console.error('Error al leer el archivo de citas:', error);
    }
}


module.exports = {
    registrarCita,
    mostrarCitasRegistradas
};
