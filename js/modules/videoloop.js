// 
const button = document.querySelectorAll('.show-controls button'),
    showplayer = document.querySelector('.shows');


const playPauseButton = document.querySelector('.playpauseshow'),
    caption = document.querySelector('.captionshow'),
    mute = document.querySelector('#muteshow'),
    timeLabel = document.querySelector('.timeshow'),
    z = document.getElementById('.progressshow'),
    progressBar = document.getElementById('progress-barshow');


function videocontrols(){
    if(this.dataset.media == 6){
        if(showplayer.paused) {
            showplayer.load();
            showplayer.play();
        } else {
            showplayer.pause()
        }
    }

    else if(this.dataset.media == 7) {
        showplayer.pause();
        showplayer.currentTime = 0;
    }

    else if(this.dataset.media == 8) {
        showplayer.currentTime -=10;
    }

    else if(this.dataset.media == 9){
        showplayer.currentTime +=10;
        if(showplayer.currentTime >= showplayer.duration || showplayer.paused) {
            showplayer.pause();
            showplayer.currentTime = 0;
        }
    }

    else if(this.dataset.media == 10){
        if(showplayer.textTracks[0].mode == 'hidden'){
            showplayer.textTracks[0].mode = 'showing';
        } else {
            showplayer.textTracks[0].mode = 'hidden';
        }
    }
}

    

   
showplayer.textTracks[0].mode = 'hidden';
button.forEach(show=>show.addEventListener("click", videocontrols));
showplayer.addEventListener("timeupdate", progressTime);


// showplayer.textTracks[0].mode = 'hidden';
// button.forEach(show=>show.addEventListener("click", videocontrols));
// showplayer.addEventListener("timeupdate", progressTime);