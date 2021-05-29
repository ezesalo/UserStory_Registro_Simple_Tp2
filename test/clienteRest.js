import axios from 'axios'


function crearClienteRest(serverData) {

    const { url } = serverData

    return {
        getAll: async () => {
            return await sendRequest({ url })
        },
        getByDni: async (unDni) => {
            return await sendRequest({ url, params: { dni: unDni } })
        },
        post: async (usuario) => {
            return await sendRequest({ url, method: 'post', data: usuario })
        }
    }
}

async function sendRequest(req) {
    try {
        return await axios(req)
    } catch (error) {
        if (error.response) {
            const NE = new Error(`error ${error.response.status} enviado desde el servidor: ${error.response.data.message}`)
            NE.status = error.response.status
            NE.message = error.response.data.message
            throw NE
        } else {
            throw new Error('error al enviar la peticion')
        }
    }
}
export { crearClienteRest }