const URL = `/Pages/Plataformas.json`
const DomContenido = document.getElementById("Contenido")


const CajaDeProductos = document.getElementById("Productos")
const TituloDeProducto = document.getElementById("TituloDeProducto")
const CantidadDeProducto = document.getElementById("CantidadDeProducto")
const PrecioDeProducto = document.getElementById("PrecioDeProducto")
const BotonParaAgregar = document.getElementById("NumDeId${idProducto}")
const Precios = document.getElementsByClassName("PrecioDeProducto").value
const TotalAPagar = document.getElementById("Total")
const Boton = document.getElementById(`Remover${Productos.idProducto}`)
let ArrayDePrecios = [];


const CreacionDeHTML = (Productos) => {
    const { Titulo, Precio, Descripcion, Imagen, idProducto } = Productos
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
            <button id="${idProducto}" onclick="AgregandoProducto(${idProducto})" class="btn btn-primary me-md-2" type="button">Comprar</button>
        </div>
    </div>
</div>`
}

const ProductosJSON = (URL) => {
    let ProductoEnPantalla = ""
    fetch(URL)
        .then((Response) => Response.json())
        .then((data) => {
            for (Productos of data) {
                ProductoEnPantalla += CreacionDeHTML(Productos)

            }
            DomContenido.innerHTML = ProductoEnPantalla
        })

}

ProductosJSON(URL)

const AgregandoProducto = (NumDeId) => {
    
    fetch(URL)
        .then((Response) => Response.json())
        .then((data) => {
            let Productos = data.find(Producto => {
                return Producto.idProducto == NumDeId
                
            });

            const Div = document.createElement("div");
            Div.innerHTML += `<div  class="Productos ImagenDeProducto"><img class="TamañoDeImagen" src="${Productos.Imagen}"></div>
                                    <div  class="Productos TituloDeProducto"><Strong>${Productos.Titulo}</Strong></div>
                                    <div  class="Productos CantidadDeProducto"><p>1</p></div>
                                    <div  class="Productos PrecioDeProducto" value="${Productos.Precio}"><Strong>$${Productos.Precio}</Strong></div>
                                    <div class="BotonDeRemover Productos"<button id="Remover${Productos.idProducto}" oneclick="RemoverObjeto()" type="button"><img class="ImagenDeRemover" src="/asetss/trash3.svg" alt=""></button></div>`
            CajaDeProductos.appendChild(Div);
            ArrayDePrecios.push(Productos.Precio);
            let Sumador = 0;
            for(let i =0; i < ArrayDePrecios.length; i++){
                Sumador += ArrayDePrecios[i]
            }
            TotalAPagar.innerHTML = `<p id="AdornadoDelTotal"><Strong>Total: $${Sumador}</Strong></p></div>`
            /* RemoverObjeto() */
        })
        const RemoverObjeto = ()=>{
            CajaDeProductos.removeChild(div);
        }/* El boton para eliminar tiene una falla */
}

            

