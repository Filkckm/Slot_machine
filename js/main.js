$(document).ready(function() {



var images= [
            "png_files/cherries.png",
            "png_files/cherries.png",
            "png_files/cherries.png",
            "png_files/chili.png",
            "png_files/chili.png",
            "png_files/chili.png",
            "png_files/grapes.png",
            "png_files/grapes.png",
            "png_files/lemon.png",
            "png_files/lemon.png",
            "png_files/diamond.png",
            "png_files/seven.png",
];

var bankRoll = 10.00;
bankRoll= parseFloat(bankRoll).toFixed(2);
// var betAmount = document.getElementById("bet_Amount").value;
// console.log(betAmount);

$(".current_bank_roll").text("$" + bankRoll);
var winAmount = 0;


var slot1Final = "";
var slot2Final = "";
var slot3Final = "";
var results=[];

var last_element = null;
var last_element2 =null;
var last_element3 =null;
var resultArray =[];

$("#start_button").on("click", function(){

  var betAmount = document.getElementById("bet_Amount").value;

  if (bankRoll>0){


    //make the interval run for a certain number of times, i.e. 50 and stop aftewards
    var timesRun = 0;
    var interval = setInterval(function(){
        timesRun += 1;
        if(timesRun === 60){
            clearInterval(interval);
        }
        //create 3 different numbers. one for each slot.
        var randomNr  = Math.floor(Math.random()* images.length);
        var randomNr2 = Math.floor(Math.random()* images.length);
        var randomNr3 = Math.floor(Math.random()* images.length);
        var slotValue1=images[randomNr];
        var slotValue2=images[randomNr +randomNr2];
        var slotValue3=images[randomNr +randomNr];
        //change the attribute of the slots in the DOM at every iteration
        //this looks like an animation
        $("#image-slot1").attr("src" , slotValue1);
        $("#image-slot2").attr("src" , slotValue2);
        $("#image-slot3").attr("src" , slotValue3);
        //store the values in one array
        results.push($("#image-slot1").attr("src"),
        $("#image-slot2").attr("src"),
        $("#image-slot3").attr("src"));
        //find the three last elements of that array
        last_element = results[results.length - 1];
        last_element2 = results[results.length - 2];
        last_element3 = results[results.length - 3];

        //create an array only consists of th last elements of the array
        resultArray.push(last_element3,last_element2,last_element);


        //this shows the final images after the reels spinned 50 times
        //RESULT
        if(timesRun === 60){
        //console.log(resultArray[resultArray.length -3],resultArray[resultArray.length -2],resultArray[resultArray.length -1 ]);
        bankRoll -= betAmount;

        console.log("Bank roll: " + bankRoll);
          var lastImage1 = resultArray[resultArray.length -3];
          var lastImage2 =resultArray[resultArray.length -2];
          var lastImage3= resultArray[resultArray.length -1];

          console.log(lastImage1, lastImage2, lastImage3);


//////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////PAYOUTS:///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////


          //first:  check the triple hits
          if (lastImage1 === lastImage2 &&lastImage1 ==lastImage3){
            switch (lastImage1){
              case "png_files/chili.png": //all three show CHILI: win 3 x Bet
                winAmount = betAmount*3;
                console.log("You won:" +winAmount);
                bankRoll = (bankRoll +  winAmount);
                winAmount = parseFloat(winAmount).toFixed(2);
                $(".win_amount_label").text("$" + winAmount);
                console.log("Your new bank roll: " + bankRoll);

                winAmount=0;
                break;
              case "png_files/cherries.png": //all three show CHERRIES: win 3 x Bet
                winAmount = betAmount*3;
                console.log("You won:" +winAmount);
                winAmount = parseFloat(winAmount).toFixed(2);
                $(".win_amount_label").text("$" + winAmount);
                bankRoll = (bankRoll +  winAmount);
                console.log("Your new bank roll: " + bankRoll);

                winAmount=0;
                break;
              case "png_files/grapes.png": //all three show GRAPES: win 5 x Bet
                winAmount = betAmount*10;
                console.log("You won:" +winAmount);
                bankRoll = (bankRoll +  winAmount);
                winAmount = parseFloat(winAmount).toFixed(2);
                $(".win_amount_label").text("$" + winAmount);
                console.log("Your new bank roll: " + bankRoll);

                winAmount=0;
                break;
              case "png_files/lemon.png": //all three show LEMON: win 5 x Bet
                winAmount = betAmount*10;
                console.log("You won:" +winAmount);
                bankRoll = (bankRoll +  winAmount);
                winAmount = parseFloat(winAmount).toFixed(2);
                $(".win_amount_label").text("$" + winAmount);
                console.log("Your new bank roll: " + bankRoll);

                winAmount=0;
                break;
              case "png_files/diamond.png": //all three show DIAMOND: win 10 x Bet
                winAmount = betAmount*50;
                console.log("You won:" +winAmount);
                bankRoll = (bankRoll +  winAmount);
                winAmount = parseFloat(winAmount).toFixed(2);
                $(".win_amount_label").text("$" + winAmount);
                console.log("Your new bank roll: " + bankRoll);

                winAmount=0;
                break;
              case "png_files/seven.png": //all three show seven: win 20 x Bet
                winAmount = (betAmount*100);
                console.log("You won:" +winAmount);
                bankRoll = (bankRoll +  winAmount);
                winAmount = parseFloat(winAmount).toFixed(2);
                $(".win_amount_label").text("$" + winAmount);
                console.log("Your new bank roll: " + bankRoll);

                winAmount=0;
                break;
            }
//  if no triple is hit: check pairs
          } else {
                  if (lastImage1 ==="png_files/chili.png" && lastImage2 ==="png_files/chili.png" )
                    {
                      winAmount += (betAmount*2);
                      console.log("You won:" +winAmount);
                      winAmount = parseFloat(winAmount).toFixed(2);
                      $(".win_amount_label").text("$" + winAmount);
                      bankRoll = (bankRoll +  winAmount);
                      console.log("Your new bank roll: " + bankRoll);
                      winAmount=0;
                    }
                  if (lastImage1 ==="png_files/chili.png" && lastImage3 ==="png_files/chili.png" )
                    {
                      winAmount += (betAmount*2);
                      console.log("You won:" +winAmount);
                      winAmount = parseFloat(winAmount).toFixed(2);
                      $(".win_amount_label").text("$" + winAmount);
                      bankRoll = (bankRoll +  winAmount);
                      console.log("Your new bank roll: " + bankRoll);
                      winAmount=0;
                    }
                  if (lastImage2 ==="png_files/chili.png" && lastImage3 ==="png_files/chili.png" )
                    {
                      winAmount += (betAmount*2);
                      console.log("You won:" +winAmount);
                      winAmount = parseFloat(winAmount).toFixed(2);
                      $(".win_amount_label").text("$" + winAmount);
                      bankRoll +=  winAmount;
                      console.log("Your new bank roll: " + bankRoll);
                      winAmount=0;
                    }
                  if (lastImage1 ==="png_files/cherries.png" && lastImage2 ==="png_files/cherries.png" )
                    {
                      winAmount += (betAmount*2);
                      console.log("You won:" +winAmount);
                      winAmount = parseFloat(winAmount).toFixed(2);
                      $(".win_amount_label").text("$" + winAmount);
                      bankRoll +=  winAmount;
                      console.log("Your new bank roll: " + bankRoll);
                      winAmount=0;
                    }
                  if (lastImage1 ==="png_files/cherries.png" && lastImage3 ==="png_files/cherries.png" )
                    {
                      winAmount += (betAmount*2);
                      console.log("You won:" +winAmount);
                      winAmount = parseFloat(winAmount).toFixed(2);
                      $(".win_amount_label").text("$" + winAmount);
                      bankRoll +=  winAmount;
                      console.log("Your new bank roll: " + bankRoll);
                      winAmount=0;
                    }
                  if (lastImage2 ==="png_files/cherries.png" && lastImage3 ==="png_files/cherries.png" )
                    {
                      winAmount += (betAmount*2);
                      console.log("You won:" +winAmount);
                      winAmount = parseFloat(winAmount).toFixed(2);
                      $(".win_amount_label").text("$" + winAmount);
                      bankRoll +=  winAmount;
                      console.log("Your new bank roll: " + bankRoll);
                      winAmount=0;
                    }
              }
        }
        bankRoll= parseFloat(bankRoll).toFixed(2);
        $(".current_bank_roll").text("$" + bankRoll); //show 2 decimals
        //speed of the iteration

        //first reel spins faster than the middle and the middle faster than the last
    }, 20);


}else 
      { alert("Game Over");
      location.reload();}
      });


});
