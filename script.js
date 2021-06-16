// window.onload=function(){
//     toggle();
// }
//  Toggle switch video

// let video = document.querySelector('.video');
// let juice = document.querySelector('.orange-juice');
// var btn = document.getElementById('play-pause');
// let muteBtn = document.getElementById('mute');
// let volumeslider = document.getElementById('volumeSlider');
// let orangeBar = document.querySelector('.orange-bar');

// function togglePlayPause(){
     
//     if(video.paused){
//         btn.className='pause';
//         video.play();
//     }else{
//         btn.className='play';
//         video.pause();
//     }
// }

// btn.onclick = function(){
//     togglePlayPause();
// }

var clicked = false;
function toggle(){
     if(!clicked){
         clicked = true;
         document.getElementById("check").innerHTML ="off";
         document.getElementById("output").innerHTML= "<strong style='font-size:50px;'><em>Distraction</em></strong>";
         document.getElementById("video").nextElementSibling.style.display="block";
         document.getElementById("video").pause();
     }else{
        clicked = false;
        document.getElementById("check").innerHTML ="On";
        document.getElementById("output").innerHTML= "<strong style='font-size:50px;'><em>ExamMode</em></strong>" ;
        document.getElementById("video").nextElementSibling.style.display="none";
        document.getElementById("video").play();
     }
}
  toggle();