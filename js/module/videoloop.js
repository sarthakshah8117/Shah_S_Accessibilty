const button = document.querySelectorAll('.show-controls button'),
    showplayer = document.querySelector('.shows');

const playPauseButton = document.querySelector('.playpauseshow'),
      caption = document.querySelector('.captionshow'),
      mute = document.querySelector('#muteshow'),
      timeLabel = document.querySelector('.timeshow'),
      z = document.getElementById('.progresshow'),
      progressBar = document.getElementById('progress-barshow');

function videocontrols(){

    //play-pause
    if(this.dataset.media == 6){
        if(showplayer.paused) {
            showplayer.load();
            showplayer.play();
            // playPauseButton.innerHTML = '<i class="pause circle icon"></i>';
            // playPauseBtn.textContent = 'Pause';
          } else {
            showplayer.pause();
            // playPauseButton.innerHTML = '<i class="play circle icon"></i>';
            // playPauseBtn.textContent = 'Play';
        }
    }

    // Stop Button
    else if(this.dataset.media == 7){
        showplayer.pause();
        showplayer.currentTime = 0;
        // playPauseButton.innerHTML = '<i class="play circle icon"></i>';
    }

    // rewind
    else if(this.dataset.media == 8){
        showplayer.currentTime -= 10;
    }

    // forward
    else if(this.dataset.media == 9){
        showplayer.currentTime += 10;
        if(showplayer.currentTime >= showplayer.duration || showplayer.paused) {
            showplayer.pause();
            showplayer.currentTime = 0;
            // playPauseButton.innerHTML = '<i class="play circle icon"></i>';
        }
    }

    // captions
    else if(this.dataset.media == 10){
        if(showplayer.textTracks[0].mode == 'hidden'){
            showplayer.textTracks[0].mode = 'showing';
            // caption.innerHTML = '<i class="closed captioning icon"></i>';
        }
        else{
            // caption.querySelector(".closed").classList.remove("line");
            // caption.querySelector(".closed").classList.add("line-through");
            showplayer.textTracks[0].mode = 'hidden';
            // caption.innerHTML = '<i class="closed captioning outline icon"></i>';
        }
        
    }

    // Volume
    else if(this.dataset.media == 11){
        if(showplayer.muted){
            showplayer.muted = !showplayer.muted;
            mute.innerHTML = '<i class="volume up icon"></i>';
        }else{
            showplayer.muted = !showplayer.muted;
            mute.innerHTML = '<i class="volume off icon"></i>';
        }
    }
}

// progress bar
function progressTime(){
    let minutes = Math.floor(showplayer.currentTime / 60);
    let seconds = Math.floor(showplayer.currentTime - minutes * 60);
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

showplayer.textTracks[0].mode = 'hidden';
button.forEach(show=>show.addEventListener("click", videocontrols));
showplayer.addEventListener("timeupdate", progressTime);