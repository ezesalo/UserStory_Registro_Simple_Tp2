import {usuario} from "../modelos/usuario.js"
import {crearErrorDniEnUso} from "../errores/errorDniEnUso.js"



function crearApiUsuarios({daoUsuarios}){
    return {
        add: async (datoUsuario) => {
            const usuarioVariable = usuario(datoUsuario)
            const { added } = await daoUsuarios.add(usuarioVariable, 'dni')
            if (!added) {
                throw crearErrorDniEnUso('ya existe un estudiante con este dni')
            }
            return usuarioVariable
        },
        getAll: async () => {
            return await daoUsuarios.getAll()
    },
        getByDni: async (datoDni) => {
            return await daoUsuarios.getByDni(datoDni)
        }
}}

export {crearApiUsuarios}