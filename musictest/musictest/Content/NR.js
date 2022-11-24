let songIndex = 0;
let masterImg = document.getElementById('masterImg');
let audioElement = new Audio('/NR1/1.mp3');
let masterPlay = document.getElementById('masterplay');
let myProgressBar = document.getElementById('progressbar');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songitem'));

let songs = [
    { songName: 'Tấm Lòng Son Remix - H-Kray x Đại Mèo Remix', filePath: '/NR1/1.mp3', coverPath: '/NR/1.jpg' },
    { songName: 'VÂN RUNG (Orinn Remix) - GILL, RPT ORIJINN', filePath: '/NR1/2.mp3', coverPath: '/NR/2.png' },
    { songName: 'Có Đâu Ai Ngờ - Cầm「Cukak Remix」', filePath: '/NR1/3.mp3', coverPath: '/NR/3.png' },
    { songName: 'BÊN TRÊN TẦNG LẦU - TĂNG DUY TÂN ( VISCONC REMIX )', filePath: '/NR/4.mp3', coverPath: '/NR/4.jpg' },
    { songName: 'Phao - 2 Phut Hon (KAIZ Remix)', filePath: '/NR1/5.mp3', coverPath: '/NR/5.jpg' },
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
        audioElement.src = `/NR1/${songIndex + 1}.mp3`;
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
    audioElement.src = `/NR1/${songIndex + 1}.mp3`;
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
    audioElement.src = `/NR1/${songIndex + 1}.mp3`;
    masterImg.innerHTML = "<img src=" + songs[songIndex].coverPath + ">";
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause-circle');
})
