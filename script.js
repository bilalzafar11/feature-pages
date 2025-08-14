// ===== Scroll to Top Button =====
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// ===== Feature Filtering =====
const filterButtons = document.querySelectorAll(".filter-buttons button");
const featureCards = document.querySelectorAll(".feature-card");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    const filterValue = button.getAttribute("data-filter");

    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    featureCards.forEach(card => {
      const category = card.getAttribute("data-category");

      if (filterValue === "all" || category === filterValue) {
        card.style.display = "block";
        setTimeout(() => card.style.opacity = "1", 50);
      } else {
        card.style.opacity = "0";
        setTimeout(() => card.style.display = "none", 300);
      }
    });
  });
});

// ===== Smooth Scroll for Navigation =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// ===== Menu Toggle =====
const menuLinks = document.getElementById("menuLinks");
const menuBtn = document.querySelector(".menu-icon");

function toggleMenu() {
  menuLinks.classList.toggle("show");
}

// Close menu on link click (mobile only)
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
      menuLinks.classList.remove("show");
    }
  });
});

// Close menu if clicked outside (mobile only)
document.addEventListener("click", (event) => {
  if (window.innerWidth <= 768) {
    if (!menuLinks.contains(event.target) && !menuBtn.contains(event.target)) {
      menuLinks.classList.remove("show");
    }
  }
});
