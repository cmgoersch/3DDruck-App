document.addEventListener('DOMContentLoaded', (event) => {
    console.log('Das Dokument ist vollständig geladen.');
});

document.addEventListener('DOMContentLoaded', function() {
    // Zugriff auf das Eingabefeld und das Ziel-div
    var inputField = document.getElementById('input');
    var batchDiv = document.querySelector('.batch');

    // Event-Listener, der auf Eingaben reagiert
    inputField.addEventListener('input', function() {
        // Aktualisiert den Inhalt des Ziel-divs mit dem, was im Eingabefeld steht
        batchDiv.textContent = this.value;
    });
});