import usuario from "./modelos/usuario.js"


const asuntoMailRegistro = "Confirmación de reserva"


function crearCURegistro(daoUsuarios, mailer){
    return{
        ejecutar: (datos) => {
            const registro = usuario(datos)
            daoUsuarios.guardar(registro)
            mailer.enviarConHtml("remitente", datos.emailUsuario, asuntoMailRegistro, crearMailRegistro(datos))
        }
    } 
}

function crearMailRegistro(datos){
    `<h1>Hola ${datos.nombre}, bienvenido a Ort Club!</h1>
    
    <p>La registracion ha sido completada de forma exitosa. Ya puede volver a la página y empezar con sus reservas.</p>`
}

export {crearCURegistro}