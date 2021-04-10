const playButton = document.querySelector('.play');
const replayButton = document.querySelector('.replay');
const rewinddButton = document.querySelector('.rewind');
const forwardButton = document.querySelector('.forward');
const timeLabel = document.querySelector('.time');
const caption = document.querySelector('.caption');
const mute = document.querySelector('#mute');


const player = document.querySelector('video');

const progress = document.getElementById('progress');
const progressBar = document.getElementById('progress-bar');

player.removeAttribute('controls');

playButton.addEventListener("click", ()=>{
    if(player.paused) {
        player.play();
        
    } else {
        player.pause();
    }
});


replayButton.addEventListener("click", ()=>{
    player.pause();
    player.currentTime = 0;
});

rewinddButton.addEventListener("click", ()=> {
    player.currentTime -= 10;
});

forwardButton.addEventListener("click",()=>{
    player.currentTime += 10;
    if(player.currentTime >= player.duration || player.paused) {
        player.pause();
        player.currentTime = 0;
    }
});

player.addEventListener("timeupdate", progressTime);

function progressTime(){
    let minutes = Math.floor(player.currentTime / 60);
    let seconds = Math.floor(player.currentTime - minutes * 60);
    let minuteValue;
    let secondValue;

    if (minutes<10) {
        minuteValue = "0" + minutes;
    } else {
        minuteValue = minutes;
    }

    if (seconds<10) {
        secondValue = "0" + seconds;
    } else {
        secondValue = seconds;
    }

    let mediaTime = minuteValue + ":" + secondValue;
    timeLabel.textContent = mediaTime;
}

caption.addEventListener("click", ()=>{
    player.appendChild = '<track label="English" kind="subtitles" srclang="en" src="vtt/coach.vtt">';
});

mute.addEventListener("click", ()=>{

    if(player.muted){
        player.muted = !player.muted;
        mute.innerHTML = '<i class="volume up icon"></i>';
        console.log("if");
    }else{
        player.muted = !player.muted;
        mute.innerHTML = '<i class="volume off icon"></i>';
    }
});

player.addEventListener('loadedmetadata', function(){
    progress.setAttribute('max', player.duration);

});

player.addEventListener('timeupdate', function(){
    if (!progress.getAttribute('max')) progress.setAttribute('max', player.duration);
    progress.value = player.currentTime;
    progressBar.style.width = Math.floor((player.currentTime / player.duration) * 100) + '%';
});


player.textTracks[0].mode = 'hidden';
caption.addEventListener('click', ()=>{
    if(player.textTracks[0].mode == 'hidden'){
        player.textTracks[0].mode = 'showing';
    } 
    else {
        player.textTracks[0].mode = 'hidden';
    }
});





