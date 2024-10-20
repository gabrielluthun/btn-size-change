const button = document.querySelector('button');

if (button) {
    // Fonction de lissage (lerp)
    function lerp(start, end, amt) {
        return (1 - amt) * start + amt * end;
    }

    let currentSize = 100; // Taille initiale

    document.addEventListener('mousemove', (event) => {
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        // Obtenir la position du centre du bouton
        const buttonRect = button.getBoundingClientRect();
        const buttonX = buttonRect.left + buttonRect.width / 2;
        const buttonY = buttonRect.top + buttonRect.height / 2;

        // Calculer la distance entre la souris et le centre du bouton
        const distance = Math.sqrt(Math.pow(mouseX - buttonX, 2) + Math.pow(mouseY - buttonY, 2));

        // Définir les tailles maximale et minimale du bouton
        const maxSize = 700;
        const minSize = 50;

        // Calculer la nouvelle taille en fonction de la distance (exponentielle)
        const targetSize = Math.min(maxSize, minSize * Math.exp(distance / 250));

        // Appliquer la taille lissée au bouton
        currentSize = lerp(currentSize, targetSize, 0.425);
        button.style.width = `${currentSize}px`;
        button.style.height = `${currentSize}px`;

        if (currentSize < 150) {
            button.style.opacity = 0;
            button.style.pointerEvents = 'none';
        } else {
            button.style.opacity = 1;
            button.style.pointerEvents = 'auto';
        }
    });

    // Si vous pouvez cliquer sur le bouton, vous gagnez
    button.addEventListener('click', () => {
        alert('Congrats!');
        location.href = 'https://gabrielluthun.github.io/try-to-click/';
    });
};