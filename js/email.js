document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("WD1Z8D_IzKeCpoRnf"); // your public key

  const form = document.getElementById("contact-form");
  // Remove heading and subtitle when form is submitted successfully
  const contactSection = form.closest('.contact');
  const heading = contactSection.querySelector('h2');
  const subtitle = contactSection.querySelector('p');

  // Create or select a message container
  let messageDiv = document.getElementById("form-message");
  if (!messageDiv) {
    messageDiv = document.createElement("div");
    messageDiv.id = "form-message";
    messageDiv.style.marginTop = "1em";
    form.parentNode.insertBefore(messageDiv, form.nextSibling);
  }

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
        // Hide the form, heading, and subtitle, show success message
        form.style.display = "none";
        if (heading) heading.style.display = "none";
        if (subtitle) subtitle.style.display = "none";
        messageDiv.innerHTML = `
          <span style="color:#4a6d7c;">Message sent successfully!</span><br>
          <span>Thank you for reaching out!</span><br>
          <span>I will be in touch as soon as possible.</span>
        `;
      }, function(error) {
        messageDiv.textContent = "Failed to send message. Please try again later.";
        messageDiv.style.color = "#d9534f";
        console.error(error);
      });
    });
  }
});

