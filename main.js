import Player from "./src/Player.js"
import { Game, GameLoop } from "./framework/Game.js"

const canvas = document.getElementById('game-canvas');
canvas.width = innerWidth;
canvas.height = innerHeight;

const game = new Game(canvas);
const player = new Player(0, 0, 50, 50);

function update(game, timestamp) {
  player.update(game, timestamp);
}

function render(game) {
  game.ctx.clearRect(0, 0, game.width, game.height);
  player.render(game);
}

const gameLoop = new GameLoop(game, update, render);
gameLoop.start();
