document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("WD1Z8D_IzKeCpoRnf"); // your public key

  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      emailjs.sendForm(
        'service_hbdegri',      // Your EmailJS Service ID
        'template_d3nav2n',     // Your EmailJS Template ID
        form,
        'WD1Z8D_IzKeCpoRnf'     // Your EmailJS Public Key
      )
      .then(function() {
        alert('Message sent successfully!');
        form.reset();
      }, function(error) {
        alert('Failed to send message. Please try again later.');
        console.error(error);
      });
    });
  }
});

