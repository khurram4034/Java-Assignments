var arr = ['Karachi', 'Lahore', 'Islamabad', 'Quetta', 'Peshawar'];

document.write("City List :" + "<br />")
for(var i=0; i< arr.length; i++){
       
       document.write( arr[i] + " , ")
}

document.write("<br />" + "<br />" + "Selected City List :" + "<br />")
var selectedCitys = arr.splice(2, 2,);

document.write( selectedCitys + " , ")