export default class Player {
  constructor(gameHeight, gameWidth) {
    // game area size
    this.gameHeight = gameHeight;
    this.gameWidth = gameWidth;
    // object size
    this.height = 30;
    this.width = 30;
    // object position
    this.position = {
      x: 0,
      y: this.gameHeight - this.height,
    };
    //movement value
    this.movement = {
      x: 30,
      y: 30,
    };
    //placeholder just to test block moving in steps
    this.time = 0;
  }

  draw(ctx) {
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update(deltaTime) {
    if (!deltaTime) return;
  }

  moveRight() {
    //placeholder just to test block moving in steps
    setTimeout(() => {
      this.position.x += this.movement.x;
    }, this.time);
    this.time += 1000;
  }

  // placeholder function
  start(mockData) {
    let moveCounter = 0;
    setInterval(() => {
      console.log(moveCounter)
      moveCounter++
      if (moveCounter > mockData.length) clearInterval(start);
    }, 1000)
  }
}
