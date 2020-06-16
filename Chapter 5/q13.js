var fs = prompt("Enter Your Favirit Snake ");
var age = +prompt("Enter Your Age ");
var mage = +prompt("Enter Your Maximum Age ");
var sday = +prompt("Enter Amount of snakes per day ");

document.write("Favorite Snake : " + fs + "<br>");

document.write("Current Age : " + age + "<br>");

document.write("Estimated Maximum Age : " + mage + "<br>");

document.write("Amount of Snake per Day : " + sday + "<br>");

document.write("You will need " + ((mage-age)*3) + " " + fs + " to last you to untill the ripe old age of " + mage + "<br>");