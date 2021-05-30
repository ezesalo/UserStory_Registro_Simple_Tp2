import {usuario} from "./modelos/usuario.js"
import { asuntoMailRegistro, generarCuerpoMailRegistro } from "../../static/mailRegistro.js"
import {crearErrorDniEnUso} from "./errores/errorDniEnUso.js"

function crearCURegistro(daoUsuarios, mailer){
    return{
        ejecutar: async (datos) => {
            const registroUsuario = usuario(datos)
            const {added} = await daoUsuarios.add(registroUsuario, 'dni') 
            if(!added){
                 throw crearErrorDniEnUso(`Ya existe un usuario con el dni ${registroUsuario.dni}`)
            }
          await mailer.enviarConHtml("remitente", datos.email, asuntoMailRegistro , generarCuerpoMailRegistro(datos))
        }
    } 
}



export {crearCURegistro}