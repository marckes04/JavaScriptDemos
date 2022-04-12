class DispositivoEntrada
{

constructor(tipoEntrada, marca)
{
    this._tipoEntrada = tipoEntrada;
    this._marca = marca;
}

get tipoEntrada()
{
return this._tipoEntrada;
}

set tipoEntrada(tipoEntrada)

{
this._tipoEntrada = tipoEntrada;
}

get marca()
{
    return this._marca;
}

set marca (marca)
{
    return this._marca = marca;
}

}

class Raton extends DispositivoEntrada
{
    static contadorRatones = 0;

    constructor (tipoEntrada,marca){
    super(tipoEntrada,marca);
    this._idRaton = ++ Raton.contadorRatones;
    }

    get idRaton()
    {
        return this._idRaton;
    }

    toString()
    {
        return `Raton: [idRaton: ${this._idRaton}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}] `
    }
}

class Teclado extends DispositivoEntrada{

    static contadorTeclado = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada,marca);
        this._idTeclado = ++Teclado.contadorTeclado;
    }

    get idTeclado()
    {
        return this._idTeclado;
    }

    toString()
    {
        return `Teclado: [idTeclado: ${this._idTeclado}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}]`
    }
}

class Monitor
{
static contadorMonitores = 0;

constructor(marca,tamaño)
{
    this._idMonitor = ++Monitor.contadorMonitores;
    this._marca = marca;
    this._tamaño = tamaño;
}

get idMonitor()
{
    return this._idMonitor;
}

toString()
{
    return `Monitor: [idMonitor: ${this._idMonitor}, marca: ${this._marca}, tamaño: ${this._tamaño}]`;
}

}

class Computadora
{
static contadorComputadoras = 0;

constructor(nombre, monitor, raton, teclado)
{
    this._idComputadora = ++Computadora.contadorComputadoras;
    this._nombre = nombre;
    this._monitor = monitor;
    this._raton = raton;
    this._teclado = teclado;
}
toString()
{
    return `Computadora ${this._idComputadora}: ${this._nombre} \n ${this._monitor} \n ${this._raton} \n ${this._teclado}`
}
}

class Orden{
    static contadorOrdenes = 0;

    constructor()
    {
        this._idOrden = ++Orden.contadorOrdenes;
        this._idComputadoras = [];
    }

    get _idOrden()
    {
        return this._idOrden;
    }

    agregarcomputadora(Computadora)
    {
        this._computadoras.push(Computadora);
    }

    mostrarOrden()
    {
        let computudorasOrden = '';
        for(let computadora of this._computadoras){
            computadorasOrden += `\n ${computadora}`
        }

        console.log(`Orden: ${this._idOrden}, Computadoras: ${computudorasOrden} `)
    }


}

let raton1 = new Raton('USB','HP');
console.log(raton1.toString());

let raton2 = new Raton('Bluetooth', 'Asus')
console.log(raton2.toString())

let teclado1 = new Teclado('Bluetooth', 'HP');
let teclado2 = new Teclado('HDMI', 'ACER')

console.log(teclado1.toString());
console.log(teclado2.toString());

let monitor1 = new  Monitor('HP',15);
let monitor2 = new  Monitor('DELL',45);

console.log(monitor1.toString());
console.log(monitor2.toString());

let Computadora1 = new Computadora ('HP', monitor1, raton1, teclado1);
console.log(Computadora1.toString());

let Computadora2 = new Computadora ('Asus', monitor2, raton2, teclado2);
console.log(Computadora2.toString());

let Orden1 = new Orden();
Orden1.agregarcomputadora(computadora1);
Orden1.agregarcomputadora(Computadora2);
Orden1.agregarcomputadora(Computadora2);
Orden1.mostrarOrden()