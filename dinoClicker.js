var dinoEggs = 100000000000; // the bank

// The +1 script for the button
function dinoClick(number) {
    dinoEggs = dinoEggs + number; // when click dino number gets a +1
    document.getElementById("dinoEggs").innerHTML = dinoEggs; // updates the bank
}



// VelociRaptors
var veloRaptor = 0; // number of velciraptors
var raptorMake = 1 // how much each raptor produces

function buyRaptor() {
    var raptorCost = Math.floor(25 * Math.pow(1.1, veloRaptor)); // calculates the raptor cost by multiplying the cost by 1.1 every time
    if(dinoEggs >= raptorCost){ // checks if player can afford the raptors
        veloRaptor = veloRaptor + 1; // adds one to the raptor count
        dinoEggs = dinoEggs - raptorCost; // subtracts the cost from the total eggs
        document.getElementById("veloRaptor").innerHTML = veloRaptor; // updates the number of raptors
        document.getElementById("dinoEggs").innerHTML = dinoEggs; // updates the bank
    }
    var nextRaptorCost = Math.floor(25 * Math.pow(1.1, veloRaptor)); // calcultates the next raptor cost by taking the previous * 1.1
    document.getElementById("raptorCost").innerHTML = nextRaptorCost; // udates the raptor cost
}


//Dilophasauruses
var diloSaur = 0; // number of dilophasaurs
var diloMake = 5; // how much each dilophasuar makes

function buyDilo() {
    var diloCost = Math.floor(100 * Math.pow(1.1, diloSaur)); // calculates the dilo cost by multiplying the cost by 1.1 every time
    if(dinoEggs >= diloCost){ // checks if player can afford the dilo
        diloSaur = diloSaur + 1; // adds one to the dilo count
        dinoEggs = dinoEggs - diloCost; // subtracts the cost from the total eggs
        document.getElementById("diloSaur").innerHTML = diloSaur; // updates the number of dilo
        document.getElementById("dinoEggs").innerHTML = dinoEggs; // updates the bank
    }
    var nextDiloCost = Math.floor(100 * Math.pow(1.1, diloSaur)); // calcultates the next raptor cost by taking the previous * 1.1
    document.getElementById("diloCost").innerHTML = nextDiloCost; // updates the dilo cost
}


//Ankylosaurus
var ankyloSaur = 0; // number of ankylosaurus
var anklyoMake = 50; // how much each ankylosaurus makes

function buyAnkylo() {
    var ankyloCost = Math.floor(1000 * Math.pow(1.1, ankyloSaur)); // calculates the ankylosaurus cost by multiplying the cost by 1.1 every time
    if(dinoEggs >= ankyloCost){ // checks if player can afford the ankylosaurus
        ankyloSaur = ankyloSaur + 1; // adds one to the ankylosaurus count
        dinoEggs = dinoEggs - ankyloCost; // subtracts the cost from the total eggs
        document.getElementById("ankyloSaur").innerHTML = ankyloSaur; // updates the number of ankylosaurus
        document.getElementById("dinoEggs").innerHTML = dinoEggs; // updates the bank
    }
    var nextAnkyloCost = Math.floor(1000 * Math.pow(1.1, ankyloSaur)); // calcultates the next ankylosaurus cost by taking the previous * 1.1
    document.getElementById("ankyloCost").innerHTML = nextAnkyloCost; // updates the ankylosaurus cost
}


// Alamosaurus
var alamoSaur = 0; // number of alamosaurus
var alamoMake = 500; // how much each alamosaurus makes

function buyAlamo() {
    var alamoCost = Math.floor(10000 * Math.pow(1.05, alamoSaur)); // calculates the alamosaurus cost by multiplying the cost by 1.05 every time
    if(dinoEggs >= alamoCost){ // checks if player can afford the alamosaurus
        alamoSaur = alamoSaur + 1; // adds one to the alamosaurus count
        dinoEggs = dinoEggs - alamoCost; // subtracts the cost from the total eggs
        document.getElementById("alamoSaur").innerHTML = alamoSaur; // updates the number of alamosaurus
        document.getElementById("dinoEggs").innerHTML = dinoEggs; // updates the bank
    }
    var nextAlamoCost = Math.floor(10000 * Math.pow(1.05, alamoSaur)); // calcultates the next alamosaurus cost by taking the previous * 1.05
    document.getElementById("alamoCost").innerHTML = nextAlamoCost; // updates the alamosaurus cost
}


// Stegosaurus
var stegoSaur = 0; // number of stegosaurus
var stegoMake = 1500; // how much each stegosaurus makes

function buyStego() {
    var stegoCost = Math.floor(100000 * Math.pow(1.05, stegoSaur)); // calculates the stegosaurus cost by multiplying the cost by 1.05 every time
    if(dinoEggs >= stegoCost){ // checks if player can afford the stegosaurus
        stegoSaur = stegoSaur + 1; // adds one to the stegosaurus count
        dinoEggs = dinoEggs - stegoCost; // subtracts the cost from the total eggs
        document.getElementById("stegoSaur").innerHTML = stegoSaur; // updates the number of stegosaurus
        document.getElementById("dinoEggs").innerHTML = dinoEggs; // updates the bank
    }
    var nextStegoCost = Math.floor(100000 * Math.pow(1.05, stegoSaur)); // calcultates the next stegosaurus cost by taking the previous * 1.05
    document.getElementById("stegoCost").innerHTML = nextStegoCost; // updates the stegosaurus cost
}


// Jaxartosaurus
var jaxaSaur = 0; // number of jaxartosaurus
var jaxaMake = 5000; // how much each jaxartosaurus makes

function buyJaxa() {
    var jaxaCost = Math.floor(1000000 * Math.pow(1.05, jaxaSaur)); // calculates the jaxartosaurus cost by multiplying the cost by 1.05 every time
    if(dinoEggs >= jaxaCost){ // checks if player can afford the jaxartosaurus
        jaxaSaur = jaxaSaur + 1; // adds one to the jaxartosaurus count
        dinoEggs = dinoEggs - jaxaCost; // subtracts the cost from the total eggs
        document.getElementById("jaxaSaur").innerHTML = jaxaSaur; // updates the number of jaxartosaurus
        document.getElementById("dinoEggs").innerHTML = dinoEggs; // updates the bank
    }
    var nextJaxaCost = Math.floor(1000000 * Math.pow(1.05, jaxaSaur)); // calcultates the next jaxartosaurus cost by taking the previous * 1.05
    document.getElementById("jaxaCost").innerHTML = nextJaxaCost; // updates the jaxartosaurus cost
}




window.setInterval(function() {
    dinoClick(veloRaptor * raptorMake);
    dinoClick(diloSaur * diloMake);
    dinoClick(ankyloSaur * anklyoMake);
    dinoClick(alamoSaur * alamoMake);
    dinoClick(stegoSaur * stegoMake);
    dinoClick(jaxaSaur * jaxaMake);
}, 1000);

// The sumation of all the cookies you make in a second
function dinoEggsPerSecond() {
    var vRap = veloRaptor * raptorMake;
    var dSaur = diloSaur * diloMake;
    var aSaur = ankyloSaur * anklyoMake;
    var alSaur = alamoSaur * alamoMake;
    var stSaur = stegoSaur * stegoMake
    var jSaur = jaxaSaur * jaxaMake;

    eggsPerSecond = vRap + dSaur + aSaur + alSaur + stSaur + jSaur;

    document.getElementById("eggspersecond").innerHTML = eggsPerSecond;
}