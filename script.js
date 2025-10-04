// === Category Toggle Buttons ===
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
  // === Load Header and Buttons ===
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
    })
    .catch(err => console.error("Error loading header:", err));

  // === Load Website Projects ===
  fetch("./websites.json")
    .then(response => response.json())
    .then(data => {
      const container = document.querySelector("#websites-grid");
      if (container) {
        data.forEach(project => {
          const card = document.createElement("div");
          card.classList.add("project-card");
          card.innerHTML = `
            <div class="project-image-box">
              <img src="${project.image}" alt="${project.title}">
            </div>
            <a href="project.html?id=${project.id}" class="view-btn">View Project</a>
          `;
          container.appendChild(card);
        });
      }
    })
    .catch(err => console.error("Error loading websites:", err));

  // === Load Roblox Projects ===
  fetch("./roblox.json")
    .then(response => response.json())
    .then(data => {
      const container = document.querySelector("#roblox-grid");
      if (container) {
        data.forEach(project => {
          const card = document.createElement("div");
          card.classList.add("project-card");
          card.innerHTML = `
            <div class="project-image-box">
              <img src="${project.image}" alt="${project.title}">
            </div>
            <a href="project.html?id=${project.id}" class="view-btn">View Project</a>
          `;
          container.appendChild(card);
        });
      }
    })
    .catch(err => console.error("Error loading roblox:", err));

  // === Load Footer ===
  fetch("./footer.json")
    .then(response => response.json())
    .then(data => {
      const footer = document.querySelector(".site-footer");
      if (footer) footer.innerHTML = `<p>${data.text}</p>`;
    })
    .catch(err => console.error("Error loading footer:", err));

  // === Load Theme (Fonts, Colors, etc.) ===
  fetch("./theme.json")
    .then(response => response.json())
    .then(theme => {
      // Load body font
      if (theme.font) {
        const link = document.createElement("link");
        link.href = `https://fonts.googleapis.com/css2?family=${theme.font.replace(/\s+/g, "+")}:wght@400;600;700&display=swap`;
        link.rel = "stylesheet";
        document.head.appendChild(link);
        document.body.style.fontFamily = theme.font;
      }

      // Load heading font
      if (theme.headingFont) {
        const link2 = document.createElement("link");
        link2.href = `https://fonts.googleapis.com/css2?family=${theme.headingFont.replace(/\s+/g, "+")}:wght@400;600;700&display=swap`;
        link2.rel = "stylesheet";
        document.head.appendChild(link2);
        document.querySelectorAll("h1,h2,h3,h4").forEach(el => el.style.fontFamily = theme.headingFont);
      }
    })
    .catch(err => console.error("Error loading theme:", err));
});
