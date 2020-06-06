var a = 2;
var b = 1;

document.write("a is  : " + a + "<br>");
document.write("b is  : " + b + "<br>");

var c = --a - --b + ++b + b--;
document.write("Result is  : " + c + "<br>");

c = --a ;
document.write("Result is  : " + c + "<br>");

c = --a - --b;
document.write("Result is  : " + c + "<br>");

c = --a - --b + ++b;
document.write("Result is  : " + c + "<br>");

c = --a - --b + ++b + b--;
document.write("Result is  : " + c + "<br>");
