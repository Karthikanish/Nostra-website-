//Selecting Side Navbar


var sidenavbaractivate =document.getElementById("sidenavbaractivate")
var sidenavbar = document.getElementById("sidenavbar")
var closenav= document.getElementById("closenav")


sidenavbaractivate.addEventListener("click",function()
{
    sidenavbar.style.left=0
})

closenav.addEventListener("click",function(){
    sidenavbar.style.left="-60%"
})

//offer bar
var offerclose =document.getElementById("offerclose")
var offerbar = document.getElementById("offerbar")

offerclose.addEventListener("click",function(){
    offerbar.style.display="none"
})

//slider

//var sliderrightactivate = document.getElementById("sliderrightactivate")
//var sliderimage = document.getElementById("sliderimage")
//var sliderimagcontainer = document.querySelectorAll("slide-image-container")


//sliderrightactivate.addEventListener("click",function(sliderimage){
  // sliderimage.array.forEach(sliderimage => style.transform {'counter * 100'}%)
//})




