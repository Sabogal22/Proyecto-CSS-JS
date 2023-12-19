const lengthSlider = document.querySelector(".pass-length input"),
  options = document.querySelectorAll(".option input"),
  copyIcon = document.querySelector(".input-box span"),
  passwordInput = document.querySelector(".input-box input"),
  passIndicator = document.querySelector(".pass-indicator"),
  generateBtn = document.querySelector(".generate-btn");

const characters = {
  // objeto de letras, números y símbolos
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  symbols: "^!$%&|[](){}:;.,*+-#@<>~"
};

const generatePassword = () => {
  let staticPassword = "",
    randomPassword = "",
    excludeDuplicate = false,
    passLength = lengthSlider.value;

  options.forEach((option) => {
    // recorrer la casilla de verificación de cada opción
    if (option.checked) {
      // si la casilla de verificación está marcada
      // si la identificación de la casilla de verificación no es exc-duplicate && espacios
      if (option.id !== "exc-duplicate" && option.id !== "spaces") {
        // agregar un valor clave particular del objeto de carácter a staticPassword
        staticPassword += characters[option.id];
      } else if (option.id === "spaces") {
        // si la identificación de la casilla de verificación es espacios
        staticPassword += `  ${staticPassword}  `; // agregando espacio al principio y al final de staticPassword
      } else {
        // de lo contrario, pase el valor verdadero para excludeDuplicate
        excludeDuplicate = true;
      }
    }
  });

  for (let i = 0; i < passLength; i++) {
    // obteniendo caracteres aleatorios de la contraseña estática
    let randomChar =
      staticPassword[Math.floor(Math.random() * staticPassword.length)];
    if (excludeDuplicate) {
      // Si excludeDuplicate es verdadero
      // si randomPassword no contiene el carácter aleatorio actual o randomChar es igual
      // al espacio " " luego agregue un carácter aleatorio a la contraseña aleatoria; de lo contrario, disminuya i en -1
      !randomPassword.includes(randomChar) || randomChar == " "
        ? (randomPassword += randomChar)
        : i--;
    } else {
      // de lo contrario, agregue un carácter aleatorio a la randomPassword
      randomPassword += randomChar;
    }
  }
  passwordInput.value = randomPassword; // passing randomPassword to passwordInput value // pasando randomPassword a passwordInput del valor
};

const upadatePassIndicator = () => {
  // si el valor de lengthSlider es menor que 8, pase "débil" como ID de passIndicator; de lo contrario, si lengthSlider
  // el valor es menor que 16, luego pase "medium" como id; de lo contrario, pase "strong" como id
  passIndicator.id =
    lengthSlider.value <= 8
      ? "weak"
      : lengthSlider.value <= 16
      ? "medium"
      : "strong";
};

const updateSlider = () => {
  // pasar el valor del control deslizante como texto del contador
  document.querySelector(".pass-length span").innerText = lengthSlider.value;
  generatePassword();
  upadatePassIndicator();
};
updateSlider();

const copyPassword = () => {
  navigator.clipboard.writeText(passwordInput.value); // copiando contraseña aleatoria
  copyIcon.innerText = "check"; // cambiando el icono de copiar para marcar
  copyIcon.style.color = "#4285F4";
  setTimeout(() => {
    // después de 1500 ms, volviendo a cambiar el ícono de marca para copiar
    copyIcon.innerText = "copy_all";
    copyIcon.style.color = "#707070";
  }, 1500);
};

copyIcon.addEventListener("click", copyPassword);
lengthSlider.addEventListener("input", updateSlider);
generateBtn.addEventListener("click", generatePassword);