import { Rect } from "./models.js"

export default class Sprite {
  constructor(x, y, w, h) {
    this.rect = new Rect(x, y, w, h);
  }

  update(game, timstamp) {}
  render(game) {}
}
