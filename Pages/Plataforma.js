class Plataformas{
    constructor(Nombre, Modelo, Precio, Stock,){
        this.Nombres = Nombre
        this.Modelos = Modelo
        this.Precios = Precio
        this.Stocks = Stock
        this.Id = Math.random()
    }
    CalcularIVA() {
        let Iva = this.Precio = this.Precio * 1.21
        console.log(Iva)
    }

    Mensaje() {
        let Iva = this.Precio = this.Precio * 1.21
        console.log("El precio final de " + this.Nombre + " es igual a " + Iva )
    }
    
}

const Plataforma1 = new Plataformas ("Play Station 4", "Slim", 50000, 25);
const Plataforma2 = new Plataformas ("Pc Gamer", "Lenovo", 50000, 15);
const Plataforma3 = new Plataformas ("X Box One", "S", 50000, 60);

const Explorador = [Plataforma1, Plataforma2, Plataforma3]
console.log(Explorador)

