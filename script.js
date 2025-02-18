const header = document.getElementById("scroll-header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled"); // Apply glass effect and text color change
  } else {
    header.classList.remove("scrolled"); // Revert to default
  }
});
