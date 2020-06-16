var item = ["apple", "banana", "mango", "orange", "strawberry"];

for(var i=0; i<item.length; i++){
    document.write(item[i] + "<br />")
    
}
document.write("<br />")

var item2 = item.slice(0,5)

for(var j=0; j<5; j++){
    document.write(" element at index " + j + " is " + item2[j] +"<br />")
    
    
}
