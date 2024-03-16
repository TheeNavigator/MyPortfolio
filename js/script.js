//UP-Arrow
document.addEventListener("DOMContentLoaded", function () {
  let scrollToTopBtn = document.getElementById("scrollToTop");

  // Show or hide the arrow based on scroll position
  window.addEventListener("scroll", function () {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      scrollToTopBtn.classList.add("active");
    } else {
      scrollToTopBtn.classList.remove("active");
    }
  });

  // Smooth scroll to the top when arrow is clicked
  scrollToTopBtn.addEventListener("click", function (e) {
    e.preventDefault();
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
  });
});

//Read-more about content
function aboutMeReadMore() {
  var hiddenParagraph = document.getElementById("additionalContent");
  var readMoreBtn = document.querySelector(".about-content .link-custom");

  if (hiddenParagraph.style.display === "none") {
    hiddenParagraph.style.display = "inline"; // or "block" depending on the desired layout
    readMoreBtn.textContent = "Read Less"; // Change button text to "Read Less"
  } else {
    hiddenParagraph.style.display = "none";
    readMoreBtn.textContent = "Read More"; // Change button text back to "Read More"
  }
}

//              EmailJs
const contactForm = document.getElementById("contact-form");
const contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();
  emailjs
    .sendForm(
      "service_spvylyt",
      "template_rkdcdik",
      "#contact-form",
      "Ym5N0kf_9PkJb2Olf"
    )
    .then(
      () => {
        //show sent message
        contactMessage.textContent = "Message sent successfully ✅";

        setTimeout(() => {
          contactMessage.textContent = "";
        }, 5000);
        contactForm.reset();
      },
      () => {
        contactMessage.textContent = "Message not sent (service error) ❌";

        setTimeout(() => {
          contactMessage.textContent = "";
        }, 5000);
        contactForm.reset();
      }
    );
};

contactForm.addEventListener("submit", sendEmail);

//active scroll
document.addEventListener("DOMContentLoaded", function () {
  var navLinks = document.querySelectorAll(".nav-link-scroll");
  var navbarToggle = document.querySelector(".navbar-toggler");
  var navbarCollapse = document.querySelector(".navbar-collapse");

  navLinks.forEach(function (navLink) {
    navLink.addEventListener("click", function (event) {
      var targetId = this.getAttribute("href").substring(1);
      var targetSection = document.getElementById(targetId);

      if (targetSection) {
        // Close the navbar on small screens
        if (window.innerWidth <= 991) {
          navbarCollapse.classList.remove("show");
          navbarToggle.setAttribute("aria-expanded", "false");
        }
      }
    });
  });

  function smoothScrollTo(targetPosition) {
    window.scrollTo({
      top: targetPosition,
      behavior: "auto", // Set to 'auto' for instant scroll without easing
    });
  }
});
