var num = +prompt(" Enter the Table Number ");
document.write("Table of "+ num + "<br>")

for(var i=1; i<=10;  i++){
    
    document.write(num + "x" + i + " = " + (num*i) + "<br>")
}
