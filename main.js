//program TO PLAY elevator game
alert("Bienvenido al elevador");
$(document).ready(function () {
  //variables
  var piso=['entrada','piso 1','piso 2','piso 3','planta alta']; 
        var personas=[0,0,0,0,0];
        var conteo=0;
        var aux;
        var pisosentrados=[false,false,false,false,false];
      //uno
        $('#uno').on('click', function(){
          if(pisosentrados[0]==true){
            alert("piso visitado, cambia de piso");
          }
          if(pisosentrados[0]==false){
          personas[0]=Math.floor(Math.random() * 6) + 1;
        
          conteo+=personas[0];
          $("#palabra").html('estas en '+piso[0]+'. subio='+conteo); 

          }
          if(pisosentrados[0]==true){
            alert("piso visitado, cambia de piso");
          }
          pisosentrados[0]=true;
        })
      //dos
        $('#dos').on('click', function(){
          if(pisosentrados[1]==true){
            alert("piso visitado, cambia de piso");
          }
          if(pisosentrados[1]==false){
          personas[1]=Math.floor(Math.random() * 6) + 1;
          conteo+=personas[1];
          $("#palabra").html('estas en '+piso[1]+'. subio='+conteo); 
          }
          if(pisosentrados[1]==true){
            alert("piso visitado, cambia de piso");
          }
          pisosentrados[1]=true;
        })
      //tres
      $('#tres').on('click', function(){
        if(pisosentrados[2]==true){
          alert("piso visitado, cambia de piso");
        }
        if(pisosentrados[2]==false){
        personas[2]=Math.floor(Math.random() * 6) + 1;
        conteo+=personas[2];
        $("#palabra").html('estas en '+piso[2]+'. subio='+conteo); 
        }
       
        pisosentrados[2]=true;
      })
      //cuatro
      $('#cuatro').on('click', function(){
        if(pisosentrados[3]==true){
          alert("piso visitado, cambia de piso");
        }
        if(pisosentrados[3]==false){
        personas[3]=Math.floor(Math.random() * 6) + 1;
        conteo+=personas[3];
        $("#palabra").html('estas en '+piso[3]+'. subio='+conteo); 
        }
        
        pisosentrados[3]=true;
      })
      //cinco
      $('#cinco').on('click', function(){
        if(pisosentrados[4]==true){
          alert("piso visitado, cambia de piso");
        }
        if(pisosentrados[4]==false){
        personas[4]=Math.floor(Math.random() * 6) + 1;
        conteo+=personas[4];
        $("#palabra").html('estas en '+piso[4]+'. subio='+conteo); 
        if(conteo >=15){
          alert('ganaste');
        }
        else{
          alert('perdiste');  
        }
      }
      pisosentrados[4]=true;
      })
});

const elevator = document.querySelector(".elevator");
const firstFloor = document.querySelector(".elevator-floor-1");
const secondFloor = document.querySelector(".elevator-floor-2");
const thirdFloor = document.querySelector(".elevator-floor-3");
const fourthFloor = document.querySelector(".elevator-floor-4");
const fifthFloor = document.querySelector(".elevator-floor-5");
const allFloors = document.querySelectorAll(".elevator-floor");

const floors = [firstFloor, secondFloor, thirdFloor, fourthFloor, fifthFloor];
const activeFloor = floors.filter((e) =>
  e.classList.contains("elevator-active")
)[0];
const makeActive = (floor) => {
  allFloors.forEach((el) => el.classList.remove("elevator-active"));
  floor.target.classList.add("elevator-active");
}
floors.forEach((e) => e.addEventListener("click", makeActive));
const moveElevator = (floor) => {
  let topPos = floor.target.getBoundingClientRect().top; 
      topPos += window.scrollY; 
  gsap.to(elevator, {top:topPos, duration:0.3}) 
}
floors.forEach((e) => e.addEventListener("click", moveElevator));

// Carga un sonido a través de su fuente y lo inyecta de manera oculta
const cargarSonido = function (fuente) {
  const sonido = document.createElement("audio");
  sonido.src = fuente;
  sonido.setAttribute("preload", "auto");
  sonido.setAttribute("controls", "none");
  sonido.style.display = "none"; // <-- oculto
  document.body.appendChild(sonido);
  return sonido;
};
const $botonReproducir = document.querySelector("#btnReproducir");
// El sonido que podemos reproducir o pausar
const sonido = cargarSonido("Elevador.mp3");

$botonReproducir.onclick = () => {
  sonido.play();
};
