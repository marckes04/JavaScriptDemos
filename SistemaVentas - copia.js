class Producto{

    static ContadorProductos = 0;


    constructor (nombre,precio)
    {
        this._idProducto = ++ Producto.ContadorProductos;
        this._nombre = nombre;
        this._precio = precio;
    }

    get idProducto()
    {
        return this._idProducto;
    }

    get nombre()
    {
        return this._nombre;
    }

    set nombre(nombre)
    {
        this._nombre = nombre;
    }

    get precio()
    {
        return this._precio;
    }

    set precio(precio)
    {
        return this._precio = precio;
    }

    toString()
    {
        return `idProducto: ${this._idProducto}, nombre: ${this._nombre}, precio: ${this._precio}`;
    }

}

class Orden{
    static contadorOrdenes = 0;

    static get MAX_PRODUCTOS ()
    {
        return 5;
    }

    constructor()
    {
        this._idOrden = ++ Orden.contadorOrdenes
        this._productos = [];
        //this._contadorProductosAgregados = 0;
    }

    getidOrden()
    {
        return this._idOrden;
    }

    agregarProducto(producto)
    {
        if(this._productos.length < Orden.MAX_PRODUCTOS)
        {
            this._productos.push(producto);
            //this._productos[this._contadorProductosAgregados++] = producto;
        }

        else {
            console.log('No se pueden agregar mas productos');
        }
    }

    calcularTotal()
    {
        let TotalVenta = 0;
        for (let producto of this._productos){
            TotalVenta += producto.precio;
        }
        return TotalVenta;
    }
    mostrarOrden()
    {
        let productosOrden = '';
        for(let producto of this._productos){
            productosOrden += '\n{' + producto + '}' ;
        }

        console.log(`Orden: ${this._idOrden} Total: ${this.calcularTotal}, productos: ${productosOrden}`);
    }
}




let producto1 = new Producto('Pantalon',200);
let producto2 = new Producto('camisa',500);

console.log(producto1.toString());
console.log(producto2.toString());


let orden1 = new Orden('')
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.mostrarOrden();

let orden2 = new Orden();
orden2.agregarProducto();

let producto3 = new Producto('Cinturon',50) 
orden2.agregarProducto(producto3);
orden2.agregarProducto(producto1);
orden2.agregarProducto(producto2);
orden2.agregarProducto(producto1);
orden2.agregarProducto(producto2);
orden2.agregarProducto(producto1);
orden2.agregarProducto(producto2);
orden2.mostrarOrden();


