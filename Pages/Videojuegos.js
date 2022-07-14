const URL = `/Pages/Juegos.json`
const DomContenido = document.getElementById("Contenido")

const CreacionDeHTML = (Productos)=>{
    const {Titulo, Precio, Descripcion, Imagen} = Productos
    return `<div class="card mb-1 mt-3 text-light bg-dark" style="border-radius: 10px;">
    <div class="row g-0">
        <div class="col-md-4 mt-5 d-flex justify-content-center">
            <img src="${Imagen}" class="img-fluid rounded-start ">
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">${Titulo}</h5>
                <h6>${Precio}</h6>
                <p class="card-text">${Descripcion}</p>
                <p class="card-text"><small class="text-muted">En Stock</small></p>
            </div>
        </div>
        <div class="d-grid gap-2 d-md-flex justify-content-end pb-3 px-3">
            <a href="./Compra.html"><button class="btn btn-primary me-md-2" type="button">Comprar</button></a>
        </div>
    </div>
</div>`
}

const ProductosJSON = (URL)=> {
    let ProductoEnPantalla = ""
    fetch(URL)
        .then((Response) => Response.json())
        .then((data)=>  {
                for(Productos of data){
                    ProductoEnPantalla += CreacionDeHTML(Productos)
                    
                }
            DomContenido.innerHTML = ProductoEnPantalla
        })
        
}

ProductosJSON(URL)

/* Constructor */
/* 
class Videojuegos{
    constructor(Nombre, Precio, Stock){
        this.Nombre = Nombre
        this.Precio = Precio
        this.Stock = Stock
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

const Juego1 = new Videojuegos ("Call Of Duty", 50000, 12);
const Juego2 = new Videojuegos ("Elden Ring", 50000, 60);
const Juego3 = new Videojuegos ("Minecraft", 50000, 57);

const Explorador = [Juego1, Juego2, Juego3]
console.log(Explorador) */