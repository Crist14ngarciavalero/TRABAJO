const galleryContent = {
  diseños: [
    '../IMAG/FOTO4.webp',
    '../IMAG/FOTO2.jpg',
    '../IMAG/FOTO3.webp',
    '../IMAG/FOTO5.webp',
    '../IMAG/FOTO6.jpeg',
    '../IMAG/FOTO7.png',
    '../IMAG/FOTO8.jpg',
    '../IMAG/FOTO9.jpg',
  ],
  tiendasOnline: [
    '../IMAG/TO1.png',
    '../IMAG/TO2.png',
    '../IMAG/TO3.png',
    '../IMAG/TO4.jpg',
    '../IMAG/TO5.png',
    '../IMAG/TO6.png',
    '../IMAG/TO7.jpg',
    '../IMAG/TO8.jpg',
  ],
  blogs: [
    '../IMAG/BLOG1.jpeg',
    '../IMAG/BLOG2.png',
    '../IMAG/BLOG3.jpeg',
    '../IMAG/BLOG4.webp',
    '../IMAG/BLOG5.png',
    '../IMAG/BLOG6.jpg',
    '../IMAG/BLOG7.webp',
    '../IMAG/BLOG9.webp',
  ],
  reels: [
    '../IMAG/VIDEOS/reel1.mp4',
    '../IMAG/VIDEOS/reel2.mp4',
    '../IMAG/VIDEOS/reel3.mp4'
  ]
};
function mostrarGaleria(seccion) {
  let galeria = document.getElementById("galeria");
  galeria.innerHTML = "";

  // Eliminar la clase "activa" de todas las secciones
  document.querySelectorAll(".seccion").forEach(item => {
      item.classList.remove("activa");
  });

  // Agregar la clase "activa" a la sección seleccionada
  let seccionActiva = document.querySelector(`[onclick="mostrarGaleria('${seccion}')"]`);
  if (seccionActiva) {
      seccionActiva.classList.add("activa");
  }

  // Insertar imágenes o videos en la galería
  galleryContent[seccion].forEach(item => {
      let elemento;
      if (item.endsWith(".mp4")) {
          elemento = document.createElement("video");
          elemento.src = item;
          elemento.controls = true;
      } else {
          elemento = document.createElement("img");
          elemento.src = item;
      }
      elemento.onclick = () => abrirModal(item);
      galeria.appendChild(elemento);
  });
}

// Para que al cargar la página, se seleccione "Diseños" automáticamente
document.addEventListener("DOMContentLoaded", function() {
  mostrarGaleria('diseños');
});


// Función para abrir el modal
function abrirModal(src) {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modalImg");
  const modalVideo = document.getElementById("modalVideo");

  if (src.includes(".mp4")) {
      modalImg.style.display = "none";
      modalVideo.style.display = "block";
      modalVideo.src = src;
  } else {
      modalVideo.style.display = "none";
      modalImg.style.display = "block";
      modalImg.src = src;
  }

  modal.style.display = "flex";
}

// Cerrar el modal
function cerrarModal() {
  document.getElementById("modal").style.display = "none";
}






document.addEventListener("DOMContentLoaded", function() {
  // Mostrar la galería de 'diseños' cuando se cargue la página
  mostrarGaleria('diseños');
});

function mostrarGaleria(seccion) {
  let galeria = document.getElementById("galeria");
  galeria.innerHTML = ""; // Limpiar la galería antes de agregar nuevas imágenes

  galleryContent[seccion].forEach(item => {
      let elemento;
      if (item.includes(".mp4")) {
          elemento = document.createElement("video");
          elemento.src = item;
          elemento.controls = true;
      } else {
          elemento = document.createElement("img");
          elemento.src = item;
      }

      elemento.onclick = () => abrirModal(item);
      galeria.appendChild(elemento);
  });
}
