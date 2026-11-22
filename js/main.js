document.querySelectorAll(".dropdown-menu").forEach((menu) => {
  menu.addEventListener("click", function (e) {
    e.stopPropagation();
  });
});

const navLinks = document.querySelectorAll(".navbar-collapse .nav-link");
navLinks.forEach((link) => {
  if (!link.classList.contains("dropdown-toggle")) {
    link.addEventListener("click", () => {
      const navbarCollapse = document.querySelector(".navbar-collapse");
      if (navbarCollapse.classList.contains("show")) {
        new bootstrap.Collapse(navbarCollapse).hide();
      }
    });
  }
});
