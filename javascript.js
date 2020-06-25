


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
let scoreValue = document.querySelector (".scoreValue");

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






//Mouseover starts here

document.body.addEventListener("click", event => {
  if (event.target !== frontelement1 && event.target !== frontelement2 && event.target !== frontelement3 && event.target !== frontelement4 && event.target !== frontelement5 && event.target !== frontelement6 && event.target !== frontelement7 && event.target !== frontelement8 && event.target !== frontelement9 && event.target !== frontelement10 && event.target !== frontelement11 && event.target !== frontelement12
    
    
    
    ) {

     
    return
  }

  event.target.style.display = "none";
  /*event.target.style.width = "20px";
  event.target.style.height = "20px";
  event.target.style.opacity = "20%";
  //*event.target.style.backgroundColor = "blue";*/

 
 
  
  
  
  }
)


//
//
//clicks starts here 
document.body.addEventListener("click", event => {
  if (event.target !== element1 && event.target !== element2 && event.target !== element3 && event.target !== element4 && event.target !== element5 && event.target !== element6 && event.target !== element7 && event.target !== element8 && event.target !== element9 && event.target !== element10 && event.target !== element11 && event.target !== element12
    
    
    
    ) {

     
    return
  }

  else if (event.target == element3 || event.target == element5 || event.target == element8 || event.target == element11)
  {
    toggleFart()
    event.target.style.display = "none";
    
  score--;
  scoreValue.innerHTML = "SCORE: &nbsp &nbsp &nbsp" + score;
  console.log (score)
  return
  }

  else{
  toggleBah();
  //event.target.style.display = "none";
  event.target.style.display = "none";
  score++;
  
  

  
  //setTimeout(fire(),50000 );
  scoreValue.innerHTML = "SCORE:" + score;
  console.log (score)}
  
});



/*document.body.addEventListener("mouseout", event => {
   if (event.target !== frontelement1 && event.target !== frontelement2 && event.target !== frontelement3 && event.target !== frontelement4 && event.target !== frontelement5 && event.target !== frontelement6 && event.target !== frontelement7 && event.target !== frontelement8 && event.target !== frontelement9
    
    
    
    ) {

      
    console.log ("Nononononononononoo!");
    return
 /* }
  event.target.style.width = "150px";
  event.target.style.height = "225px";
  event.target.style.opacity = "100%";

 
  
 /* }*/
/*)*/



//COUNT DOWN TIMER STARTER HER
let timeleft = 30;
let downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "";
    document.getElementById("stickIn").style.display = "block";
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