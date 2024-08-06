const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

canvas.style.background = 'lightyellow';

ctx.fillStyle = '#67e6d2';
ctx.fillRect(0, 0, canvas.width, canvas.height);

const image = new Image();
image.src = './img/DinoMap.png'

image.onload = () => {
    ctx.drawImage(image, 375, 10);
}