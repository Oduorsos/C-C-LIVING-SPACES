const projectCards = document.querySelectorAll(".project-card");
const projectDetails = document.getElementById("projectDetails");

const detailCategory = document.getElementById("detailCategory");
const detailTitle = document.getElementById("detailTitle");
const detailLocation = document.getElementById("detailLocation");
const detailYear = document.getElementById("detailYear");
const detailSize = document.getElementById("detailSize");
const detailDescription = document.getElementById("detailDescription");
const detailApproach = document.getElementById("detailApproach");

/* PROJECT DATA */

const projectData = {
  "Modern Residence": {
    category: "Residential",
    location: "Nairobi",
    year: "2025",
    size: "450 sqm",
    description:
      "A contemporary residence designed around openness and light. The layout encourages seamless transitions between indoor and outdoor living.",
    approach:
      "We used warm wood finishes, stone textures and large glazing systems to enhance spatial continuity and elegance."
  },

  "Corporate Workspace": {
    category: "Workplace",
    location: "Westlands",
    year: "2024",
    size: "800 sqm",
    description:
      "A dynamic office space focused on collaboration, innovation and productivity.",
    approach:
      "Open-plan workstations combined with private meeting pods create balance between interaction and focus."
  },

  "Boutique Hotel": {
    category: "Hospitality",
    location: "Diani",
    year: "2023",
    size: "1200 sqm",
    description:
      "An immersive hospitality experience inspired by coastal textures and natural tones.",
    approach:
      "Layered lighting, textured fabrics and curated art pieces define the hotel's warm atmosphere."
  }
};

/* CLICK EVENT */

projectCards.forEach(card => {
  card.addEventListener("click", () => {

    const title = card.querySelector("h3").textContent;

    const data = projectData[title];

    if (!data) return;

    projectDetails.classList.remove("show");

    setTimeout(() => {
      detailCategory.textContent = data.category;
      detailTitle.textContent = title;
      detailLocation.textContent = data.location;
      detailYear.textContent = data.year;
      detailSize.textContent = data.size;
      detailDescription.textContent = data.description;
      detailApproach.textContent = data.approach;

      projectDetails.classList.add("show");
    }, 200);

  });
});

/* Show default */
window.addEventListener("DOMContentLoaded", () => {
  projectDetails.classList.add("show");
});
