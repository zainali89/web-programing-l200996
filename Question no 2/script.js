const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", function () {
  const categoryToggle = document.querySelector(".category-toggle");
  const categoryDropdown = document.querySelector(".category-dropdown");

  categoryToggle.addEventListener("click", function () {
    categoryDropdown.classList.toggle("open");
  });
});
