const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world";

let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/carton.PNG") {
    myImage.setAttribute("src", "images/firefox2.png");
  } else {
    myImage.setAttribute("src", "images/carton.PNG");
  }
};

let myButton = document.querySelector("button");
// here name = undifined
// if we use other name instead of "name" then work write
// we can change "name" string to "naming" or something else
// I was set name is Bepul
myButton.onclick = function () {
  if (
    !localStorage.getItem("name") ||
    localStorage.getItem("name") == "undefined"
  ) {
    setUserName();
  } else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "Mozilla is cool and stored , " + storedName;
  }
};

function setUserName() {
  let myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.innerHTML = "Mozilla is cool, " + myName;
  }
}
