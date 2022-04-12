let x = 10;

console.log(x.length);

let persona = {
    nombre : 'Juan',
    apellido: 'Bolas',
    email: 'Jbolas@gmail.com',
    edad: 28,
    idioma: 'ENG',

    // Gets and Sets
    get lang()
    {
        return this.idioma.toUpperCase();
    },

    set lang(lang)
    {
        this.idioma = lang.toUpperCase();
    },

    nombreCompleto: function(){
    return this.nombre + ' ' + this.apellido;
    }
}

console.log(persona.nombre)
console.log(persona.apellido)
console.log(persona.nombreCompleto())
console.log(persona.email)
console.log(persona.edad)

console.log(persona)

// Resultado de Get y Set
console.log(persona.lang);

persona.lang = 'DEU';

console.log(persona.lang);
console.log(persona.idioma)

//Metodo Constructor




// Creacion de objetos

let person2 = new Object();
person2.nombre = 'Marcos';
person2.direccion = 'Saturno 15';
person2.telefono = '1234435';

console.log(person2.telefono)

console.log(person2)

// Acceder a las propiedades

console.log(person2['nombre']);

// for in

for(NombrePropiedad in person2)
{
    console.log(NombrePropiedad);
    console.log(person2[NombrePropiedad]);
}


// Agregar y eliminar propiedades

person2.telefono = '846545233'

console.log(person2)

delete person2.telefono

console.log(person2)

// Concatanacion en cada propiedad


console.log(person2.nombre + ',' + person2.direccion + ','+ person2.telefono)

for (NombrePropiedad in person2)
{
    console.log(person2[NombrePropiedad]);
}

let personArray = Object.values(person2);
console.log(personArray)

let personaString = JSON.stringify(person2);


//-----------------------------------------------------------------------------------------------------------------------//

//Funcion Constructor

function persona1(nombre, apellido,email)
{
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }
}

// Uso Prototype

persona1.prototype.tel = '4443332211';

let padre = new persona1('Juan','Perez','jperez@gmail.com');
console.log(padre.nombreCompleto())
padre.tel = '21561331'
console.log(padre.tel);

let madre = new persona1('Laura', 'Quintero','Lquintero@hotmail.com');
console.log(madre.nombreCompleto())
madre.tel = '232434454'
console.log(madre.tel);

padre.nombre = 'Carlos';
console.log(padre)

var miObjeto = new Object();
let miobjeto2 = {};

let miCadena1 = new String('Hola');
let miCadena2 = 'Hola';

let miNumero = new Number(1);
let miNumero2 = 1;

let miBoolean = new Boolean(false);
miBoolean = false;

let miArreglo1 = new Array();
let miArreglo2 = [];

let miFuncion = new Function();
let miFuncion2 = function(){

};

// Uso de Call

persona1 ={
    nombre: 'Mario',
    apellido: 'Espitia',
    nombreCompleto: function(titulo, tel)
    {
        return titulo + ':' + this.nombre + '  ' + this.apellido + ', ' + tel ;
    }
}

let persona2 ={
    nombre: 'Esteban',
    apellido:'Martinez'
}

// Uso de Call para nombre completo

console.log(persona1.nombreCompleto('Doctor','32324345454543'));

console.log(persona1.nombreCompleto.call(persona2,'Ing','54445463322'));

// Metodo Apply

let persona3={
    nombre: 'Oscar',
    apellido: 'Rodriguez',
    nombreCompleto: function(titulo , telefono)
    {
        return titulo +' '+ this.nombre + ' ' + this.apellido + telefono;
    }
}

console.log(persona3.nombreCompleto('Lic','5667778'));

let Arreglo = ['Ing', '55443322'];
console.log(persona1.nombreCompleto.apply(persona2,Arreglo));