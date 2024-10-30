const persona = {
    nombre: 'Alex',
    apellido: 'Hernandez',
    edad: 25,
    direccion: {
        calle: 'Priv. ramirez',
        numero: 6409
    }
};


const persona2 = {...persona};
persona2.nombre = 'peter';


console.log(persona);
console.log(persona2);