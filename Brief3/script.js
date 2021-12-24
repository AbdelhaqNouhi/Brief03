var menu = document.querySelector("div.menu")
console.log(menu)
menu.addEventListener("click", function() {
    var nav = document.querySelector(".nav-links")
    console.log(nav)
    nav.style.transform = "translate(0)"
})