let condicion = true;

if(condicion)
{
console.log("Condicion verdadera")
}
else
{
 console.log("Condicion Falsa")
}

// Ejercicio 2

let Numero = 3;

if(Numero == 1)
{
    console.log("Numero Uno");
}

else if (Numero == 2)
{
    console.log("Numero Dos");
} 

else if(Numero == 3)
{
    console.log("Numero Tres");
}

else if(Numero == 4)
{
    console.log("Numero Cuatro");
}

// Ejercicio 3

let mes = 4;


if(mes == 1 || mes==2 || mes==12)

{
    console.log("Invierno")
}

else if (mes == 3 || mes==4 || mes==5)
{
    console.log("Primavera")
}

else if (mes == 6 || mes==7 || mes==8)
{
    console.log("Verano")
}

else if (mes == 9 || mes==10 || mes==11)
{
    console.log ("Otoño")
}
else
{
    console.log("Valor Incorrecto")
}


// Hora del dia

let horadia = 23;
let mensaje;

if(horadia >= 6 && horadia <= 11)
{
    mensaje = "Buenos dias"
    console.log(mensaje)
}
else if(horadia >= 12 && horadia <= 18)
{
    mensaje = "Buenos Tardes"
    console.log(mensaje)
}
else if(horadia >= 19 && horadia <= 24)
{
    mensaje = "Buenas Noches"
    console.log(mensaje)
}
else if(horadia >=0 && horadia < 6)
{
    mensaje = "Durmiendo"
    console.log(mensaje)
}

else
{
    console.log("Numero no valido")
}

// Sentencia Switch

let numero = 8;

let numeroTexto = 'Valor Desconocido';

switch(numero)
{

    case 1:

    numeroTexto = 'Numero Uno'
    console.log(numeroTexto)

    break;


    case 2:

    numeroTexto = 'Numero Dos'
    console.log(numeroTexto)
    break;

    case 3:
    
    numeroTexto = 'Numero Tres'
    console.log(numeroTexto)
    break;

    case 4:
    
    numeroTexto = 'Numero Cuatro'
    console.log(numeroTexto)
    break;

    default:
        console.log('Caso no encontrado')

}

//Estado del año

 mes = 4
let estacion = 'Estacion Desconocida'

switch(mes)
{

    case 1: case 2: case 12:
        estacion = 'Invierno'
        console.log(estacion);
    break;

    case 3: case 4: case 5:
        estacion = 'Primavera'
        console.log(estacion);
    break;

    case 6: case 7: case 8:
        estacion = 'Verano'
        console.log(estacion);
    break;

    case 9: case 10: case 11:
        estacion = 'Otoño'
        console.log(estacion);
    break;

    default:

    console.log('Valor no valido');

}


