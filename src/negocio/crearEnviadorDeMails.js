import nodemailer from 'nodemailer';

/**
 * Al trabajar con enviarConAdjunto contemplar lo siguiente:
 * 
 * html: Cuerpo del mail html.  
 * 
 * nombreDeArchivo: Nombre del archivo/imagen a adjuntar. Debe contener la extension, por ej: .img
 * 
 * url: Direccion de donde se encuentra el archivo/imagen
 * @param {string} mail - Mail desde donde queremos enviar.
 * @param {string} pass - Constraseña del mail (puede ser la contraseña para aplicaciones).
 */

function crearEnviadorDeMails(mail, pass){
  
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
          user: mail, 
          pass: pass, 
        },
      });

      return{
          
          enviarConTexto: async (from, to, subject, text) => {
            const mailOptions = {
                from: from,
                to: to,
                subject: subject,
                text: text
            }

            try {
                transporter.sendMail(mailOptions)
                console.log(`mail enviado`)
            } catch (err) {
                console.log(`el mail no pudo ser enviado: ${err}`)
            } 

          },
          enviarConHtml: async (from, to, subject, html) => {
            const mailOptions = {
                from: from,
                to: to,
                subject: subject,
                html: html
            }

            try {
                transporter.sendMail(mailOptions)
                console.log(`mail enviado`)
            } catch (err) {
                console.log(`el mail no pudo ser enviado: ${err}`)
            }
          },
          enviarConAdjunto: async (from, to, subject, html, nombreDeArchivo, url) => {
            const mailOptions = {
                from: from,
                to: to,
                subject: subject,
                html: html,
                attachments:[{
                    filename: `${nombreDeArchivo}`,
                    path: `${url}`
                }]
            }

            try {
                transporter.sendMail(mailOptions)
                console.log(`mail enviado`)
            } catch (err) {
                console.log(`el mail no pudo ser enviado: ${err}`)
            }
          }    
      }

}


export {crearEnviadorDeMails}