function injectOption() {
    var selectElement = document.getElementById('estado');
    var selectedValue = selectElement.options[selectElement.selectedIndex].text;
    var pElement = document.getElementById('estadoSeleccionado');
    pElement.textContent = 'Estado seleccionado: ' + selectedValue;
}
