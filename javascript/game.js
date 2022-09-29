class Game {
  constructor() {
    // todas nuestras propiedades o elementos del juego
    // fondo
    this.fondo = new Image();
    this.fondo.src = "./images/bg.png";
    // pollo
    this.polloObj = new Pollo(); // creando un nuevo obj de la clase pollo

    // tubos
    // this.tuboObj = new Tubo(); // prueba
    this.tubeArr = []

    this.frames = 0; // aumentará 60 veces por segundo
    this.isGameOn = true;

    this.score = 0;

    // suelo (bonus)
  }

  // .todos nuestros metodos o acciones del juego.

  // collision del pollo con los tubos
  polloTuboCollision = () => {

    // this.tubeArr
    this.tubeArr.forEach((eachTubo) => {
      
      // this.polloObj
      // eachTubo
      if (
        this.polloObj.x < eachTubo.x + eachTubo.w &&
        this.polloObj.x + this.polloObj.w > eachTubo.x &&
        this.polloObj.y < eachTubo.y + eachTubo.h &&
        this.polloObj.h + this.polloObj.y > eachTubo.y
      ) {
        // Collision detected!
        console.log("Colisión!!")
        this.gameOver()
      } 
    })
  }

  gameOver = () => {
    // detener el juego
    this.isGameOn = false

    // ocultar el canvas
    canvas.style.display = "none"

    // mostrar la pantalla de fin
    gameOverScreen.style.display = "flex"
  }

  // aumento del score (bonus)
  gameScore = () => {

    if (this.tubeArr.length !== 0 && this.tubeArr[0].x < -50) {
      // el array no está vacio y llega el primer tubo llegó al borde del canvas

      // 1. incrementar el score
      this.score++
      console.log("el score es: ", this.score)

      // 2. sacar los 2 tubos del array
      this.tubeArr.shift() // remueve tubo 1 (el de arriba)
      this.tubeArr.shift() // remueve tubo 2 (el de abajo)
    }

  }

  addTubo = () => {
    if (this.frames % 120 === 0) {
      // agrega un tubo cuando han pasado 120 frames (2 segundos)
      
      // el tubo de arriba
      // cual es la posición de arriba

      let randomNum = Math.random() * -150
      let randomYint = Math.floor(randomNum)

      let nuevoTubo = new Tubo(randomYint, "arriba")
      this.tubeArr.push(nuevoTubo)

      // el tubo de abajo
      // cual es la posición de abajo
      let randomYint2 = randomYint + nuevoTubo.h + 100
      let tuboAbajo = new Tubo(randomYint2, "abajo")
      this.tubeArr.push(tuboAbajo)
    }
  }

  drawFondo = () => {
    ctx.drawImage(this.fondo, 0, 0, canvas.width, canvas.height);
  };

  // * BONUS 
  drawScore = () => {
    ctx.font = "30px Arial";
    // (elTexto, posX, posY)
    let scoreStr = `Score: ${this.score}`
    ctx.fillText(scoreStr, canvas.width * 0.4, 50)
  }

  checkPolloFall = () => {
    if (this.polloObj.y + this.polloObj.h > canvas.height) {
      this.gameOver()
    }
  }

  gameLoop = () => {
    this.frames = this.frames + 1

    // 1. limpiar el canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 2. acciones y movimientos de los elementos
    this.polloObj.gravedadPollo();
    // this.tubeArr.moveTubo() // * [element]
    this.tubeArr.forEach((eachTubo) => {
      eachTubo.moveTubo()
    })
    this.addTubo()
    this.polloTuboCollision()
    
    // bonus
    this.gameScore()
    this.checkPolloFall()

    // 3. dibujado de los elementos
    this.drawFondo();
    this.polloObj.drawPollo();
    // this.tubeArr.drawTubo(); // * [element]
    this.tubeArr.forEach((eachTubo) => {
      eachTubo.drawTubo()
    })
    this.drawScore()

    // 4. control de la recursion
    if (this.isGameOn === true) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
