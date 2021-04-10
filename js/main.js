import "./module/video.js";
import "./module/videoloop.js";



const custom = document.querySelector('.custom-controls'),
    button = custom.querySelectorAll('img'),
    audio = document.querySelector('.innerContent audio');

const canvas = document.querySelector("#progress"),
    currentTimeBar = document.querySelector("#current-time"),
    duration = document.querySelector("#duration"),
    canvaswidth= 500;




    function audioPlayer(){
        let pause = false;
        console.log("audio length", audio.currentTime);

        var adDuration = audio.duration;
        var cadCurrent = audio.currentTime;

        currentTimeBar.innerHTML = convertedElapsedTime(cadCurrent);
        duration.innerHTML = convertedElapsedTime(adDuration);
    
        if(this.dataset.button == 2)
        {
            audio.currentTime = 0;
            audio.pause();
        }

        else if(this.dataset.button == 3)
        {
            audio.currentTime = 0;
            audio.play();
        }

        else if(this.dataset.button == 1)
        {
            audio.pause();
        }

        else {
            audio.play();
        }
    }


    function convertedElapsedTime(inputseconds){
        var seconds = Math.floor(inputseconds % 60);
        if( seconds <  10){
            seconds = "0"+seconds;
        }

        var minutes = Math.floor(inputseconds / 60);
        return minutes+ ":"+seconds;
       }

       button.forEach(data=>data.addEventListener("click",audioPlayer));