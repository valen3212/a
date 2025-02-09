// Sonido para reventar el globo
const popSound = document.getElementById('popSound');

// Función para reventar el globo y mostrar el mensaje
function reventarGlobo(globoId) {
    const globo = document.getElementById(globoId);
    globo.style.backgroundColor = 'transparent';
    globo.style.width = '0';
    globo.style.height = '0';
    globo.querySelector('::before').style.display = 'none'; // Ocultar emoji 🎈

    popSound.play(); // Reproducir el sonido del globo reventando

    const mensaje = "Te amo mucho, qué lindo es estar a tu lado ❤️";
    setTimeout(() => {
        alert(mensaje);
    }, 500);
}

// Interacción del botón "No"
document.getElementById('noBtn').addEventListener('click', function() {
    this.style.position = 'absolute';
    this.style.left = Math.random() * 100 + '%';
    this.style.top = Math.random() * 100 + '%';
});