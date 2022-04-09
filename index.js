/* change background-color nav */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.classList.add("nav-active");
  } else {
    header.classList.remove("nav-active");
  }
});
