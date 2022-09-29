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

    this.frames = 0;

    // suelo (bonus)
  }

  // .todos nuestros metodos o acciones del juego.

  // collision del pollo con los tubos
  // movimiento de los tubos
  // aumento del score (bonus)
  addTubo = () => {
    if (this.frames % 180 === 0) {
      // han pasado 3 segundos
      // al inicio, si el array esta vacio, agrega un elemento
      let nuevoTubo = new Tubo()
      this.tubeArr.push(nuevoTubo)
      console.log(this.tubeArr)
    }
  }

  drawFondo = () => {
    ctx.drawImage(this.fondo, 0, 0, canvas.width, canvas.height);
  };

  gameLoop = () => {
    this.frames = this.frames + 1
    console.log(this.frames)
    // console.log("ejecutando el juego")

    // 1. limpiar el canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 2. acciones y movimientos de los elementos
    this.polloObj.gravedadPollo();
    // this.tubeArr.moveTubo() // * [element]
    this.tubeArr.forEach((eachTubo) => {
      eachTubo.moveTubo()
    })
    this.addTubo()

    // 3. dibujado de los elementos
    this.drawFondo();
    this.polloObj.drawPollo();
    // this.tubeArr.drawTubo(); // * [element]
    this.tubeArr.forEach((eachTubo) => {
      eachTubo.drawTubo()
    })

    // 4. control de la recursion
    requestAnimationFrame(this.gameLoop);
  };
}
