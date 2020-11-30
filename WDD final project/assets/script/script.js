
let bunny = document.getElementById("bunny");
let hamster = document.getElementById("hamster");
let rat = document.getElementById("rat");
let chinchilla = document.getElementById("chinchilla");

function selectAnimal(animalName) {

    document.getElementById("home-text").classList.add("hidden-text")

    let animals = document.getElementsByClassName("animal");
    for (i = 0; i < animals.length; i++) {
        animals[i].classList.add("hidden-" + animals[i].id);
    }

    let delay = 800;
    setTimeout(function(){
        window.location = animalName + "-page.html";
       },delay);
}

bunny.onclick = function() {
    selectAnimal("bunny");
}
hamster.onclick = function() {
    selectAnimal("hamster");
}
rat.onclick = function() {
    selectAnimal("rat");
}
chinchilla.onclick = function() {
    selectAnimal("chinchilla");
}

