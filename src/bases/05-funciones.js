// function saludar(nombre) {
//     return `Hola ${ nombre }`;
// }

const saludo2 = (nombre) =>{
    return `Hola ${ nombre }`;
}

const saludo3 = (nombre) => `Hola ${ nombre }`;
const saludo4 = () => `Hola Mundo`;

console.log( saludo2('Vegeta') );
console.log( saludo3('Goku') );
console.log( saludo4() );


const getUser = () => ({
    uid: 'ABC123',
    username: 'El_Papi1502'
});

console.log( getUser() );


const getUsuarioActivo = ( nombre ) => ({
        uid: 'ABC567',
        username: nombre
})

const usuarioActivo = getUsuarioActivo('Piccolo');
console.log( usuarioActivo );
