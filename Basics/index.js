// DOM -> Document Object Model

// 4 Pillars of DOM

// 1. Selection of an Element
// 2. Changing HTML
// 3. Changing CSS
// 4. Event Listeners

const bulb = document.querySelector("#bulb");
const btn = document.querySelector("button");

var f = 0;

btn.addEventListener("click", () => {
  if (f === 0) {
    bulb.style.backgroundColor = "yellow";
    btn.innerHTML = "OFF";
    f = 1;
  } else {
    bulb.style.backgroundColor = "aqua";
    btn.innerHTML = "ON";
    f = 0;
  }
});
