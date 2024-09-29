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
  music_link:"https://www.dropbox.com/s/gfwbjjwpqbk8cq0/y2mate.com%20-%20Alec%20Benjamin%20%20Let%20Me%20Down%20Slowly%20Lyrics.mp3?raw=1", thumbnail:"https://i.ibb.co/XsTRjWs/maxresdefault.jpg"
},

{
  song:"Let Me Love You",
  artist:"DJ Snake feat Justin bieber", 
  id:"3", 
music_link:"https://www.dropbox.com/s/pngtrll7ctzdtm4/y2mate.com%20-%20DJ%20Snake%20ft%20Justin%20Bieber%20%20Let%20Me%20Love%20You%20Lyric%20Video.mp3?raw=1", thumbnail:"https://i.ibb.co/N2qV8y8/DJSnake-Let-Me-Love-You-1.jpg"
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
  song:"General",
  artist:"Zack Knight", 
  id:"13",
  music_link:"https://www.dropbox.com/s/r56jsywul5q3096/y2mate.com%20-%20SAD%20LOVE%20STATUS%20DORAEMON%20STATUSNOBITA%20SIZUKA%20STATUS%20tyroworld%20nobita%20doraemon%20anime%20love.mp3?raw=1", thumbnail:"https://i.ibb.co/4JytrB5/cebeb3c73d3c0620730c6447208bd127-1000x1000x1.jpg"
  
  
},

{
  song:"Feelings",
  artist:"Vatsala", 
  id:"14",
  music_link:"https://www.dropbox.com/s/e7mu7ikdu37nq3p/y2mate.com%20-%20Feelings%20%20Vatsala%20%20Female%20Version%20%20Sumit%20Goswami.mp3?dl=1", thumbnail:"https://i.ibb.co/0jfyxyZ/maxresdefault-2.jpg"


},

{
  song:"Vaaste",
  artist:"Nikhil D", 
  id:"15",
  music_link:"https://www.dropbox.com/s/e7mu7ikdu37nq3p/y2mate.com%20-%20Feelings%20%20Vatsala%20%20Female%20Version%20%20Sumit%20Goswami.mp3?raw=1", thumbnail:"https://i.ibb.co/8zj7RM9/crop-480x480-1554479538-2465302.jpg"


},

{
  song:"Emptiness",
  artist:"Gajendra Verma", 
  id:"16",
  music_link:"https://www.dropbox.com/s/4z725opm7j9b1zb/download.mp3?raw=1", thumbnail:"https://i.ibb.co/cr7FnKP/50ae9de83319a3f5b2e3f2886288f66e.jpg"


},


{
  song:"Bom Diggy Diggy",
  artist:"Zack Knight", 
  id:"17",
  music_link:"https://www.dropbox.com/s/e7mu7ikdu37nq3p/y2mate.com%20-%20Feelings%20%20Vatsala%20%20Female%20Version%20%20Sumit%20Goswami.mp3?dl=1", thumbnail:"https://i.ibb.co/r5HxcgV/zack-knight-lyrics.jpg"


},

  
{
  song:"I'll be waiting",
  artist:"Arjun", 
  id:"18",
  music_link:"https://www.dropbox.com/s/2s3ro1nd4z4inla/y2mate.com%20-%20Ill%20be%20waiting%20kabhi%20jo%20badal%20%20arjun%20song%20whatsapp%20status.mp3?raw=1", thumbnail:"https://i.ibb.co/mvM66CK/278975398270-arjun-ill-be-waiting-kabhi-jo-baadal-music-video-ov.jpg"
  
  
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




