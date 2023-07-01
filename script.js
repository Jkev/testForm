const rfcInput = document.getElementById('rfc');
    rfcInput.addEventListener('input', function (event) {
      const rfc = event.target.value.toUpperCase();
      const rfcRegex = /^[A-Z]{4}[0-9]{6}[A-Z0-9]{3}$/;
      if (!rfcRegex.test(rfc)) {
        rfcInput.setCustomValidity('El RFC debe tener el formato AAAA999999AAA');
      } else {
        rfcInput.setCustomValidity('');
      }
    });

    // Validación del formulario
    const formulario = document.getElementById('formulario-cliente');
    const feedbackIcons = document.querySelectorAll('.feedback-icon');
    formulario.addEventListener('submit', function (event) {
      event.preventDefault();
      if (formulario.checkValidity()) {
        enviarFormulario();
      } else {
        formulario.classList.add('was-validated');
      }
      setFeedbackIcons();
    });

    function setFeedbackIcons() {
      feedbackIcons.forEach(function (icon) {
        const input = icon.parentElement.querySelector('input, select');
        if (input && !input.validity.valid) {
          icon.classList.add('invalid');
        } else {
          icon.classList.remove('invalid');
        }
      });
    }

    function enviarFormulario() {
      const form = document.getElementById('formulario');
const enviarBtn = document.getElementById('enviar');

// Manejar el evento de clic del botón de enviar
enviarBtn.addEventListener('click', (event) => {
  event.preventDefault(); // Evitar el comportamiento predeterminado de enviar el formulario

  // Obtener los valores de los campos del formulario
  const razonSocial = document.getElementById('razonSocial').value;
  const rfc = document.getElementById('rfc').value;
  const direccionFiscal = document.getElementById('direccionFiscal').value;
  const codigoPostal = document.getElementById('codigoPostal').value;
  const email = document.getElementById('email').value;

  // Crear un objeto con los datos del formulario
  const formData = {
    razonSocial,
    rfc,
    direccionFiscal,
    codigoPostal,
    email
  };

  // Enviar los datos del formulario al servidor
  fetch('https://server-digy-iqywzylyj-jkev.vercel.app/', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(formData)
})
  .then(response => response.json())
  .then(data => {
    console.log(data.message); // Mostrar mensaje de éxito o error en la consola
    form.reset(); // Limpiar el formulario después de enviarlo
  })
  .catch(error => {
    console.error('Error:', error); // Mostrar cualquier error en la consola
  });
});
    }

    function toggleSuccessView() {
      const formView = document.getElementById('formulario-cliente');
      const successView = document.getElementById('success-view');
      formView.style.display = 'none';
      successView.style.display = 'block';
    }

    const backToFormButton = document.getElementById('back-to-form');
    backToFormButton.addEventListener('click', function () {
      const formView = document.getElementById('formulario-cliente');
      const successView = document.getElementById('success-view');
      formView.style.display = 'block';
      successView.style.display = 'none';
    });