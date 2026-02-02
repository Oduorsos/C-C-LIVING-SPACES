const navbar = document.getElementById("navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

const reveals = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    const trigger = window.innerHeight * 0.85;

    if (top < trigger) {
      el.classList.add("active");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

/* selected Projects */
const projectCards = document.querySelectorAll(".project-card");

const projectObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        entry.target.style.transitionDelay = `${index * 0.15}s`;
        entry.target.classList.add("reveal");
        projectObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.25
  }
);

projectCards.forEach(card => {
  card.classList.add("hidden");
  projectObserver.observe(card);
});

projectCards.forEach(card => {
  const img = card.querySelector("img");

  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const moveX = (x / rect.width - 0.5) * 10;
    const moveY = (y / rect.height - 0.5) * 10;

    img.style.transform = `scale(1.15) translate(${moveX}px, ${moveY}px)`;
  });

  card.addEventListener("mouseleave", () => {
    img.style.transform = "scale(1)";
  });
});

projectCards.forEach(card => {
  card.addEventListener("click", () => {
    const title = card.querySelector("h3")?.innerText || "Project";

    // Placeholder action (swap later for modal or page navigation)
    console.log(`Opening project: ${title}`);

    // Example future use:
    // openProjectModal(card.dataset.projectId);
  });
});

/* services */
const serviceCards = document.querySelectorAll(".service-card");

const serviceObserver = new IntersectionObserver(
  entries => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        entry.target.style.transitionDelay = `${index * 0.12}s`;
        entry.target.classList.add("reveal");
        serviceObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.3 }
);

serviceCards.forEach(card => {
  card.classList.add("hidden");
  serviceObserver.observe(card);
});

// CTA Fade-in observer
const fadeElements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.2 }
);

fadeElements.forEach(el => observer.observe(el));

// Modal logic
const modal = document.getElementById("contactModal");
const openBtn = document.getElementById("openModal");
const closeBtn = document.querySelector(".close-modal");

openBtn.addEventListener("click", () => {
  modal.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("active");
});

modal.addEventListener("click", e => {
  if (e.target === modal) modal.classList.remove("active");
});
