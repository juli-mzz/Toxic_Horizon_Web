/* ============================================================
   INTERACTIVIDAD GENERAL Y MODALES (js/main.js)
============================================================= */

document.addEventListener('DOMContentLoaded', () => {

    // --------------------------------------------------------
    // LÓGICA PARA ABRIR Y CERRAR VENTANAS MODALES DE LORE
    // --------------------------------------------------------
    const openBtns = document.querySelectorAll('.btn-modal');
    const closeBtns = document.querySelectorAll('.close-modal');
    const overlays = document.querySelectorAll('.modal-overlay');

    // Abrir Modal correspondiente al dar clic en "Leer más"
    openBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const modalId = btn.getAttribute('data-target');
            const targetModal = document.getElementById(modalId);
            if (targetModal) {
                targetModal.classList.add('active');
                document.body.style.overflow = 'hidden'; // Bloquea el scroll de la página de fondo
            }
        });
    });

    // Cerrar Modal al dar clic en la equis (×)
    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const activeModal = btn.closest('.modal-overlay');
            if (activeModal) {
                activeModal.classList.remove('active');
                document.body.style.overflow = 'auto'; // Restablece el scroll
            }
        });
    });

    // Cerrar Modal al dar clic en el área oscura fuera del cuadro de texto
    overlays.forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                overlay.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    });

    // Cerrar Modal con la tecla ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            overlays.forEach(overlay => {
                if (overlay.classList.contains('active')) {
                    overlay.classList.remove('active');
                    document.body.style.overflow = 'auto';
                }
            });
        }
    });

    // --------------------------------------------------------
    // ESTILO DEL HEADER AL HACER SCROLL
    // --------------------------------------------------------
    const header = document.querySelector('.main-header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled-header');
            } else {
                header.classList.remove('scrolled-header');
            }
        });
    }
});