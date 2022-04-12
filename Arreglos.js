//let autos = new Array ('BMW,Mercedes Benz, Volvo');
const autos = ['BMW','Mercedes Benz', 'Volvo'];
console.log(autos[0]);
console.log(autos[2]);
// Recorrer numeros de un elemento
for(let i = 0; i < autos.length; i++)
{
    console.log(i+  ':' + autos[i]);
}

// Modificar elementos de un arreglo 

autos[1] = 'MercedesBenz'
console.log(autos[1])

//Agregar Elementos
autos.push('Audi');
console.log(autos);

console.log(autos.length);
autos[autos.length]= 'Cadillac';
console.log(autos);

autos[5] = 'Porsche';

console.log(autos);

console.log(Array.isArray(autos));

console.log(autos instanceof Array);