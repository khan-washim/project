// Toggle hidden-nav / sidebar
// Toggle hidden-nav / sidebar
const toggleBtn = document.getElementById("navbarToggle");
const hiddenNav = document.getElementById("hiddenNav");
const sidebar = document.getElementById("sidebar");
const closeSidebar = document.getElementById("closeSidebar");

// Sidebar submenu toggle
sidebar.querySelectorAll(".has-submenu").forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    const submenu = item.nextElementSibling;
    if (submenu) {
      submenu.style.display =
        submenu.style.display === "flex" ? "none" : "flex";
      item.classList.toggle("open");
    }
  });
});

toggleBtn.addEventListener("click", () => {
  if (window.innerWidth <= 768) {
    sidebar.classList.add("active");
  } else {
    hiddenNav.style.display =
      hiddenNav.style.display === "block" ? "none" : "block";
  }
});

closeSidebar.addEventListener("click", () => {
  sidebar.classList.remove("active");
});