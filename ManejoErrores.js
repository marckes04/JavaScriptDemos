'Use strict'

console.log('continuamos....');

try{
    x = 10;
   // miFuncion();
   throw 'Mi error';
}
catch(error){
console.log(error);
}

finally
{
    console.log('Termina la revision de errores');
}

// Manejo de errores

'use strict'

let resultado = '';

try{
x = 10;
if(isNaN(resultado)) throw 'No es un numero';
else if(resultado > 0) throw 'Valor Positivo';
else if(resultado < 0) throw 'Valor Negativo';
else if(resultado === '') throw 'Cadena Vacia';
}
catch(error){
console.log(error);
//console.log(error.name);
//console.log(error.message);
}