

myID = document.getElementById("back-to-top");

var myScrollFunc = function () {
    var y = window.scrollY;
    if (y >= 50) {
        myID.setAttribute("style", "display: block")
    } else {
        myID.setAttribute("style", "display: none")
    }
};

window.addEventListener("scroll", myScrollFunc);