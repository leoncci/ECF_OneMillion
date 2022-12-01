myID = document.getElementById("back-to-top");

window.addEventListener("scroll", function () {
    var y = window.scrollY;
    if (y >= 50) {
        myID.setAttribute("style", "display: block")
    } else {
        myID.setAttribute("style", "display: none")
    }
});