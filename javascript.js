function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    

    if (username == "kr.admin@krstudio.in" && password == "Rockin") {
        document.getElementById("content1").style.display = "block";
        document.getElementById("login").style.display = "none"
    } else if (username == "krishfans.fans@krstudio.in" && password == "Onthebgm") {
        document.getElementById("content2").style.display = "block";
        document.getElementById("login").style.display = "none"
    } else {
        alert("Incorrect username or password");
    }
}
function logout1(){
    document.getElementById("content1").style.display = "none"
    document.getElementById("logout").style.display = "block"
}


function hide1(){
    document.getElementById("hide1").style.display = "none"
    document.getElementById("hidebtn1").style.display = "none"
}

function logout2(){
    document.getElementById("content2").style.display = "none"
     document.getElementById("logout2").style.display = "block"
}
function hide2(){
    document.getElementById("hide2").style.display = "none"
    document.getElementById("hidebtn2").style.display = "none"
}
