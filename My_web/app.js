function animarH1() {
    var titulo = document.getElementById('titulo');

    // Agregar una clase para iniciar la animación
    titulo.classList.add('animacion-h1');
  
    // Remover la clase después de un tiempo para permitir la repetición
    setTimeout(function() {
        titulo.classList.remove('animacion-h1');
    }, 1000); // 1000ms = 1 segundo (ajusta según la duración de tu animación)
}

