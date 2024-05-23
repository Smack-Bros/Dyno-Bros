export class Game {
  constructor(canvas) {
    this.width = canvas.width;
    this.height = canvas.height;
    this.ctx = canvas.getContext('2d');

    this.keysPressed = new Set();
    document.addEventListener('keydown', (e) => {
      this.keysPressed.add(e.key)
    });

    document.addEventListener('keyup', (e) => {
      this.keysPressed.delete(e.key)
    });
  }
}

export class GameLoop {
  constructor(game, update, render) {
    this.lastFrameTime = 0;
    this.accumulatedTime = 0;
    this.timeStep = 1000/60; // 60fps lessgo

    this.game = game;
    this.update = update;
    this.render = render;

    this.stop = false;
  }

  mainLoop = (timestamp) => {
    if (this.stop) return;

    let deltaTime = timestamp - this.lastFrameTime;
    this.lastFrameTime = timestamp;

    // handling fixed 60tps independent from render time
    this.accumulatedTime += deltaTime;
    while (this.accumulatedTime >= this.timeStep) {
      this.update(this.game, this.timeStep);
      this.accumulatedTime -= this.timeStep;
    }

    this.render(this.game);
    requestAnimationFrame(this.mainLoop);
  }

  start() {
    this.stop = false;
    requestAnimationFrame(this.mainLoop);
  }
}
