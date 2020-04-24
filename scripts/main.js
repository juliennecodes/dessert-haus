//So plain word description, displayed images changes every 5 seconds.

//Let's start with getting the references to the images.
var image = document.getElementsByClassName("jsImage");

//This returns an array of images.

//Then I need to hide the images except for the first one.
for (i = 0; i < image.length; i++) {
  image[i].classList.add("hide");
}

image[0].classList.add("active");

//Now I need to cycle through the images.
//I'll start with specific scenarios first.

// Scenario 1
// image[0].classList.toggle("active");
// image[1].classList.toggle("active");

// Scenario 2
// image[1].classList.toggle("active");
// image[2].classList.toggle("active");

//So the specifics in these scenarios are the index numbers
//It can be generalized to n and n+1, since they are just one apart
//the constants are image, classList, and toggle active

//This is the general version of the above code.
// function changeDisplay(indexNumberOfCurrent){
//   image[indexNumberOfCurrent].classList.toggle("active");
//   image[indexNumberOfCurrent + 1].classList.toggle("active");
// }

// The problem is going from the last slide to the first slide
// Eventually, the +1s will exceed the image length, so I need
// to reset the index number
//
// Resetting the index number from last slide, which is image.length-1
// to 0

// So the last slide scenario is

// image[4].classList.toggle("active");
// image[0].classList.toggle("active");

// For that to happen, I have to add a check in the form of if condition
//if condition checks for a specific scenario
//if condition watches out for a specific scenario to happen
//in this case, if I was on the last slide, I want the index number
//to be 0.

// if (image[i] === image[image.length - 1]){
//   image[i].classList.toggle("active");
//   image[0].classList.toggle("active");
// }


//Updating the changeDisplay function
// function changeDisplay(indexNumberOfCurrent){
//   if (image[indexNumberOfCurrent] === image[image.length - 1]){
//     image[indexNumberOfCurrent].classList.toggle("active");
//     image[0].classList.toggle("active");
//   }
//
//   else {
//     image[indexNumberOfCurrent].classList.toggle("active");
//     image[indexNumberOfCurrent + 1].classList.toggle("active");
//   }
// }

//now, these codes work
// changeDisplay(0);
// changeDisplay(1);
// changeDisplay(2);
// changeDisplay(3);
// changeDisplay(4);

//I just have to pass the information to change display.

// First things first, I have to get the information
//To get the information, I have to gain access to the relevant elements

// The relevant elements are the images, which I already have access to
// through the variable image

// I just have to extract the information
// image[0], image[1], whichever is currently active
// I need to get the index numbers
// for (i = 0; i < image.length; i++) {
//   if (image[i].classList.contains("active")) {
//     return i;
//   }
// }

//Putting the for loop in a function

function extractIndexNumber(){
  for (i = 0; i < image.length; i++) {
    if (image[i].classList.contains("active")) {
      return i;
    }
  }
}


//The above function extracts the index number of the current
//image. Now I just need to get that information to changeDisplay.

//I created a variable. It is assigned the value of a
// function, which is the extractIndexNumber. The function
// has the return keyword, making it basically a container
// for the information of the index number.
function changeDisplay(indexNumberOfCurrent){
  var indexNumberOfCurrent = extractIndexNumber();


  if (image[indexNumberOfCurrent] === image[image.length - 1]){
    image[indexNumberOfCurrent].classList.toggle("active");
    image[0].classList.toggle("active");
  }

  else {
    image[indexNumberOfCurrent].classList.toggle("active");
    image[indexNumberOfCurrent + 1].classList.toggle("active");
  }
}

//Part 2
//change every 5 seconds - amended because it was too long
//change every 2.5 seconds

window.setInterval(changeDisplay, 2500);
