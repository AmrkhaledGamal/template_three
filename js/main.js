//  button-up

let buttonUp = document.querySelector(".up");

window.onscroll = function () {
  if (this.scrollY >= 1000) {
    buttonUp.classList.add("show");
  } else {
    buttonUp.classList.remove("show");
  }
};

buttonUp.onclick = () => {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
};

//  mega menu

let megaMenu = document.querySelector(".mega-menu");
let menuAll = document.querySelector(".other-links");
let landing = document.querySelector(".landing");

menuAll.addEventListener("click", () => {
  megaMenu.classList.toggle("mega-menu-open");
});

landing.onclick = function () {
  megaMenu.classList.remove("mega-menu-open");
};
