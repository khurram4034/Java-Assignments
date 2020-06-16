var mark1 = +prompt("Enter First Subject Marks");
var mark2 = +prompt("Enter Second Subject Marks");
var mark3 = +prompt("Enter Third Subject Marks");

var total = 300;
var c = (mark1+mark2+mark3);
var p = ((c*100)/total);



document.write("<h1><b>Marks Sheet</b></h1>");

document.write("Total Marks : " + "  " + total + "<br>");

document.write("Marks Obtaind : " + "  " + c + "<br>");

document.write("Percentage : " + "  " +  p  + "%" +  "<br>");

if(p >= 80 && p <= 100){
    document.write("Grade : " + " A +" + "<br>");
    document.write("Remarks : " + " Excellet " + "<br>");
}
else if(p >= 70 && p <= 80){
    document.write("Grade : " + " A " + "<br>");
    document.write("Remarks : " + " Very Good " + "<br>");
}
else if(p >= 60 && p <= 70){
    document.write("Grade : " + " B " + "<br>");
    document.write("Remarks : " + " You Need to Improve " + "<br>");
}
else if(p >= 50 && p <= 60){
    document.write("Grade : " + " C " + "<br>");
    document.write("Remarks : " + " You Need to Improve " + "<br>");
}
else if(p >= 40 && p <= 50){
    document.write("Grade : " + " D " + "<br>");
    document.write("Remarks : " + " You Need to Improve" + "<br>");
}
else if(p >= 33 && p <= 40){
    document.write("Grade : " + " E " + "<br>");
    document.write("Remarks : " + " Poor" + "<br>");
}
else{
    document.write("Grade : " + " Fail " + "<br>");
    document.write("Remarks : " + " Try Again +" + "<br>");
}






