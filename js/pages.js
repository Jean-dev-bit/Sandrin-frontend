document.querySelectorAll(".tab-btn").forEach((button) => {
  button.addEventListener("click", () => {
    document
      .querySelectorAll(".tab-btn")
      .forEach((btn) => btn.classList.remove("active"));
    document
      .querySelectorAll(".content-section")
      .forEach((section) => section.classList.remove("active"));

    button.classList.add("active");
    const tabId = button.getAttribute("data-tab");
    document.getElementById(tabId).classList.add("active");
  });
});

const linkInput = document.getElementById("linkInput");
const addLinkBtn = document.getElementById("addLink");
const linksList = document.getElementById("linksList");

addLinkBtn.addEventListener("click", () => {
  const link = linkInput.value.trim();
  if (link) {
    const linkItem = document.createElement("div");
    linkItem.className = "link-item";
    linkItem.innerHTML = `
            <span>${link}</span>
            <button class="delete-link" onclick="this.parentElement.remove()">×</button>
        `;
    linksList.appendChild(linkItem);
    linkInput.value = "";
  }
});

const bioModal = document.getElementById("bioModal");
const generateBioBtn = document.getElementById("generateBio");
const closeModal = document.querySelector(".close-modal");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const startBtn = document.querySelector(".start-btn");
const step1 = document.getElementById("step1");
const summaryStep = document.getElementById("summaryStep");

summaryStep.style.display = "none";
prevBtn.style.display = "none";
nextBtn.style.display = "none";

startBtn.addEventListener("click", function () {
  step1.style.display = "none";
  summaryStep.style.display = "block";

  prevBtn.style.display = "inline-block";
  nextBtn.style.display = "inline-block";
  prevBtn.disabled = true;
});

generateBioBtn.addEventListener("click", () => {
  bioModal.classList.add("active");
  showStep("step1");
});

closeModal.addEventListener("click", () => {
  bioModal.classList.remove("active");
});

function showStep(stepId) {
  document.querySelectorAll(".bio-step").forEach((step) => {
    step.classList.remove("active");
  });
  document.getElementById(stepId).classList.add("active");
}

prevBtn.addEventListener("click", () => {
  // Logique pour aller à l'étape précédente
});

nextBtn.addEventListener("click", () => {
  showStep("summaryStep");
});

startBtn.addEventListener("click", () => {
  showStep("step1");
});

window.addEventListener("click", (e) => {
  if (e.target === bioModal) {
    bioModal.classList.remove("active");
  }
});

const steps = document.querySelectorAll(".bio-step");
let currentStep = 0;

function updateSteps() {
  steps.forEach((step, index) => {
    step.style.display = index === currentStep ? "block" : "none";
  });

  prevBtn.style.display = currentStep === 0 ? "none" : "inline-block";

  if (currentStep === steps.length - 1) {
    nextBtn.style.display = "none";
    if (!document.querySelector(".finish-btn")) {
      const finishBtn = document.createElement("button");
      finishBtn.classList.add("finish-btn");
      finishBtn.textContent = "Terminer";
      finishBtn.addEventListener("click", () => {
        bioModal.classList.remove("active");
      });
      document.querySelector(".modal-footer").appendChild(finishBtn);
    }
  } else {
    nextBtn.style.display = "inline-block";
    const finishBtn = document.querySelector(".finish-btn");
    if (finishBtn) finishBtn.remove();
  }
}

updateSteps();

nextBtn.addEventListener("click", () => {
  if (currentStep < steps.length - 1) {
    currentStep++;
    updateSteps();
  }
});

prevBtn.addEventListener("click", () => {
  if (currentStep > 0) {
    currentStep--;
    updateSteps();
  }
});

//profile

const profilePic = document.getElementById("profile-pic");
const uploadInput = document.getElementById("upload-input");
const uploadBtn = document.getElementById("upload-btn");
const saveBtn = document.getElementById("save-btn");

const usernameInput = document.getElementById("username");
const genderSelect = document.getElementById("gender");
const bioInput = document.getElementById("bio");

uploadBtn.addEventListener("click", () => {
  uploadInput.click();
});

uploadInput.addEventListener("change", function () {
  const file = this.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = function (e) {
      profilePic.src = e.target.result;
    };

    reader.readAsDataURL(file);
  }
});

saveBtn.addEventListener("click", () => {
  const userData = {
    name: usernameInput.value,
    gender: genderSelect.value,
    bio: bioInput.value,
  };

  console.log("Données sauvegardées :", userData);
  alert("Profil mis à jour !");
});
