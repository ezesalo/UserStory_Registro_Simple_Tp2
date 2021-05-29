import {crearServidor} from "./ruteo/servidor.js"
import {crearCURegistro} from "./negocio/crearRegistro.js"
import {crearClienteRest} from "../test/clienteRest.js"
import {crearDaoUsuariosCache} from "./persistencia/daoUsuariosCache.js"
import {crearEnviadorDeMails} from "./negocio/crearEnviadorDeMails.js"
import {crearApiUsuarios} from "./negocio/apis/apiUsuarios.js"

async function main(){

    const credenciales = {user: 'clubortemail@gmail.com', pass:'wmhxyrhimevxswoz'}
    const cuentaClubMailer = crearEnviadorDeMails(credenciales.user, credenciales.pass)
    const daoUsuarios = crearDaoUsuariosCache()
    const aplicacion = crearApiUsuarios({daoUsuarios})
    const CURegistro = crearCURegistro(daoUsuarios, cuentaClubMailer)
    const servidor = await crearServidor({aplicacion, port:8080})
    
    const cliente = crearClienteRest({
        url: `http://localhost:${servidor.port}/api/usuarios`
      })
    
     const socio = {
        nombre: 'eze',
        apellido: 'salo',
        email: 'ezesalo@gmail.com',
        dni: '567',
        password: 'eze123'
      }
      await cliente.post(socio) 
    
   
   await CURegistro.ejecutar(socio)

    const { data } = await cliente.getAll()
    console.log(data)
    servidor.close()
  
}

main()