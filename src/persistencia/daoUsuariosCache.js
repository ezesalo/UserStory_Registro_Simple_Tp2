

function crearDaoUsuariosCache(){
    const usuarios = []
    return{
        add: async (usuario, claveUnica) => {
        const existe = usuarios.some(u => {
            return u[claveUnica] === usuario[claveUnica]
        })
        if(existe){
            
            return {added: 0}
        }else{
            usuarios.push(usuario)
            return {added: 1}
        }
        },
        getByDni: async (dni) => {
            return usuarios.filter(u => u.dni === dni)
        },
        getAll: async () => {
            return [...usuarios]
        }
    }
}

export {crearDaoUsuariosCache}