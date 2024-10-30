const  nombre = 'alex';
const  apellido = 'Hernandez';

const nombreCompleto = `
${ nombre } 
${ apellido }`;

console.log(nombreCompleto)

function getSaludo(nombre )   {
    return 'Hola Mundo ' + nombre;
}

console.log(`Esto es un texto: ${ getSaludo( nombre) }`)