// Animación de entrada
window.addEventListener("load", () => {
    const hero = document.querySelector(".hero");

    hero.style.opacity = "0";
    hero.style.transform = "translateY(30px)";
    hero.style.transition = "all 1s ease";

    setTimeout(() => {
        hero.style.opacity = "1";
        hero.style.transform = "translateY(0)";
    }, 200);
});

// Efecto al hacer clic en el botón
const button = document.querySelector(".btn");

button.addEventListener("click", () => {
    button.textContent = "Loading...";
});
