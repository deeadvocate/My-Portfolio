"use strict"

let toggleNavStatus = false;

// let navBtn = document.querySelector(".nav-btn");

// navBtn.addEventListener("click", navFunc())

let sidebar = document.querySelector(".sidebar");

function navFunc(){

    if(toggleNavStatus === false){
                sidebar.style.visibility = "visible";
        toggleNavStatus = true;
    }

    else if (toggleNavStatus === true){
        let sidebar = document.querySelector(".sidebar");
        sidebar.style.visibility = "hidden";
        toggleNavStatus = false;
    }
}

function displayFunc () {
    sidebar.style.visibility = "hidden";
}