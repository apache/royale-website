document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".topMenu-dropbtn");
  const menu = document.querySelector(".topMenu");

  if (!btn || !menu) return;

  btn.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    menu.classList.toggle("is-open");
  });

  menu.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  document.addEventListener("click", () => {
    menu.classList.remove("is-open");
  });
});
