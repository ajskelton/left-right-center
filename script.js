 userChips = 3;
 leftChips = 3;
 rightChips = 3;
 centerChips = 0;
 var result = [];
 var centerWin = ["pip", "pip", "pip"];

Array.prototype.compare = function (array) {
    // if the other array is a falsy value, return
    if (!array)
        return false;

    // compare lengths - can save a lot of time
    if (this.length != array.length)
        return false;

    for (var i = 0, l=this.length; i < l; i++) {
        // Check if we have nested arrays
        if (this[i] instanceof Array && array[i] instanceof Array) {
            // recurse into the nested arrays
            if (!this[i].compare(array[i]))
                return false;
        }
        else if (this[i] != array[i]) {
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;
        }
    }
    return true;
}

var gameSetup = function(){
  document.getElementById("userChips").innerHTML = userChips;
  document.getElementById("leftChips").innerHTML = leftChips;
  document.getElementById("rightChips").innerHTML = rightChips;
  document.getElementById("centerChips").innerHTML = centerChips;
  
};

function RollDice() {
    Dice = Math.floor(1 + Math.random() * 6);
    switch(Dice) {
        case 1:
          console.log("You Rolled Left");
          result.push("left");
          return "left";
          break;
        
        case 2:
          console.log("You Rolled Right");
          result.push("right");
          return "right";
          break;
        
        case 3:
          console.log("You Rolled Center");
          result.push("center");
          return "center";
          break;
        
        case 4:
          console.log("You Rolled a Pip");
          result.push("pip");
          return "pip";
          break;
        
        case 5:
          console.log("You Rolled a Pip");
          result.push("pip");
          return "pip";
          break;
        
        case 6:
          console.log("You Rolled a Pip");
          result.push("pip");
          return "pip";
          break;
    } // close switch
  } // close RollDice
function takeTurn(player) {
  // Check number of dice to roll, if more than 3, use 3
  if(player < 3){
    chipsToRoll = player;
  } else {
    chipsToRoll = 3;
  }
  // Loops dice roll
  console.log(player + ' turn');
  if(player == userChips) {
    for(i = 1; i <= chipsToRoll; i++){
      switch(RollDice()) {
        case "left":
            userChips -= 1;
            leftChips += 1;
            break;
        case "right":
            userChips -= 1;
            rightChips += 1;
            break;
       case "center":
            userChips -= 1;
            centerChips += 1;
            break;
       case "pip":
            break;
      } // close switch
    } // close for loop  
  } else if (player == leftChips) {
    for(i = 1; i <= chipsToRoll; i++){
      switch(RollDice()) {
        case "left":
            leftChips -= 1;
            rightChips += 1;
            break;
        case "right":
            leftChips -= 1;
            userChips += 1;
            break;
       case "center":
            leftChips -= 1;
            centerChips += 1;
            break;
       case "pip":
            break;
      } // close switch
    } // close for loop 
  } else if (player == rightChips) {
    for(i = 1; i <= chipsToRoll; i++){
      switch(RollDice()) {
        case "left":
            rightChips -= 1;
            userChips += 1;
            break;
        case "right":
            rightChips -= 1;
            leftChips += 1;
            break;
       case "center":
            rightChips -= 1;
            centerChips += 1;
            break;
       case "pip":
            break;
      } // close switch
    } // close for loop 
    console.log('test');

  }
  
  //document.getElementById('dice-area').innerHTML = result;
  
  
  console.log(result);
  console.log(centerWin);
  if(result.compare(["pip", "pip", "pip"])) {
    player = player + centerChips;
    console.log('center win');
  };
  //alert("userChips " + userChips);
  document.getElementById("userChips").innerHTML = userChips;
  //alert("leftChips " + leftChips);
  document.getElementById("leftChips").innerHTML = leftChips;
  //alert("rightChips " + rightChips);
  document.getElementById("rightChips").innerHTML = rightChips;
  //alert("centerChips " + centerChips);
  document.getElementById("centerChips").innerHTML = centerChips;
  result = [];
  checkEndGame();
} // close myTurn
function turn() {
  takeTurn(userChips);
  takeTurn(leftChips);
  takeTurn(rightChips);
};

//Check for winning conditions
function checkEndGame(){
  if(userChips == 0 && leftChips == 0) {
    console.log("rightChips Wins!");
    alert('The Right Computer Wins!');
  } else if (userChips == 0 && rightChips == 0) {
    console.log("leftChips Wins!");
    alert('The Left Computer Wins!');
  } else if (leftChips == 0 && rightChips == 0) {
    console.log("You Win!")
    alert('You Win!');
  }
};

document.getElementById("userChips").innerHTML = userChips;
document.getElementById("leftChips").innerHTML = leftChips;
document.getElementById("rightChips").innerHTML = rightChips;
document.getElementById("centerChips").innerHTML = centerChips;