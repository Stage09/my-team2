let elNavbarWrapper = document.querySelector(".navbar-wrapper")
let elNavbar = document.querySelector(".navbar")


function heandedlHambergerBtnClick(){
    elNavbarWrapper.classList.toggle("show-wrapper")
    elNavbar.classList.toggle("show-navbar")
}

function handleCloseNavbar(){
    elNavbarWrapper.classList.remove("show-wrapper")
    elNavbar.classList.remove("show-navbar")
}
elNavbarWrapper.addEventListener("click", function(evt){
    if(evt.target.id == "wrapper"){
        elNavbarWrapper.classList.remove("show-wrapper")
        elNavbar.classList.remove("show-navbar")    
    }
})