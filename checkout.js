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
// Step tracker click handling
  const steps = document.querySelectorAll('.step');

  steps.forEach(step => {
    step.addEventListener('click', () => {
      // Remove active class from all steps
      steps.forEach(s => s.classList.remove('active'));

      // Add active class only to the clicked step
      step.classList.add('active');
    });
  });

  // Address toggle
  document.getElementById('toggleShip').addEventListener('click', function(){
    const body = document.getElementById('shipBody');
    body.style.display = body.style.display === 'none' ? 'block' : 'none';
    this.innerHTML = body.style.display === 'none' ? '<i class="fa fa-plus"></i>' : '<i class="fa fa-minus"></i>';
  });

  document.getElementById('toggleBill').addEventListener('click', function(){
    const body = document.getElementById('billBody');
    body.style.display = body.style.display === 'none' ? 'block' : 'none';
    this.innerHTML = body.style.display === 'none' ? '<i class="fa fa-plus"></i>' : '<i class="fa fa-minus"></i>';
  });
  