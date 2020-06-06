var totalMark = +prompt("Enter the total Marks");
var markObtained = +prompt("Enter the obtained Marks");

document.write("Total Marks: " + totalMark + "<br>");
document.write("Marks Obtained: " + markObtained + "<br>");

document.write("Percentage: " + ((markObtained*100)/totalMark) + " % ");