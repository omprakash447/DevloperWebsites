const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
    document.body.classList.toggle("dark")
})
let dots = document.getElementById("dots");
let nav2 = document.getElementById("nav2");
let logo = document.getElementById("logo");
let exit = document.getElementById("exit");
let container2 = document.getElementById("container2");
let content = document.getElementById("content");
let autotype = document.getElementById("autotype");
let spotify = document.getElementById("spotify");
let crossbtn = document.getElementById("crossbtn");
let imga = document.getElementById("imga");
let hi = document.getElementById("hi");
let view = document.getElementById("view");
let btncenter = document.getElementById("btncenter");
let button1 = document.getElementById("button1");
let requested = document.getElementById("requested");
let visualmain = document.getElementById("visualmain");
let email = document.getElementById("email").value;
let inptbtn = document.getElementById("inptbtn");
let worktogether = document.getElementById("worktogether");
let myemail = document.getElementById("myemail");
let my = document.getElementById("my");
let copy = document.getElementById("copy");



dots.addEventListener("click", function() {
    nav2.style.display = "block";
    nav2.style.position = "fixed";
    hi.style.display = "none";
    view.style.display = 'none';
    btncenter.style.display = "none";
    // container2.style.display="none";
});

exit.addEventListener("click", function() {
    nav2.style.display = "none";
    hi.style.display = "block";
    view.style.display = 'block';


});


var typed = new Typed(".autotype", {
    strings: ["Om prakash lenka", "a Web Devloper", "a Problem solver", "a Achiver", "a Haerd Worker", "a Quick learner"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true

});


button1.addEventListener("click", function() {
    requested.style.display = "block";
    visualmain.style.display = "none";

})



// let inp="@gmail.com";
// inptbtn.addEventListener("click",function(){
//     if(email==inp){
//         alert("Thanx");
//     }
//     else{
//         alert("thnx...")
//     }

// })
inptbtn.addEventListener("click", function() {
    worktogether.style.display = "none";
    myemail.style.display = "block";
})



// img
let img1click = document.getElementById("img1click");
let btnfull = document.getElementById("btnfull");
let full = document.getElementById("full");
let img2click = document.getElementById("img2click");
let full1 = document.getElementById("full1");
let img3click = document.getElementById("img3click");
let full2 = document.getElementById("full2");
let img4click = document.getElementById("img4click");
let full3 = document.getElementById("full3");
let img5click = document.getElementById("img5click");
let full4 = document.getElementById("full4");
let img6click = document.getElementById("img6click");
let full5 = document.getElementById("full5");


img1click.addEventListener("click", function() {
    full.style.display = "block";
    btnfull.style.display = "block";
})

img2click.addEventListener("click", function() {
    full1.style.display = "block";
    btnfull.style.display = "block";
})

img3click.addEventListener("click", function() {
    full2.style.display = "block";
    btnfull.style.display = "block";
})

img4click.addEventListener("click", function() {
    full3.style.display = "block";
    btnfull.style.display = "block";
})

img5click.addEventListener("click", function() {
    full4.style.display = "block";
    btnfull.style.display = "block";
})

img6click.addEventListener("click", function() {
    full5.style.display = "block";
    btnfull.style.display = "block";
})

btnfull.addEventListener("click", function() {
    full.style.display = "none";
    btnfull.style.display = "none";
    full1.style.display = "none";
    full2.style.display = "none";
    full3.style.display = "none";
    full4.style.display = "none";
    full5.style.display = "none";

})


// form



document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    if (name && email && password) {
        document.getElementById('form').classList.add('hidden');
        document.getElementById('successMessage').classList.remove('hidden');
    }
});

let form = document.getElementById("main");
let mainbtn = document.getElementById("mainbtn");


setTimeout(function() {
    form.style.display = "block";

}, 4000)
mainbtn.addEventListener("click", function() {
    form.style.display = "none";
})


// scroll to top

btn2.addEventListener("click", function() {
    window.scrollTo(0, 0);
})