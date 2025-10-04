function initCategoryButtons() {
  const categoryButtons = document.querySelectorAll(".category-btn");
  const websiteSection = document.querySelector("#websites");
  const robloxSection = document.querySelector("#roblox");

  categoryButtons.forEach(button => {
    button.addEventListener("click", () => {
      categoryButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      if (button.dataset.target === "websites") {
        websiteSection.style.display = "block";
        robloxSection.style.display = "none";
      } else {
        websiteSection.style.display = "none";
        robloxSection.style.display = "block";
      }
    });
  });

  if (websiteSection && robloxSection) {
    websiteSection.style.display = "block";
    robloxSection.style.display = "none";
  }
}

window.addEventListener("DOMContentLoaded", () => {
  fetch("./header.json")
    .then(response => response.json())
    .then(data => {
      const header = document.querySelector("#site-header");
      if (header) {
        header.innerHTML = `
          <div class="sparkle-overlay"></div>
          <h1>${data.title}</h1>
          <p>${data.subtitle}</p>
          <div id="category-toggle" class="category-toggle-box">
            <button class="category-btn active" data-target="websites">Websites</button>
            <button class="category-btn" data-target="roblox">Roblox Projects</button>
          </div>
        `;
      }
      initCategoryButtons();
    });

  fetch("./footer.json")
    .then(response => response.json())
    .then(data => {
      const footer = document.querySelector(".site-footer");
      if (footer) footer.innerHTML = `<p>${data.text}</p>`;
    });
});
