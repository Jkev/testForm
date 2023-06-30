const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000; // Puedes cambiar el puerto si lo deseas

// Configuración del middleware para analizar el cuerpo de las solicitudes
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Configuración de las rutas


app.post('/enviar-correo', (req, res) => {
  const { razonSocial, rfc, direccionFiscal, codigoPostal, email } = req.body;

  // Configuración del transporte de correo electrónico (debes reemplazar con tus propios datos)
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'endlezzjkev@gmail.com',
      pass: 'Mark0909online'
    }
  });

  // Configuración del correo electrónico
  const mailOptions = {
    from: 'endlezzjkev@gmail.com',
    to: 'mario.digy@gmail.com',
    subject: `NUEVA FACTURA DE CLIENTE ${razonSocial}`,
    html: `
      <h2>Formulario de Cliente</h2>
      <p>Razón Social: ${razonSocial}</p>
      <p>RFC: ${rfc}</p>
      <p>Dirección Fiscal: ${direccionFiscal}</p>
      <p>Código Postal: ${codigoPostal}</p>
      <p>Email: ${email}</p>
    `
  };

  // Envío del correo electrónico
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al enviar el correo electrónico' });
    } else {
      console.log('Correo electrónico enviado:', info.response);
      res.status(200).json({ message: 'Correo electrónico enviado correctamente' });
    }
  });
});

// Inicio del servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
