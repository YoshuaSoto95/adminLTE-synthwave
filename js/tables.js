    // Configuración de paginación
    const itemsPerPage = 6;
    let currentPage = 1;

    function changePage(newPage) {
        currentPage = newPage;
        updateTableDisplay();
        updatePaginationStyles();
    }

    function updateTableDisplay() {
        const items = document.querySelectorAll('.employee-item');
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;

        items.forEach((item, index) => {
            item.style.display = (index >= startIndex && index < endIndex) ? '' : 'none';
        });
    }

    function updatePaginationStyles() {
        document.querySelectorAll('.pagination-synthwave .page-link').forEach(link => {
            link.parentElement.classList.remove('active');
            if(parseInt(link.textContent) === currentPage) {
                link.parentElement.classList.add('active');
            }
        });
    }

    // Inicializar
    updateTableDisplay();
    updatePaginationStyles();