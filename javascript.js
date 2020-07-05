


const element1 = document.querySelector('.item1');
const element2 = document.querySelector('.item2');
const element3 = document.querySelector('.item3');
const element4 = document.querySelector('.item4');
const element5 = document.querySelector('.item5');
const element6 = document.querySelector('.item6');
const element7 = document.querySelector('.item7');
const element8 = document.querySelector('.item8');
const element9 = document.querySelector('.item9');
const element10 = document.querySelector('.item10');
const element11 = document.querySelector('.item11');
const element12 = document.querySelector('.item12');

const frontelement1 = document.querySelector('.hide1');
const frontelement2 = document.querySelector('.hide2');
const frontelement3 = document.querySelector('.hide3');
const frontelement4 = document.querySelector('.hide4');
const frontelement5 = document.querySelector('.hide5');
const frontelement6 = document.querySelector('.hide6');
const frontelement7 = document.querySelector('.hide7');
const frontelement8 = document.querySelector('.hide8');
const frontelement9 = document.querySelector('.hide9');
const frontelement10 = document.querySelector('.hide10');
const frontelement11 = document.querySelector('.hide11');
const frontelement12 = document.querySelector('.hide12');

let score = 0;
let levelScore = 0;
let scoreValue = document.querySelector (".scoreValue");
let NumbSheep = 8 //Number of Sheep on level
//Herunder starter LYD
var sheepSound = document.getElementById("soundBah");
var fartSound = document.getElementById ("soundFart");

function toggleBah(){
  sheepSound.play()
}

function toggleFart(){
  fartSound.play()
}

var myAudio = document.getElementById("sound");
var isPlaying = false;

function togglePlay() {
  if (isPlaying) {
    myAudio.pause()
  } else {
    myAudio.play();
  }
};
myAudio.onplaying = function() {
  isPlaying = true;
};
myAudio.onpause = function() {
  isPlaying = false;
};
//Her slutter LYD





//Mouseclick starts here

document.body.addEventListener("click", event => {
  if (event.target !== frontelement1 && event.target !== frontelement2 && event.target !== frontelement3 && event.target !== frontelement4 && event.target !== frontelement5 && event.target !== frontelement6 && event.target !== frontelement7 && event.target !== frontelement8 && event.target !== frontelement9 && event.target !== frontelement10 && event.target !== frontelement11 && event.target !== frontelement12
    
    
    
    ) {

     
    return
  }

  event.target.style.display = "none";
 

 
 
  
  
  
  }
)


//
//
//More clicks starts here 
document.body.addEventListener("click", event => {
  if (event.target !== element1 && event.target !== element2 && event.target !== element3 && event.target !== element4 && event.target !== element5 && event.target !== element6 && event.target !== element7 && event.target !== element8 && event.target !== element9 && event.target !== element10 && event.target !== element11 && event.target !== element12
    
    
    
    ) {

     
    return
  }

  else if (event.target == element3 || event.target == element5 || event.target == element8 || event.target == element11)
  {
    toggleFart()
    event.target.style.display = "none";
    
  score -=5;
  //levelScore -=5;
  scoreValue.innerHTML = "SCORE: &nbsp &nbsp &nbsp" + score;
  console.log (levelScore)
  return
  }

  else{
  toggleBah();
  //event.target.style.display = "none";
  event.target.style.display = "none";
  score += 5;
  //levelScore += 5;
  NumbSheep -= 1;
  console.log (NumbSheep);

  
  

  
  //setTimeout(fire(),50000 );
  scoreValue.innerHTML = "SCORE:" + score;
  }

  //END OF LEVEL SCREEN STARTS HERE

if (NumbSheep < 1) {
clearInterval(downloadTimer);
document.getElementById("stickIn").style.display = "none";
document.getElementById("stickIn2").style.display = "block";
let levelScore = score + timeleft + 1;
document.getElementById("stickIn2").innerHTML = "Du klarede banen og scorede &nbsp" + levelScore + "&nbsp point";
togglePlay();

console.log (levelScore);
scoreValue.innerHTML = "SCORE:" + levelScore;
}

  
});







//COUNT DOWN TIMER STARTER HER
let timeleft = 30;
let downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "";
    document.getElementById("stickIn").style.display = "block";
    document.getElementById("stickIn").innerHTML = "GAME OVER! Du scorede &nbsp" + score + "&nbsp point";
    togglePlay();
    
    
    /*document.getElementById ("dropcontent").style.display = "block";*/
  } else {
    document.getElementById("countdown").innerHTML = timeleft + " SECONDS REMAINING";
    
    
    
    /*document.getElementById ("dropcontent").style.display = "none";*/
  }
  timeleft -= 1;
}, 1000);




function reStart () {
  location.reload ();
  togglePlay();
}