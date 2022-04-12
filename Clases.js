class Persona {

constructor(nombre,apellido){
    this.nombre = nombre;
    this.apellido = apellido;

}
}

let persona1 = new Persona('Juan', 'Rojas');
let persona2 = new Persona('Ariel','Dominguez');

console.log(persona1);
console.log(persona2);

// Get y Set
class Gente {

    constructor(nombre,apellido)
    {
        this._nombre = nombre;
        this._apellido = apellido; 
    }

    get nombre()
    {
        return this._nombre;
    }

    set nombre(nombre)
    {
        this._nombre = nombre;
    }
}
    
    let individuo1 = new Gente('Juan', 'Rojas');
    individuo1.nombre = 'Juan Carlos'; // Set Nombre ('Juan Carlos')
    console.log(individuo1.nombre);

    // Herencia
    class GentePadre {

        static contadorPersonas = 0; // Atributo de nuestra clase

       // email = 'Valor default email'; // Atributo de nuestros objetos 

       static get MAX_OBJ() // Constante Estatica
        {
        return 5;
        }


        constructor(nombre,apellido)
        {
            this._nombre = nombre;
            this._apellido = apellido; 
            
           // console.log('Se incrementa contador' + GentePadre.contadorObjetosPersona);

    if(GentePadre.contadorPersonas < GentePadre.MAX_OBJ)
        {
            this.idPersona = ++GentePadre.contadorPersonas;
        }
    else
    {
        console.log('Se ha alcanzado el maximo de objetos permitidos');
        }
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
            this.apellido = apellido;
        }

        //Herencia de Metodo

        nombreCompleto()
            {
                return this.idPersona +' '+ this._nombre + ' ' + this._apellido;

            }

            //  Se aplica polimorfismo
            toString()
            {
                return this.nombreCompleto;
            }


            static saludar()
            {
                console.log('Saludos desde metodo static')
            }

            static saludar2(persona)
            {
                console.log(persona.nombre);
            }

    }

    class Empleado extends GentePadre
    {
        constructor(nombre,apellido,departamento)
        {
            super(nombre,apellido);
            this._departamento = departamento;
        }

        get departamento()
        {
            return this._departamento;
        }

        set departamento(departamento)
        {
            this._departamento = departamento;
        }

        // Sobreescritura
        nombreCompleto(){
            return super.nombreCompleto() + ',' + this.departamento
        }

    }
        
        console.log(persona1);

        let Empleado1 = new Empleado('Maria','Antonella','Medica');

        console.log(Empleado1);
        console.log(Empleado1.nombre);
        console.log(Empleado1.nombreCompleto());
        console.log(Empleado1.toString());

        GentePadre.saludar(); // Metodo estatico
        GentePadre.saludar2(persona1);//Metodo estatico
       // console.log(GentePadre.contadorObjetosPersona);
       // console.log(Empleado.contadorObjetosPersona);
    
        //console.log(persona1.email);

        console.log(persona1.toString());
        console.log(GentePadre.MAX_OBJ)

        let person3 = new GentePadre('Mariano','Lara');
        let person4 = new GentePadre('Juan','Toledo');
