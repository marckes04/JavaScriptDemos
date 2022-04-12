/*
Ejemplos de tipos de datos en JavaScript
*/

//Tipo de dato String 
var nombre = "Carlos"
console.log(nombre)

//Tipo de dato Numerico
var numero = 1000;
console.log(typeof(numero))

//Tipo de dato Object
var objeto = { 
    nombre : "Juan" ,
    apellido : "Perez",
    telefono : "5455434345"
}
console.log(objeto);

// Tipo de Dato Boolean (true,false)
var bandera = true;
console.log( typeof bandera)

//Tipo de Dato function
function mifuncion(){

}
console.log(typeof mifuncion)    

// Tipo de Dato Symbol

var simbolo = Symbol("mi simbolo");
console.log(simbolo)

// Tipo clase es una funcion 
class Persona {
    constructor(nombre,apellido)
    {
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

console.log(Persona)

//Tipo de dato undefined

var x;
console.log(x);
x= undefined;
console.log(typeof x);

// null = valor ausencia

var y = null
console.log(y);


var autos = ['BMW', 'Audi','Volvo'];
console.log(autos);
console.log(typeof autos)

var z = ' ';
console.log(z);
console.log(typeof z)

// Concatenacion 

var Nombre = 'Juan';

var apellido = 'Perez';

var NombreCompleto = nombre + ' ' + apellido;
console.log(NombreCompleto)

var NombreCompleto2 = 'Carlos' + ' ' + 'Perez';
console.log(NombreCompleto2)

var x = nombre + 219;
console.log(x)

x = nombre +( 2 + 4);
console.log(x)

x= 2 + 4 + nombre
console.log(x)

// Var, let y const

let Nombre1 = "Juan";
console.log(Nombre1)


const Apellido1 = "Perez"
console.log(Apellido1)

let nombreCompleto = "Juan Perez";
let nombrecompleto = "Carlos Lara";

console.log(nombreCompleto)
console.log(NombreCompleto)

//let 1nombre ; No se permite como variable