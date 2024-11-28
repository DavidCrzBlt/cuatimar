// Elementos del DOM
const modal = document.getElementById('modal');
const btnAbrir = document.getElementById('abrir-modal');
const btnCerrar = document.querySelector('.cerrar');

// Abrir el modal
btnAbrir.addEventListener('click', () => {
    modal.style.display = 'block';
});

// Cerrar el modal al hacer clic en el botón de cerrar
btnCerrar.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Cerrar el modal al hacer clic fuera del contenido
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});