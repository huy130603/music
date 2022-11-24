let songIndex = 0;
let masterImg = document.getElementById('masterImg');
let audioElement = new Audio('/NP1/1.mp3');
let masterPlay = document.getElementById('masterplay');
let myProgressBar = document.getElementById('progressbar');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songitem'));

let songs = [
    { songName: 'Girls Like You - MAROON 5', filePath: '/NP1/1.mp3', coverPath: '/NP/1.png' },
    { songName: 'Shape of You - ED SHEERAN', filePath: '/NP1/2.mp3', coverPath: '/NP/2.png' },
    { songName: 'Sugar - MAROON5', filePath: '/NP1/3.mp3', coverPath: '/NP/3.png' },
    { songName: 'Maps - MAROON5', filePath: '/NP1/4.mp3', coverPath: '/NP/4.png' },
    { songName: 'Payphone - MAROON5 ft.Wiz Khalifax', filePath: '/NP1/5.mp3', coverPath: '/NP/5.png' },
]
// function for next slide 
/*function nextImage() {
    if (i >= 15) {
        i = 0
    } else {
        i+=1;
    }
    slider_content.innerHTML = "<img src=/Baihat/" + image[i] + ".png>";
}
   // function for prew slide
function prewImage() {

    if (i <= 0) {
        i = 0
    } else {
        i -= 1;
    }
    slider_content.innerHTML = "<img src=/Baihat/" + image[i] + ".png>";

}
*/


songItems.forEach((element, i) => {
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
})

// audioElement.play();
//Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause-circle');


    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play');
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', () => {
    // Update Seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;

})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('play-icon')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play');
    })
}


Array.from(document.getElementsByClassName('play-icon')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `/NP1/${songIndex + 1}.mp3`;
        masterImg.innerHTML = "<img src=" + songs[songIndex].coverPath + ">";
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('playnext').addEventListener('click', () => {
    if (songIndex >= 5) {
        songIndex = 0
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `/NP1/${songIndex + 1}.mp3`;
    masterImg.innerHTML = "<img src=" + songs[songIndex].coverPath + ">";
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('playback').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `/NP1/${songIndex + 1}.mp3`;
    masterImg.innerHTML = "<img src=" + songs[songIndex].coverPath + ">";
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause-circle');
})
