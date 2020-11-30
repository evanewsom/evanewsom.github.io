
let backButton = document.getElementById("back-button");
backButton.onclick = function() {
    document.body.classList.add("content-fade")

    document.getElementById("animal-head").classList.add("hidden-animal")

    let delay = 700;
    setTimeout(function(){
        window.location = "index.html";
       },delay);
}