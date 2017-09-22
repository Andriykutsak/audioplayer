var songWrap = document.getElementsByTagName('song'),
    //controll buttons
    playPause = document.querySelectorAll(".play-btn"),
    prewBtn = document.querySelectorAll('.prew-btn'),
    nextBtn = document.querySelectorAll('.next-btn'),
    //volume and duration 
    durationSlider = document.getElementById('song-duration'),
    volumeSlider = document.getElementById('volume-slider'),
    currTime = document.getElementsByClassName('current-time')[0],
    duration = document.getElementsByClassName('duration')[0],

    //song name and song source
    songName = document.getElementsByClassName('song-name')[0],
    song = new Audio();

volumeSlider.onchange = setVolume;

function loadAudio(data) {
    data.style = "backgroundImage = url('img/pause.jpg')"
    song.src = data.getAttribute('data-source');
    songName.innerHTML = data.getAttribute('data-name');
    setInterval(showDuration(song), 1000);


    function toggleStatus(argument) {
        if (song.paused) {
            song.play();

        } else {
            song.play();

        }
    }
    toggleStatus();
}

function showDuration(song) {
    var dur = song.duration;
    var curentTime = song.currentTime;
    durationSlider.setAttribute('max', dur);
    durationSlider.setAttribute('step', curentTime);
    currTime.innerHTML = convertTime(dur);
    duration.innerHTML = convertTime(curentTime);
    window.console.log(dur + ':' + curentTime);


}

function setVolume() {
    var vol = this.value;
    song.volume = vol;
}
//setInterval(showDuration(), 1000);

function convertTime(sec) {
    var minutes = Math.floor(sec / 60);
    var sec = Math.floor(sec % 60);
    minutes =
        minutes < 10 ? '0' + minutes : minutes;
    sec =
        sec < 10 ? '0' + sec : sec;
    return (minutes + ":" + sec)
}

function nextSong(i) {
    i++;
    loadAudio()
}

function prewSong() {

}

function playPause() {

}
for (var i = 0; i < playPause.length; i++) {
    playPause[i].addEventListener('click', function(e) {
        var obj = e.target;
        loadAudio(obj);
    });

};