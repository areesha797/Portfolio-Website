// ================= NAVBAR TOGGLE =================
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Close navbar menu when link is clicked (mobile)
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});

// ================= PROJECT IMAGE MODAL =================
function openModal(src) {
  // Create modal dynamically if not exists
  let modal = document.querySelector(".modal");
  if (!modal) {
    modal = document.createElement("div");
    modal.classList.add("modal");
    modal.innerHTML = `<span class="close">&times;</span><img src="${src}" alt="Project Image">`;
    document.body.appendChild(modal);

    // Close modal when clicking close button
    modal.querySelector(".close").addEventListener("click", () => {
      modal.style.display = "none";
    });

    // Close modal when clicking outside the image
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  } else {
    modal.querySelector("img").src = src;
    modal.style.display = "flex";
  }

  modal.style.display = "flex";
}
