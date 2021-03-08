var copyright = "Copyright © 2021 BIABIANY, PHIBEL, LEMAITRE";

// Création d'animation en chargement
// Selection des elements

const titreSpans = document.querySelectorAll("h1 span");
const medias = document.querySelectorAll(".bulle a img");

window.addEventListener("load", () => {
    
  // Creation de la variable timeline
    const TL = gsap.timeline({ pause: true });
    

    // Reaction des animation, sec, parametre css
    TL.staggerFrom(
        titreSpans,
        1,
        { top: -50, opacity: 0, ease: "power2.out" },
        0.3
    ).staggerFrom(medias, 1, { right: -50, opacity: 0, ease: "power2.out" }, 0.3);

    TL.play();
});
  // Animation réecriture python en couleur
window.onload = anim();
function anim(){
  const textAnimPy = document.querySelector("#sheet-py h1")

  new Typewriter(textAnimPy, {
    loop: true,
    deleteSpeed: 25,
    delay: 50,
  })
    .typeString("Qu'est ce que <strong> Python </strong>?")
    .pauseFor(700)
    .deleteChars(9)
    .typeString('<span style="color:#FFDC19"> Python</span> ?')
    .pauseFor(1000)
    .start();



  const codeAnim= document.querySelector('.exemple-py p')

// Exemple de code en haut de page 
  new Typewriter(codeAnim, {
    loop: true,
    deleteSpeed: 25,
    delay: 100,
    
  })
    .typeString('import random')
    .typeString('<br>'+'def uniqueid():')
    .typeString('<br>'+'seed = random.gettrandbits(32)')
    .typeString('<br>'+'while True:')
    .typeString('<br>'+'yield seed')
    .typeString('<br>'+ 'seed += 1')
    .start()

    .typeString('<br>'+"Exemple d'un code python")
}

// Fonction pour chercher un mot dans wikipedia
function searchTheWord() {
  var messageSaisie = document.getElementById("input-search").value; //Récuperer le message dans le champ
  if (messageSaisie != "") {
    // if the message isnt null
    var url = "https://fr.wikipedia.org/wiki/" + messageSaisie; // Creer l'URL
    window.open(url, "_blank"); // Ouvrir l'URL dans une nouvelle fenetre
  } else {
    //  Si est le messag est null
    alert("Tu dois mettre un argument afin de le rechercher...");
  }
}

function callConnect() {
  window.open("login");
  window.close()
}


///$(document).ready(function(){
 
  //function defile(idImg, duree){
      //hFen = $(window).height();
      //hImg = $(idImg).height();
       
      //hTot = hFen + hImg;

      //$(idImg).animate({ top: "+="+hTot }, duree);
 // }  

 // defile(fleche, 1000);
///});
