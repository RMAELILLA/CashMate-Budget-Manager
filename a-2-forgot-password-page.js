document.addEventListener('DOMContentLoaded', function () {
    // Add an event listener to the form
    document.querySelector('.forgot-password').addEventListener('submit', function (e) {
      e.preventDefault(); // Prevent the default form submission
  
      // You can add your reset password logic here
      // For demonstration purposes, let's just show an alert
      alert('Password Reset Email Sent!');
    });
  });
  