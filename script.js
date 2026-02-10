const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const questionContainer = document.getElementById("questionContainer");
const heartLoader = document.getElementById("heartLoader");
const resultContainer = document.getElementById("resultContainer");
const gifResult = document.getElementById("gifResult");
const loveMessage = document.getElementById("loveMessage");

// Set your partner's name here
const partnerName = "My Pookie woookie snookie bear";

noBtn.addEventListener("mouseover", () => {
  const newX = Math.floor(Math.random() * (questionContainer.offsetWidth - noBtn.offsetWidth));
  const newY = Math.floor(Math.random() * (questionContainer.offsetHeight - noBtn.offsetHeight));

  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
});

yesBtn.addEventListener("click", () => {
  heartLoader.classList.remove("hidden");

  setTimeout(() => {
    heartLoader.classList.add("hidden");
    resultContainer.classList.remove("hidden");

    // Custom message
    loveMessage.textContent = `Eks baie lief vir jou my Dezi van jou Baas Wessie ❤️`;


    // Confetti explosion
    confetti({
      particleCount: 200,
      spread: 80,
      origin: { y: 0.6 }
    });

  }, 3000);
});

