//Create Elements ...

const ap_html = '<style>.ap_container{transition-duration:.5s;display:inline-block;text-align:center;overflow:hidden;padding:5px;background:rgba(245,236,242);border-radius:4px;transition:all 1s}.ap_controls{width:100%;display:flex;position:relative;flex-direction:row;font-size:large;font-family:Tahoma,Geneva,Verdana,sans-serif;cursor:pointer}.ap_controls span{margin:5px;display:inline-block}.ap_container .playpausebtn{border-radius:50%;font-size:larger}.ap_container svg{width:25px;height:25px}.ap_controls .duration{width:80%;margin-right:10px;bottom:4px}.ap_controls input[type=range]{-webkit-appearance:none;width:100%;outline:0;height:2px;margin:0 15px;background:#0ff}.ap_controls:hover input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;height:20px;width:20px;border-radius:50%;cursor:pointer;background:#00ced1}.ap_controls input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;height:0}.ap_sound{padding:4px}.ap_time{margin:4px}</style><div class="ap_container"> <div class="ap_controls"> <span class="playpausebtn" onclick="justplay()"> </span><span class="ap_loop" onclick="ap_loopf()"></span> <span class="duration"> <input type="range" min="0" max="100" value="0" class="duration_slider" onchange="change_duration()"> </span> <span class="ap_time"></span> <span class="ap_download" onclick="ap_download()"></span> <span class="ap_sound" onclick="ap_mute()"> </span> </div> </div>';



//Constants
let ap_audio = o('.audiplay');
createcontainer();
let play = o('.playpausebtn');
let ap_loop = o('.ap_loop');
let slider = document.querySelector('.duration_slider');

let track = o('.audiplay');
let showtimer = o('.ap_time');
let ap_time = ap_audio.currentTime;
let Playing_song = false;
let playing_time = '  '+secondsToMinutes(ap_audio.duration);

let autoplay = false;
let loop = false;
function createcontainer() {
    ap_audio.insertAdjacentHTML( 'Beforebegin' ,ap_html)
  }

  

//Mains 

ap_audio.style.display = "none";
if(ap_audio.style.width!='') {
    o('.ap_container').style.width = ap_audio.style.width ;
}

// ------------------------ Functions

    //Settimg Audio Timing onload
//ap_audio.onloadeddata = o('.ap_time').innerHTML = '  '+secondsToMinutes(ap_audio.duration) ;
setTimeout(function () {o('.ap_time').innerHTML = '  '+secondsToMinutes(ap_audio.duration)}, 1000)
setTimeout(function () {o('.ap_time').innerHTML = '  '+secondsToMinutes(ap_audio.duration)}, 2000)

function showtime() {
    showtimer.innerHTML = '  -' + secondsToMinutes(ap_audio.duration - ap_audio.currentTime);
}
// checking.. the song is playing or not
function justplay() {
    if (Playing_song == false) {
        playsong();

    } else {
        pausesong();
    }
}

function secondsToMinutes(time) {
    return Math.floor(time / 60) + ':' + Math.floor(time % 60);
}


// change slider position 
function change_duration() {
    slider_position = track.duration * (slider.value / 100);
    track.currentTime = slider_position;
    showtime();
}
if (track.getAttribute("nodownload") != null) {
    o('.ap_download').style.display = 'none';
}

function ap_download() {
    window.open(track.currentSrc)
}


function o(a) {
    return document.querySelector(a);
}

function range_slider() {
    let position = 0;
    showtime();
    // update slider position
    if (!isNaN(track.duration)) {
        position = track.currentTime * (100 / track.duration);
        slider.value = position;
    }


    // function will run when the song is over
    if (track.ended) {
        play.innerHTML = ap_playsvg;
        if (autoplay == 1) {
            index_no += 1;
            //load_track(index_no);
            playsong();
        }
    }
}

function ap_mute() {
    if (!ap_audio.muted) {
        ap_audio.muted = 1;
        o('.ap_sound').innerHTML = ap_mutesvg;
    } else {
        ap_audio.muted = 0;
        o('.ap_sound').innerHTML = ap_volumnsvg;
    }
}

function ap_loopf() {
    if(!ap_audio.loop){
        ap_audio.loop = true ;
        o('.ap_loop').innerHTML = ap_loopedsvg ;
    } else {
        ap_audio.loop = false ;
        o('.ap_loop').innerHTML = ap_loopsvg ;
    }
}

//SVGs

const ap_playsvg = '<?xml version="1.0"?> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="512" height="512" x="0" y="0" viewBox="0 0 511.999 511.999" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g> <linearGradient xmlns="http://www.w3.org/2000/svg" id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="35.0291" y1="257.3129" x2="478.0292" y2="257.3129" gradientTransform="matrix(0.9983 0 0 -0.9983 -0.0849 512.8665)"> <stop offset="0" style="stop-color:#00F2FE"/> <stop offset="0.021" style="stop-color:#03EFFE"/> <stop offset="0.293" style="stop-color:#24D2FE"/> <stop offset="0.554" style="stop-color:#3CBDFE"/> <stop offset="0.796" style="stop-color:#4AB0FE"/> <stop offset="1" style="stop-color:#4FACFE"/> </linearGradient> <path xmlns="http://www.w3.org/2000/svg" style="fill:url(#SVGID_1_);" d="M104.967,511.999c-0.104,0-0.209-0.001-0.313-0.001c-38.47-0.21-69.77-31.983-69.77-70.829  V70.058c0-25.691,13.39-48.512,35.819-61.041c22.429-12.531,48.88-11.971,70.758,1.497l302.4,186.405  c20.869,12.848,33.305,35.16,33.255,59.678c-0.05,24.52-12.576,46.781-33.507,59.55L224.997,449.999  c-9.405,5.758-21.695,2.802-27.452-6.602c-5.758-9.404-2.802-21.694,6.602-27.452l218.639-133.869  c9.139-5.576,14.378-14.886,14.4-25.56c0.022-10.673-5.179-20.004-14.268-25.601L120.517,44.511  c-9.374-5.771-20.718-6.011-30.339-0.636c-9.62,5.375-15.364,15.162-15.364,26.183v371.112c0,18.385,15.541,30.819,30.056,30.898  c4.735,0.001,10.08-1.726,15.553-5.064c9.411-5.743,21.698-2.768,27.441,6.645c5.743,9.413,2.767,21.698-6.645,27.441  C129.517,508.23,116.989,511.998,104.967,511.999z" fill=""/> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> </g></svg>';
const ap_pausesvg = '<?xml version="1.0"?> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="512" height="512" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve"><g> <linearGradient xmlns="http://www.w3.org/2000/svg" id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="9.5" y1="258" x2="502.5" y2="258" gradientTransform="matrix(1 0 0 -1 0 514)"> <stop offset="0" style="stop-color:#00F2FE"/> <stop offset="0.021" style="stop-color:#03EFFE"/> <stop offset="0.293" style="stop-color:#24D2FE"/> <stop offset="0.554" style="stop-color:#3CBDFE"/> <stop offset="0.796" style="stop-color:#4AB0FE"/> <stop offset="1" style="stop-color:#4FACFE"/> </linearGradient> <path xmlns="http://www.w3.org/2000/svg" style="fill:url(#SVGID_1_);" d="M124.5,512h-35c-44.112,0-80-35.888-80-80V80c0-44.112,35.888-80,80-80h35  c44.112,0,80,35.888,80,80v352C204.5,476.112,168.612,512,124.5,512z M89.5,40c-22.056,0-40,17.944-40,40v352  c0,22.056,17.944,40,40,40h35c22.056,0,40-17.944,40-40V80c0-22.056-17.944-40-40-40H89.5z M502.5,432c0-11.046-8.954-20-20-20  s-20,8.954-20,20c0,22.056-17.944,40-40,40h-34c-22.056,0-40-17.944-40-40V80c0-22.056,17.944-40,40-40h34c22.056,0,40,17.944,40,40  v252c0,11.046,8.954,20,20,20s20-8.954,20-20V80c0-44.112-35.888-80-80-80h-34c-44.112,0-80,35.888-80,80v352  c0,44.112,35.888,80,80,80h34C466.612,512,502.5,476.112,502.5,432z" fill=""/> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> </g></svg>';
const ap_loopsvg = '<?xml version="1.0"?><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="512" height="512" x="0" y="0" viewBox="0 0 513.22 513" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g transform="matrix(1,0,0,1,0,2.842170943040401e-14)"><path xmlns="http://www.w3.org/2000/svg" d="m240.015625 495.46875c-.015625-8.207031 6.175781-15.277344 14.367187-15.886719 100.882813-7.472656 180.6875-92 180.6875-194.734375l32-.882812v.882812c0 119.261719-92.429687 217.421875-209.40625 226.574219-9.457031.734375-17.632812-6.480469-17.648437-15.953125zm0 0" fill="#74ddce" data-original="#fbc02d" style="" class=""/><path xmlns="http://www.w3.org/2000/svg" d="m113.871094 456.878906c-70.222656-40.511718-113.871094-116-113.871094-196.992187 0-34.207031 7.710938-67.953125 22.414062-98.527344 3.875-8.050781 13.601563-11.3125 21.347657-6.867187l1.535156.882812c7.039063 4.046875 9.328125 12.800781 5.824219 20.109375-12.546875 26.210937-19.121094 55.105469-19.121094 84.402344 0 69.597656 37.503906 134.449219 97.855469 169.261719zm0 0" fill="#4dd0e1" data-original="#4dd0e1" style="" class=""/><path xmlns="http://www.w3.org/2000/svg" d="m437.441406 137.886719c-7.089844 4.144531-16.304687 2.320312-20.960937-4.449219-36.242188-52.65625-96.703125-84.832031-161.054688-84.832031-34.515625 0-68.433593 9.121093-98.097656 26.382812l-16.097656-27.644531c34.546875-20.113281 74.015625-30.738281 114.195312-30.738281 74.621094 0 144.734375 37.152343 186.957031 98.015625 5.394532 7.792968 3.234376 18.496094-4.941406 23.265625zm0 0" fill="#aeeff7" data-original="#e64a19" style="" class=""/><path xmlns="http://www.w3.org/2000/svg" d="m204.160156 96.109375h-80v-80c0-8.832031 7.167969-16 16-16 8.832032 0 16 7.167969 16 16v48h48c8.832032 0 16 7.167969 16 16s-7.167968 16-16 16zm0 0" fill="#94e4ef" data-original="#ff7043" style="" class=""/><path xmlns="http://www.w3.org/2000/svg" d="m136 464.109375h-80c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h48v-48c0-8.832031 7.167969-16 16-16s16 7.167969 16 16zm0 0" fill="#80deea" data-original="#80deea" style="" class=""/><path xmlns="http://www.w3.org/2000/svg" d="m485.902344 321.34375-33.949219-33.9375-33.953125 33.9375c-6.238281 6.238281-16.382812 6.238281-22.625 0-6.253906-6.257812-6.238281-16.386719 0-22.625l56.578125-56.5625 56.574219 56.5625c6.257812 6.238281 6.257812 16.382812 0 22.625-6.238282 6.253906-16.367188 6.253906-22.625 0zm0 0" fill="#5fd1dd" data-original="#fdd835" style="" class=""/></g></svg>';
const ap_loopedsvg = '<?xml version="1.0" encoding="utf-8"?> <svg version="1.1" width="512" height="512" x="0" y="0" viewBox="0 0 513.22 513" style="enable-background:new 0 0 512 512" class="" xmlns="http://www.w3.org/2000/svg" xmlns:bx="https://boxy-svg.com"> <g transform="matrix(1,0,0,1,0,2.842170943040401e-14)"> <path xmlns="http://www.w3.org/2000/svg" d="m240.015625 495.46875c-.015625-8.207031 6.175781-15.277344 14.367187-15.886719 100.882813-7.472656 180.6875-92 180.6875-194.734375l32-.882812v.882812c0 119.261719-92.429687 217.421875-209.40625 226.574219-9.457031.734375-17.632812-6.480469-17.648437-15.953125zm0 0" fill="#74ddce" data-original="#fbc02d" style="" class=""/> <path xmlns="http://www.w3.org/2000/svg" d="m113.871094 456.878906c-70.222656-40.511718-113.871094-116-113.871094-196.992187 0-34.207031 7.710938-67.953125 22.414062-98.527344 3.875-8.050781 13.601563-11.3125 21.347657-6.867187l1.535156.882812c7.039063 4.046875 9.328125 12.800781 5.824219 20.109375-12.546875 26.210937-19.121094 55.105469-19.121094 84.402344 0 69.597656 37.503906 134.449219 97.855469 169.261719zm0 0" fill="#4dd0e1" data-original="#4dd0e1" style="" class=""/> <path xmlns="http://www.w3.org/2000/svg" d="m437.441406 137.886719c-7.089844 4.144531-16.304687 2.320312-20.960937-4.449219-36.242188-52.65625-96.703125-84.832031-161.054688-84.832031-34.515625 0-68.433593 9.121093-98.097656 26.382812l-16.097656-27.644531c34.546875-20.113281 74.015625-30.738281 114.195312-30.738281 74.621094 0 144.734375 37.152343 186.957031 98.015625 5.394532 7.792968 3.234376 18.496094-4.941406 23.265625zm0 0" fill="#aeeff7" data-original="#e64a19" style="" class=""/> <path xmlns="http://www.w3.org/2000/svg" d="m204.160156 96.109375h-80v-80c0-8.832031 7.167969-16 16-16 8.832032 0 16 7.167969 16 16v48h48c8.832032 0 16 7.167969 16 16s-7.167968 16-16 16zm0 0" fill="#94e4ef" data-original="#ff7043" style="" class=""/> <path xmlns="http://www.w3.org/2000/svg" d="m136 464.109375h-80c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h48v-48c0-8.832031 7.167969-16 16-16s16 7.167969 16 16zm0 0" fill="#80deea" data-original="#80deea" style="" class=""/> <path xmlns="http://www.w3.org/2000/svg" d="m485.902344 321.34375-33.949219-33.9375-33.953125 33.9375c-6.238281 6.238281-16.382812 6.238281-22.625 0-6.253906-6.257812-6.238281-16.386719 0-22.625l56.578125-56.5625 56.574219 56.5625c6.257812 6.238281 6.257812 16.382812 0 22.625-6.238282 6.253906-16.367188 6.253906-22.625 0zm0 0" fill="#5fd1dd" data-original="#fdd835" style="" class=""/> </g> <path d="M 314 338 m -103.525 0 a 103.525 103.525 0 1 0 207.05 0 a 103.525 103.525 0 1 0 -207.05 0 Z M 314 338 m -62.114 0 a 62.114 62.114 0 0 1 124.228 0 a 62.114 62.114 0 0 1 -124.228 0 Z" style="fill: rgb(216, 216, 216);" transform="matrix(-0.833441, 0.552608, -0.552608, -0.833441, 688.569834, 370.780287)" bx:shape="ring 314 338 62.114 62.114 103.525 103.525 1@71c981af"/> </svg>';
const ap_downloadsvg = '<?xml version="1.0"?> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="512" height="512" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g> <linearGradient xmlns="http://www.w3.org/2000/svg" id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="0" y1="258" x2="512" y2="258" gradientTransform="matrix(1 0 0 -1 0 514)"> <stop offset="0" style="stop-color:#00F2FE"/> <stop offset="0.021" style="stop-color:#03EFFE"/> <stop offset="0.293" style="stop-color:#24D2FE"/> <stop offset="0.554" style="stop-color:#3CBDFE"/> <stop offset="0.796" style="stop-color:#4AB0FE"/> <stop offset="1" style="stop-color:#4FACFE"/> </linearGradient> <path xmlns="http://www.w3.org/2000/svg" style="fill:url(#SVGID_1_);" d="M432,512H80c-44.112,0-80-35.888-80-80c0-11.046,8.954-20,20-20s20,8.954,20,20  c0,22.056,17.944,40,40,40h352c22.056,0,40-17.944,40-40c0-11.046,8.954-20,20-20s20,8.954,20,20C512,476.112,476.112,512,432,512z   M297.398,367.454L408.114,257.17c7.826-7.795,7.851-20.458,0.056-28.284c-7.795-7.825-20.458-7.851-28.284-0.056L269.142,339.142  c-3.778,3.777-8.8,5.858-14.142,5.858c-5.323,0-10.329-2.065-14.102-5.817L132.243,228.959c-7.754-7.867-20.418-7.957-28.284-0.203  s-7.957,20.417-0.203,28.284l108.716,110.284c0.034,0.034,0.067,0.068,0.101,0.102c11.701,11.701,27.069,17.549,42.437,17.549  C270.366,384.975,285.72,379.133,297.398,367.454z M276,265V20c0-11.046-8.954-20-20-20s-20,8.954-20,20v245  c0,11.046,8.954,20,20,20C267.046,285,276,276.046,276,265z" fill=""/> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> </g></svg>';
const ap_volumnsvg = '<?xml version="1.0"?> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="512" height="512" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g> <linearGradient xmlns="http://www.w3.org/2000/svg" id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="0.1228" y1="257.8415" x2="512.1229" y2="257.8415" gradientTransform="matrix(0.9996 0 0 -0.9996 -0.0197 513.738)"> <stop offset="0" style="stop-color:#00F2FE"/> <stop offset="0.021" style="stop-color:#03EFFE"/> <stop offset="0.293" style="stop-color:#24D2FE"/> <stop offset="0.554" style="stop-color:#3CBDFE"/> <stop offset="0.796" style="stop-color:#4AB0FE"/> <stop offset="1" style="stop-color:#4FACFE"/> </linearGradient> <path xmlns="http://www.w3.org/2000/svg" style="fill:url(#SVGID_1_);" d="M398.926,323.939c-3.224,0-6.492-0.781-9.524-2.428c-9.702-5.27-13.296-17.408-8.026-27.11  l0.49-0.898c4.014-7.364,10.081-18.492,10.081-37.536c0-19.785-6.253-30.819-10.392-38.119c-5.444-9.606-2.07-21.806,7.535-27.251  c9.607-5.445,21.805-2.07,27.251,7.535c5.06,8.928,15.59,27.507,15.59,57.835c0,29.236-9.732,47.085-14.96,56.675l-0.459,0.842  C412.888,320.155,406.017,323.939,398.926,323.939z M445.999,98.339c-7.845-7.77-20.504-7.71-28.273,0.135  c-7.77,7.845-7.71,20.503,0.135,28.273c34.857,34.526,54.053,80.389,54.053,129.139c0,48.85-19.196,94.768-54.053,129.294  c-7.845,7.77-7.905,20.429-0.135,28.273c3.909,3.947,9.055,5.923,14.204,5.923c5.084,0,10.171-1.928,14.068-5.789  c42.496-42.092,65.898-98.099,65.898-157.702C511.897,196.382,488.495,140.431,445.999,98.339z M295.166,4.873  c-22.701-9.572-47.762-4.833-65.401,12.367c-0.415,0.405-0.812,0.827-1.19,1.266l-113.27,131.498H80.071  c-44.094,0-79.968,35.874-79.968,79.968v51.979c0,44.094,35.874,79.968,79.968,79.968h35.235l113.27,131.498  c0.378,0.439,0.775,0.862,1.19,1.266c11.658,11.367,26.532,17.317,41.826,17.316c7.932,0,15.978-1.601,23.743-4.875  c22.596-9.527,36.633-30.695,36.633-55.242c0-11.042-8.95-19.992-19.992-19.992c-11.042,0-19.992,8.95-19.992,19.992  c0,12.306-9.325,17.194-12.183,18.399c-2.855,1.204-12.716,4.422-21.584-3.716L139.618,328.881  c-3.797-4.409-9.328-6.944-15.147-6.944h-44.4c-22.047,0-39.984-17.937-39.984-39.984v-51.979c0-22.047,17.937-39.984,39.984-39.984  h44.4c5.819,0,11.349-2.536,15.147-6.944L258.216,45.361c8.772-8.045,18.576-4.84,21.415-3.644  c2.898,1.222,12.353,6.176,12.353,18.616v291.592c0,11.042,8.95,19.992,19.992,19.992c11.042,0,19.992-8.95,19.992-19.992V60.332  C331.97,35.695,317.867,14.444,295.166,4.873z" fill=""/> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> </g></svg>';
const ap_mutesvg = '<?xml version="1.0"?> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="512" height="512" x="0" y="0" viewBox="0 0 511.999 511.999" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g> <path xmlns="http://www.w3.org/2000/svg" style="" d="M262.781,57.853c-5.041-2.557-11.092-2.059-15.651,1.284L130.59,144.6H15c-8.284,0-15,6.716-15,15  v192.801c0,8.284,6.716,15,15,15h115.59l116.541,85.461c2.621,1.924,5.737,2.904,8.871,2.904c2.313,0,4.638-0.535,6.779-1.62  c5.041-2.554,8.219-7.728,8.219-13.38V71.233C271,65.58,267.822,60.408,262.781,57.853z" fill="#4990e5" data-original="#4dbbeb" class=""/> <path xmlns="http://www.w3.org/2000/svg" style="" d="M424.7,277.216l61.693,61.693c5.857,5.858,15.355,5.858,21.213,0c5.857-5.857,5.857-15.355,0-21.213  l-61.693-61.693l61.693-61.693c5.857-5.857,5.857-15.355,0-21.213s-15.355-5.858-21.213,0L424.7,234.79l-61.693-61.693  c-5.857-5.858-15.355-5.858-21.213,0c-2.929,2.929-4.393,6.768-4.393,10.606s1.465,7.678,4.393,10.606l61.692,61.693l-61.692,61.693  c-2.929,2.929-4.393,6.768-4.393,10.606s1.465,7.678,4.393,10.606c5.857,5.858,15.355,5.858,21.213,0L424.7,277.216z" fill="#4990e5" data-original="#fd3018" class=""/> <path xmlns="http://www.w3.org/2000/svg" style="" d="M0,352.399c0,8.284,6.716,15,15,15h115.589l116.54,85.463c2.623,1.924,5.738,2.904,8.872,2.904  c2.313,0,4.638-0.535,6.778-1.62c5.043-2.554,8.221-7.728,8.221-13.38V255.999H0V352.399z" fill="#2488ff" data-original="#2488ff" class=""/> <path xmlns="http://www.w3.org/2000/svg" style="" d="M424.7,277.216l61.693,61.693c5.857,5.858,15.355,5.858,21.213,0c5.857-5.857,5.857-15.355,0-21.213  l-61.693-61.693h-42.427l-61.692,61.693c-2.929,2.929-4.393,6.768-4.393,10.606s1.465,7.678,4.393,10.606  c5.857,5.858,15.355,5.858,21.213,0L424.7,277.216z" fill="#4990e5" data-original="#e61e14" class=""/> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> </g></svg>';

//Inner Htmls
ap_loop.innerHTML = ap_loopsvg;
o('.ap_download').innerHTML = ap_downloadsvg;
play.innerHTML = ap_playsvg;
o('.ap_sound').innerHTML = ap_volumnsvg;

// play song
function playsong() {
    setInterval(function () {
        range_slider()
    }, 700);
    track.play();
    Playing_song = true;
    play.innerHTML = ap_pausesvg;
}

//pause song
function pausesong() {
    track.pause();
    Playing_song = false;
    play.innerHTML = ap_playsvg;
}
