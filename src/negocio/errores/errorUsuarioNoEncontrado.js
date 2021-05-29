function crearErrorUsuarioNoEncontrado() {
    const error = new Error('no existe usuario con ese id')
    error.type = 'ERROR_USUARIO_NO_ENCONTRADO'
    return error
  }
  
  export { crearErrorUsuarioNoEncontrado }