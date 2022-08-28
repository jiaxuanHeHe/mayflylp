const menu = document.querySelector(".menu")
const close = document.querySelector(".close")
const nav = document.querySelector("nav")

menu.addEventListener("click", () => {
    nav.classList.add("open_nav");
})

close.addEventListener("click", () => {
    nav.classList.remove("open_nav");
})

document.addEventListener("click",(e)=> {
    if(nav.classList.contains("open_nav") && !nav.classList.contains(e.target.className) && 
    e.target.className.baseVal != "menu") {
        nav.classList.remove("open_nav");
    }
})

