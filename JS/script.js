

// ALERT DEL BTN SABER MAS


const botonSaberMas = document.querySelector(".btn-saber-mas");

    // Agregar evento de clic al botón
    botonSaberMas.addEventListener("click", function () {
      alert("¡Llama al número 687 39 23 25 o visita nuestras oficinas para más información!");
    });
    




//NOTICIAS JSON


    document.addEventListener("DOMContentLoaded", () => {
      const noticiasWrapper = document.getElementById("noticias-wrapper");
      const noticiasContainer = document.getElementById("noticias-container");
  
      // URL del archivo JSON
      const urlJSON = "./ASSETS/noticias.json";
  
      // Cargar el archivo JSON desde la URL
      fetch(urlJSON)
          .then(response => {
              if (!response.ok) {
                  throw new Error(`Error al cargar las noticias: ${response.status}`);
              }
              return response.json();
          })
          .then(noticias => {
              noticias.forEach(noticia => {
                  // Crear un div para cada noticia
                  const noticiaDiv = document.createElement("div");
                  noticiaDiv.className = "noticia";
  
                  // Agregar el título de la noticia
                  const titulo = document.createElement("h2");
                  titulo.textContent = noticia.titulo;
                  noticiaDiv.appendChild(titulo);
  
                  // Agregar la descripción (oculta inicialmente)
                  const descripcion = document.createElement("p");
                  descripcion.textContent = noticia.descripcion;
                  noticiaDiv.appendChild(descripcion);
  
                  // Gestionar el evento click para mostrar/ocultar la descripción
                  noticiaDiv.addEventListener("click", (e) => {
                      e.stopPropagation(); // Evita que el clic afecte al contenedor padre
                      noticiaDiv.classList.toggle("mostrada");
                  });
  
                  // Agregar la noticia al contenedor
                  noticiasContainer.appendChild(noticiaDiv);
              });
          })
          .catch(error => console.error(error));
  
      // Mostrar/Ocultar las noticias al hacer clic en el contenedor principal
      noticiasWrapper.addEventListener("click", () => {
          const isDisplayed = noticiasContainer.style.display === "block";
          noticiasContainer.style.display = isDisplayed ? "none" : "block";
      });
  });
  





//SERVICIOS//
  
  const serviceBoxes = document.querySelectorAll('.servicios-box');

  const revealBoxes = () => {
    const triggerBottom = window.innerHeight * 0.85;

    serviceBoxes.forEach((box, index) => {
      const boxTop = box.getBoundingClientRect().top;

      if (boxTop < triggerBottom) {
        // Aplica una animación diferente según el índice de la caja
        box.style.transitionDelay = `${index * 0.2}s`; // Delay escalonado
        box.classList.add('show');
      }
    });
  };

  window.addEventListener('scroll', revealBoxes);
  revealBoxes(); // Llamada inicial al cargar la página



  document.addEventListener('DOMContentLoaded', () => {
    const packBoxes = document.querySelectorAll('.pack-box');
    
    packBoxes.forEach((box, index) => {
      setTimeout(() => {
        box.classList.add('show');
      }, index * 300); // Retraso de 300ms por cada caja
    });
  });






//PREGUNTAS FRECUENTES--------//


document.querySelectorAll(".faq-item").forEach(item => {
  item.addEventListener("click", () => {
    const answer = item.querySelector(".faq-answer");
    const isActive = answer.style.display === "block";

    document.querySelectorAll(".faq-answer").forEach(a => a.style.display = "none");

    answer.style.display = isActive ? "none" : "block";
  });
});




//TESTIMONIOS-----/

let indice = 0;
const testimonios = document.querySelectorAll(".testimonio");

function mostrarTestimonio(n) {
  testimonios.forEach((testimonio) => (testimonio.style.display = "none"));
  testimonios[n].style.display = "block";
}

function moverCarrusel(direccion) {
  indice += direccion;
  if (indice >= testimonios.length) {
    indice = 0;
  } else if (indice < 0) {
    indice = testimonios.length - 1;
  }
  mostrarTestimonio(indice);
}

// Cambia automáticamente cada 5 segundos
setInterval(() => moverCarrusel(1), 5000);

// Muestra el primer testimonio al cargar la página
mostrarTestimonio(indice);




document.addEventListener("DOMContentLoaded", function () {
  let currentPath = window.location.pathname.split("/").pop();
  let menuItems = document.querySelectorAll(".menu-item");

  menuItems.forEach(item => {
      let itemPath = item.getAttribute("href").split("/").pop();

      if (itemPath === currentPath) {
          item.classList.add("active");
          item.focus(); // Aplicar focus automáticamente
      } else {
          item.classList.remove("active");
      }
  });
});





 // Función para verificar si las cookies fueron aceptadas
 function mostrarBannerCookies() {
  // Verificamos si la aceptación de cookies ya está guardada en sessionStorage
  if (!sessionStorage.getItem('cookiesAccepted')) {
      // Si no está aceptado, mostramos el banner
      document.getElementById("cookie-banner").style.display = "block";
  }
}

// Función que oculta el banner y guarda la aceptación de las cookies
function aceptarCookies() {
  // Ocultar el banner
  document.getElementById("cookie-banner").style.display = "none";
  // Guardar que las cookies han sido aceptadas en sessionStorage
  sessionStorage.setItem("cookiesAccepted", "true");
}

// Llamamos a la función mostrarBannerCookies cuando la página se carga
window.onload = mostrarBannerCookies;

