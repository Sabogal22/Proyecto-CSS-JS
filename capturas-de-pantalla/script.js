const screenshotBtn = document.querySelector("#src-btn");
const screenshotPreview = document.querySelector(".src-preview");
const closeBtn = screenshotPreview.querySelector("#close-btn");

const captureScreen = async() => {
  try {
    // pedir permiso para usar una entrada multimedia para grabar la pestaña actual
    const stream = await navigator.mediaDevices.getDisplayMedia({ preferCurrentTab: true });
    const video = document.createElement("video");

    video.addEventListener("loadedmetadata", () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      // pasando el ancho y alto del video como ancho y alto del lienzo
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      video.play(); // reproducir el video para que la imagen dibujada no quede negra o en blanco
      // dibujar una imagen de la secuencia de vídeo capturada
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      stream.getVideoTracks()[0].stop(); // finalizar la primera pista de vídeo de la transmisión

      // pasando la URL de datos del lienzo como vista previa de captura de pantalla src
      screenshotPreview.querySelector("img").src = canvas.toDataURL();
      screenshotPreview.classList.add("show");
    });
    video.srcObject = stream; // pasar datos de flujo de captura como objeto fuente de video
  } catch (error) { // Si la imagen no se pudo capturar por algún motivo, avise al mensaje.
    alert("Failed to capture screenshot!");
  }
}

closeBtn.addEventListener("click", () => screenshotPreview.classList.toggle("show"));
screenshotBtn.addEventListener("click", captureScreen);