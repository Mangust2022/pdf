// Función para cargar el documento en el iframe
function loadDocument(url) {
    document.getElementById('documentViewer').src = url;
}

// Función para mostrar/ocultar el menú de documentos
document.getElementById('toggleMenu').addEventListener('click', function() {
    const documentSection = document.getElementById('documentSection');
    if (documentSection.classList.contains('hidden')) {
        documentSection.classList.remove('hidden');
    } else {
        documentSection.classList.add('hidden');
    }
});