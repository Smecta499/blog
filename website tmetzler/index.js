let gith = document.querySelector(".gith");
let projects = document.querySelector(".projects");
let about = document.querySelector(".about");
let admin = document.querySelector(".admin");

gith.addEventListener("click", () => {
  window.location.href = "./github.html";
});

projects.addEventListener("click", () => {
  window.location.href = "./projects.html";
});

about.addEventListener("click", () => {
  window.location.href = "./about.html";
});

admin.addEventListener("click", () => {
  window.location.href = "./admin.html";
});
