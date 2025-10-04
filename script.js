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
          <a href="${project.link}" target="_blank" class="btn">View Project</a>
        `;
        container.appendChild(card);
      });
    }
  });

// Load Roblox Projects
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
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <a href="${project.link}" target="_blank" class="btn">View Project</a>
        `;
        container.appendChild(card);
      });
    }
  });

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
