//Show menu
function showMenu(){
  let menu = document.getElementsByClassName("jsMenu")[0];
  menu.classList.toggle("active");
}

//Event listener for showMenu
let burger = document.getElementsByClassName("jsBurger")[0];
burger.onclick = function(){ showMenu(); };
