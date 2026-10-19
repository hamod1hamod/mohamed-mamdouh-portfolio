/**
 * Mohamed Mamdouh Mohib - Portfolio Client Logic
 * Handles interactive filtering, search, project dialogs, WhatsApp messaging, and customization
 */

document.addEventListener("DOMContentLoaded", () => {
  // Local reactive copy of projects (merges localStorage if user added custom projects)
  let activeProjects = [...portfolioProjects];
  const savedCustom = localStorage.getItem("mohamed_custom_projects");
  if (savedCustom) {
    try {
      const parsed = JSON.parse(savedCustom);
      if (Array.isArray(parsed)) {
        activeProjects = [...parsed, ...portfolioProjects];
      }
    } catch (e) {
      console.error("Failed to parse saved projects", e);
    }
  }

  // DOM Elements
  const projectsGrid = document.getElementById("projectsGrid");
  const projectSearch = document.getElementById("projectSearch");
  const filterTabs = document.getElementById("filterTabs");
  const noProjectsFound = document.getElementById("noProjectsFound");
  const resetFilterBtn = document.getElementById("resetFilterBtn");
  const skillsGrid = document.getElementById("skillsGrid");

  // Modal Elements (<dialog>)
  const projectModal = document.getElementById("projectModal");
  const closeProjectModalBtn = document.getElementById("closeProjectModalBtn");
  const modalTitle = document.getElementById("modalTitle");
  const modalTagline = document.getElementById("modalTagline");
  const modalCategory = document.getElementById("modalCategory");
  const modalImage = document.getElementById("modalImage");
  const modalDescription = document.getElementById("modalDescription");
  const modalHighlights = document.getElementById("modalHighlights");
  const modalTech = document.getElementById("modalTech");
  const modalLiveBtn = document.getElementById("modalLiveBtn");
  const modalGithubBtn = document.getElementById("modalGithubBtn");
  const modalShareBtn = document.getElementById("modalShareBtn");

  // Add Project Customizer Elements
  const addProjectModal = document.getElementById("addProjectModal");
  const openAddProjectModalBtn = document.getElementById("openAddProjectModalBtn");
  const closeAddModalBtn = document.getElementById("closeAddModalBtn");
  const addProjectForm = document.getElementById("addProjectForm");
  const exportProjectsJsonBtn = document.getElementById("exportProjectsJsonBtn");

  // Navigation & Interactive Helpers
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  const copyPhoneBtn = document.getElementById("copyPhoneBtn");
  const copyPhoneContactBtn = document.getElementById("copyPhoneContactBtn");
  const sendQuickWhatsAppBtn = document.getElementById("sendQuickWhatsAppBtn");
  const toastNotification = document.getElementById("toastNotification");
  const toastMsg = document.getElementById("toastMsg");

  let currentCategory = "all";
  let searchQuery = "";
  let activeModalProject = null;

  // --------------------------------------------------------------------------
  // Toast Helper
  // --------------------------------------------------------------------------
  function showToast(message) {
    toastMsg.textContent = message;
    toastNotification.classList.add("show");
    setTimeout(() => {
      toastNotification.classList.remove("show");
    }, 3200);
  }

  // --------------------------------------------------------------------------
  // Render Projects Cards
  // --------------------------------------------------------------------------
  function renderProjects() {
    const filtered = activeProjects.filter((project) => {
      const matchesCategory =
        currentCategory === "all" || project.category === currentCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        project.title.toLowerCase().includes(q) ||
        project.tagline.toLowerCase().includes(q) ||
        project.description.toLowerCase().includes(q) ||
        project.techStack.some((t) => t.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
      projectsGrid.innerHTML = "";
      noProjectsFound.style.display = "block";
      return;
    }

    noProjectsFound.style.display = "none";
    projectsGrid.innerHTML = filtered
      .map((proj) => {
        const badgeColorClass =
          proj.category === "industrial-ai"
            ? "badge-emerald"
            : proj.category === "cybersecurity"
            ? "badge-violet"
            : "badge-cyan";

        const techPills = proj.techStack
          .slice(0, 4)
          .map((tech) => `<span class="tech-tag">${escapeHtml(tech)}</span>`)
          .join("");

        const moreTechCount =
          proj.techStack.length > 4 ? `+${proj.techStack.length - 4}` : "";

        return `
        <article class="project-card" data-id="${proj.id}">
          <div class="project-thumbnail">
            <img src="${proj.image}" alt="${escapeHtml(proj.title)}" class="project-img" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=900&q=80'">
            <div class="project-overlay">
              <span class="badge ${badgeColorClass}">${escapeHtml(proj.badge || proj.categoryLabel)}</span>
            </div>
          </div>

          <div class="project-content">
            <div class="project-category">// ${escapeHtml(proj.categoryLabel)}</div>
            <h3 class="project-title">${escapeHtml(proj.title)}</h3>
            <div class="project-tagline">${escapeHtml(proj.tagline)}</div>
            <p class="project-desc">${escapeHtml(proj.description)}</p>

            <div class="project-tech">
              ${techPills}
              ${moreTechCount ? `<span class="tech-tag" style="color: var(--accent-cyan);">${moreTechCount}</span>` : ""}
            </div>

            <div class="project-actions">
              <a href="${proj.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn-live" title="Open Live Project">
                <i class="ri-external-link-line"></i>
                <span>Live Demo</span>
              </a>

              ${
                proj.githubUrl
                  ? `<a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn-code" title="View Source Code">
                      <i class="ri-github-line"></i>
                      <span>Code</span>
                    </a>`
                  : ""
              }

              <button class="btn-details view-details-btn" data-id="${proj.id}" title="View Architecture & Highlights">
                <i class="ri-information-line"></i>
              </button>
            </div>
          </div>
        </article>
      `;
      })
      .join("");

    // Attach listeners to "View Details" buttons and card clicks
    document.querySelectorAll(".view-details-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const id = btn.getAttribute("data-id");
        openProjectModal(id);
      });
    });
  }

  // --------------------------------------------------------------------------
  // Project Details Modal Handler
  // --------------------------------------------------------------------------
  function openProjectModal(id) {
    const project = activeProjects.find((p) => p.id === id);
    if (!project) return;
    activeModalProject = project;

    modalTitle.textContent = project.title;
    modalTagline.textContent = project.tagline;
    modalCategory.textContent = project.categoryLabel;
    modalImage.src = project.image;
    modalDescription.textContent = project.description;

    modalHighlights.innerHTML = (project.highlights || [
      "Designed with scalable modular architecture",
      "End-to-end integration with telemetry & diagnostic hooks",
      "Production-ready deployment & documentation"
    ])
      .map(
        (h) => `
      <li class="dialog-highlight-item">
        <i class="ri-check-line" style="color: var(--accent-emerald); font-weight: bold; margin-top: 3px;"></i>
        <span>${escapeHtml(h)}</span>
      </li>
    `
      )
      .join("");

    modalTech.innerHTML = project.techStack
      .map((t) => `<span class="tech-tag">${escapeHtml(t)}</span>`)
      .join("");

    modalLiveBtn.href = project.liveUrl;
    if (project.githubUrl) {
      modalGithubBtn.href = project.githubUrl;
      modalGithubBtn.style.display = "inline-flex";
    } else {
      modalGithubBtn.style.display = "none";
    }

    if (typeof projectModal.showModal === "function") {
      projectModal.showModal();
    } else {
      projectModal.setAttribute("open", "");
    }
  }

  // Close modals
  closeProjectModalBtn.addEventListener("click", () => projectModal.close());
  closeAddModalBtn.addEventListener("click", () => addProjectModal.close());

  // Close modal when clicking on backdrop
  [projectModal, addProjectModal].forEach((dialog) => {
    dialog.addEventListener("click", (e) => {
      const rect = dialog.getBoundingClientRect();
      const isInDialog =
        rect.top <= e.clientY &&
        e.clientY <= rect.top + rect.height &&
        rect.left <= e.clientX &&
        e.clientX <= rect.left + rect.width;
      if (!isInDialog) {
        dialog.close();
      }
    });
  });

  // Modal Share Button
  modalShareBtn.addEventListener("click", () => {
    if (activeModalProject) {
      navigator.clipboard.writeText(activeModalProject.liveUrl);
      showToast(`Copied Live Demo link for ${activeModalProject.title}!`);
    }
  });

  // --------------------------------------------------------------------------
  // Search & Filter Interactions
  // --------------------------------------------------------------------------
  projectSearch.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    renderProjects();
  });

  filterTabs.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      filterTabs
        .querySelectorAll(".filter-btn")
        .forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.getAttribute("data-category");
      renderProjects();
    });
  });

  resetFilterBtn.addEventListener("click", () => {
    currentCategory = "all";
    searchQuery = "";
    projectSearch.value = "";
    filterTabs
      .querySelectorAll(".filter-btn")
      .forEach((b) => b.classList.remove("active"));
    filterTabs.querySelector('[data-category="all"]').classList.add("active");
    renderProjects();
  });

  // --------------------------------------------------------------------------
  // Render Technical Skills Matrix
  // --------------------------------------------------------------------------
  function renderSkills() {
    const categories = [
      {
        title: "Industrial Intelligence & AI",
        icon: "ri-robot-line",
        items: profileData.skills.industrialAI,
      },
      {
        title: "Cybersecurity & OT Defense",
        icon: "ri-shield-check-line",
        items: profileData.skills.cybersecurity,
      },
      {
        title: "Communication & Electronics",
        icon: "ri-cpu-line",
        items: profileData.skills.electronicsComms,
      },
      {
        title: "Programming & Engineering Stack",
        icon: "ri-code-box-line",
        items: profileData.skills.softwareEng,
      },
    ];

    skillsGrid.innerHTML = categories
      .map(
        (cat) => `
      <div class="skill-category-card">
        <div class="skill-cat-header">
          <i class="${cat.icon} skill-cat-icon"></i>
          <h3 class="skill-cat-title">${escapeHtml(cat.title)}</h3>
        </div>
        <ul class="skill-items-list">
          ${cat.items
            .map(
              (item) => `
            <li class="skill-item">
              <i class="ri-terminal-box-line skill-bullet"></i>
              <span>${escapeHtml(item)}</span>
            </li>
          `
            )
            .join("")}
        </ul>
      </div>
    `
      )
      .join("");
  }

  // --------------------------------------------------------------------------
  // Add / Customize Project Handler
  // --------------------------------------------------------------------------
  openAddProjectModalBtn.addEventListener("click", () => {
    addProjectModal.showModal();
  });

  addProjectForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = document.getElementById("newProjTitle").value.trim();
    const tagline = document.getElementById("newProjTagline").value.trim();
    const category = document.getElementById("newProjCategory").value;
    const badge = document.getElementById("newProjBadge").value.trim() || "New Project";
    const liveUrl = document.getElementById("newProjLiveUrl").value.trim();
    const githubUrl = document.getElementById("newProjGithubUrl").value.trim();
    const description = document.getElementById("newProjDesc").value.trim();
    const techRaw = document.getElementById("newProjTech").value.trim();
    const techStack = techRaw ? techRaw.split(",").map((s) => s.trim()) : ["Software", "Engineering"];

    const categoryLabelMap = {
      "industrial-ai": "Industrial Intelligence",
      cybersecurity: "Cybersecurity",
      electronics: "Communication & Electronics",
    };

    const newProject = {
      id: "proj-" + Date.now(),
      title,
      tagline,
      category,
      categoryLabel: categoryLabelMap[category] || "Engineering",
      badge,
      liveUrl,
      githubUrl: githubUrl || null,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
      description,
      highlights: [
        "Interactive live implementation accessible online",
        "Clean modular codebase adhering to modern engineering standards",
        "Configured for automated deployment and continuous testing",
      ],
      techStack,
    };

    activeProjects.unshift(newProject);

    // Save to localStorage
    const customList = JSON.parse(localStorage.getItem("mohamed_custom_projects") || "[]");
    customList.unshift(newProject);
    localStorage.setItem("mohamed_custom_projects", JSON.stringify(customList));

    renderProjects();
    addProjectModal.close();
    addProjectForm.reset();
    showToast(`Successfully added "${title}" to your portfolio!`);
  });

  exportProjectsJsonBtn.addEventListener("click", () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(activeProjects, null, 2));
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "mohamed_mamdouh_projects.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    showToast("Downloaded portfolio projects JSON file!");
  });

  // --------------------------------------------------------------------------
  // WhatsApp Quick Composer
  // --------------------------------------------------------------------------
  sendQuickWhatsAppBtn.addEventListener("click", () => {
    const name = document.getElementById("quickSenderName").value.trim();
    const msg = document.getElementById("quickSenderMsg").value.trim();

    let fullText = "Hello Mohamed, ";
    if (name) {
      fullText += `my name is ${name}. `;
    }
    if (msg) {
      fullText += msg;
    } else {
      fullText += "I viewed your engineering portfolio and would like to connect regarding an opportunity!";
    }

    const encoded = encodeURIComponent(fullText);
    const waUrl = `https://wa.me/201098641398?text=${encoded}`;
    window.open(waUrl, "_blank");
  });

  // Copy Phone Number
  function copyPhoneNumber() {
    navigator.clipboard.writeText("+201098641398");
    showToast("Copied phone number (+201098641398) to clipboard!");
  }

  if (copyPhoneBtn) copyPhoneBtn.addEventListener("click", copyPhoneNumber);
  if (copyPhoneContactBtn) copyPhoneContactBtn.addEventListener("click", copyPhoneNumber);

  // Mobile Menu Toggle
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  // Close mobile nav when clicking a nav link
  navLinks.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
    });
  });

  // --------------------------------------------------------------------------
  // HTML Escape Helper
  // --------------------------------------------------------------------------
  function escapeHtml(str) {
    if (!str) return "";
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  // Initial Renders
  renderProjects();
  renderSkills();
});
