// ✨ Add sparkles to all glow-box elements
document.addEventListener("DOMContentLoaded", () => {
  const glowBoxes = document.querySelectorAll(".glow-box");

  glowBoxes.forEach(box => {
    const sparkleContainer = document.createElement("div");
    sparkleContainer.classList.add("sparkle-container");
    box.appendChild(sparkleContainer);

    const colors = ["pink", "blue"];
    const sparkles = 20;

    for (let i = 0; i < sparkles; i++) {
      const sparkle = document.createElement("div");
      sparkle.classList.add("sparkle", colors[Math.floor(Math.random() * colors.length)]);

      const side = Math.floor(Math.random() * 4);
      let pos = Math.random() * 100;

      if (side === 0) { // top
        sparkle.style.top = "0%";
        sparkle.style.left = `${pos}%`;
      } else if (side === 1) { // right
        sparkle.style.top = `${pos}%`;
        sparkle.style.right = "0%";
      } else if (side === 2) { // bottom
        sparkle.style.bottom = "0%";
        sparkle.style.left = `${pos}%`;
      } else { // left
        sparkle.style.top = `${pos}%`;
        sparkle.style.left = "0%";
      }

      sparkle.style.animationDelay = `${Math.random() * 3}s`;
      sparkle.style.animationDuration = `${4 + Math.random() * 3}s`;

      sparkleContainer.appendChild(sparkle);
    }
  });
});
