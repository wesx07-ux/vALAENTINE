const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const heartLoader = document.getElementById("heartLoader");
const resultContainer = document.getElementById("resultContainer");
const loveMessage = document.getElementById("loveMessage");

// YES BUTTON LOGIC
yesBtn.addEventListener("click", () => {
  heartLoader.classList.remove("hidden");

  setTimeout(() => {
    heartLoader.classList.add("hidden");
    resultContainer.classList.remove("hidden");

    loveMessage.textContent = "Eks baie lief vir jou my Dezi van jou Baas Wessie 💘";

    confetti({
      particleCount: 200,
      spread: 80,
      origin: { y: 0.6 }
    });
  }, 2000);
});

// NO BUTTON RUNS AWAY
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - 150);
  const y = Math.random() * (window.innerHeight - 150);

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});
