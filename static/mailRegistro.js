function generarCuerpoMailRegistro(datos){
    return `<h1> Hola ${datos.nombre}, bienvenido a Ort Club!</h1>
    <p>La registracion ha sido completada de forma exitosa. Ya puedes volver a la página y gestionar tus reservas.</p>`
                     
    }

const asuntoMailRegistro = "Confirmación de reserva"

 export {generarCuerpoMailRegistro, asuntoMailRegistro}