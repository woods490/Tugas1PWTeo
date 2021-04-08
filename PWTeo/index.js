window.onscroll = function() {myFunction()};

var navbar = document.getElementById("headermenu");
var sticky = navbar.offsetTop;
let bg = document.getElementById("bg");
let moon = document.getElementById("moon");
let text = document.getElementById("text");

window.addEventListener('scroll', function(){
    var value = window.scrollY;

    bg.style.top = value * 0.5 + "px";
    moon.style.top = value * 0.8 + "px";
})

function myFunction(){
    if (window.pageYOffset >= sticky){
        navbar.classList.add("sticky")
    }else{
        navbar.classList.remove("sticky");
    }
}

function validation(){
    var form = document.getElementById("box");
    var email= document.getElementById("email").value;
    var text = document.getElementById("peringatan");
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(email.match(pattern))
    {
        form.classList.add("valid");
        form.classList.remove("invalid");
        text.innerHTML = "Your Email Address is Correct";
        text.style.color = "#00ff00";
    }else{
        form.classList.remove("valid");
        form.classList.add("invalid");
        text.innerHTML = "Your Email Address is Incorrect";
        text.style.color = "#ff0000"
    }

    if (email == ""){
        form.classList.remove("valid");
        form.classList.remove("invalid");
        text.innerHTML = "";
    }
}

function showmember(){
    var x = document.getElementsByClassName("inactive");
    if (x.style.display === "none"){
        x.style.display = "block";
    }else{
        x.style.display = "none";
    }
}