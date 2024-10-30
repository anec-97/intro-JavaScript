const persona = {
    nombre: 'alex',
    edad: 25,
    clave: 'DOOM',

};

// const {nombre, edad, clave} = persona;

// console.log( nombre );
// console.log( edad );
// console.log( clave );

const getContext = ({clave,  edad}) => {
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
    }
}

const { nombreClave, anios, latlng: { lat, lng } } = getContext(persona);

console.log( nombreClave, anios );
console.log( lat, lng );