const playBoard = document.querySelector(".play-board");
const scoreElement = document.querySelector(".score");
const highScoreElement = document.querySelector(".high-score");
const controls = document.querySelectorAll(".controls i");

let gameOver = false;
let foodX, foodY;
let snakeX = 5, snakeY = 5;
let velocityX = 0, velocityY = 0;
let snakeBody = [];
let setIntervalId;
let score = 0;

// Obtener una puntuación alta del almacenamiento local
let highScore = localStorage.getItem("high-score") || 0;
highScoreElement.innerText = `High Score: ${highScore}`;

const updateFoodPosition = () => {
  // Pasar un valor aleatorio de 1 a 30 como posición de comida
  foodX = Math.floor(Math.random() * 30) + 1;
  foodY = Math.floor(Math.random() * 30) + 1;
}

const handleGameOver = () => {
  // Borrar el cronómetro
  clearInterval(setIntervalId);
  
  // Mostrar el mensaje de Game Over con SweetAlert
  Swal.fire({
    icon: 'error',
    title: 'Game Over!',
    showConfirmButton: false,
    timer: 3000, // Tiempo de visualización del mensaje en milisegundos
    onClose: () => {
      // Después de que se cierre SweetAlert, recargar la página
      location.reload();
    }
  });
}

const changeDirection = e => {
  // Cambiar el valor de velocidad según la pulsación de una tecla
  if(e.key === "ArrowUp" && velocityY != 1) {
    velocityX = 0;
    velocityY = -1;
  } else if(e.key === "ArrowDown" && velocityY != -1) {
    velocityX = 0;
    velocityY = 1;
  } else if(e.key === "ArrowLeft" && velocityX != 1) {
    velocityX = -1;
    velocityY = 0;
  } else if(e.key === "ArrowRight" && velocityX != -1) {
    velocityX = 1;
    velocityY = 0;
  }
}

// Llamar a changeDirection en cada clic de tecla y pasar el valor del conjunto de datos clave como un objeto
controls.forEach(button => button.addEventListener("click", () => changeDirection({ key: button.dataset.key })));

const initGame = () => {
  if(gameOver) return handleGameOver();
  let html = `<div class="food" style="grid-area: ${foodY} / ${foodX}"></div>`;

  // Comprobando si la serpiente golpeó la comida.
  if(snakeX === foodX && snakeY === foodY) {
    updateFoodPosition();
    snakeBody.push([foodY, foodX]); // Empujando la posición de la comida hacia el cuerpo de la serpiente.
    score++; // incrementar la puntuación en 1
    highScore = score >= highScore ? score : highScore;
    localStorage.setItem("high-score", highScore);
    scoreElement.innerText = `Score: ${score}`;
    highScoreElement.innerText = `High Score: ${highScore}`;
  }
  // Actualización de la posición de la cabeza de la serpiente según la velocidad actual
  snakeX += velocityX;
  snakeY += velocityY;
    
  // Avanzando uno en uno los valores de los elementos del cuerpo de la serpiente.
  for (let i = snakeBody.length - 1; i > 0; i--) {
    snakeBody[i] = snakeBody[i - 1];
  }
  snakeBody[0] = [snakeX, snakeY]; // Establecer el primer elemento del cuerpo de la serpiente en la posición actual de la serpiente

  // Comprobar si la cabeza de la serpiente está fuera de la pared; de ser así, configurar gameOver en verdadero
  if(snakeX <= 0 || snakeX > 30 || snakeY <= 0 || snakeY > 30) {
    return gameOver = true;
  }

  for (let i = 0; i < snakeBody.length; i++) {
    // Agregando un div para cada parte del cuerpo de la serpiente.
    html += `<div class="head" style="grid-area: ${snakeBody[i][1]} / ${snakeBody[i][0]}"></div>`;
    // Comprobando si la cabeza de serpiente golpeó el cuerpo, si es así configura gameOver en verdadero
    if (i !== 0 && snakeBody[0][1] === snakeBody[i][1] && snakeBody[0][0] === snakeBody[i][0]) {
      gameOver = true;
    }
  }
  playBoard.innerHTML = html;
}

updateFoodPosition();
setIntervalId = setInterval(initGame, 100);
document.addEventListener("keyup", changeDirection);