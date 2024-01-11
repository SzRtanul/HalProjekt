// Simon Gergő, Ütő Imre:
    // Kinézet: Képek, színek jók: 10
    // Elrendezés, reszponzivitás: Van mit javítani rajta: 3
    // kód: 
// Halász Gergő, Baksa Bence
    // Kinézet: Jó: 10
    // Téma: 9.5 (Foci)
// Szalkai Viktória Csenge, Roszkopf Léna Adél
    // Előadás: Jó: 10 Elakadt: 4
    // Kinézet: Kiégeti a szemem. 0
    // Funkciók: Jók a slide-ok.: 9
// Kocsi Dorottya, Csorba Eszter Katinka:
    // Kinézet: Tökéletes
    // Elrendezés: Tökéletes
    // Téma: Tökéletes
// Richter Balázs, Weimper Gergő Zsombor
    // Elrendezés: Jó
    // // Kinézet: Van mit javítani rajta

videoVisible = false
function toggleVideoVisible(){
    videoVisible = !videoVisible;
    if (videoVisible){
        document.getElementById("hal").style.display = 'none';
    }
    else{
        document.getElementById("hal").style.display = 'block';
    }
}