let menu = document.querySelector("#menu-icon-js");
let menuicon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let navtc = document.querySelector("#nav-tc-js");

if (menu) {
  menu.onclick = () => {
    menuicon.classList.toggle("bx-x");
    navbar.classList.toggle("open");
    navtc.classList.toggle("nav-touch-close-open");
  };
}

if (navtc) {
  navtc.onclick = () => {
    menuicon.classList.toggle("bx-x");
    navbar.classList.remove("open");
    navtc.classList.remove("nav-touch-close-open");
    navtc.classList.remove("nav-tc-z");
    navtc.classList.remove("nav-LR-TC");
  };
}

/* Navbar scroll logic */
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  const header = document.getElementById("header");
  if (header) {
    header.classList.add("scrolled");
    if (currentScrollPos === 0) {
      header.classList.remove("scrolled");
    }
    if (navtc && navtc.classList.contains("nav-touch-close-open")) {
      return;
    }
    if (prevScrollpos > currentScrollPos) {
      header.style.top = "0";
    } else {
      header.style.top = "-100px";
    }
  }
  prevScrollpos = currentScrollPos;
};

// Contact Form Elements
const contactForm = document.getElementById("contact-form");
const contactSection = document.querySelector(".contact-section");
const formSection = document.querySelector(".form-section");
const contactSubmitAfter = document.querySelector(".contact-submit-after");
const csaOK = document.querySelector(".csa-ok");

const nameInput = document.getElementById("name");
const subjectInput = document.getElementById("subject"); // Changed from email
const messageInput = document.getElementById("message");
const errorDiv = document.querySelector(".error");
const contactButton = document.getElementById("contact-submit");
const contactLoad = document.querySelector(".contact-load");
const submitText = document.querySelector(".submit-text");

if (csaOK) {
  csaOK.onclick = () => {
    if (contactSubmitAfter) contactSubmitAfter.style.display = "none";
    if (formSection) formSection.style.display = "block";
    if (contactButton) contactButton.classList.remove("loading");
    if (contactLoad) contactLoad.style.display = "none";
    if (submitText) submitText.style.display = "inline-block";
  };
}

// Form Validation
function validateForm(event) {
  event.preventDefault();
  let isValid = true;
  let nameIsValid = true;
  let subjectIsValid = true;
  let messageIsValid = true;

  if (!nameInput || nameInput.value.trim() === "") {
    isValid = false;
    nameIsValid = false;
  }

  if (!subjectInput || subjectInput.value.trim() === "") {
    isValid = false;
    subjectIsValid = false;
  }

  if (!messageInput || messageInput.value.trim() === "") {
    isValid = false;
    messageIsValid = false;
  }

  if (!isValid) {
    if (errorDiv) {
      errorDiv.style.display = "block";
    }
  } else {
    if (errorDiv) errorDiv.style.display = "none";
    
    if (contactButton) contactButton.classList.add("loading");
    if (contactLoad) contactLoad.style.display = "inline-block";
    if (submitText) submitText.style.display = "none";
    
    setTimeout(function () {
      sendMail();
    }, 1000);
  }
}

if (contactForm) {
  contactForm.addEventListener("submit", validateForm);
}

// AJAX Submission to Formspree
async function sendMail() {
  const form = document.getElementById("contact-form");
  if (!form) return;
  
  const formData = new FormData(form);
  const data = {};
  formData.forEach((value, key) => (data[key] = value));

  try {
    const response = await fetch("https://formspree.io/f/xbdqdnnr", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      if (contactButton) contactButton.classList.remove("loading");
      if (contactLoad) contactLoad.style.display = "none";
      if (submitText) submitText.style.display = "inline-block";
      
      if (nameInput) nameInput.value = "";
      if (subjectInput) subjectInput.value = "";
      if (messageInput) messageInput.value = "";

      if (contactSubmitAfter) {
        contactSubmitAfter.style.display = "block";
        if (formSection) formSection.style.display = "none";
      } else {
        alert("Pesan terkirim! Terima kasih telah menghubungi saya.");
      }
    } else {
      const errorData = await response.json();
      throw new Error(errorData.error || "Gagal mengirim pesan.");
    }
  } catch (error) {
    console.error("Submission error:", error);
    alert("Maaf, terjadi kesalahan saat mengirim pesan. Silakan coba lagi nanti.");
    if (contactButton) contactButton.classList.remove("loading");
    if (contactLoad) contactLoad.style.display = "none";
    if (submitText) submitText.style.display = "inline-block";
  }
}

// Certificate Modal Functions
function openCertModal(imageSrc) {
    const modal = document.getElementById("certModal");
    const modalImg = document.getElementById("certImage");
    if (modal && modalImg) {
        modal.style.display = "flex";
        modalImg.src = imageSrc;
    }
}

function closeCertModal() {
    const modal = document.getElementById("certModal");
    if (modal) {
        modal.style.display = "none";
    }
}

window.addEventListener('click', function(event) {
    const modal = document.getElementById("certModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
