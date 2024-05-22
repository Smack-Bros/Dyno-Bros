const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

canvas.style.background = 'skyblue';

ctx.fillStyle = 'pink';
ctx.fillRect(0, 0, 100, 100);

ctx.fillStyle = 'violet';
ctx.fillRect(100, 100, 100, 100);

ctx.beginPath();
ctx.strokeStyle = 'yellow';
ctx.lineWidth = 10;
ctx.arc(100, 100, 50, 0, Math.PI * 2, false);
ctx.stroke();
ctx.closePath();