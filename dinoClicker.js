var gameData = {
    dinoEggs: 0,
    dinoEggsClick: 1000000,

    veloRaptor: 0,
    raptorMake: 0,
    raptorCost: 10,

    diloSaur: 0,
    diloMake: 0,
    diloCost: 100,

    ankyloSaur: 0,
    anklyoMake: 0,
    ankyloCost: 1000

}


// The +1 script for the button
function dinoClick() {
    gameData.dinoEggs += gameData.dinoEggsClick; // when click dino number gets a +1
    document.getElementById("dinoEggs").innerHTML = gameData.dinoEggs; // updates the bank
}

function buyRaptor() {
    if(gameData.dinoEggs >= gameData.raptorCost){ // checks if player can afford the raptors
        gameData.dinoEggs -= gameData.raptorCost; // subtracts the cost from the total eggs
        gameData.veloRaptor += 1; // adds one to the raptor count
        gameData.raptorMake += 1; // adds one to how much it makes
        document.getElementById("veloRaptor").innerHTML = gameData.veloRaptor; // updates the number of raptors
        document.getElementById("dinoEggs").innerHTML = gameData.dinoEggs; // updates the bank
        gameData.raptorCost = Math.floor(Math.pow(gameData.raptorCost, 1.05));
        document.getElementById("raptorCost").innerHTML = gameData.raptorCost; // udates the raptor cost
    }
}

function buyDilo() {
    if(gameData.dinoEggs >= gameData.diloCost){ // checks if player can afford the dilo
        gameData.dinoEggs -= gameData.diloCost; // subtract the cost from your bank
        gameData.diloSaur += 1; // add one to the display
        gameData.diloMake += 5; // add 10 to have much they make
        document.getElementById("diloSaur").innerHTML = gameData.diloSaur; // updates the number of dilo
        document.getElementById("dinoEggs").innerHTML = gameData.dinoEggs; // updates the bank
        gameData.diloCost = Math.floor(Math.pow(gameData.diloCost, 1.005));
        document.getElementById("diloCost").innerHTML = gameData.diloCost; // updates the dilo cost
    }
}


//Ankylosaurus
function buyAnkylo() {
    if(gameData.dinoEggs >= gameData.ankyloCost){ // checks if player can afford the ankylosaurus
        gameData.dinoEggs -= gameData.ankyloCost;
        gameData.ankyloSaur += 1;
        gameData.anklyoMake += 50;
        document.getElementById("ankyloSaur").innerHTML = gameData.ankyloSaur; // updates the number of ankylosaurus
        document.getElementById("dinoEggs").innerHTML = gameData.dinoEggs; // updates the bank
        gameData.ankyloCost = Math.floor(Math.pow(gameData.ankyloCost, 1.005));
        document.getElementById("ankyloCost").innerHTML = gameData.ankyloCost; // updates the ankylosaurus cost
    }
}


// // Alamosaurus
// var alamoSaur = 0; // number of alamosaurus
// var alamoMake = 500; // how much each alamosaurus makes

// function buyAlamo() {
//     var alamoCost = Math.floor(10000 * Math.pow(1.05, alamoSaur)); // calculates the alamosaurus cost by multiplying the cost by 1.05 every time
//     if(dinoEggs >= alamoCost){ // checks if player can afford the alamosaurus
//         alamoSaur = alamoSaur + 1; // adds one to the alamosaurus count
//         dinoEggs = dinoEggs - alamoCost; // subtracts the cost from the total eggs
//         document.getElementById("alamoSaur").innerHTML = alamoSaur; // updates the number of alamosaurus
//         document.getElementById("dinoEggs").innerHTML = dinoEggs; // updates the bank
//     }
//     var nextAlamoCost = Math.floor(10000 * Math.pow(1.05, alamoSaur)); // calcultates the next alamosaurus cost by taking the previous * 1.05
//     document.getElementById("alamoCost").innerHTML = nextAlamoCost; // updates the alamosaurus cost
// }


// // Stegosaurus
// var stegoSaur = 0; // number of stegosaurus
// var stegoMake = 1500; // how much each stegosaurus makes

// function buyStego() {
//     var stegoCost = Math.floor(100000 * Math.pow(1.05, stegoSaur)); // calculates the stegosaurus cost by multiplying the cost by 1.05 every time
//     if(dinoEggs >= stegoCost){ // checks if player can afford the stegosaurus
//         stegoSaur = stegoSaur + 1; // adds one to the stegosaurus count
//         dinoEggs = dinoEggs - stegoCost; // subtracts the cost from the total eggs
//         document.getElementById("stegoSaur").innerHTML = stegoSaur; // updates the number of stegosaurus
//         document.getElementById("dinoEggs").innerHTML = dinoEggs; // updates the bank
//     }
//     var nextStegoCost = Math.floor(100000 * Math.pow(1.05, stegoSaur)); // calcultates the next stegosaurus cost by taking the previous * 1.05
//     document.getElementById("stegoCost").innerHTML = nextStegoCost; // updates the stegosaurus cost
// }


// // Jaxartosaurus
// var jaxaSaur = 0; // number of jaxartosaurus
// var jaxaMake = 5000; // how much each jaxartosaurus makes

// function buyJaxa() {
//     var jaxaCost = Math.floor(1000000 * Math.pow(1.05, jaxaSaur)); // calculates the jaxartosaurus cost by multiplying the cost by 1.05 every time
//     if(dinoEggs >= jaxaCost){ // checks if player can afford the jaxartosaurus
//         jaxaSaur = jaxaSaur + 1; // adds one to the jaxartosaurus count
//         dinoEggs = dinoEggs - jaxaCost; // subtracts the cost from the total eggs
//         document.getElementById("jaxaSaur").innerHTML = jaxaSaur; // updates the number of jaxartosaurus
//         document.getElementById("dinoEggs").innerHTML = dinoEggs; // updates the bank
//     }
//     var nextJaxaCost = Math.floor(1000000 * Math.pow(1.05, jaxaSaur)); // calcultates the next jaxartosaurus cost by taking the previous * 1.05
//     document.getElementById("jaxaCost").innerHTML = nextJaxaCost; // updates the jaxartosaurus cost
// }




// window.setInterval(function() {
//     dinoClick(veloRaptor * raptorMake);
//     dinoClick(diloSaur * diloMake);
//     dinoClick(ankyloSaur * anklyoMake);
//     dinoClick(alamoSaur * alamoMake);
//     dinoClick(stegoSaur * stegoMake);
//     dinoClick(jaxaSaur * jaxaMake);
// }, 1000);

var saveGameLoop = window.setInterval(function() {
    localStorage.setItem("dinoClickerSave", JSON.stringify(gameData))
  }, 15000)

var savegame = JSON.parse(localStorage.getItem("goldMinerSave"))
if (savegame !== null) {
  gameData = savegame
}