function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco"); // Obtener la imagen
  
    let textoCifrado = texto
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");
  
    if (texto.length != 0) {
      tituloMensaje.textContent = "Texto encriptado con éxito";
      parrafo.textContent = textoCifrado;
      muñeco.style.display = "none"; // Ocultar la imagen
    } else {
      tituloMensaje.textContent = "Ningún mensaje fue encontrado";
      parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
      swal("Ooops!", "Debes ingresar un texto", "warning");
    }
    document.getElementById("texto").value = "";
    document.getElementById("parrafo").classList.add("estilo-aplicado");
  }
  
  function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco"); // Obtener la imagen
  
    let textoCifrado = texto
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");
    
    if (texto.length != 0) {
      tituloMensaje.textContent = "Texto desencriptado con éxito";
      parrafo.textContent = textoCifrado;
      muñeco.style.display = "none"; // Ocultar la imagen
    } else {
      tituloMensaje.textContent = "Ningún mensaje fue encontrado";
      parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
      swal("Ooops!", "Debes ingresar un texto", "warning");
    }
    document.getElementById("texto").value = "";
    document.getElementById("parrafo").classList.add("estilo-aplicado");
  }

  function copiar() {
    let parrafo = document.getElementById("parrafo").textContent;
  
    navigator.clipboard.writeText(parrafo)
      .then(() => {
        alert("Texto copiado al portapapeles!");
      })
      .catch(err => {
        console.error("Error al copiar el texto: ", err);
      });
  }
