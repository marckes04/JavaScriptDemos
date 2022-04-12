class Persona{

    static contadorPersonas = 0;

    constructor(nombre,apellido,edad)
    {
        this._idPersona = ++Persona.contadorPersonas;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }

    get idPersona()
    {
        return this._idPersona;
    }

    get nombre()
    {
        return this._nombre;
    }

   set nombre(nombre)
   {
        this._nombre = nombre;    
   }

   get apellido()
    {
        return this._apellido;
    }

    set apellido(apellido)
    {
        this._apellido = apellido;
    }

    get edad()
    {
        return this._edad;
    }

    set edad(edad)
    {
        this._edad = edad;
    }

    toString()
    {
        return `${this.idPersona} ${this._nombre} ${this._apellido} ${this._edad}` 
    }
}

class Empleado extends Persona{
    static contadorEmpleados = 0;

    constructor(nombre, apellido, edad, sueldo){
        super(nombre, apellido, edad);
        this._idEmpleado = ++ Empleado.contadorEmpleados;
        this._sueldo = sueldo;
    }

    get idEmpleado(){
        return this._idEmpleado;
    }

    get sueldo(){
        return this._sueldo;
    }  
    
    set sueldo(sueldo){
        this._sueldo = sueldo;
    }

    toString(){
        return `${super.toString()} ${this._idEmpleado} ${this._sueldo}`;
    }
}
class Cliente extends Persona{
    static contadorClientes = 0;

    constructor(nombre, apellido, edad, fechaRegistro){
        super(nombre, apellido, edad);
        this._idCliente = ++Cliente.contadorClientes;
        this._fechaRegistro = fechaRegistro;
    }

    get idCliente(){
        return this._idCliente;
    }

    get fechaRegistro(){
        return this._fechaRegistro;
    }

    set fechaRegistro(fechaRegistro){
        this._fechaRegistro = fechaRegistro;
    }

    toString(){
        return `${super.toString()} ${this._idCliente} ${this._fechaRegistro}`;
    }
}

// Prueba Clase Persona

let persona1 = new Persona('Juan','Perez',28);
console.log(persona1.toString());

let persona2 = new Persona('Marco','Suarez',32);
console.log(persona2.toString());

let Empleado1 = new Empleado('Karla','Gomez',25,5000);
console.log(Empleado1.toString())

let Empleado2 = new Empleado('Sergio','Jimenez',34,5300);
console.log(Empleado2.toString())

let Cliente1 = new Cliente('Miguel','Cervantes',30,new Date());
console.log(Cliente1.toString())

let Cliente2 = new Cliente('Maria','Lara',28,new Date());
console.log(Cliente2.toString())