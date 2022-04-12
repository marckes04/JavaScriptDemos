let a = 3, b = 2
let z = a + b

console.log("Resultado de la suma: " + z);

 z = a - b
 console.log("Resultado de la resta: " + z);

 z= a * b
 console.log("Resultado de la multiplicacion: " + z)

 z= a/b
 console.log("Resultado de la division: " + z)

 z = a % b;
 console.log("Operacion modulo o residuo (residuo):"+z)

 z = a ** b;
 console.log("Operacion Exponente: "+z)

 // Incremento
//Pre-incremento (el operador ++ antes de la variable)

z = ++a
console.log(a)
console.log(z)

//Post-incremento (el operador ++ despues de la variable)

z = b++;

console.log(b)
console.log(z)

// Decremento 
//Pre-Decremento
z = --a;
console.log(a);
console.log(z);

//Post-Decremento
z=b--;
console.log(b)
console.log(z)

let a1 = 3, b1 = 2, c = 1 , d = 4

 z = a1 * b1 + c / d
console.log(z)


z = c+a1*b/d
console.log(z)

let a2 = 1

a2 +=3;
console.log(a2)

a2 -=2
console.log(a2)

/*
 Operadores de Comparacion
*/

let a3 = 3, b2 = 2, c1 = "3";

let z1 = a3 == c1;

console.log(z1)

z = a3 != c1;
console.log(z)

z = a3 !== c1
console.log(z)

z = a3 < b2
console.log(z)

z = a3 <= b2
console.log(z)

z = a3 >= c1
console.log(z)

z = a3 > b2
console.log(z)


//  Numero Par e Impar
a = 9;

if(a % 2 == 0){
    console.log("Es un numero Par");
}
else{
    console.log("Es un numero Impar")
}

//  Mayoria de Edad

let Edad = 15, Adulto = 18;

if (Edad >= Adulto)
{
console.log("Es un Adulto")
}
else
{
    console.log("Es menor de edad")
}

// Operador And 

a = 25
 let valMin = 0; valMax = 10

if(a >= valMin && a <= valMax)
{
console.log("Dentro de rango")
}

else
{
    console.log("Fuera de rango")
}

//Operador Or

let vacaciones = true , DiaDescanso = true;

if(vacaciones || DiaDescanso){
    console.log("Padre puede asistir al juego");
}
else
{
    console.log("Padre esta ocupado")
}

//  Operador Ternario

let resultado = (1 > 2) ? "verdadero" : "falso";
console.log(resultado);

let numero = 9
resultado = (numero % 2 == 0) ? "Numero Par" : "Numero Impar"
console.log(resultado)

// De string a Number

let miNumero = "10";

let edad = Number(miNumero);

//console.log(typeof edad)

if(edad > 18)
{
    console.log("Puede votar")
}
else
{
    console.log("Muy joven para votar")
}

resultado = (edad >= 18) ? "Puede votar" : "Muy joven para votar"
console.log(resultado)

// Funcion is Nan

miNumero = "18x"
edad = Number(miNumero)
console.log(edad)

if(isNaN(edad))
{
    console.log("No es un numero")
}
else
{
    resultado = (edad >= 18) ? "Puede votar" : "Muy joven para votar"
    console.log(resultado)
}

// Precedencia de Operadores

let x = 5
let y = 10
z = ++x + y--;
console.log(x);
console.log(y);
console.log(z);

resultado = 4 + 5 * 6 / 3
console.log(resultado);