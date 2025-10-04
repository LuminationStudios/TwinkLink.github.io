// hamburger toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
}

// load footer from footer.json
async function loadFooter() {
  try {
    const res = await fetch('footer.json');
    const data = await res.json();
    const footer = document.querySelector('.site-footer');
    if (!footer) return;
    let html = `<div class="footer-text">${data.text || ''}</div>`;
    if (data.links && data.links.length) {
      html += '<div class="footer-links">';
      data.links.forEach(link => {
        html += `<a href="${link.url}" target="_blank" rel="noopener noreferrer">${link.name}</a>`;
      });
      html += '</div>';
    }
    footer.innerHTML = html;
  } catch (err) {
    console.error('Could not load footer.json', err);
  }
}
loadFooter();

// Projects loader for index.html
async function loadProjects(file, gridId) {
  try {
    const response = await fetch(file);
    const projects = await response.json();
    const grid = document.getElementById(gridId);
    if (!grid) return;
    projects.forEach((proj, index) => {
      const item = document.createElement('div');
      item.className = 'portfolio-item';
      item.innerHTML = `
        <img src="${proj.image}" alt="${proj.title}">
        <div class="portfolio-content">
          <h3>${proj.title}</h3>
          <p>${proj.description}</p>
          <a href="project.html?file=${file}&id=${index+1}" class="btn">View Project</a>
        </div>
      `;
      grid.appendChild(item);
    });
  } catch (err) {
    console.error('Error loading projects from ' + file, err);
  }
}

// Auto-load on index.html
if (document.getElementById('websites-grid')) {
  loadProjects('websites.json', 'websites-grid');
  loadProjects('roblox.json', 'roblox-grid');
  // tabs
  document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.tab-btn');
    const sections = document.querySelectorAll('.category-section');
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('active'));
        sections.forEach(sec => sec.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById(btn.dataset.target).classList.add('active');
      });
    });
    // jump links smooth scroll
    document.querySelectorAll('.jump-link').forEach(el => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        const id = e.target.getAttribute('href').slice(1);
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
      });
    });
  });
}

// Project details loader for project.html
if (document.getElementById('project-title')) {
  async function loadProject() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const file = params.get('file') || 'websites.json';
    const detailsCard = document.getElementById('details-card');
    try {
      const response = await fetch(file);
      const projects = await response.json();
      if (!id || isNaN(id) || id < 1 || id > projects.length) {
        document.getElementById('project-title').textContent = 'Project Not Found';
        document.getElementById('project-desc').textContent = "Oops! This project doesn't exist or the link is broken.";
        detailsCard.style.display = 'none';
        return;
      }
      const project = projects[id - 1];
      document.getElementById('project-title').textContent = project.title;
      document.getElementById('project-desc').textContent = project.description;
      document.getElementById('project-img').src = project.image;
      document.getElementById('project-full').textContent = project.details || 'More info coming soon!';
      document.getElementById('project-link').href = project.link;
    } catch (err) {
      console.error('Error loading project:', err);
      document.getElementById('project-title').textContent = 'Error';
      document.getElementById('project-desc').textContent = 'Could not load project details. Please try again later.';
      detailsCard.style.display = 'none';
    }
  }
  loadProject();
}
