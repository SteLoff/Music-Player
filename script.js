function home(){
  document.querySelector(".profile__page").style.display="none"; 

document.querySelector(".trending__page").style.display="none"; 

document.querySelector(".favourite__page").style.display="none"; 
document.querySelector(".music__player__page__one").style.display="flex";

window.scrollTo(0, 0);

}


function trending(){
document.querySelector(".profile__page").style.display="none"; 

document.querySelector(".trending__page").style.display="flex"; 

document.querySelector(".favourite__page").style.display="none"; 
document.querySelector(".music__player__page__one").style.display="none";

window.scrollTo(0, 0);

}

function favourite(){
document.querySelector(".profile__page").style.display="none"; 

document.querySelector(".trending__page").style.display="none"; 

document.querySelector(".favourite__page").style.display="flex"; 
document.querySelector(".music__player__page__one").style.display="none";

window.scrollTo(0, 0);   

}

function profile(){
document.querySelector(".profile__page").style.display="flex"; 

document.querySelector(".trending__page").style.display="none"; 

document.querySelector(".favourite__page").style.display="none"; 
document.querySelector(".music__player__page__one").style.display="none";

window.scrollTo(0, 0);

}


function tabs(tabsc) {
var i;
var tabs = document.getElementsByClassName("tabsc");
for (i = 0; i < tabs.length; i++) {
  tabs[i].style.display = "none";  
}
document.getElementById(tabsc).style.display = "flex";  
}



window.onload = ()=>{
document.querySelector("#loader").style.display="none";

document.querySelector("body").style.overflow="scroll";
/*document.querySelector(".xD").style.display="flex";*/
document.querySelector(".bottom_navigation_bar").style.display="flex";

var song_data = [
{
  
  song:"Marco Bertek",
  artist:"Pluton", 
  id:"1", music_link:"https://www.dropbox.com/scl/fi/vn4yr18t6o06l208ddrmp/Marco-Bertek-Pluton-www.lightaudio.ru.mp3?rlkey=9cvrluy5j75uj3th7joz0rjta&st=59tqt33y&dl=0&raw=1", thumbnail:"https://avatars.yandex.net/get-music-content/5485872/56c398e6.a.19753936-1/200x200"
},
{
  song:"Let me Down Slowly",
  artist:"Alec Benjamin", 
  id:"2", 
  music_link:"https://www.dropbox.com/s/gfwbjjwpqbk8cq0/y2mate.com%20-%20Alec%20Benjamin%20%20Let%20Me%20Down%20Slowly%20Lyrics.mp3?raw=1", thumbnail:"https://avatars.yandex.net/get-music-content/99892/69552a14.a.6533397-1/200x200"
},

{
  song:"olderTikTok Remix",
  artist:"Ren", 
  id:"3", 
music_link:"https://www.dropbox.com/scl/fi/eidmzhy5bf4hm0023iup8/Ren_-_older_77486281.mp3?rlkey=m6f6i4nnjcmi0gpz0p9xsj4ex&st=1v0lu02w&dl=0&raw=1", thumbnail:"https://avatars.yandex.net/get-music-content/9837405/35d5c4f5.a.27577774-1/200x200"
},
{
  song:"U 2 LA LA LA",
  artist:"Fxbii, La.Pauline", 
  id:"4", 
music_link:"https://www.dropbox.com/scl/fi/5k9ysxmv9awhmfipesj69/FXBII_-_U_2_LA_LA_LA_74831798.mp3?rlkey=tlpa2urko92dl7kr7d68lpbv6&st=3908te3a&dl=0&raw=1", thumbnail:"https://avatars.yandex.net/get-music-content/6214856/71746bcf.a.22213617-1/200x200"
},


{
  song:"Big Jet Plane",
  artist:"DESDEMONA, DVNEK", 
  id:"5",
  music_link:"https://www.dropbox.com/scl/fi/yw99d5w5gnlmfui5jzqr8/DESDEMONA_DVNEK_-_Big_Jet_Plane_77873828.mp3?rlkey=ducj52sd2gxkvaqa711py98ww&st=xkxuzi0u&dl=0&raw=1", thumbnail:"https://avatars.yandex.net/get-music-content/10960834/6ba08c0d.a.31084544-1/200x200"
  
  
},

{
  song:"eyes don't lie",
  artist:"speed up, Nightcore", 
  id:"6",
  music_link:"https://www.dropbox.com/scl/fi/lza7m5lnn3rgnma0t5lov/speed_up_nightcore_-_eyes_dont_lie_77861009.mp3?rlkey=sdh1xh4rx8539rymrb5dwxeco&st=9fuq8iy4&dl=0&raw=1", thumbnail:"https://avatars.yandex.net/get-music-content/10641165/e28b7307.a.29376681-1/200x200"
},

{
  song:"tranquillity.",
  artist:"Crier", 
  id:"7",
  music_link:"https://www.dropbox.com/scl/fi/qllqfkyfeuv02n3px09ru/jUFUTfuu14oFSMvBAt6ExF0NGqTeGAo6Jg3RFdghqmwNcJs0f0lZ-ROV5OARylGSGn1w7-NjYzHDFystHhJpWm3AfzRvTOOr2KcypDygiVfVvTtDUmyEUk5CVV3hqI5zufbYYV51_Wu-JsgOe8GvMjdPqic7taE21OPJB8iLU4Og9vP8lg.mp3?rlkey=lam8bmukiu2x1d0eraliv2pr6&st=gmzfcbh5&dl=0&raw=1", thumbnail:"https://avatars.yandex.net/get-music-content/5314916/11a15f55.a.23853226-1/200x200"
  
  
},

{
  song:"In The End  Mellen Gi Remix",
  artist:"Tommee Profitt, Fleurie, Mellen Gi", 
  id:"8",
  music_link:"https://www.dropbox.com/scl/fi/vhq8r49j6mhkfqox3698p/Mellen_Gi_-_Tommee_Profitt_-_In_The_End_Mellen_Gi_Remix_Fleurie_Cover_Linkin_Park_75492948.mp3?rlkey=2e94j69ob0vjsa122g7pl5tun&st=4z4z6d6l&dl=0&raw=1", thumbnail:"https://avatars.yandex.net/get-music-content/95061/89c14a7d.a.5239478-1/200x200"
  
  
},

{
  song:"Sad",
  artist:"xxxtentacion", 
  id:"9",
music_link:"https://www.dropbox.com/s/1wbqcnhof1macoo/y2mate.com%20-%20XXXTENTACION%20%20SAD%20%20WhatsApp%20Status.mp3?raw=1", thumbnail:"https://i.ibb.co/rxfTFPg/xxxtentacion-sad-download.jpg"
  
  
},

{
  song:"Overcome",
  artist:"Shakhbanov, BAGANZO", 
  id:"10",
music_link:"https://www.dropbox.com/scl/fi/pey2ahrtzehro4aldfwl5/Shakhbanov_BAGANZO_-_Overcome_77519541.mp3?rlkey=7yem3pmngdmafs2zesh4014w0&st=k18x7t97&dl=0&raw=1", thumbnail:"https://avatars.yandex.net/get-music-content/10703962/5928bd1c.a.28329917-1/200x200"
  
  
},

{
  song:"Dark Mercer",
  artist:"5l33p", 
  id:"11",
  music_link:"https://www.dropbox.com/scl/fi/26wg8yqcixe2kn0lnuvgs/5l33p_-_Dark_Mercer_74876411.mp3?rlkey=m0zodr35b0go5rwyr3lyfbdf4&st=gqxag8z7&dl=0&raw=1", thumbnail:"https://avatars.yandex.net/get-music-content/5502420/70589897.a.20176193-3/200x200"
  
  
},


{
  song:"Him and I  Remix",
  artist:"Unexpected", 
  id:"12",
  music_link:"https://www.dropbox.com/scl/fi/qbtez1ifx8ojil7q6vygk/Unexpected_-_Him_and_I_Remix_73838183.mp3?rlkey=7czy00bnnxwwqzwvgahgu77zm&st=nyzlrxz2&dl=0&raw=1", thumbnail:"https://avatars.yandex.net/get-music-content/114728/21c06924.a.5600280-1/200x200"
  
  
},

{
  song:"NANA FUNK",
  artist:"KUTE, killanoia, UMBASA", 
  id:"13",
  music_link:"https://www.dropbox.com/scl/fi/fc1h1kuqz86bqy83uv744/KUTE-killanoia-UMBASA-NANA-FUNK.mp3?rlkey=vgi016o90cdc0qqvtkg5d0gfq&st=2wna61yl&dl=0&raw=1", thumbnail:"https://avatars.yandex.net/get-music-content/14299670/9cfe25ba.a.33233122-1/200x200"
  
  
},

{
  song:"Time",
  artist:"BXCK WH1TE", 
  id:"14",
  music_link:"https://www.dropbox.com/scl/fi/dzod4cvontt6cmk0tchld/BXCK_WH1TE_-_Time_-musmore.org.mp3?rlkey=ecfxmievckxklm36kvpzoq28f&st=s63joojw&dl=0&raw=1", thumbnail:"https://avatars.yandex.net/get-music-content/9838169/11da1a11.a.29023057-1/200x200"


},

{
  song:"Dead to Me",
  artist:"Lox Chatterbox", 
  id:"15",
  music_link:"https://www.dropbox.com/scl/fi/bsd2zpghnv0alw4qn1pn9/Fraxo_Whales_Lox_Chatterbox_-_Dead_To_Me_feat_Lox_Chatterbox_74215233.mp3?rlkey=3ocoin7oh2tym011ycrm18syv&st=4zble0y6&dl=0&raw=1", thumbnail:"https://avatars.yandex.net/get-music-content/97284/c3c32873.a.5251893-1/200x200"


},

{
  song:"Nightclub",
  artist:"LONOWN", 
  id:"16",
  music_link:"https://www.dropbox.com/scl/fi/ty8quz0uur0uf2tvptzem/LONOWN_-_Nightclub_75847031.mp3?rlkey=pasf1s94cf22zf0zdxv7h29d6&st=dtzhmq58&dl=0&raw=1", thumbnail:"https://avatars.yandex.net/get-music-content/9737237/dbc3e522.a.26113923-1/200x200"


},


{
  song:"Take Me Home",
  artist:"INNOCENT, 5l33p", 
  id:"17",
  music_link:"https://www.dropbox.com/scl/fi/w3ee9e5e5yecw0rkpjt9f/INNOCENT-5l33p-Take-Me-Home-www.lightaudio.ru.mp3?rlkey=2tr3g3b3iehysi3g3fn28cn2q&st=y46k8eg4&dl=0&raw=1", thumbnail:"https://avatars.yandex.net/get-music-content/8123381/c3b723f1.a.25221986-2/200x200"


},

  
{
  song:"VengeanceSlowed & Reverb",
  artist:"iwilldiehere", 
  id:"18",
  music_link:"https://www.dropbox.com/scl/fi/l8x1th9sl335qwtdgeu0d/iwilldiehere_-_Vengeance_issa_slow_-_reverb_77998278.mp3?rlkey=z487paa3ni3qye44pze8we5w0&st=bl8eowuu&dl=0&raw=1", thumbnail:"https://avatars.yandex.net/get-music-content/9838169/b84a22a2.a.27160176-1/200x200"
  
  
}








]


document.querySelectorAll(".song").forEach((div)=>{
  div.onclick = function (){
    var presentSong = this.getAttribute("data-no");
  createPlayer(presentSong); 
  let previousSong =document.querySelector('#prev_song'); ;
  let nextSong = document.querySelector('#next_song');


  nextSong.addEventListener("click",()=>{
  if((presentSong+1) <= song_data.length){
  songChange(song_data , ++presentSong)
  
  }
  else{
    alert("Bas Bas, abhi ke liye itna hi");
  }
  });
  previousSong.addEventListener("click",()=>{
  if((presentSong-1) >= 0){
songChange(song_data , --presentSong)

  }
  else{
    alert("Thiz iz firsht song");
    }; 
  })
}
})
function createPlayer(i){
var card = document.createElement("DIV");
    card.className = 'music__page';
    card.innerHTML = `
    
    <div class="upper__part">
      <div class="music__card">
        <img src=${song_data[i].thumbnail} class="music_thumbnail">
    
      </div>
      <div class="credentials">
      <h6 class="music_name">
      ${song_data[i].song}
      </h6>
      <p>${song_data[i].artist}</p>
      </div>
    <div class="back_from_music_page"
    onclick="back()">
    <i class="ri-arrow-left-line"></i>
    </div>
    <div class="menu_in_music_page">
    <i class="ri-menu-3-fill"></i>
    </div>
    </div>
    
    <div class="down_part">
    
      <div class="play_and_all">
<span id="prev_song">
  <i class="ri-skip-back-fill"></i>
      </span>
      <span id="song_play" onclick = "play_song()">
    <i class="ri-play-fill"></i>
    </span>
<span id="next_song" >
    <i class="ri-skip-forward-fill"></i>
    </span>
      </div>
      
      <br />
      <div class="down_part_icons">
    <i class="ri-volume-up-fill"></i>
      <i class="ri-share-fill"></i>
      <i class="ri-heart-3-line"></i>
      <i class="ri-repeat-line"></i>
      </div>
<audio src=${song_data[i].music_link} class="gaana"></audio>
    </div>
    
    `;
document.querySelector(".xD").classList.toggle("hide");



document.body.appendChild(card);
}
}
function songChange(song_data ,i){
let thumbnail = document.querySelector('.music_thumbnail');
let artist = document.querySelector('.credentials > p');
let title =	 document.querySelector('.music_name');
let song = document.querySelector(".gaana");
thumbnail.src = song_data[i].thumbnail;
artist.innerText = song_data[i].artist;
title.innerText = song_data[i].song;
song.src = song_data[i].music_link;
}
function back (){
    document.querySelector(".xD").classList.toggle("hide");
if(document.querySelector(".music__page")){
document.body.removeChild(document.querySelector(".music__page"))
}
}



function play_song(){
document.querySelector("#song_play").setAttribute("onClick", "pause()");

var a = document.querySelector(".gaana") ;

var playbtn = document.querySelector('#song_play');
playbtn.innerHTML='<i class="ri-play-line"></i>';

var playbtn = document.querySelector('#song_play');
playbtn.innerHTML=' <i class="ri-pause-fill"></i>';
a.play()

}


function pause(){
document.querySelector("#song_play").setAttribute("onClick", "play_song()");

var a = document.querySelector(".gaana") ;
var playbtn = document.querySelector('#song_play');
playbtn.innerHTML=' <i class="ri-play-fill"></i>';

a.pause()

}


function open_git(){
window.location.href = 'https://github.com/Atul1409';
}




