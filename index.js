window.onload = function () {
  console.log("document.onload", Date.now(), Date.now());
  var canvas = document.querySelector("#canvas");
  var ctx = canvas.getContext("2d");

  // Rectangle with gradient
ctx.beginPath();

// Create gradient
var grd = ctx.createLinearGradient(0, 0, 1000, 300);
grd.addColorStop(0, "#a3c2c2");
grd.addColorStop(1, "#2c4459");

// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(0, 0, 1000, 300);

var img = new Image(400, 320);
img.src = "images/img20.png"; 
img.onload = function () {
  ctx.beginPath();
  ctx.drawImage(img, 0, -10);
  ctx.drawImage(img, 350, 110, 200, 175);
  ctx.drawImage(img, 500, 130, 200, 175);

  // Set font and measure text width
  ctx.font = "italic 48px arial";
  var text = "Passion for footwear";
  var textWidth = ctx.measureText(text).width;

  // Center the text horizontally
  var x = (1000 - textWidth) / 2;  // Center horizontally on a 1000px wide canvas
  var y = 100;  // Moved the y position up (reduced y-value)

  // Draw the text
  ctx.fillStyle = "#e4fce5";
  ctx.fillText(text, x, y - 2);  // Slightly adjusted to overlap the white text
  ctx.fillStyle = "#e4fce5";
  ctx.fillText(text, x, y);

  ctx.save();
  ctx.translate(920, 70);
  ctx.rotate(Math.PI / 2);
  ctx.font = "bold 38px arial";
  ctx.textAlign = "left";
  ctx.fillStyle = "rgba(60,60,60, 0.8)";
  ctx.fillText("Shoe love", -2, -2);
  ctx.fillStyle = "#e4fce5";
  ctx.fillText("Shoe love", 0, 0);
  ctx.restore();

  var startX = 700;
  var startY = 45;

  ctx.strokeStyle = "#ffffff";

  // Removed the two mountain lines on the top right
};

  // Open form when button is clicked
  var myBtn = document.querySelector("#myBtn");
  myBtn.addEventListener("click", openForm, false);

  // Form and close button setup
  var myForm = document.querySelector("#myForm");
  var closeFormBtn = document.querySelector("#close");  // Use the correct ID for form close button
  closeFormBtn.addEventListener("click", closeForm, false);  // Attach event to form's close button

  // Open form function
  function openForm() {
    myForm.style.display = "block";  // Show the form
  }

  // Close form function
  function closeForm() {
    myForm.style.display = "none";  // Hide the form
  }

  // Menu setup
  var main = document.querySelector("#main");
  var myMenu = document.querySelector("#myMenu");
  var closeMenuBtn = document.querySelector("#closeMenu");  // Correct ID for menu close button
  var nav = document.querySelector("#nav");

  // Open menu function
  myMenu.addEventListener("click", openMenu, false);
  closeMenuBtn.addEventListener("click", closeMenu, false);

  function openMenu() {
    nav.style.display = "block";  // Show the navigation menu
    myMenu.style.display = "none"; // Hide the menu button
    main.style.marginLeft = "25%"; // Adjust the layout
  }

  // Close menu function
  function closeMenu() {
    nav.style.display = "none";  // Hide the navigation menu
    myMenu.style.display = "block"; // Show the menu button again
    main.style.marginLeft = "0"; // Reset the layout
  }
};

// Scroll function to handle back-to-top button visibility
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
    document.getElementById("myBtnTop").style.display = "block";  // Show back-to-top button
  } else {
    document.getElementById("myBtnTop").style.display = "none";  // Hide back-to-top button
  }
}

// Scroll to top function
function topFunction() {
  document.body.scrollTop = 0;  // Safari
  document.documentElement.scrollTop = 0;  // Other browsers
}



