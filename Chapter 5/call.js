var num1 = +prompt("Enter Your First Number");
var opp = prompt("Enter the Operator");
var num2 = +prompt("Enter the Second Number");
if(opp == '-'){
    document.write(" Subtraction of " + num1 + " and " + num2 + " is " + (num1 - num2))
}
else if(opp == '*'){
    document.write(" Multiplication of " + num1 + " and " + num2 + " is " + (num1 * num2))
}
else if(opp == '/'){
    document.write(" Division of " + num1 + " and " + num2 + " is " + (num1 / num2))
}
else if(opp == '%'){
    document.write(" Modulus of " + num1 + " and " + num2 + " is " + (num1 / num2))
}