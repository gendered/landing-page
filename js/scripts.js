var width = window.innerWidth;
var height = window.innerHeight;
var center = {x: width / 2, y: height / 2};
var mouse = {x: 0, y: 0};

var section = document.querySelector(".right-container");
var words = section.querySelectorAll("span");

section.onmousemove = function(event) {
  move(event)
};

function move(e) {
  mouse.x = e.clientX;
  mouse.y = e.clientY;

  for(var w of words) {
    var b = w.getBoundingClientRect();
    var wc = {
      x: (b.left + b.right) / 2,
      y: (b.top + b.bottom) / 2
    };

    var dist = {
      x: Math.abs(mouse.x - wc.x),
      y: Math.abs(mouse.y - wc.y)
    };

    var norm = Math.sqrt(dist.x * dist.x + dist.y * dist.y);

    w.style.transform = "scale(" + map(norm, width/2, 1.5, 0) + ", 1)";

  }

}

function map(value, b, c, d) {
  // assuming the bottom of the value's initial range, a, is 0
  return (value - 0) * (d - c) / (b - 0) + c;
}
