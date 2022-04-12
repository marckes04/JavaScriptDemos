let miPromesa = new Promise((resolver, rechazar) => {
let expresion = true;
if(expresion)
    resolver('Resolvio Correctamente');
else
    rechazar('Se produjo un error');
});

//miPromesa.then(valor => console.log(valor), error => console.log(error));

//miPromesa.then(valor => console.log(valor))
//.catch(error=> console.log(error));


// Set Timeout

let promesa = new Promise((resolver)=> {
    //console.log('inicio promesa')
    setTimeout( () => resolver('saludos con promesa y timeout'),3000);
    //console.log('fin promesa');
});

//promesa.then(valor => console.log(valor));

// Async indica que una funcion regresa una promesa 

async function miFuncionConPromesa(){
    return 'saludos con promesa y async'
}

//miFuncionConPromesa().then(valor => console.log(valor));



//async/await
async function funcionConPromesaYAwait(){
    let miPromesa = new Promise(resolver => {
        resolver('Promesa con Await')
    });
    console.log(await miPromesa);
}


//funcionConPromesaYAwait();

// promesas, await, asyc y setTimeout

async function funcionConPromesaAwaitTimeout(){
    console.log('inicio funcion');
    let miPromesa = new Promise(resolver => {
        setTimeout(() => resolver('promesa con await y timeout'),3000);
    });

    console.log(await miPromesa);
    console.log('fin funcion');
}

funcionConPromesaAwaitTimeout();





