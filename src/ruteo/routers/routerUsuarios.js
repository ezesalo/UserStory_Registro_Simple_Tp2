import express from 'express'

function crearRouterUsuarios(apiUsuarios) {
    const routerUsuarios = express.Router()

    routerUsuarios.get('/', async (req, res, next) => {
        try {
            let usuarios
            if(req.query.dni){
                usuarios = await apiUsuarios.getByDni(req.query.dni)
            }else{
                usuarios = await apiUsuarios.getAll()
            }
            res.json(usuarios)
        } catch (error) {
            next(error)
        }
    })

    routerUsuarios.post('/', async (req, res, next) => {
        try {
            const usuario = await apiUsuarios.add(req.body)
            res.status(201).json(usuario)
        } catch (error) {
            next(error)
        }
    })

    routerUsuarios.use((error, req, res, next) => {
        if (error.type === 'ERROR_DNI_EN_USO') {
          res.status(400)
        } else if (error.type === 'ERROR_DATOS_INVALIDOS') {
          res.status(400)
        } else if (error.type === 'ERROR_USUARIO_NO_ENCONTRADO') {
          res.status(404)
        } else {
          res.status(500)
        }
        res.json({ message: error.message })
      })

      return routerUsuarios
}

export {crearRouterUsuarios}