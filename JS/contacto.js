document.addEventListener('DOMContentLoaded', () => {
    const businessLocation = [38.2005433, -0.5622236]; // Ubicación de la empresa
    const map = L.map('map').setView(businessLocation, 13);

    // Cargar el mapa con OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Marcador de la empresa
    const businessMarker = L.marker(businessLocation).addTo(map).bindPopup('<b>ACTIONMARCKET</b><br>Calle Lérida, 49');

    // Verificar si el navegador soporta geolocalización
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const userLocation = [position.coords.latitude, position.coords.longitude];

            // Marcador de la ubicación del usuario
            const userMarker = L.marker(userLocation).addTo(map).bindPopup('<b>Tu Ubicación</b>');

            // Calcular y dibujar la ruta con una línea roja
            const routingControl = L.Routing.control({
                waypoints: [
                    L.latLng(userLocation),
                    L.latLng(businessLocation)
                ],
                routeWhileDragging: false,
                addWaypoints: false,
                draggableWaypoints: false,
                fitSelectedRoutes: true,
                show: true, // Muestra la descripción de la ruta
                createMarker: () => null, // No mostrar más marcadores
                lineOptions: {
                    styles: [{ color: 'red', weight: 5 }] // Línea roja para la ruta
                },
                router: L.Routing.osrmv1({ suppressDemoServerWarning: true }) // Evita mensajes en el mapa
            }).addTo(map);

            // Mover la descripción de la ruta a un margen y hacerla más pequeña
            const routeContainer = document.querySelector('.leaflet-routing-container');
            if (routeContainer) {
                routeContainer.style.fontSize = '12px'; // Tamaño de letra más pequeño
                routeContainer.style.position = 'absolute';
                routeContainer.style.bottom = '10px';
                routeContainer.style.right = '10px';
                routeContainer.style.background = 'rgba(255, 255, 255, 0.8)'; // Fondo semitransparente
                routeContainer.style.padding = '5px';
                routeContainer.style.borderRadius = '5px';
                routeContainer.style.zIndex = '1000'; // Para que esté por encima del mapa
            }

            // Crear enlace a Google Maps con la ruta
            const googleMapsLink = `https://www.google.com/maps/dir/?api=1&origin=${userLocation[0]},${userLocation[1]}&destination=${businessLocation[0]},${businessLocation[1]}&travelmode=driving`;

            // Agregar enlaces en los popups
            userMarker.bindPopup(`<b>Tu Ubicación</b><br><a href="${googleMapsLink}" target="_blank">Ver ruta en Google Maps</a>`);
            businessMarker.bindPopup(`<b>ACTIONMARCKET</b><br>Calle Lérida, 49<br><a href="${googleMapsLink}" target="_blank">Ver ruta en Google Maps</a>`);

            // Si el usuario hace clic en el mapa, abrir Google Maps con la ruta
            map.on('click', () => {
                window.open(googleMapsLink, '_blank');
            });

        }, error => {
            console.error('Error al obtener la ubicación del usuario:', error);
        });
    } else {
        alert('Tu navegador no soporta geolocalización.');
    }
});


navigator.geolocation.getCurrentPosition(
    position => {
        console.log("Ubicación obtenida correctamente");
    },
    error => {
        console.error("Error al obtener la ubicación del usuario:", error.message);
        alert("Para calcular la ruta, debes permitir la geolocalización.");
    }
);
