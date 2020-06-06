document.write("<b>" + " Subject " +  " Total Marks " + " Obtained Marks " + " Percentage " + "</b>" + "<br>")

var a = prompt("Enter the First Subject");
var m1 = +prompt("Enter the Subject Marks");
var b = prompt("Enter the Second Subject");
var m2 = +prompt("Enter the Subject Marks");
var c = prompt("Enter the Third Subject");
var m3 = +prompt("Enter the Subject Marks");
var t = 100;

document.write( "<br>");
document.write(a + "&nbsp;&nbsp");
document.write(t + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp");
document.write(m1 + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp");
var p1 = ((m1*100)/t)
document.write(p1 + "%" + "<br>" + "<br>");

document.write(b + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp");
document.write(t + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp");
document.write(m1 + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp");
var p2 = ((m2*100)/t)
document.write(p2 + "%" + "<br>" + "<br>");

document.write(c + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp");
document.write(t + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp");
document.write(m1 + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp");
var p3 = ((m3*100)/t)
document.write(p3 + "%" + "<br>" + "<br>");

document.write("<b>" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp" + (t*3) + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp" +  (m1+m2+m3) + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp" + ((p1+p2+p3)/3) +"%" + "</b>" + "<br>")