import {usuario} from "./modelos/usuario.js"
import {crearErrorDniEnUso} from "./errores/errorDniEnUso.js"

function crearCURegistro(daoUsuarios, mailer){
    return{
        ejecutar: async (datos) => {
            const registroUsuario = usuario(datos)
            const {added} = await daoUsuarios.add(registroUsuario, 'dni') 
            if(!added){
                 throw crearErrorDniEnUso(`Ya existe un usuario con el dni ${registroUsuario.dni}`)
            }
          await mailer.enviarConHtml("remitente", datos.email, asuntoMailRegistro, crearMailRegistro(datos))
        }
    } 
}

const asuntoMailRegistro = "Confirmación de reserva"

function crearMailRegistro(datos){
   return `<h1>Hola ${datos.nombre}, bienvenido a Ort Club!</h1>
    
    <p>La registracion ha sido completada de forma exitosa. Ya puedes volver a la página y gestionar tus reservas.</p>`
}

export {crearCURegistro}