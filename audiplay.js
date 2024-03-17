// Constants
const ap_playsvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <polygon points="5 3 19 12 5 21 5 3"></polygon>
</svg>
`;

const ap_pausesvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="6" y="4" width="4" height="16"></rect>
    <rect x="14" y="4" width="4" height="16"></rect>
</svg>
`;

const ap_loopsvg = `
<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M256 256s-48-96-126-96c-54.12 0-98 43-98 96s43.88 96 98 96c37.51 0 71-22.41 94-48M256 256s48 96 126 96c54.12 0 98-43 98-96s-43.88-96-98-96c-37.51 0-71 22.41-94 48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"/></svg>`;

const ap_loopedsvg = `
<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M250.54 129.17l-67.8-67.8A209.65 209.65 0 0086.32 136h161.4a4 4 0 002.82-6.83zM167.72 168H67.63a207.34 207.34 0 00-16.15 125.9l119.06-119.07a4 4 0 00-2.82-6.83zM344 167.72V67.56a207.82 207.82 0 00-125.89-16.08l119.06 119.06a4 4 0 006.83-2.82zM460.52 218.1L341.46 337.17a4 4 0 002.82 6.83h100.09a207.34 207.34 0 0016.15-125.9zM382.83 250.54l67.83-67.82A209.08 209.08 0 00376 86.2v161.52a4 4 0 006.83 2.82zM221.68 341.77a8 8 0 005.54 2.23h59.66a8 8 0 005.7-2.39l49.18-50a8 8 0 002.3-5.62l-.06-60.81a8 8 0 00-2.38-5.69l-50-49.25a8 8 0 00-5.63-2.3l-60.84.06a8 8 0 00-5.69 2.38l-49.25 50a8 8 0 00-2.3 5.63l.06 60.78a8 8 0 002.45 5.76zM261.46 382.83l67.8 67.8A209.65 209.65 0 00425.68 376h-161.4a4 4 0 00-2.82 6.83zM168 344.28v100.16a207.82 207.82 0 00125.89 16.08L174.83 341.46a4 4 0 00-6.83 2.82zM129.17 261.46l-67.83 67.83A209.1 209.1 0 00136 425.8V264.28a4 4 0 00-6.83-2.82z"/></svg>
`;

let ap_downloadsvg = `
<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M176 262.62L256 342l80-79.38M256 330.97V170"/><path d="M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/></svg>`;

const ap_soundsvg = `
<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M126 192H56a8 8 0 00-8 8v112a8 8 0 008 8h69.65a15.93 15.93 0 0110.14 3.54l91.47 74.89A8 8 0 00240 392V120a8 8 0 00-12.74-6.43l-91.47 74.89A15 15 0 01126 192zM320 320c9.74-19.38 16-40.84 16-64 0-23.48-6-44.42-16-64M368 368c19.48-33.92 32-64.06 32-112s-12-77.74-32-112M416 416c30-46 48-91.43 48-160s-18-113-48-160" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>`;

const ap_soundmutesvg = `
<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M416 432L64 80"/><path d="M224 136.92v33.8a4 4 0 001.17 2.82l24 24a4 4 0 006.83-2.82v-74.15a24.53 24.53 0 00-12.67-21.72 23.91 23.91 0 00-25.55 1.83 8.27 8.27 0 00-.66.51l-31.94 26.15a4 4 0 00-.29 5.92l17.05 17.06a4 4 0 005.37.26zM224 375.08l-78.07-63.92a32 32 0 00-20.28-7.16H64v-96h50.72a4 4 0 002.82-6.83l-24-24a4 4 0 00-2.82-1.17H56a24 24 0 00-24 24v112a24 24 0 0024 24h69.76l91.36 74.8a8.27 8.27 0 00.66.51 23.93 23.93 0 0025.85 1.69A24.49 24.49 0 00256 391.45v-50.17a4 4 0 00-1.17-2.82l-24-24a4 4 0 00-6.83 2.82zM125.82 336zM352 256c0-24.56-5.81-47.88-17.75-71.27a16 16 0 00-28.5 14.54C315.34 218.06 320 236.62 320 256q0 4-.31 8.13a8 8 0 002.32 6.25l19.66 19.67a4 4 0 006.75-2A146.89 146.89 0 00352 256zM416 256c0-51.19-13.08-83.89-34.18-120.06a16 16 0 00-27.64 16.12C373.07 184.44 384 211.83 384 256c0 23.83-3.29 42.88-9.37 60.65a8 8 0 001.9 8.26l16.77 16.76a4 4 0 006.52-1.27C410.09 315.88 416 289.91 416 256z"/><path d="M480 256c0-74.26-20.19-121.11-50.51-168.61a16 16 0 10-27 17.22C429.82 147.38 448 189.5 448 256c0 47.45-8.9 82.12-23.59 113a4 4 0 00.77 4.55L443 391.39a4 4 0 006.4-1C470.88 348.22 480 307 480 256z"/></svg>`;
// HTML template for audio player
const ap_html = `
<style>
.ap_container {
    transition-duration: .5s;
    display: inline-block;
    text-align: center;
    overflow: hidden;
    padding: 5px;
    background: rgba(245, 236, 242);
    border-radius: 4px;
    transition: all 1s;
    width: 100%;
    margin: auto;
}

.ap_controls {
    width: 100%;
    display: flex;
    position: relative;
    flex-direction: row;
    font-size: large;
    font-family: Tahoma, Geneva, Verdana, sans-serif;
    cursor: pointer;
    transition: all 0.5s;
    justify-content: space-around;
    align-items: center;

}

.ap_controls span {
    margin: 5px;
    display: inline-block;
}

.ap_container .playpausebtn {
    border-radius: 50%;
    font-size: larger;
}

.ap_container svg {
    width: 25px;
    height: 25px;
    transition: all 0.3s;
}

.ap_controls .duration {
    width: 60%;
    display: flex;
    align-items: center;
    
}

.ap_controls input[type=range] {
    -webkit-appearance: none;
    width: 100%;
    outline: 0;
    height: 2px;
    background: #0ff;
    transition: all 0.3s;
}

.ap_controls:hover input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    cursor: pointer;
    background: #00ced1;
    transition: all 0.3s;
}

.ap_controls input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 0;
}

.ap_sound {
    padding: 4px;
}

.ap_time {
    margin: 4px;
}
</style>
<div class="ap_container">
    <div class="ap_controls">
        <span class="playpausebtn" onclick="justplay(this)">${ap_playsvg}</span>
        <span class="ap_loop" onclick="ap_loopf(this)">${ap_loopsvg}</span>
        <span class="duration">
            <input type="range" min="0" max="100" value="0" class="duration_slider" onchange="change_duration(this)">
        </span>
        <span class="ap_time"></span>
        <span class="ap_download" onclick="ap_download(this)">${ap_downloadsvg}</span>
        <span class="ap_sound" onclick="ap_mute(this)">${ap_soundsvg}</span>
    </div>
</div>
`;

// Get all audio elements with class 'audioplay'
const ap_audioElements = document.querySelectorAll('.audiplay');

// Insert the audio player before each audio element
ap_audioElements.forEach((audioElement, index) => {
    audioElement.insertAdjacentHTML('beforebegin', ap_html);
    createContainer(audioElement, index);
});

// Function to create container with appropriate class
function createContainer(audioElement, index) {
    const apContainer = audioElement.previousElementSibling;
    apContainer.classList.add(`ap_container_${index}`);
    apContainer.querySelector('.playpausebtn').dataset.index = index;
    apContainer.querySelector('.ap_loop').dataset.index = index;
    apContainer.querySelector('.duration_slider').dataset.index = index;
    apContainer.querySelector('.ap_time').dataset.index = index;
    apContainer.querySelector('.ap_download').dataset.index = index;
    apContainer.querySelector('.ap_sound').dataset.index = index;
}

// Play-Pause function
function justplay(element) {
    const index = element.dataset.index;
    const audioElement = ap_audioElements[index];
    if (audioElement.paused) {
        audioElement.play();
        element.innerHTML = ap_pausesvg;
    } else {
        audioElement.pause();
        element.innerHTML = ap_playsvg;
    }
}

// Change duration function
function change_duration(element) {
    const index = element.dataset.index;
    const audioElement = ap_audioElements[index];
    const seekto = audioElement.duration * (element.value / 100);
    audioElement.currentTime = seekto;
}

// Mute function
function ap_mute(element) {
    const index = element.dataset.index;
    const audioElement = ap_audioElements[index];
    if (!audioElement.muted) {
        audioElement.muted = true;
        element.innerHTML = ap_soundmutesvg;
    } else {
        audioElement.muted = false;
        element.innerHTML = ap_soundsvg;
    }
}

// Loop function
function ap_loopf(element) {
    const index = element.dataset.index;
    const audioElement = ap_audioElements[index];
    if (audioElement.loop) {
        audioElement.loop = false;
        element.innerHTML = ap_loopsvg;
    } else {
        audioElement.loop = true;
        element.innerHTML = ap_loopedsvg;
    }
}

// Event Listeners
ap_audioElements.forEach((audioElement, index) => {
    audioElement.addEventListener('timeupdate', function() {
        const progress = (audioElement.currentTime / audioElement.duration) * 100;
        document.querySelector(`.ap_container_${index} .duration_slider`).value = progress;
        showtime(audioElement, index);
    });

    audioElement.addEventListener('ended', function() {
        document.querySelector(`.ap_container_${index} .playpausebtn`).innerHTML = ap_playsvg;
        audioElement.currentTime = 0;
    });
});

// Function to display audio time
function showtime(audioElement, index) {
    const current = audioElement.currentTime;
    const duration = audioElement.duration;
    const minutes = Math.floor(current / 60);
    const seconds = Math.floor(current - minutes * 60);
    const duration_minutes = Math.floor(duration / 60);
    const duration_seconds = Math.floor(duration - duration_minutes * 60);
    let time = minutes + ":" + (seconds < 10 ? "0" + seconds : seconds) + " / " + duration_minutes + ":" + (duration_seconds < 10 ? "0" + duration_seconds : duration_seconds);
    document.querySelector(`.ap_container_${index} .ap_time`).innerHTML = time;
}

// Function to download audio
function ap_download(element) {
    const index = element.dataset.index;
    const audioElement = ap_audioElements[index];
    const audioSrc = audioElement.src;
    const link = document.createElement('a');
    link.href = audioSrc;
    link.download = 'audio';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
