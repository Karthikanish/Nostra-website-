//Selecting Side Navbar


var sidenavbaractivate =document.getElementById("sidenavbaractivate")
var sidenavbar = document.getElementById("sidenavbar")
var closenav= document.getElementById("closenav")


sidenavbaractivate.addEventListener("click",function()
{
    sidenavbar.style.left=0
})

closenav.addEventListener("click",function(){
    sidenavbar.style.left="-50%"
})