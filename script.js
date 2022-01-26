const card = document.getElementById("predniStranaFlash");
const card2 = document.getElementById("zadniStranaFlash");


function nova() {
//hodnoty predni a zadni strany
    var predniStrana = $("#predniStrana").val();
    var zadniStrana = $("#zadniStrana").val();
    var predniStranka = []
    var zadniStranka = []
    predniStranka.push(predniStrana);
    zadniStranka.push(zadniStrana);
    localStorage.setItem("predni", predniStrana);
    localStorage.setItem("zadni", zadniStrana);
    card.innerHTML = localStorage.getItem("predni");
    card2.innerHTML = localStorage.getItem("zadni");
    $("#form")[0].reset();

}
function zobraz() {
    card2.style.display = "block"
}
function skryt() {
    card2.style.display = "none"
}

