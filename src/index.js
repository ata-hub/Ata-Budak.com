const hamburgerBtn=document.getElementById("hamburger")
const navlist=document.getElementById("nav-list")

function toggleButton(){
    navlist.classList.toggle("show")

}

hamburgerBtn.addEventListener("click", toggleButton)
