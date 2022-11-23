var color = ["red","blue","green","yellow"];
var userpattern = [];
var gamepattern =[];
var level=0;
var started=false;

$(document).keypress(function() {
  if(!started){
    $("#level-title").text("Level "+ level);
    nextSequence();
  started=true;}
});

$(".btn").click(function(){
  var userpat=$(this).attr("id");
  userpattern.push(userpat);
  animatePress(userpat);
  playSound(userpat);
  check(userpattern.length-1);
});



function nextSequence(){
userpattern=[];
level = level +1;
$("#level-title").text("Level "+ level);
var rannum = Math.floor(Math.random()*4);
var col = color[rannum];
gamepattern.push(col);
animatePress(col);
playSound(col);
}

  function check(currentLevel) {

    if (gamepattern[currentLevel] === userpattern[currentLevel]) {

      console.log("success");

      if (userpattern.length === gamepattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }

    } else {

      console.log("wrong");

      playSound("wrong");

      $("body").addClass("game-over");
      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      $("#level-title").text("Game Over, Press Any Key to Restart");
      startOver();
    }
  }

  
function startOver() {
  level = 0;
  gamepattern = [];
  started = false;
 }

 function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function playSound(name) {
  var audio = new Audio(name + ".mp3");
  audio.play();}
