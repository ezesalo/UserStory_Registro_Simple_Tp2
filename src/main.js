// import {crearServidor} from "./ruteo/servidor.js"
import {crearCURegistro} from "./negocio/crearRegistro.js"
// import {crearClienteRest} from "../test/clienteRest.js"
import {crearDaoUsuariosCache} from "./persistencia/daoUsuariosCache.js"
import {crearEnviadorDeMails} from "./negocio/crearEnviadorDeMails.js"
import {crearApiUsuarios} from "./negocio/apis/apiUsuarios.js"

async function main(){

    const credenciales = {user: 'clubortemail@gmail.com', pass:'wmhxyrhimevxswoz'}
    const cuentaClubMailer = crearEnviadorDeMails(credenciales.user, credenciales.pass)
    const daoUsuarios = crearDaoUsuariosCache()
  //  const aplicacion = crearApiUsuarios({daoUsuarios})
    const CURegistro = crearCURegistro(daoUsuarios, cuentaClubMailer)
 //   const servidor = await crearServidor({aplicacion, port:8080})
    
    //ClienteRest no es necesario, solo para ver la BD
    // const cliente = crearClienteRest({
    //     url: `http://localhost:${servidor.port}/api/usuarios`
    //   })
    
     const socio = {
        nombre: 'eze1',
        apellido: 'salo',
        email: 'ezesalo@gmail.com',
        dni: '567',
        password: 'eze123'
      }

      const socio2 = {
        nombre: 'eze2',
        apellido: 'salo',
        email: 'ezesalo@gmail.com',
        dni: '1010',
        password: 'eze1010'
      }
    
    try {
        await CURegistro.ejecutar(socio2)
     await CURegistro.ejecutar(socio2)     
    // cliente no es necesario
    //    const { data } = await cliente.getAll()
    //    console.log(data)
    //    servidor.close()
    } catch (error) {
        console.log(`Error en registro ${error}`)
    //    servidor.close()
    } 
   
  
}

main()