window.onload=function(){
    toggle();
    togglePlayPause();
}
//  Toggle switch video

let video = document.querySelector('.video');
let juice = document.querySelector('.orange-juice');
let btn = document.getElementById('play-pause');
let muteBtn = document.getElementById('mute');
let volumeslider = document.getElementById('volumeSlider');
let orangeBar = document.querySelector('.orange-bar');

function togglePlayPause(){
     
    if(video.paused){
        btn.className='pause';
        video.play();
    }else{
        btn.className='play';
        video.pause();
    }
}

btn.onclick = function(){
    togglePlayPause();
}

var clicked = false;
function toggle(){
     if(!clicked){
         clicked = true;
         document.getElementById("check").innerHTML ="off";
         document.getElementById("output").innerHTML= "Distraction";
     }else{
        clicked = false;
        document.getElementById("check").innerHTML ="On";
        document.getElementById("output").innerText= "Mode Examen";
     }
}