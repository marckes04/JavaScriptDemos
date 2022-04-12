//miFuncion(4,2);

function miFuncion(a,b){
console.log("Suma:" + " " + ( a + b));
}

miFuncion(3,4);

// Return


function miFuncionRet(a,b){
    console.log(arguments.length)
     return a + b
    }
    
   let resultado = miFuncionRet(3,4);
    console.log(resultado);

    // Funcion con tipo expresion

    let sumar = function (a, b){
        return a+b;
    };

    resultado = sumar(1,2);
    console.log(resultado)

    // Funcion Self-Invoking
    
    /*
    (function (a, b){
        console.log('Ejecutando la funcion' (a + b));
    }) (3,4);*/

    console.log(typeof miFuncion)

var miFuncionTexto = miFuncion.toString();
console.log(miFuncionTexto)

// Funciones tipo flecha

const sumarFuncionTipoFlecha = (a,b) => a + b;
resultado = sumarFuncionTipoFlecha(8,10);
console.log(resultado)

//Parametros y argumentos en funciones

let adicion  = function(a,b)
{
    console.log(arguments[0])
    console.log(arguments[1])

    return a + b
};

resultado = adicion(3,6)
console.log(resultado)

// Sumar todos los argumentos
resultado = sumartodo(5, 4, 13, 10, 9);
console.log(resultado);

function sumartodo(){
    let suma = 0;
    for(let i = 0; i< arguments.length; i++)
    {
       suma += arguments[i];
    }

    return suma;
}

// Paso por valor en funciones
//Tipos Primitivos
let x = 10

function cambiarValor(a)
{
    a = 20;
}

cambiarValor(x);
console.log(x)


// Paso por referencia

const Persona = {

    nombre : 'Juan', 
    apellido: 'Perez'
}

function CambiarValorObjeto(p1)
{
    p1.nombre = 'Carlos';
    p1.apellido = 'Lara';
}

CambiarValorObjeto(Persona)
console.log(Persona)