let nextBtn = document.querySelector("#next");
let prevBtn = document.querySelector("#previous");
let circles = document.querySelectorAll(".circles");
let lines = document.querySelectorAll(".lines");

let counterCircle = 1;
let counterLine = 0;

nextBtn.addEventListener("click", function() {

    counterCircle++ ;
    counterLine++ ;

    if(counterCircle > circles.length) {
        counterCircle = circles.length;
    }

    updateCircle() ;


    if(counterLine > lines.length) {
        counterLine = lines.length;
    }

    updateLine() ;
})


prevBtn.addEventListener("click", function() {

    counterCircle-- ;
    counterLine-- ;

    if(counterCircle < 1) {
        counterCircle = 1 ;
    }

    updateCircle() ;


    if(counterLine < 0) {
        counterLine = 0 ;
    }

    updateLine() ;
})


function updateCircle() {

    circles.forEach((circle, idx) => {

        if(idx < counterCircle) {
            circle.classList.add("activeCircle");
        }else{
            circle.classList.remove("activeCircle");
        }
    })

}

function updateLine() {

    lines.forEach((line, idx) => {
        if(idx < counterLine) {
            line.classList.add("activeLine");
        }else{
            line.classList.remove("activeLine");
        }
    })

}


    nextBtn.disabled = false;
    prevBtn.disabled = false;


if(counterCircle == circles.length) {
    nextBtn.disabled = true;
}

else if(counterCircle == 1) {
    prevBtn.disabled = true;
}

    