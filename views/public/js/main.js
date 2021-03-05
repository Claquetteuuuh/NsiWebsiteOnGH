var copyright = "Copyright © 2021 BIABIANY, PHIBEL, LEMAITRE";

// event when user is scrolling
window.addEventListener("scroll", () => {
  dropdown = document.getElementById("dropdown-header"); //get the dropdown id
  img = document.getElementById("logo-head");
  element = document.getElementById("header-bar"); //get the header bar
  if (window.scrollY > 970) {
    img.classList.add("background-visible"); // add the class
    img.classList.add("visible"); //add a second class
    element.classList.add("opacity-reducer"); //add the class opacity-reducer
  } else {
    img.classList.remove("background-visible"); //rm the class
    img.classList.remove("visible"); //rm a second class
    element.classList.remove("opacity-reducer"); //rm the opacity reducer
  }
});

// Creation animation on load

// selection des elements
const titreSpans = document.querySelectorAll("h1 span");
const medias = document.querySelectorAll(".bulle a img");

window.addEventListener("load", () => {
  // creation de la variable timeline
  const TL = gsap.timeline({ pause: true });

  // creation des animation, sec, parametre css
  TL
    .staggerFrom(titreSpans,1,{ top: -50, opacity: 0, ease: "power2.out" },0.3)
    .staggerFrom(medias, 1, { right: -50, opacity: 0, ease: "power2.out" }, 0.3);

  TL.play();
});

// const cursor = document.querySelector(".cursor");

// document.addEventListener("mousemove", (e) => {
//   cursor.setAttribute(
//     "style",
//     "top:" + (e.pageY - 10) + "px; left:" + (e.pageX - 10) + "px;"
//   );
// });


// make an animation in a text
window.onload = animTxt();

// make the anim text on the id txtPresent
function animTxt() {
  const textAnim = document.getElementById("txtPresent");

  new Typewriter(textAnim, {
    loop: true,
    deleteSpeed: 25,
    delay: 50,
  })
    .typeString("Grace à Nsi ClassRoom, ") //write :
    .pauseFor(700)  //pause :
    .typeString(
      '<strong> vous apprendrez: <span style="color:#6EB2C7">Python</span> !</strong>'
    )
    .pauseFor(1000)
    .deleteChars(8) //del :
    .typeString('<span style="color:#FFDC19">JavaScript</span> !')
    .pauseFor(1000)
    .start();

    //same for the id animJs
  const textAnimJs = document.getElementById("animJs");

  new Typewriter(textAnimJs, {
    loop: true,
    deleteSpeed: 25,
    delay: 50,
  })
    .typeString("Qu'est ce que le<strong> JavaScript </strong>?")
    .pauseFor(700)
    .deleteChars(12)
    .typeString('<span style="color:#FFDC19">JavaScript</span> ?')
    .pauseFor(1000)
    .start();

    //same for the p in the class exemple
  const codeAnim = document.querySelector(".exemple p");
  
  const so = '<span style="margin-left:15px">';
  const sop = '<span style="margin-left:30px">';
  const sc = "</span>";

  new Typewriter(codeAnim, {
    loop: true,
    deleteSpeed: 25,
    delay: 50,
  })
    .typeString("function makeId(lenght){")
    .typeString("<br>" + so + ' var result = "";' + sc)
    .typeString("<br>" + so + 'var characters ="ABCDEF0123456789";' + sc)
    .typeString("<br>" + so + "var charactersLength = characters.length;" + sc)
    .typeString("<br>" + so + "for ( var i = 0; i < length; i++ ) {" + sc)
    .typeString("<br>" +sop +"result += characters.charAt(Math.floor(Math.random() * charactersLength));" +sc)
    .typeString("<br>" + sop + "}" + sc)
    .typeString("<br>" + sop + "return result;" + sc)
    .typeString("<br>" + so + "}")
    .typeString("<br>" + so + "console.log(makeid(5));" + sc)
    .pauseFor(2000)
    .start();
}

// function for search a word in wikipedia
function searchTheWord() {
  var messageSaisie = document.getElementById("input-search").value; //get the message in the input box
  if (messageSaisie != "") {
    // if the message isnt null
    var url = "https://fr.wikipedia.org/wiki/" + messageSaisie; // create the Url
    window.open(url, "_blank"); // open the url in a new windows
  } else {
    // if the message is null
    alert("Tu dois mettre un argument afin de le rechercher...");
  }
}

// function to adapt the font size
//when the page is loading
window.addEventListener('load', () =>{
  size = window.innerWidth; //get the size of the window
  var element = document.getElementById("p-adapt");

  if (size < 1012) {
    element.classList.add("fs-7");
  } else {
    element.classList.remove("fs-7");
  }
})
//when resize
window.addEventListener("resize", () => {
  size = window.innerWidth; //get the size of the window
  var element = document.getElementById("p-adapt");

  if (size < 1012) {
    element.classList.add("fs-7");
  } else {
    element.classList.remove("fs-7");
  }
});


//animation for leaflet menu
const dropdownJs = document.querySelectorAll(".dropdown-js"); //get the menu

let toggle = 0; //make a toggle

  // console.log(dropdownJs.scrollHeight);
  dropdownJs.forEach((element) => { //boucle for each pour faire l'animation a chaque élément
    let img = element.querySelector(".bloc-top img");
    let btnDrop = element.querySelector(".bloc-top");
    let blocText = element.querySelector(".bloctext");
    btnDrop.addEventListener("click", () => { //when the user click on the btn
    if (toggle == 0) {
      blocText.style.display = "block";
      img.style.transform = "rotate(180deg)";
      element.style.height = element.scrollHeight + "px";

      toggle++;
    } else {
      element.style.height = btnDrop.scrollHeight+ 20 + "px";
      img.style.transform = "rotate(0)";
      blocText.style.display = "none";

      toggle--;
    }
  });
});


// function to open the login page
function callConnect() {
  window.open("login");
  window.close()
}
