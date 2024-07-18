document.getElementById('leadForm').addEventListener('submit', function(event) {
  event.preventDefault();

  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;

  // Enviar evento a Google Tag Manager
  dataLayer.push({
      'event': 'leadFormSubmission',
      'leadName': name,
      'leadEmail': email
  });

      // Enviar datos de conversiones mejoradas
      dataLayer.push({
        'event': 'conversion',
        'user_data': {
            'email': email,
            'name': name
        }
    });

  alert('Form submitted successfully!');

  window.location.href = "page2.html";
});