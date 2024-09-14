function createLuciole() {
    const luciole = document.createElement("div");
    luciole.className = "luciole";
    document.querySelector(".container").appendChild(luciole);

    const randomX = Math.random() * window.innerWidth;
    const randomY = Math.random() * window.innerHeight;

    luciole.style.left = `${randomX}px`;
    luciole.style.top = `${randomY}px`;

    luciole.addEventListener("animationiteration", () => {
        luciole.style.left = `${Math.random() * window.innerWidth}px`;
        luciole.style.top = `${Math.random() * window.innerHeight}px`;
    });
}

setInterval(createLuciole, 2000);

