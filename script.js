var menuIcon    =   document.querySelector(".menu-icon")
var sidebar     =   document.querySelector(".sidebar")
var container   =   document.querySelector(".container")

menuIcon.onclick = function(){
    sidebar.classList.toggle("sidebar2")
    container.classList.toggle("large-container")
}
