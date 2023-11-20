document.addEventListener('DOMContentLoaded', function () {
    // Add an event listener to the form
    document.querySelector('.login-form').addEventListener('submit', function (e) {
      e.preventDefault(); // Prevent the default form submission
  
      // You can add your login logic here
      // For demonstration purposes, let's just log the entered email and password to the console
      var email = document.querySelector('input[type="text"]').value;
      var password = document.querySelector('input[type="password"]').value;
  
      console.log('Email:', email);
      console.log('Password:', password);
  
      // Here you can make an AJAX request or handle the login process as needed
      // For simplicity, we'll just show an alert
      alert('Login Successful!');
    });
  });
  