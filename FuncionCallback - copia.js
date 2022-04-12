function miFuncion1()
{
    console.log('mi funcion 1');
}

function miFuncion2()
{
    console.log('mi funcion 2');
}

miFuncion1();
miFuncion2();

//Funcion de tipo callback

function imprimir(mensaje)
{
    console.log(mensaje);
}

function sumar(op1,op2,funcioncallBack)
{
let res = op1 + op2;
funcioncallBack(`Resultado: ${res}`);
}

sumar(3,2,imprimir)

// Llamadas asincronas con uso setTimeout
function miFuncionCallback(){
    console.log('Saludo asincrono despues de 3 segundos');
}

setTimeout(miFuncionCallback,3000);// Despues de 3 segundos

setTimeout(function(){ console.log('saludo asincronico 2')},4000);

setTimeout(() => console.log('saludo asincrono 3'), 5000);

// SetInterval

let reloj = () => {
    let fecha = new Date();
    console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`)
}

setInterval(reloj,1000); //1 segundo