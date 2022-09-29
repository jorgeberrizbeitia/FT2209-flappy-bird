class Tubo {
  constructor() {
    // todas las propiedades de cada tubo
    this.img = new Image();
    this.img.src = "./images/obstacle_top.png"; // cual imagen? empezamos con la de arriba
    this.x = canvas.width;
    this.y = 0;
    this.w = 50;
    this.h = 200;
    this.speed = 2
  }

  // metodos o acciones de cada tubo
  drawTubo = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  };

  moveTubo = () => {
    this.x = this.x - this.speed
  }
}
