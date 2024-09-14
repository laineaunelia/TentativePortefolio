/* fond etoile */ 

const numStars = 200; // Nombre d'étoiles

for (let i = 0; i < numStars; i++) {
    createStar();
}

function createStar() {
    const star = document.createElement('div');
    star.className = 'star';
    const size = Math.random() * 3 + 1;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    const xPos = Math.random() * window.innerWidth;
    const yPos = Math.random() * window.innerHeight;
    star.style.left = `${xPos}px`;
    star.style.top = `${yPos}px`;
    const animationDuration = Math.random() * 3 + 1;
    star.style.animation = `twinkle ${animationDuration}s infinite alternate ease-in-out`;
    document.querySelector('.stars').appendChild(star);
}
