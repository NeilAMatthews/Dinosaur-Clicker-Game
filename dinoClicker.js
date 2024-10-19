var gameData = {
    dinoEggs: 0,
    dinoEggsMake: 1000000,

    veloRaptor: 0,
    raptorMake: 0,
    raptorCost: 10,

    diloSaur: 0,
    diloMake: 0,
    diloCost: 100,

    ankyloSaur: 0,
    anklyoMake: 0,
    ankyloCost: 1000,

    alamoSaur: 0,
    alamoMake: 0,
    alamoCost:10000,

    stegoSaur: 0,
    stegoMake: 0,
    stegoCost: 100000,

    jaxaSaur: 0,
    jaxaMake: 0,
    jaxaCost: 1000000,

}

// Makes the bank numbeer go up depending on the intput
function dinoClick(input) {
    gameData.dinoEggs += input; 
    document.getElementById("dinoEggs").innerHTML = gameData.dinoEggs; // updates the bank
}
// This is all of the buy functions for the dinosaurs
function buyRaptor() {
    if(gameData.dinoEggs >= gameData.raptorCost){ // checks if player can afford the raptors
        gameData.dinoEggs -= gameData.raptorCost; // subtracts the cost from the total eggs
        gameData.veloRaptor += 1; // adds one to the raptor count
        gameData.raptorMake += 1; // adds to how much it makes
        document.getElementById("veloRaptor").innerHTML = gameData.veloRaptor; // updates the number of raptors
        document.getElementById("dinoEggs").innerHTML = gameData.dinoEggs; // updates the bank
        gameData.raptorCost = Math.floor(Math.pow(gameData.raptorCost, 1.05)); // calculate next cost
        document.getElementById("raptorCost").innerHTML = gameData.raptorCost; // udates the raptor cost
    }
}

function buyDilo() {
    if(gameData.dinoEggs >= gameData.diloCost){ // checks if player can afford the dilo
        gameData.dinoEggs -= gameData.diloCost; // subtract the cost from your bank
        gameData.diloSaur += 1; // add one to the display
        gameData.diloMake += 5; // adds to have much they make
        document.getElementById("diloSaur").innerHTML = gameData.diloSaur; // updates the number of dilo
        document.getElementById("dinoEggs").innerHTML = gameData.dinoEggs; // updates the bank
        gameData.diloCost = Math.floor(Math.pow(gameData.diloCost, 1.005)); // calculate next cost
        document.getElementById("diloCost").innerHTML = gameData.diloCost; // updates the dilo cost
    }
}

function buyAnkylo() {
    if(gameData.dinoEggs >= gameData.ankyloCost){ // checks if player can afford the ankylosaurus
        gameData.dinoEggs -= gameData.ankyloCost; // subtract the cost from main bank
        gameData.ankyloSaur += 1; // add one to the display
        gameData.anklyoMake += 50; //adds to how much they make
        document.getElementById("ankyloSaur").innerHTML = gameData.ankyloSaur; // updates the number of ankylosaurus
        document.getElementById("dinoEggs").innerHTML = gameData.dinoEggs; // updates the bank
        gameData.ankyloCost = Math.floor(Math.pow(gameData.ankyloCost, 1.005)); //calculate next cost
        document.getElementById("ankyloCost").innerHTML = gameData.ankyloCost; // updates the ankylosaurus cost
    }
}

function buyAlamo() {
    if(gameData.dinoEggs >= gameData.alamoCost){ // checks if player can afford the alamosaurus
        gameData.dinoEggs -= gameData.alamoCost; // subtract cost from main bank
        gameData.alamoSaur += 1; // add one to the count
        gameData.alamoMake += 500; // adds to how much they make
        document.getElementById("alamoSaur").innerHTML = gameData.alamoSaur; // updates the number of alamosaurus
        document.getElementById("dinoEggs").innerHTML = gameData.dinoEggs; // updates the bank
        gameData.alamoCost = Math.floor(Math.pow(gameData.alamoCost, 1.005)); // calculate next cost
        document.getElementById("alamoCost").innerHTML = gameData.alamoCost; // updates the alamosaurus cost
    }
}

function buyStego() {
    if(gameData.dinoEggs >= gameData.stegoCost) { // checks if player can afford the stegosaurus
        gameData.dinoEggs -= gameData.stegoCost; // subtracts the cost from the total eggs
        gameData.stegoSaur += 1; // adds one to the stegosaurus count
        gameData.stegoMake += 1500; // adds to how much the dinos make
        document.getElementById("stegoSaur").innerHTML = gameData.stegoSaur; // updates the number of stegosaurus
        document.getElementById("dinoEggs").innerHTML = gameData.dinoEggs; // updates the bank
        gameData.stegoCost = Math.floor(Math.pow(gameData.stegoCost, 1.005)); // calculates next cost
        document.getElementById("stegoCost").innerHTML = gameData.stegoCost; // updates stego cost
    }
}

function buyJaxa() {
    if(gameData.dinoEggs >= gameData.jaxaCost){ // checks if player can afford the jaxartosaurus
        gameData.dinoEggs -= gameData.jaxaCost // subtracts the cost from bank
        gameData.jaxaSaur += 1; // adds one to the jaxartosaurus count
        gameData.jaxaMake += 5000; // adds to how much they make
        document.getElementById("jaxaSaur").innerHTML = gameData.jaxaSaur; // updates the number of jaxartosaurus
        document.getElementById("dinoEggs").innerHTML = gameData.dinoEggs; // updates the bank
        gameData.jaxaCost = Math.floor(Math.pow(gameData.jaxaCost, 1.0005)); // calcultates the next jaxartosaurus cost by taking the previous * 1.05
        document.getElementById("jaxaCost").innerHTML = gameData.jaxaCost; // updates the jaxartosaurus cost
    }
}


// This tracks how many eggs we make a second
function eggsPerSecond() { // this is the total eggs per second
    gameData.eggsPerSecond = gameData.raptorMake + gameData.diloMake + gameData.alamoMake + gameData.anklyoMake + gameData.stegoMake + gameData.jaxaMake;
    document.getElementById("eggspersecond").innerHTML = gameData.eggsPerSecond;
}


//These are for the individual dinosaurs
function raptorEggsPerSecond() {
    document.getElementById("raptorEggsPerSecond").innerHTML = gameData.raptorMake;
}

function diloEggsPerSecond() {
    document.getElementById("diloEggsPerSecond").innerHTML = gameData.diloMake;
}

function ankyloEggsPerSecond() {
    document.getElementById("anklyoEggsPerSecond").innerHTML = gameData.anklyoMake;
}

function alamoEggsPerSecond() {
    document.getElementById("alamoEggsPerSecond").innerHTML = gameData.alamoMake;
}

function stegoEggsPerSecond() {
    document.getElementById("stegoEggsPerSecond").innerHTML = gameData.stegoMake;
}

function jaxaEggsPerSecond() {
    document.getElementById("jaxaEggsPerSecond").innerHTML = gameData.jaxaMake;
}



// Game play loop
var mainGameLoop = window.setInterval(function() { 
    dinoClick(gameData.raptorMake);
    dinoClick(gameData.diloMake);
    dinoClick(gameData.alamoMake);
    dinoClick(gameData.anklyoMake);
    dinoClick(gameData.stegoMake);
    dinoClick(gameData.jaxaMake);
    eggsPerSecond();
    raptorEggsPerSecond();
    diloEggsPerSecond();
    ankyloEggsPerSecond();
    alamoEggsPerSecond();
    stegoEggsPerSecond();
    jaxaEggsPerSecond();
}, 1000)

var saveGameLoop = window.setInterval(function() {
    localStorage.setItem("dinoClickerSave", JSON.stringify(gameData))
}, 15000)

var savegame = JSON.parse(localStorage.getItem("goldMinerSave"))
if (savegame !== null) {
  gameData = savegame
}