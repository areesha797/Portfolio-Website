/* ================================
   SECTION ANIMATION (ON SCROLL)
================================ */

const sections = document.querySelectorAll('.section');

const observerOptions = {
  threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

sections.forEach(section => observer.observe(section));


/* ================================
   NAVBAR & MOBILE MENU
================================ */

const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-link");

navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("active");
  navMenu.classList.toggle("active");
});


/* ================================
   SMOOTH SCROLL WITH OFFSET
================================ */

navLinks.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      const navbarHeight = document.querySelector(".navbar").offsetHeight;
      const targetPosition = targetSection.offsetTop - navbarHeight - 10;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });
    }

    // Close mobile menu
    navToggle.classList.remove("active");
    navMenu.classList.remove("active");
  });
});


/* ================================
   ACTIVE NAV LINK ON SCROLL
================================ */

window.addEventListener("scroll", () => {
  const navbarHeight = document.querySelector(".navbar").offsetHeight;
  const scrollPos = window.scrollY + navbarHeight + 50;

  navLinks.forEach(link => {
    const section = document.querySelector(link.getAttribute("href"));
    if (!section) return;

    const sectionTop = section.offsetTop;
    const sectionBottom = sectionTop + section.offsetHeight;

    if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    }
  });
});


/* ================================
   IMAGE MODAL (PROJECT PREVIEW)
================================ */

function openModal(src) {
  const modal = document.getElementById("imgModal");
  const modalImg = document.getElementById("modalImg");

  modal.style.display = "flex";
  modalImg.src = src;
}

function closeModal() {
  document.getElementById("imgModal").style.display = "none";
}
