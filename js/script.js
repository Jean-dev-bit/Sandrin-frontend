document.addEventListener("DOMContentLoaded", function () {
  const navButtons = document.querySelectorAll(".nav-button");
  const contentSections = document.querySelectorAll(".content-section");

  navButtons.forEach((button) => {
    button.addEventListener("click", () => {
      navButtons.forEach((btn) => btn.classList.remove("active"));
      contentSections.forEach((section) => section.classList.remove("active"));

      button.classList.add("active");

      const sectionId = button.dataset.section;
      document.getElementById(sectionId).classList.add("active");
    });
  });
});

function login() {
  window.location.href = "login-connect.html";
}
function newpage() {
  window.location.href = "newpage.html";
}
function signup() {
  window.location.href = "signup.html";
}

let currentStep = 0;
const steps = document.querySelectorAll(".step");
const progressBar = document.querySelector(".progress-bar");

function updateProgressBar() {
  let progress = ((currentStep + 1) / steps.length) * 100;
  progressBar.style.width = progress + "%";
}

function nextStep() {
  if (validateStep()) {
    steps[currentStep].classList.remove("active");
    currentStep++;
    if (currentStep < steps.length) {
      steps[currentStep].classList.add("active");
      updateProgressBar();
    }
  }
}

function prevStep() {
  if (currentStep > 0) {
    steps[currentStep].classList.remove("active");
    currentStep--;
    steps[currentStep].classList.add("active");
    updateProgressBar();
  }
}

function validateStep() {
  let inputs = steps[currentStep].querySelectorAll("input");
  for (let input of inputs) {
    if (!input.value.trim()) {
      alert("Veuillez remplir tous les champs !");
      return false;
    }
  }

  if (currentStep === 1) {
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm-password").value;
    let regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
    if (!regex.test(password)) {
      alert(
        "Le mot de passe doit contenir au moins 8 caractères, une majuscule, un chiffre et un caractère spécial."
      );
      return false;
    }
    if (password !== confirmPassword) {
      alert("Les mots de passe ne correspondent pas.");
      return false;
    }
  }
  return true;
}

document.querySelector(".finish-btn").addEventListener("click", function () {
  const heartsContainer = document.querySelector(".hearts-container");
  for (let i = 0; i < 20; i++) {
    let heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 2 + "s";
    heartsContainer.appendChild(heart);
  }
});

function index() {
  window.location.href = "dashboard.html";
}

function profile() {
  window.location.href = "profile-information.html";
}
function steep() {
  window.location.href = "steeps.html";
}

document
  .querySelectorAll(".action-button, .create-page-button")
  .forEach((button) => {
    button.addEventListener("click", () => {
      const buttonType = button.classList.contains("scanner")
        ? "Scanner"
        : button.classList.contains("create")
        ? "Créer page"
        : "Créer page (bas)";
      console.log("Button clicked:", buttonType);
    });
  });

document.querySelectorAll(".action-button").forEach((button) => {
  button.addEventListener("mouseover", () => {
    button.style.transform = "scale(1.02)";
  });

  button.addEventListener("mouseout", () => {
    button.style.transform = "scale(1)";
  });
});

document.getElementById("partager").addEventListener("click", function () {
  openModal("share-modal");
});

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.classList.remove("hidden");
  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      closeModal(modalId);
    }
  });
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.classList.add("hidden");
}

function shareOnFacebook() {
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    currentUrl
  )}`;
  window.open(facebookUrl, "_blank");
}

function shareOnWhatsApp() {
  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
    currentUrl
  )}`;
  window.open(whatsappUrl, "_blank");
}

function shareOnTwitter() {
  const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
    currentUrl
  )}&text=Découvrez ce site incroyable!`;
  window.open(twitterUrl, "_blank");
}

function copyLink(element) {
  const currentUrl = window.location.href;
  navigator.clipboard
    .writeText(currentUrl)
    .then(() => {
      const icon = element.querySelector("i");

      element.innerHTML = '<i class="bx bx-check"></i>';

      setTimeout(() => {
        element.innerHTML = '<i class="bx bx-clipboard"></i>';
      }, 2000);
    })
    .catch((err) => {
      console.error("Erreur lors de la copie du lien :", err);
    });
}

document.addEventListener("DOMContentLoaded", function () {
  const statusButtons = document.querySelectorAll(".status");
  const createButton = document.querySelector(".create-btn");

  statusButtons.forEach((button) => {
    button.addEventListener("click", function () {
      statusButtons.forEach((btn) => btn.classList.remove("active"));

      this.classList.add("active");

      createButton.classList.add("active");
      createButton.removeAttribute("disabled");
    });
  });
});


function creerPage() {
  window.location.href = "page-create.html";
}