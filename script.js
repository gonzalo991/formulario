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

  alert('Form submitted successfully!');
});