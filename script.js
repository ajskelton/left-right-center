userChips = 3;
leftChips = 3;
rightChips = 3;
centerChips = 0;
var result = [];
function RollDice() {
    Dice = Math.floor(1 + Math.random() * 6);
    switch(Dice) {
        case 1:
          alert("You Rolled Left");
          result.push("left");
          return "left";
        
        case 2:
          alert("You Rolled Right");
          result.push("right");
          return "right";
        
        case 3:
          alert("You Rolled Center");
          result.push("center");
          return "center";
        
        case 4:
          alert("You Rolled a Pip");
          result.push("pip");
          return "pip";
        
        case 5:
          alert("You Rolled a Pip");
          result.push("pip");
          return "pip";
        
        case 6:
          alert("You Rolled a Pip");
          result.push("pip");
          return "pip";
    } // close switch
  } // close RollDice

function myTurn() {
  for(i = 1; i <= 3 && i <= userChips; i++){
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
  if(result === ["pip", "pip", "pip"]) {
    userChips = userChips + centerChips;
    alert("You got all the center chips!");
  }
  alert(result);
  alert("userChips " + userChips);
  alert("leftChips " + leftChips);
  alert("rightChips " + rightChips);
  alert("centerChips " + centerChips);
} // close myTurn