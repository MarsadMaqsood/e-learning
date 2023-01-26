// let button = document.querySelector("#header button");
// let menu = document.querySelector("#header ul");

// button.addEventListener("click", function(){
//     menu.classList.toggle("active");
// });


window.onload = function() {
    let button = document.querySelector("#header button");
    let menu = document.querySelector("#header ul");
    button.addEventListener("click", function(){
        menu.classList.toggle("active");
    });
};