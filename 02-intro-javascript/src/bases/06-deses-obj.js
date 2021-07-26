
// Desestructuracion
// Accion desestructurante 

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
    rango: 'Soldado'
};


const { nombre, edad, clave } = persona;

console.log(`${nombre} | ${edad} | ${clave}`);

const retornaPersona = ({nombre, clave,edad, rango = 'Capitan'}) => {

    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.87,
            lng: -56
        }
    }
};

const {nombreClave, anios,latlng:{ lat, lng}} = retornaPersona(persona);

console.log(nombreClave, anios);
console.log(lat, lng);
