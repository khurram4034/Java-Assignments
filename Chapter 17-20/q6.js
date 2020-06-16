// Task 6 (a)

document.write("Counting: " + "<br />"+ "<br />")

for(var i=1; i<15; i++){
  document.write(i + " , ")
}
document.write( "<br />"+ "<br />")
// Task 6 (b)

document.write("Reversve Counting: " + "<br />"+ "<br />")


for(var i=10; i>0; i--){
  document.write(i + " , ")
}


document.write( "<br />"+ "<br />")
// Task 6 (c)

document.write("Even : " + "<br />"+ "<br />")

var even = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

for(var i=0; i<even.length; i++){
  if(even[i] % 2 === 0){
    document.write(even[i] + " , ")
  }
}


document.write( "<br />"+ "<br />")
// Task 6 (d)

document.write("Odd : " + "<br />"+ "<br />")

var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

let odd = arr.filter(n => n%2)

document.write(odd + " , ")



document.write( "<br />"+ "<br />")
// Task 6 (e)

document.write("Series : " + "<br />"+ "<br />")

var even = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

for(var i=0; i<even.length; i++){
  if(even[i] % 2 === 0){
    document.write(even[i] + "k" + " , ")
  }
}

