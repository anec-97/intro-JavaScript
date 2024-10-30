const personajes = [ 'Spiderman', 'DOOM', 'Magneto', 'Wolverine' ];

const [ ,p2] = personajes;

console.log(p2)

const retonarArreglo = () => {
    return ['ABC', 123];
}

const [letras, numeros] = retonarArreglo();
console.log(letras, numeros);

const userState = (valor) => {
    return [ valor, () => {console.log('Hola Mundo')} ];
}

const [nombre, setNombre] = userState('Goku');
console.log(nombre);
setNombre();