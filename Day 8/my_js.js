document.getElementById("length").addEventListener("click",showlength);
function showlength(){
   var name= document.getElementById("name").value;
   document.getElementById("showl").innerText=name.length;
}