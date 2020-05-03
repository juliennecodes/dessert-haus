//Plain description
//When you click on the burger Menu
//the list of menu is displayed
//when you click it again
//the list of menu disappears

// Part 1 - the menu is displayed
//Get the relevant elements

let menu = document.getElementsByClassName("jsMenu")[0];

//Menu is displayed
menu.classList.toggle("active");

//showMenu function
function showMenu(){
  menu.classList.toggle("active");
}

//When you click the burger
let burger = document.getElementsByClassName("jsBurger")[0];
burger.onclick = function(){showMenu();};

//Cleaned up code
function showMenu(){
  let menu = document.getElementsByClassName("jsMenu")[0];
  menu.classList.toggle("active");
}

let burger = document.getElementsByClassName("jsBurger")[0];
burger.onclick = function(){showMenu();};
