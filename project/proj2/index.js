var isstatus = document.querySelector("h5");
var iconOne = document.querySelector(".like");
var iconTwo = document.querySelector(".comment");
var iconThree = document.querySelector(".share");
var iconFour = document.querySelector(".follow");
var iconFive = document.querySelector(".message");

var i = false;
var j = false;
var k = false;
var l = false;
var m = false;

iconOne.addEventListener("click", () => {
  i = !i;
  iconOne.style.backgroundColor = i ? "red" : "aquamarine";
});
iconTwo.addEventListener("click", () => {
  j = !j;
  iconTwo.style.backgroundColor = j ? "red" : "aquamarine";
});
iconThree.addEventListener("click", () => {
  k = !k;
  iconThree.style.backgroundColor = k ? "red" : "aquamarine";
});
iconFour.addEventListener("click", () => {
  l = !l;
  if (l == true) {
    iconFour.style.backgroundColor = "red";
    isstatus.innerHTML = "Following";
  } else {
    iconFour.style.backgroundColor = "aquamarine";
    isstatus.innerHTML = "Stranger";
  }
});
iconFive.addEventListener("click", () => {
  m = !m;
  iconFive.style.backgroundColor = m ? "red" : "aquamarine";
});
