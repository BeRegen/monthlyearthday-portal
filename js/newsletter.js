// Arquivo JavaScript para funcionalidade da newsletter
document.addEventListener('DOMContentLoaded', function() {
  const emailInput = document.getElementById('newsletter-email');
  const submitButton = document.getElementById('newsletter-submit');
  
  if (emailInput && submitButton) {
    submitButton.addEventListener('click', function() {
      const email = emailInput.value.trim();
      
      if (!email) {
        alert('Please enter your email address');
        return;
      }
      
      if (!isValidEmail(email)) {
        alert('Please enter a valid email address');
        return;
      }
      
      // Simular envio para API
      saveEmailToLocalStorage(email);
      
      // Feedback ao usuário
      alert('Thank you for subscribing to our newsletter!');
      emailInput.value = '';
    });
  }
  
  function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  
  function saveEmailToLocalStorage(email) {
    // Obter lista atual de emails
    let subscribers = JSON.parse(localStorage.getItem('newsletter_subscribers') || '[]');
    
    // Adicionar novo email se não existir
    if (!subscribers.includes(email)) {
      subscribers.push(email);
      localStorage.setItem('newsletter_subscribers', JSON.stringify(subscribers));
    }
  }
});
