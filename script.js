function open(){
    resumeButton.addEventListener('RESUME', function() {
        window.open(resumePath, '_blank');
      });
      var container = document.getElementById('resumeButtonContainer');
      container.appendChild(resumeButton);
    };
    function send(event) {
      event.preventDefault();
      var name = document.getElementById('name').value.trim();
      var email = document.getElementById('email').value.trim();
      var message = document.getElementById('message').value.trim();
  
      // Basic validation
      if (name === '' || email === '' || message === '') {
          alert('Please fill in all fields.');
          return;
      }
      if (!isValidEmail(email)) {
          alert('Please enter a valid email address.');
          return;
      }
      alert('Form submitted successfully!');
  }
  function isValidEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
    
