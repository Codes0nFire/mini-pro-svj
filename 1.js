var cursor = document.querySelector(".cursor");

var main = document.querySelector(".main");

main.addEventListener("mousemove", function (elem) {
  cursor.style.left = elem.x + 10 + "px";

  cursor.style.top = elem.y + 10 + "px";
});

var hoverbutton = document.querySelector(".navright>button");

var line = document.querySelector(".line");

hoverbutton.addEventListener("mouseenter", () => {
  line.style.height = "150%";
});

hoverbutton.addEventListener("mouseleave", () => {
  line.style.height = "0%";
});

var mainimage = document.querySelector(".mainimage");

window.addEventListener("mousemove", function (elem) {
  mainimage.style.transform = `translate(${1 - elem.clientX * 0.07}px, ${
    1 - elem.clientY * 0.07
  }px)`;
});

var menu = document.querySelector(".menu");
var elem = document.querySelectorAll(".elem");

elem.forEach(function (dets) {
  dets.addEventListener("click", function () {
    menu.style.top = "-100%";
  });
});

menu.addEventListener("mousemove", function (elem) {
  cursor.style.left = elem.x + 10 + "px";

  cursor.style.top = elem.y + 10 + "px";
});

var load = document.querySelector(".load");

load.addEventListener("click", function () {
  menu.style.top = "0%";
});
