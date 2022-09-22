console.log("WELCOME TO SPOTIFY");
//Initialize the variable
let songIndex=0;
let audioElement=new Audio('song/kada dili song.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let songs=[
    {songName:"Tum hi ho",filePath:"song/Love.mp3",coverPath:"cover/1.jpg"},
    {songName:"Tum hi ho",filePath:"song/song-new.mp3",coverPath:"cover/1.jpg"},
    {songName:"Tum hi ho",filePath:"song/Love.mp3",coverPath:"cover/1.jpg"},
    {songName:"Tum hi ho",filePath:"song/Love.mp3",coverPath:"cover/1.jpg"},
    {songName:"Tum hi ho",filePath:"song/Love.mp3",coverPath:"cover/1.jpg"},
    {songName:"Tum hi ho",filePath:"song/Love.mp3",coverPath:"cover/1.jpg"},
] 
// audioElement.play();
//Handle play pause click
  masterPlay.addEventListener('click',()=>{
     if(audioElement.paused || audioElement.currentTime<=0){
         audioElement.play();
         masterPlay.classList.remove('fa-play-circle');
         masterPlay.classList.add('fa-pause-circle');
         gif.style.opacity=1;
     }
     else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
     }
})
//Listen events
audioElement.addEventListener('timeupdate',()=>{
// update sikbar
  progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
  myProgressBar.value=progress;

})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})
