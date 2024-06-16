let videoVisible = false;
let gomb = document.getElementById("gomb");
function toggleVideoVisible(){
    if (videoVisible){
        let vid = document.getElementById("hal");
        vid.style.display = 'none';
        vid.pause();
        gomb.innerHTML = "+";
    }
    else{
        let vid = document.getElementById("hal");
        vid.style.display = 'block';      
        vid.play();
        gomb.innerHTML = "-";
    }
    videoVisible = !videoVisible;
}