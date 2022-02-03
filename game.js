let cells = [];
let counter = 1;
let stepsFirstPlayer = [];
let stepsSecondPlayer = [];
let winCombinationsCounter = 0;
let playerCombinations = [];
let player;
let cellsID;
let createCellInRows;
let createCellsByColumns;
let bodyId;

window.onload = function () {
  playingField();
};

function playingField() {
  for (i = 0; i < 3; i++) {
    createCellsByColumns = document.createElement("div");
    createCellsByColumns.setAttribute("id", "col" + i);
    let bodyId = document.getElementById("main");
    bodyId.appendChild(createCellsByColumns);
    for (e = 0; e < 3; e++) {
      let createCellInRows = document.createElement("div");
      createCellInRows.setAttribute("id", "lin" + i + e);
      createCellInRows.classList = "styleOfCells";
      createCellsByColumns.appendChild(createCellInRows);
      createCellInRows.onclick = xex(createCellInRows.id);
    }
  }
}

function xex(id) {
  if (!cells.includes(id)) {
    cells += id;
    cellsID = id;
    counter++;
    determinePlayer(counter);
  }
}

function determinePlayer(counter) {
  if (counter % 2 == 0) {
    stepsFirstPlayer.push(cellsID);
    playerStep(1, stepsFirstPlayer);
  } else {
    stepsSecondPlayer.push(cellsID);
    playerStep(2, stepsSecondPlayer);
  }
}

function resultGame(player, playerCombinations) {
  let winCombinations = [
    ["lin00", "lin10", "lin20"],
    ["lin01", "lin11", "lin21"],
    ["lin02", "lin12", "lin22"],
    ["lin00", "lin01", "lin02"],
    ["lin10", "lin11", "lin12"],
    ["lin20", "lin21", "lin22"],
    ["lin00", "lin11", "lin22"],
    ["lin20", "lin11", "lin02"],
  ];
  for (e = 0; e < winCombinations.length; e++) {
    winCombinationsCounter = 0;
    for (i = 0; i < playerCombinations.length + 1; i++) {
      if (winCombinationsCounter == 3) {
        alert("player: " + player + " win!");
      }
      if (winCombinations[e].includes(playerCombinations[i])) {
        winCombinationsCounter++;
        continue;
      }
      if (
        playerCombinations[i] == playerCombinations[playerCombinations.length]
      ) {
        break;
      }
    }
  }
}

function playerStep(player, playerCombinations) {
  player == 1
    ? (document.getElementById(cellsID).classList = "firstPlayer")
    : (document.getElementById(cellsID).classList = "secondPlayer");
  if (playerCombinations.length >= 3) {
    resultGame(player, playerCombinations);
  }
}
