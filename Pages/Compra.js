

function cotizar( Parametro1, Parametro2, Parametro3){
    switch(Parametro2){
        case 1:
            let Valor = ( "$ARS " + (parseInt (Parametro1 / Parametro2 * Parametro3)))
            return Valor
        case 2:
            let PrimerValor = ( "$ARS " + (parseInt (Parametro1 / Parametro2 * Parametro3 * 1.02)))
            return PrimerValor
        case 4:
            let segundoValor = ( "$ARS " + (parseInt (Parametro1 / Parametro2 * Parametro3 * 1.04)))
            return segundoValor
        case 6:
            let TercerValor = ( "$ARS " + (parseInt (Parametro1 / Parametro2 * Parametro3 * 1.06)))
            return TercerValor
        case 8:
            let CuartoValor = ( "$ARS " + (parseInt (Parametro1 / Parametro2 * Parametro3 * 1.08)))
            return CuartoValor
        case 10:
            let QuintoValor = ( "$ARS " + (parseInt (Parametro1 / Parametro2 * Parametro3 * 1.10)))
            return QuintoValor
        case 12:
            let SextoValor = ( "$ARS " + (parseInt (Parametro1 / Parametro2 * Parametro3 * 1.12)))
               return SextoValor
    }
}



function TomarDatos(){
    let Nombres = document.getElementById("Nombre").value;
    let Apellidos = document.getElementById("Apellido").value;
    let Emails = document.getElementById("Email").value;
    let Telefonos = document.getElementById("Telefono").value;
    let Paises = document.getElementById("Pais").value;
    let Provincias = document.getElementById("Provincia").value;
    let Postales = document.getElementById("Postal").value;
    let Tarjetas = document.getElementById("Tarjeta").value;
    let Codigos = document.getElementById("Codigo").value;
    let Vencimientos = document.getElementById("Vencimiento").value;
    
    function Venta(Apellido, Nombre, Email, Telefono, pais, Provincia, postal,){
        this.Apellido=Apellido
        this.Nombre=Nombre
        this.Email=Email
        this.Telefono=Telefono
        this.pais=pais
        this.Provincia=Provincia
        this.postal=postal
        this.Tarjeta= "Informacion Oculta"
        this.codigo= "Informacion Oculta"
        this.Vencimiento= "Informacion Oculta"
    }
    let Ventas= new Venta(Apellidos, Nombres, Emails, Telefonos, Paises, Provincias, Postales, Tarjetas, Codigos, Vencimientos);
    console.log(Ventas)
    let Permiso = swal.fire({
        title: "Pregunta?",
        text: "Deseas guardar los datos ingresados para facilitar tu navegacion? (Nadie podra verlos)",
        icon: "question",
        showConfirmButton: true,
        showDenyButton: true,
        confirmButtonText: "Acepto",
        denyButtonText: "No , gracias",  
    }); 
    
    if(Permiso==true){
    let CargarDatos = JSON.stringify(Ventas)
    localStorage.setItem("DatosImportantes", CargarDatos)}
    else{}
}

function DatosRecuperados(){
    let Nombres = document.getElementById("Nombre");
    let Apellidos = document.getElementById("Apellido");
    let Emails = document.getElementById("Email");
    let Telefonos = document.getElementById("Telefono");
    let Paises = document.getElementById("Pais");
    let Provincias = document.getElementById("Provincia");
    let Postales = document.getElementById("Postal");
    
    
    const DatosAProtejer = JSON.parse(localStorage.getItem("DatosImportantes"))
    Nombres.value =  DatosAProtejer.Nombre 
    Apellidos.value =  DatosAProtejer.Apellido
    Emails.value =  DatosAProtejer.Email
    Telefonos.value =  DatosAProtejer.Telefono
    Paises.value =  DatosAProtejer.pais
    Provincias.value =  DatosAProtejer.Provincia
    Postales.value =  DatosAProtejer.postal}

DatosRecuperados()

function TomarCuota(){
    const precio = 50000
    let cuotas = parseInt( document.getElementById("Selecion").value)
    const IVA = 1.21
    let ValorHTML = document.getElementById("Precio")
    ValorHTML.innerText = cotizar(precio, cuotas, IVA)
}


TomarCuota()
