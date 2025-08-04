let btn = document.querySelector("button");
let inp = document.querySelector("input");
let container = document.querySelector(".container");
let iconI = document.querySelector("i");

btn.addEventListener("click", () => {
    inp.classList.toggle("inpShow");
    
    iconI.classList.toggle("iconRotate");

    if(inp.classList.contains("inpShow")) {
        inp.focus();
    }
})

