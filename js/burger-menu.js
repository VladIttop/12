// document.addEventListener("DOMContentLoaded", function () {
//   const menuIcon = document.querySelector(".nav-menu__toggle");
//   const menu = document.querySelector(".header-right-list");
//   const closeMenu = document.querySelector(".nav-menu__icon");
//   const link = document.querySelectorAll(".header-right-list__link");

//   menuIcon.addEventListener("click", function () {
//     menu.classList.toggle("show");
//     closeMenu.style.display = "block";
//     document.body.style.overflow = "hidden";
//   });

//   closeMenu.addEventListener("click", () => {
//     menu.classList.remove("show");
//     closeMenu.style.display = "none";
//     document.body.style.overflow = "auto";
//   });

//   link.addEventListener("click", () => {
//     menu.classList.remove("show");
//     closeMenu.style.display = "none";
//     document.body.style.overflow = "auto";
//   });
//   document.body.style.overflow = "auto";
// });

document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".nav-menu__toggle");
  const menu = document.querySelector(".header-right-list");
  const closeMenu = document.querySelector(".nav-menu__icon");
  const links = document.querySelectorAll(".header-right-list__link");

  menuIcon.addEventListener("click", function () {
    menu.classList.toggle("show");
    closeMenu.style.display = "block";
    document.body.style.overflow = "hidden";
  });

  closeMenu.addEventListener("click", () => {
    menu.classList.remove("show");
    closeMenu.style.display = "none";
    document.body.style.overflow = "auto";
  });

  links.forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("show");
      closeMenu.style.display = "none";
      document.body.style.overflow = "auto";
    });
  });

  document.body.style.overflow = "auto";
});

