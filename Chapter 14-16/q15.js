var arr = ['Apple', 'Samsung', 'Motorola', 'Nokia', 'Sony & Haier'];

document.write("<select>")
for(var i=0; i< arr.length; i++){
       document.write("<option>" + arr[i] + "</option>")
}
document.write("</select>")
