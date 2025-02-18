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

// skills
let ourSkills = document.querySelector(".our-skills .skills");

window.onscroll = function () {
  let skillsOffsetTop = ourSkills.offsetTop;
  // let skillsOffsetHeight = ourSkills.offsetHeight; = ourSkills.scrollHeight
  let windowHeight = this.innerHeight;
  // let windowScrollTop = this.pageYOffset;  = window.scrollY
  if (
    window.scrollY >
    skillsOffsetTop + ourSkills.scrollHeight - windowHeight
  ) {
    let skillBar = document.querySelectorAll(".our-skills .content span");

    skillBar.forEach((skill) => {
      skill.style.width = skill.dataset.progress;
    });
  }
};
