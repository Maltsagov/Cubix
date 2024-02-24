
const Button = document.getElementById("Button");
const Video = document.getElementById("Video");


const Videos = [
    "../videos/1.mp4",
    "../videos/2.mp4",
    "../videos/3.mp4",
    "../videos/4.mp4",
    "../videos/5.mp4",
    "../videos/6.mp4",
]


Button.onclick = function(){

    Img.style.display = "none";
    Video.style.display = "block";
    Video.classList.add("Play");

    const array = new Uint32Array(1);

    window.crypto.getRandomValues(array); //es werden Zufallszahlen in das array gefüllt Beispiel: 2948015854 ()
    //Es werde immer Zahlen zwischen 0000000000 und 4294967296 genommen, da 2^32 = 4294967296
    // die -----Kleinste mögliche Kombination 0000000000 und die ------Größte 4294967296
    console.log(array[0]);
   const random = Math.floor(array[0] / 2**32 * 6 + 1); // hier wird 2^32 dividiert damit aus der Großen Zahl eine kleinere Dezimalzahl wird
   
 const randomVideo = Videos[random-1];
 console.log(random);
    console.log(randomVideo);

Video.src = randomVideo;
Video.play();
    
}















