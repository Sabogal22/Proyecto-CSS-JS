const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";

// Defina la función para calcular según el botón hecho clic.
const calculate = (btnValue) => {
  display.focus();
  if (btnValue === "=" && output !== "") {
    // Si la salida tiene '%', reemplácela con '/100' antes de evaluar.
    output = eval(output.replace("%", "/100"));
  } else if (btnValue === "AC") {
    output = "";
  } else if (btnValue === "DEL") {
    // Si se hace clic en el botón DEL, elimine el último carácter de la salida.
    output = output.toString().slice(0, -1);
  } else {
    // Si la salida está vacía y el botón tiene caracteres especiales, regrese
    if (output === "" && specialChars.includes(btnValue)) return;
    output += btnValue;
  }
  display.value = output;
};

// Agregue un detector de eventos a los botones, llame a calcular() al hacer clic.
buttons.forEach((button) => {
  // El oyente que hace clic en el botón llama a calcular() con el valor del conjunto de datos como argumento.
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});