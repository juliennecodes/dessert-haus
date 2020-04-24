//Getting reference to relevant elements.
var image = document.getElementsByClassName("jsImage");

//Hiding images except for the first.
for (i = 0; i < image.length; i++) {
  image[i].classList.add("hide");
}

image[0].classList.add("active");

//Extracts index number of the current image.
function extractIndexNumber() {
  for (i = 0; i < image.length; i++) {
    if (image[i].classList.contains("active")) {
      return i;
    }
  }
}

//Changes displayed image.
function changeDisplay(indexNumberOfCurrent) {
  var indexNumberOfCurrent = extractIndexNumber();

  if (image[indexNumberOfCurrent] === image[image.length - 1]) {
    image[indexNumberOfCurrent].classList.toggle("active");
    image[0].classList.toggle("active");
  } else {
    image[indexNumberOfCurrent].classList.toggle("active");
    image[indexNumberOfCurrent + 1].classList.toggle("active");
  }
}

//Changes displayed image every 2.5 seconds
window.setInterval(changeDisplay, 2500);
