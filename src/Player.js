import Sprite from "../framework/Sprite.js"

export default class Player extends Sprite {
  constructor(x, y, w, h) {
    super(x, y, w, h);
  }

  update(game, timeStamp) {
    const r = this.rect;
    const speed = 2 * timeStamp;

    if (game.keysPressed.has("w"))
      r.pos.y = Math.max(r.pos.y - speed, 0);

    if (game.keysPressed.has("s"))
      r.pos.y = Math.min(r.pos.y + speed, game.height - r.size.y);

    if (game.keysPressed.has("a"))
      r.pos.x = Math.max(r.pos.x - speed, 0);

    if (game.keysPressed.has("d"))
      r.pos.x = Math.min(r.pos.x + speed, game.width - r.size.x);
  }

  render(game) {
    game.ctx.fillStyle = "skyblue";
    game.ctx.fillRect(this.rect.pos.x,
      this.rect.pos.y, this.rect.size.x, this.rect.size.y);
  }
}
