let goTopBtn = document.getElementsByClassName("go-to-top");

var username1;
var usernumber1;
var useremail1;
var useraddress1;
function fillTable() {
    username1 = document.getElementById("name").value;
    usernumber1 = document.getElementById("phone").value;
    useremail1 = document.getElementById("email").value;
    useraddress1 = document.getElementById("address").value;
    document.getElementById("name1").innerHTML = username1;
    document.getElementById("number1").innerHTML = usernumber1;
    document.getElementById("e-mail1").innerHTML = useremail1;
    document.getElementById("address1").innerHTML = useraddress1;
    document.getElementById("user-date").style.display = "table";
    /*console.log(username1);
    console.log(usernumber1);
    console.log(useremail1);
    console.log(useraddress1);*/
}
