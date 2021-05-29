import {usuario} from "../modelos/usuario.js"
import {crearErrorDniEnUso} from "../errores/errorDniEnUso.js"
import {crearErrorUsuarioNoEncontrado} from "../errores/errorUsuarioNoEncontrado.js"



function crearApiUsuarios({daoUsuarios}){
    return {
        add: async (datoUsuario) => {
            const usuarioVariable = usuario(datoUsuario)
            const { added } = await daoUsuarios.add(usuarioVariable, 'dni')
            if (!added) {
                throw crearErrorDniEnUso(`Error. Ya existe un usuario con el dni ${usuarioVariable.dni}`)
            }
            return usuarioVariable
        },
        getAll: async () => {
            return await daoUsuarios.getAll()
    },
        getByDni: async (datoDni) => {
            if(!existe){
                throw crearErrorUsuarioNoEncontrado(`Error. Usuario no encontrado con el dni ${datoDni}`)
            }
            return await daoUsuarios.getByDni(datoDni)
        }
}}

export {crearApiUsuarios}