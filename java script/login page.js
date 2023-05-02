
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "123" && password == "123"){
alert ("Login successfully");
window.location = "Student Affairs.html";
return false;
}
else{
alert("Failed to sign in! Please check your credentials and try again.");
}
}