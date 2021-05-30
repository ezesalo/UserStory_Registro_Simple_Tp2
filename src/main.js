import {crearCURegistro} from "./negocio/crearRegistro.js"
import {crearDaoUsuariosCache} from "./persistencia/daoUsuariosCache.js"
import {crearEnviadorDeMails} from "./negocio/crearEnviadorDeMails.js"

async function main(){

    const credenciales = {user: 'clubortemail@gmail.com', pass:'wmhxyrhimevxswoz'}
    const cuentaClubMailer = crearEnviadorDeMails(credenciales.user, credenciales.pass)
    const daoUsuarios = crearDaoUsuariosCache()
    const CURegistro = crearCURegistro(daoUsuarios, cuentaClubMailer)
    
     const socio1 = {
        nombre: 'eze1',
        apellido: 'salo',
        email: 'clubortemail@gmail.com',
        dni: '567',
        password: 'eze1'
      }

      const socio2 = {
        nombre: 'eze2',
        apellido: 'salo',
        email: 'clubortemail@gmail.com',
        dni: '1010',
        password: 'eze2'
      }
    
      const socio3 = {
        nombre: 'eze3',
        apellido: 'salo',
        email: 'clubortemail@gmail.com',
        dni: '1010',
        password: 'eze3'
      }

    try {
     await CURegistro.ejecutar(socio1)
     await CURegistro.ejecutar(socio2)
     // forzar error
     await CURegistro.ejecutar(socio3)     

    } catch (error) {
        console.log(`Error en registro ${error}`)

    } 

}

main()