// * GLOBAL VARIABLES
const canvas = document.querySelector("#my-canvas");
const ctx = canvas.getContext("2d");
const startScreen = document.querySelector("#splash-screen");
const startBtn = document.querySelector("#start-btn");

let gameObj; // se crea global pero el juego no ha iniciado

// * STATE MANAGEMENT FUNCTIONS

const startGame = () => {
  console.log("iniciando el juego");

  // ocultar la pantalla de inicio
  startScreen.style.display = "none";

  // mostrar el canvas
  canvas.style.display = "block";
  // "block" el elemento toma todo el tamaño del ancho de la pantalla

  // crear una nueva version del juego
  gameObj = new Game();
  console.log(gameObj);
  // iniciará el juego. ejecutar el metodo gameLoop
  // en esta seccion se agregarian setTimeout o setIntervals

  gameObj.gameLoop();
};

// * ADD EVENT LISTENERS
startBtn.addEventListener("click", startGame);

window.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    console.log("haciendo volar al pollo");
    // como invocamos saltoPollo() ??
    gameObj.polloObj.saltoPollo();
    // si hay tiempo solventamos ese bug
  }
});
