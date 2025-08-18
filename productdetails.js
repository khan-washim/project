function changeImage(img) {
    document.getElementById('mainImg').src = img.src;
    document.querySelectorAll('.thumb-img').forEach(e => e.classList.remove('active'));
    img.classList.add('active');
  }

  function selectColor(el) {
    document.querySelectorAll('.color-option').forEach(e => e.classList.remove('active'));
    el.classList.add('active');
  }

  function selectSize(el) {
    document.querySelectorAll('.btn-light').forEach(e => e.classList.remove('active'));
    el.classList.add('active');
  }

  function increaseQuantity() {
    let q = document.getElementById('quantity');
    q.value = parseInt(q.value) + 1;
  }

  function decreaseQuantity() {
    let q = document.getElementById('quantity');
    if (parseInt(q.value) > 1) q.value = parseInt(q.value) - 1;
  }

  // Toggle extra thumbnails
  function toggleThumbs() {
    const extra = document.querySelector('.extra-thumbs');
    const arrow = document.querySelector('.arrow-btn i');
    if (extra.style.display === "none" || extra.style.display === "") {
      extra.style.display = "block";
      arrow.classList.remove("bi-chevron-down");
      arrow.classList.add("bi-chevron-up");
    } else {
      extra.style.display = "none";
      arrow.classList.remove("bi-chevron-up");
      arrow.classList.add("bi-chevron-down");
    }
  }
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