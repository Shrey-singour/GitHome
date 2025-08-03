let btn1 = document.querySelector("#hamburger");
let btn2 = document.querySelector("#cross");
let container = document.querySelector(".container");
let navBar = document.querySelector(".navBtn");
let navList = document.querySelector(".navList");


btn1.addEventListener("click", function() {
    onRotate();
})


btn2.addEventListener("click", () => {

    container.classList.toggle("rotateContainer");
    navBar.classList.toggle("rotateNav");
    navList.classList.toggle("moveX")

})


function onRotate() {
    container.classList.add("rotateContainer");
    navBar.classList.add("rotateNav");
    navList.classList.add("moveX");

}

