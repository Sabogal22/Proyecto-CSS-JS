let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');
let letters = ['1', '0'];

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

let drops = []

for (let i = 0; i < canvas.width / 15; i++) {
  drops.push ({x: i * 15, y: Math.ceil(Math.random() * 60) * -15})
}

const drop = () => {
  ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < drops.length; i++) {
    let text = letters[Math.floor(Math.random() * letters.length)];
    if (drops[i].y > canvas.height) {
      drops[i].y = -15;
    }

    drops[i].y += 15;
    ctx.font = '15px Courier Prime Code';
    ctx.fillStyle = "#00FF40";
    ctx.fillText(text, drops[i].x, drops[i].y);
  }
}

setInterval(drop, 70)

window.addEventListener('resize', () => {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
  drops = []
  for (let i = 0; i < canvas.width / 15; i++) {
    drops.push({x: i * 15, y: Math.ceil(Math.random() * 68) * -15})
  }
})