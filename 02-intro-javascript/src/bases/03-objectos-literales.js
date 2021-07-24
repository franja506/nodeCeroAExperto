const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zipCode: 87098798,
        lat: 14.32,
        lng: 34.897
    }
};

//console.table(persona)


//Se utiliza para clonar el object
const persona2 = {...persona};

persona2.nombre = 'Josecito';

console.log({persona});
console.log({persona2});