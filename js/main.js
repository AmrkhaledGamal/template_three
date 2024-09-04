let buttonUp = document.querySelector(".up");

window.onscroll = function () {
  if (this.scrollY >= 1000) {
    buttonUp.classList.add("show");
  } else {
    buttonUp.classList.remove("show");
  }
  // this.scrollY >= 1000
  //   ? buttonUp.classList.add("show")
  //   : buttonUp.classList.remove("show");
};

buttonUp.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// buttonUp.addEventListener("click", () => {
//   window.scrollTo({
//     top: 0,
//     behavior: "smooth",
//   });
// });
