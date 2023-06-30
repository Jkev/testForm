const nodemailer = require('nodemailer');

// Configuración del transporte de correo electrónico
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'endlezzjkev@gmail.com',
    pass: 'Mark0909online'
  }
});

function enviarCorreo(datos) {
  // Construir el mensaje del correo electrónico
  const mensaje = `
    Razón Social: ${datos['razon-social']}
    RFC: ${datos['rfc']}
    Nombre: ${datos['nombre']}
    Código Postal: ${datos['cp']}
    Régimen Fiscal: ${datos['regimen-fiscal']}
    Uso de CFDI: ${datos['uso-cfdi']}
  `;

  // Configuración del correo electrónico
  const mailOptions = {
    from: 'tu_correo@gmail.com',
    to: 'endlezzjkev@gmail.com',
    subject: `${datos['nombre']}`,
    text: mensaje
  };

  // Enviar el correo electrónico
  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log('Error al enviar el correo electrónico:', error);
    } else {
      console.log('Correo electrónico enviado:', info.response);
    }
  });
}

module.exports = enviarCorreo;
