"use strict";

// DOM variables
var burger = document.getElementById("burger");
var sideNav = document.getElementsByClassName("side-nav")[0];
var links = document.getElementsByClassName("link");
var buttons = document.getElementsByTagName("button");

var remove = document.getElementById("submit");
var removeName = document.getElementById("name");
var removeSurname = document.getElementById("surname");
var removeNumber = document.getElementById("number");

var remove2 = document.getElementById("submit2");
var removeName2 = document.getElementById("name2");
var removeSurname2 = document.getElementById("surname2");
var removeNumber2 = document.getElementById("number2");

var submit = document.getElementById("submit");
var name = document.getElementById("name");
var surname = document.getElementById("surname");
var number = document.getElementById("number");

var submit2 = document.getElementById("submit2");
var name2 = document.getElementById("name2");
var surname2 = document.getElementById("surname2");
var number2 = document.getElementById("number2");

// Feature section slide while pressing buttons
for(var x of buttons) {
  x.addEventListener("click", function(){
    var index = this.getAttribute("index");
    swiper2.slideTo(index, 1000);
  });
}

// Burger and Side Navigation transformation
burger.addEventListener("click", function(){
  sideNav.classList.toggle("width");
  this.classList.toggle("rotateZ");
  // sideNav.classList.toggle("hide");
});


// Burger and side navigation bar actions
window.addEventListener("resize", function(){
  if(window.innerWidth > 700) {
    sideNav.classList.remove("width");
    burger.classList.remove("rotateZ");
  }
});

// Top page trial submit form
submit.addEventListener("click", function(){
  if(name.value === ""|| surname.value === "" || number.value === "" ){
    alert (" ⛔ Please fill all fields ⛔");
  } else if (name.value > 0 || name.value == 0 || name.value < 0 || surname.value > 0 || surname.value == 0 || surname.value < 0) {
    alert (" ⛔ Please fill all fields correctly ⛔");
  } else {
    alert(" ✨ Congratulations! Enjoy Your Free Trial! ✨ ");
  }
});
        // Removing input fields after submission
remove.addEventListener("click", () => {
    removeName.value = '';
    removeSurname.value = '';
    removeNumber.value = '';
});


// Bottm page trial submit form
submit2.addEventListener("click", function(){
  if(name2.value === ""|| surname2.value === "" || number2.value === "" ){
    alert (" ⛔ Please fill all fields ⛔");
  } else if (name2.value > 0 || name2.value == 0 || name2.value < 0 || surname2.value > 0 || surname2.value == 0 || surname2.value < 0) {
    alert (" ⛔ Please fill all fields correctly ⛔");
  } else {
    alert(" ✨ Congratulations! Enjoy Your Free Trial! ✨ ");
  }
});
      // Removing input fields after submission
remove2.addEventListener("click", () => {
    removeName2.value = '';
    removeSurname2.value = '';
    removeNumber2.value = '';
});
