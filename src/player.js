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
    // object velocaity
    this.vel = {
      x: 0,
      y: 0
    }
    
    // speed
    this.speed = 10;
    // friction
    this.friction = 1 - (this.speed/this.movement.x)
  }

  draw(ctx) {
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update(deltaTime) {
    if (!deltaTime) return;

    console.log(this.position.x)

    this.position.x +=  this.vel.x;
    this.vel.x *= this.friction;
    // can add a final position object that gets updated in the moveRight/Left function
    // if block to check if you are in final position
    // if true then set vel = 0
  }

  moveRight() {
    //this.position.x += this.movement.x;
    this.vel.x = this.speed;
  }

  moveLeft() {
    //this.position.x -= this.movement.x;
    this.vel.x = -this.speed;
  }

  // placeholder function
  start(mockData) {
    let i = 0;
    let interval = setInterval(() => {
      this._loop(mockData[i]);
      i++;
      if (i === mockData.length) clearInterval(interval);
    }, 1000);
  }

  _loop(input) {
    switch (input) {
      case "player.moveRight()":
        this.moveRight();
        break;
      case "player.moveLeft()":
        this.moveLeft();
        break;
    }
  }
}
