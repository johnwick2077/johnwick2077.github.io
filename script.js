// Mobile menu toggle function
function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("show");
}

// Check for window width and toggle menu visibility accordingly
function checkWindowSize() {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.getElementById("navLinks");

  if (window.innerWidth <= 768) {
    menuToggle.style.display = "block";
    navLinks.classList.remove("show");
  } else {
    menuToggle.style.display = "none";
    navLinks.classList.remove("show");
  }
}

// Event listener for window resize
window.addEventListener("resize", checkWindowSize);

// Run checkWindowSize on page load
checkWindowSize();
