function randomNum(){
    document.getElementById("generate").innerHTML = Math.floor(Math.random()*8 + 2);
    document.getElementById("popupText").innerHTML = "MASH";
    document.getElementById("generate").disabled = true;
}