// Load Websites Projects
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
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <a href="project.html?id=${project.id}" class="btn">View Project</a>
        `;
        container.appendChild(card);
      });
    }
  });

fetch("./header.json")
  .then(response => response.json())
  .then(data => {
    const header = document.querySelector("#site-header");
    if (header) {
      header.innerHTML = `
        <div class="sparkle-overlay"></div>
        <h1>${data.title}</h1>
        <p>${data.subtitle}</p>
      `;
    }
  })
  .catch(error => console.error("Error loading header:", error));

// Load Footer
fetch("./footer.json")
  .then(response => response.json())
  .then(data => {
    const footer = document.querySelector(".site-footer");
    if (footer) {
      let html = `<p>${data.text}</p>`;
      footer.innerHTML = html;
    }
  });
