// Simon Gergő, Ütő Imre:
    // Kinézet: Képek, színek jók: 10
    // Elrendezés, reszponzivitás: Van mit javítani rajta: 3
    // kód: 
        // Karácsony
// Halász Gergő, Baksa Bence
    // Kinézet: Jó: 10
    // Téma: 9.5 (Foci)
        // Foci
// Szalkai Viktória Csenge, Roszkopf Léna Adél
    // Előadás: Jó: 10 Elakadt: 4
    // Kinézet: Kiégeti a szemem. 0
    // Funkciók: Jók a slide-ok.: 9
        // Cicamenhely
// Kocsi Dorottya, Csorba Eszter Katinka:
    // Kinézet: Tökéletes
    // Elrendezés: Tökéletes
    // Téma: Tökéletes
        // Kocsmaértékelő, Blog
// Richter Balázs, Weimper Gergő Zsombor
    // Elrendezés: Jó
    // Kinézet: Van mit javítani rajta
        // Call of Duty
// Szabó Mester Alex
    // Kinézet: Égeti a szemem, amúgy igényes
    // Elrendezés: Nem rossz.
    // Funkciók: Nem rossz.
        // Portfólió
// Sass Gyula
    // Szép.
        // Portfólió
let videoVisible = false
function toggleVideoVisible(){
    if (videoVisible){
        let vid = document.getElementById("hal");
        vid.style.display = 'none';
        vid.pause();
    }
    else{
        let vid = document.getElementById("hal");
        vid.style.display = 'block';      
        vid.play();
    }
    videoVisible = !videoVisible;
}