// Fonction pour créer une image de dollar
function createDollar() {
    const dollar = document.createElement('img');
    dollar.src = '../images/dollars.png'; // Chemin vers votre image de dollar
    dollar.classList.add('dollar');
    document.querySelector('.rain').appendChild(dollar);

    // Positionner l'image aléatoirement sur la largeur de la page
    const randomX = Math.random() * window.innerWidth;
    dollar.style.left = `${randomX}px`;

    // Animation pour faire descendre l'image
    dollar.animate([
        { transform: `translateY(-100px)`, opacity: 0 },
        { transform: `translateY(${window.innerHeight}px)`, opacity: 1 }
    ], {
        duration: Math.random() * 4000 + 2000, // Durée aléatoire entre 1 et 4 secondes
        easing: 'linear',
        iterations: Infinity
    });
}

// Créer plusieurs images de dollar
for (let i = 0; i < 50; i++) {
    createDollar();
}


