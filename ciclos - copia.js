//Ciclo While 

let contador = 0;

while(contador < 3)
{
    console.log(contador);
    contador++;
}

// Ciclo Do-While

do
{
console.log(contador)
contador++;
}

while(contador < 3);

// Ciclo for

for(let i = 0; i < 3; i++)
{
    console.log(i);
}

console.log('fin ciclo for')

// Palabra Break

for(let i = 0; i<= 10 ;i++)
{
    if(i % 2 == 0)
    {
        console.log(i);
        break;
    }

}

console.log("Fin del ciclo For")

//Palabra Continue

for(let i = 0; i <= 10 ; i++)
{
    if( i % 2 != 0)
    {
        continue;// ir a la siguiente iteracion 
    }
        console.log(i)
}
