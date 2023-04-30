// master class 
let music = new Audio(' audio/1.mp3')
// music.play();
const song = [
    {
        id: 1,
        songname: `on my way <br>
        <div class="subtitle">Alan walker</div>`,
        poster: "img/1.jpg"
    },
    {
        id: 2,
        songname: `Alan walker-fade <br>
        <div class="subtitle">Alan walker</div>`,
        poster: "img/2.jpg"
    },
    {
        id: 3,
        songname: `Cartoon <br>
        <div class="subtitle">Daniel levie</div>`,
        poster: "img/3.jpg"
    },
    {
        id: 4,
        songname: `Warriyo <br>
        <div class="subtitle">Mortals</div>`,
        poster: "img/4.jpg"
    },
    {
        id: 5,
        songname: `Ertugul gaji<br>
        <div class="subtitle">Ertugul</div>`,
        poster: "img/5.jpg"
    },
    {
        id: 6,
        songname: `Electronic  <br>
        <div class="subtitle">Electro</div>`,
        poster: "img/6.jpg"
    },
    {
        id: 7,
        songname: ` Agar tum sath ho<br>
        <div class="subtitle">Tamasha</div>`,
        poster: "img/7.jpg"
    },
    {
        id: 8,
        songname: ` Suna hai <br>
        <div class="subtitle">neha kakker</div>`,
        poster: "img/8.jpg"
    },
    {
        id: 9,
        songname: ` dilber <br>
        <div class="subtitle">sataymeva jayte</div>`,
        poster: "img/9.jpg"
    },
    {
        id: 10,
        songname: `duniya <br>
        <div class="subtitle">luka chuppi</div>`,
        poster: "img/10.jpg"
    },
    {
        id: 11,
        songname: ` lagdi lahore  <br>
        <div class="subtitle">gabru</div>`,
        poster: "img/11.jpg"
    },
    {
        id: 12,
        songname: `putt jat da <br>
        <div class="subtitle">putt jat daa</div>`,
        poster: "img/12.jpg"
    },
    {
        id: 13,
        songname: `baarishein <br>
        <div class="subtitle">atif aslam</div>`,
        poster: "img/13.jpg"
    },
    {
        id: 14,
        songname: `vaaste <br>
        <div class="subtitle">dhavni</div>`,
        poster: "img/14.jpg"
    },
    {
        id: 15,
        songname: `lut gye <br>
        <div class="subtitle">jubin nautiyal</div>`,
        poster: "img/15.jpg"
    },
    {
        id: 16,
        songname: `tu meri jindegi <br>
        <div class="subtitle">jubin nautiyal</div>`,
        poster: "img/16.jpg"
    },
    {
        id: 17,
        songname: `dil ko churaya tha <br>
        <div class="subtitle">atif aslam</div>`,
        poster: "img/17.jpg"
    },
    {
        id: 18,
        songname: `dhol judaiyan  <br>
        <div class="subtitle">ali sethi</div>`,
        poster: "img/18.jpg"
    },
    {
        id: 19,
        songname: `munnde pagal ne  <br>
        <div class="subtitle">ap dhillon</div>`,
        poster: "img/19.jpg"
    },
    {
        id: 20,
        songname: `dunny <br>
        <div class="subtitle">ap dhillon</div>`,
        poster: "img/20.jpg"
    },
];
Array.from(document.getElementsByClassName('songitem')).forEach((e, i) => {
    e.getElementsByTagName('img')[0].src = song[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = song[i].songname;
});

// master play 

let master_played = document.getElementById('master-played')
master_played.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        waves.classList.add('active1');
        music.play()
        master_played.classList.remove('bi-play-fill')
        master_played.classList.add('bi-pause-fill')
    }
    else {
        music.pause();
        waves.classList.remove('active1');
        master_played.classList.remove('bi-pause-fill')
        master_played.classList.add('bi-play-fill')
    }

})

const makeallbackground = () => {
    Array.from(document.getElementsByClassName('songitem')).forEach((ele) => {
        ele.style.background = "rgb(105, 105, 105, .0)";
    })
}
let makeallplay = () => {
    Array.from(document.getElementsByClassName('playlistplay')).forEach((el) => {
        el.classList.add('bi-play-circle-fill');
        el.classList.remove('bi-pause-fill');
    })
}

let index = 0;
let master_play_poster = document.getElementById('master-play-poster');
Array.from(document.getElementsByClassName('playlistplay')).forEach((e) => {
    e.addEventListener('click', (el) => {
        index = el.target.id;
        console.log(index)
        music.src = `audio/${index}.mp3`;
        master_play_poster.src = `img/${index}.jpg`;
        music.play();
        master_played.classList.remove('bi-play-fill')
        master_played.classList.add('bi-pause-fill')

        let songtitles = song.filter((els) => {
            return els.id == index
        })
        songtitles.forEach(elss => {
            let { songname } = elss
            title.innerHTML = songname;
        })
        makeallbackground();

        Array.from(document.getElementsByClassName('songitem'))[index - 1].style.background = "rgb(105, 105, 105, .1)";

        // console.log(makeallplay);
        makeallplay();
        el.target.classList.remove('bi-play-circle-fill')
        el.target.classList.add('bi-pause-fill')
        waves.classList.add('active1')
    })
})
let currenttime = document.getElementById('currenttimer')
let currentend = document.getElementById('endtimer')
// seek Bar
let seek = document.getElementById('seek')
let baar = document.getElementById('bar2')
let dot1 = document.getElementById('dot')

music.addEventListener('timeupdate', () => {
    let music_curr = music.currentTime;
    let music_durr = music.duration;
    let min = Math.floor(music_durr / 60);
    let sec1 = Math.floor(music_durr % 60);
    if (sec1 < 10) {
        sec1 = `0${sec1}`;
    }

    currentend.innerText = `${min}:${sec1}`;

    let min1 = Math.floor(music_curr / 60)
    let sec2 = Math.floor(music_curr % 60)
    if (sec2 < 10) {
        sec2 = `0${sec2}`
    }

    currenttime.innerText = `${min1}:${sec2}`


    let progressbar = parseInt((music_curr / music_durr) * 100)
    seek.value = progressbar;
    let seekbar = seek.value;
    baar.style.width = `${seekbar}%`;
    dot1.style.left = `${seekbar}%`;

})
seek.addEventListener('change', () => {
    music.currentTime = seek.value * music.duration / 100
})


// scrollbar bheavior

let pop_song_left = document.getElementById('pop-song-left')
let pop_song_right = document.getElementById('pop-song-right')
let pop_song = document.getElementsByClassName('pop-song')[0]

pop_song_right.addEventListener('click', () => {
    pop_song.scrollLeft += 320;

});
pop_song_left.addEventListener('click', () => {
    pop_song.scrollLeft -= 320;

});
let pop_artist_left = document.getElementById('pop_artist_left')
let pop_artist_right = document.getElementById('pop_artist_right')
let item = document.getElementsByClassName('item')[0]

pop_artist_right.addEventListener('click', () => {
    item.scrollLeft += 200;

});
pop_artist_left.addEventListener('click', () => {
    item.scrollLeft -= 200;

});




// back and end button
let back = document.getElementById('back')
let end = document.getElementById('end')

back.addEventListener('click', () => {
    index -= 1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('songitem')).length
    }
    music.src = `audio/${index}.mp3`;
    master_play_poster.src = `img/${index}.jpg`;
    music.play();
    master_played.classList.remove('bi-play-fill')
    master_played.classList.add('bi-pause-fill')

    let songtitles = song.filter((els) => {
        return els.id == index
    })
    songtitles.forEach(elss => {
        let { songname } = elss
        title.innerHTML = songname;
    })
    makeallbackground();
    Array.from(document.getElementsByClassName('songitem'))[index - 1].style.background = "rgb(105, 105, 105, .1)";

    // console.log(makeallplay);
    makeallplay();
    el.target.classList.remove('bi-play-circle-fill')
    el.target.classList.add('bi-pause-fill')
    waves.classList.add('active1')
})
end.addEventListener('click', () => {
    index++;
    if (index > Array.from(document.getElementsByClassName('songitem')).length) {
        index = 1;
    }
    music.src = `audio/${index}.mp3`;
    master_play_poster.src = `img/${index}.jpg`;
    music.play();
    master_played.classList.remove('bi-play-fill')
    master_played.classList.add('bi-pause-fill')

    let songtitles = song.filter((els) => {
        return els.id == index
    })
    songtitles.forEach(elss => {
        let { songname } = elss
        title.innerHTML = songname;
    })
    makeallbackground();
    Array.from(document.getElementsByClassName('songitem'))[index - 1].style.background = "rgb(105, 105, 105, .1)";

    // console.log(makeallplay);
    makeallplay();
    el.target.classList.remove('bi-play-circle-fill')
    el.target.classList.add('bi-pause-fill')
    waves.classList.add('active1')
})
// volume setup
let vol_icon = document.getElementById('vol-icon')
let input_range = document.getElementById('vol-range')
let vol_bar2 = document.getElementById('vol-bar2')
let vol_dot = document.getElementById('vol-dot')

input_range.addEventListener('change', () => {
    if (input_range.value == 0) {
        vol_icon.classList.remove("bi-volume-up-fill")
        vol_icon.classList.remove("bi-volume-down-fill")
        vol_icon.classList.add("bi-volume-off-fill")
    }
    if (input_range.value > 0) {
        vol_icon.classList.remove("bi-volume-up-fill")
        vol_icon.classList.add("bi-volume-down-fill")
        vol_icon.classList.remove("bi-volume-off-fill")
    }
    if (input_range.value > 50) {
        vol_icon.classList.add("bi-volume-up-fill")
        vol_icon.classList.remove("bi-volume-down-fill")
        vol_icon.classList.remove("bi-volume-off-fill")
    }
    let range = input_range.value;
    vol_bar2.style.width = `${range}%`
    vol_dot.style.left = `${range}%`
    music.volume = range / 100;
})