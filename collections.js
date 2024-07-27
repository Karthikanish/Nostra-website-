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


//Product Search Funtionality
var products = document.getElementById("products")
var navbarsearch = document.getElementById("navbarsearch")
var productlist = products.querySelectorAll("div")

navbarsearch.addEventListener("keyup",function(){
    var enteredValu =event.target.value.toUpperCase()

    for(count = 0; count<productlist.length; count=count+1)

    {
        var productname = productlist[count].querySelector("h1").textContent

        if(productname.toUpperCase().indexOf(enteredValu)<0)
        {
            productlist[count].style.display="none"
        }
        else
        {
            productlist[count].style.display="block"
        }

    }
})
