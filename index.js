function TomarDatos(){
    let Nombres = document.getElementById("Nombre").value;
    let Apellidos = document.getElementById("Apellido").value;
    let Emails = document.getElementById("Email").value;
    let Telefonos = document.getElementById("Telefono").value;
    let Usuario = document.getElementById("Usuario").value;
    let Contraseña = document.getElementById("Contraseña").value;
    
    
    function NV(Apellido, Nombre, Email, Telefono, Usuario, Contraseña){
        this.Apellido=Apellido
        this.Nombre=Nombre
        this.Email=Email
        this.Telefono=Telefono
        this.Usuario=Usuario
        this.Contraseña=Contraseña
    }
    let UsuarioNV= new NV(Apellidos, Nombres, Emails, Telefonos, Usuario, Contraseña,);
    let Permiso = confirm("Deseas guardar tus datos para facilitar la navegacion?")
    if(Permiso==true){
    let CargarDatos = JSON.stringify(UsuarioNV)
    localStorage.setItem("NuevoUsuario", CargarDatos)}
    else{}
}

function DatosRecuperados(){
    let Nombres = document.getElementById("Nombre");
    let Apellidos = document.getElementById("Apellido");
    let Emails = document.getElementById("Email");
    let Telefonos = document.getElementById("Telefono");
    let Usuarios = document.getElementById("Usuario");
    
    const UsuarioRecuperar = JSON.parse(localStorage.getItem("NuevoUsuario"))
    Nombres.value = UsuarioRecuperar.Nombre 
    Apellidos.value = UsuarioRecuperar.Apellido
    Emails.value = UsuarioRecuperar.Email
    Telefonos.value = UsuarioRecuperar.Telefono
    Usuarios.value = UsuarioRecuperar.Usuario
}

DatosRecuperados()

