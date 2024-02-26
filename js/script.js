document.addEventListener('DOMContentLoaded', function() {
    var inputField = document.getElementById('input');
    var printButton = document.querySelector('.button');
    var releasePrintButton = document.getElementById('releasePrint');
    var closePopupButton = document.getElementById('closePopup'); // Falls vorhanden
    var printPopup = document.getElementById('printPopup');
    var printingPopup = document.getElementById('printingPopup');

    // Eingabeüberwachung, um den Druck-Button zu aktivieren/deaktivieren
    inputField.addEventListener('input', function() {
        printButton.disabled = !this.value.trim();
        // Aktualisiert den Text in allen .batch Elementen
        var batchDivs = document.querySelectorAll('.batch');
        batchDivs.forEach(function(div) {
            div.textContent = this.value ? this.value : "Name";
        }.bind(this));
    });

    // Öffnet das erste Popup
    printButton.addEventListener('click', function(event) {
        event.preventDefault();
        if (!printButton.disabled) {
            printPopup.style.display = 'block';
        }
    });

    // Schließt das erste Popup und zeigt das zweite Popup an
    releasePrintButton.addEventListener('click', function() {
        printPopup.style.display = 'none';
        printingPopup.style.display = 'block';
        
        // Schließt das zweite Popup nach 5 Sekunden, setzt das Eingabefeld und den .batch-Text zurück
        setTimeout(function() {
            printingPopup.style.display = 'none';
            inputField.value = '';
            printButton.disabled = true;

            // Setzt den Text aller .batch Elemente zurück auf "Name" oder einen anderen Standardtext
            var batchDivs = document.querySelectorAll('.batch');
            batchDivs.forEach(function(div) {
                div.textContent = "Name";
            });
        }, 5000);
    });

    // Optional: Schließt das erste Popup, falls vorhanden
    if (closePopupButton) {
        closePopupButton.addEventListener('click', function() {
            printPopup.style.display = 'none';
        });
    }
});
