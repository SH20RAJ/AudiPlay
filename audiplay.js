//Constants
const ap_audio = o('.audiplay');
const play = o('.playpausebtn');
let slider = document.querySelector('.duration_slider');

let track = o('.audiplay');
let showtimer = o('.ap_time') ;
let ap_time = ap_audio.currentTime ;
let Playing_song = false;
let playing_time = secondsToMinutes(ap_audio.duration) ;



//Mains 

ap_audio.style.display = "none" ;


setTimeout(function(){o('.ap_time').innerHTML = playing_time } , 100)


// ------------------------ Functions

function showtime(){
    showtimer.innerHTML = secondsToMinutes(ap_audio.duration - ap_audio.currentTime) ;
}
// checking.. the song is playing or not
function justplay(){
    if(Playing_song==false){
        playsong();

    }else{
        pausesong();
    }
}
function secondsToMinutes(time){
    return Math.floor(time / 60)+':'+Math.floor(time % 60);
}
// play song
function playsong(){
    track.play();
    Playing_song = true;
    play.innerHTML = '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="pause" class="svg-inline--fa fa-pause fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z"></path></svg>';
  }
  
  //pause song
  function pausesong(){
      track.pause();
      Playing_song = false;
      play.innerHTML = '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="play" class="svg-inline--fa fa-play fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg>';
  }
  
  // change slider position 
function change_duration(){
	slider_position = track.duration * (slider.value / 100);
	track.currentTime = slider_position;
    showtime();
}
if(track.getAttribute("nodownload") != null){
    o('.ap_download').style.display = 'none';
}
function ap_download(){
    window.open(track.currentSrc)
}


function o(a) {
    return document.querySelector(a);
}
