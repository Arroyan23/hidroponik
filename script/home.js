// menuliskan script

const ambilHumberger = document.querySelector(".humberger-menu");
const container = document.querySelector(".container");

ambilHumberger.addEventListener("click", () => {
  container.classList.toggle("active");
});
