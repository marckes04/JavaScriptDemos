function mifuncion()
{
    console.log('saludos mi funcion')
}

mifuncion();


let mifuncion1 = function()
{
    console.log('saludos mi funcion')
}

let miFuncionFlecha = () =>{
    console.log('Saludos desde mi funcion flecha');
}

const miFuncionFlecha1 = () => console.log('saludos desde mi funcion flecha');

miFuncionFlecha1();

const saludar = () => {
    return 'saludos desde funcion flecha'
}

console.log(saludar())

const regresaObjeto = () => ({nombre: 'Juan', apellido: 'Gomez'});
console.log(regresaObjeto());

const funcionConParametrosClasico = function(mensaje)
{
    console.log(mensaje);
} 

const funcionConParametros = (mensaje) => console.log(mensaje);
funcionConParametros('Saludos con paramentros'); 

const functionConVariosParametros = (op1, op2) => op1 + op2
console.log(functionConVariosParametros(3,5));
