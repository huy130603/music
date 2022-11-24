﻿let songIndex = 0;  
let masterImg = document.getElementById('masterImg');
let audioElement = new Audio('/Audio/1.mp3');
let masterPlay = document.getElementById('masterplay');
let myProgressBar = document.getElementById('progressbar');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songitem'));

let songs = [
    { songName: 'An Thần - ft Thắng  Low G  Rap Nhà Làm', filePath: '/Audio/1.mp3', coverPath: '/Baihat/1.png' },
    { songName: 'Chìm Sâu - RPT MCK feat Trung Trần', filePath: "/Audio/2.mp3", coverPath: '/Baihat/2.png' },
    { songName: 'Madihu - Có em Feat Low G', filePath: '/Audio/3.mp3', coverPath: '/Baihat/3.png' },
    { songName: 'QUERRY - QNT x TRUNG TRẦN ft RPT MCK Prod By RASTZ', filePath: '/Audio/4.mp3', coverPath: '/Baihat/4.png' },
    { songName: 'Rhymastic - Nến Và Hoa Official Audio', filePath: '/Audio/5.mp3', coverPath: '/Baihat/5.png' },
    { songName: 'Tấm Lòng Son Remix - H-Kray x Đại Mèo Remix', filePath: '/Audio/6.mp3', coverPath: '/Baihat/6.png' },
    { songName: 'VÂN RUNG (Orinn Remix) - GILL, RPT ORIJINN', filePath: '/Audio/7.mp3', coverPath: '/Baihat/7.png' },
    { songName: 'Có Đâu Ai Ngờ - Cầm「Cukak Remix」', filePath: '/Audio/8.mp3', coverPath: '/Baihat/8.png' },
    { songName: 'BÊN TRÊN TẦNG LẦU - TĂNG DUY TÂN ( VISCONC REMIX )', filePath: '/Audio/9.mp3', coverPath: '/Baihat/9.png' },
    { songName: 'Phao - 2 Phut Hon (KAIZ Remix)', filePath: '/Audio/10.mp3', coverPath: '/Baihat/10.png' },
    { songName: 'Vệ Tinh - HIEUTHUHAI ft. Hoàng Tôn (prod. by Kewtiie)', filePath: '/Audio/11.mp3', coverPath: '/Baihat/11.png' },
    { songName: 'Vì Anh Đâu Có Biết - Madihu (Feat. Vũ.)', filePath: '/Audio/12.mp3', coverPath: '/Baihat/12.png' },
    { songName: 'Waiting For You - MONO', filePath: '/Audio/13.mp3', coverPath: '/Baihat/13.png' },
    { songName: 'THICHTHICH - PHƯƠNG LY', filePath: '/Audio/14.mp3', coverPath: '/Baihat/14.png' },
    { songName: 'Tại Vì Sao - RPT MCK', filePath: '/Audio/15.mp3', coverPath: '/Baihat/15.png' },
    { songName: 'Alan Walker - Faded', filePath: '/Audio/16.mp3', coverPath: '/Baihat/16.png' },
    { songName: 'At My Worst - Pink Sweat', filePath: '/Audio/17.mp3', coverPath: '/Baihat/17.png' },
    { songName: 'Way Back Home - SHAUN feat Conor Maynard', filePath: '/Audio/18.mp3', coverPath: '/Baihat/18.png' },
    { songName: 'See You Again - Wiz Khalifa ft.Charlie Puth', filePath: '/Audio/19.mp3', coverPath: '/Baihat/19.png' },
    { songName: 'Shape of You - Ed Sheeran', filePath: '/Audio/20.mp3', coverPath: '/Baihat/20.png' },
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
        audioElement.src = `/Audio/${songIndex + 1}.mp3`;
        masterImg.innerHTML = "<img src=" + songs[songIndex].coverPath + ">";
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('playnext').addEventListener('click', () => {
    if (songIndex >= 20) {
        songIndex = 0
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `/Audio/${songIndex + 1}.mp3`;
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
    audioElement.src = `/Audio/${songIndex + 1}.mp3`;
    masterImg.innerHTML = "<img src=" + songs[songIndex].coverPath + ">";
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause-circle');
})
