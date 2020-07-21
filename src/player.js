export default class Player {
  constructor(gameHeight, gameWidth) {
    // game area size
    this.gameHeight = gameHeight
    this.gameWidth = gameWidth
    // object size
    this.height = 30;
    this.width = 30;
    // object position
    this.position = {
      x: 0,
      y: this.gameHeight - this.height
    }
  }

  draw(ctx) {
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
  }

}