import {crearErrorDatosInvalidos} from "../errores/errorDatosInvalidos.js"

function crearUsuario(datos){
    const usuario = {}
    
    if(!datos.dni){
        throw crearErrorDatosInvalidos('Falta el Dni')
    }else{
        usuario.dni = datos.dni
    }

    if(!datos.nombre){
        throw crearErrorDatosInvalidos('Falta el nombre')
    }else{
        usuario.nombre = datos.nombre
    }

    if (!datos.apellido) {
        throw crearErrorDatosInvalidos('Falta el apellido')
    } else {
        usuario.apellido = datos.apellido
    }

    if(!datos.email){
        throw crearErrorDatosInvalidos('Falta el email')
    }else{
        usuario.email = datos.email
    }

    if(!datos.password){
        throw crearErrorDatosInvalidos('Falta la contraseña')
    }else{
        usuario.password = datos.password
    }

    return usuario
}

export {crearUsuario}