// ==============================
// CONTROLE DA ANIMAÇÃO
// ==============================

document.addEventListener("visibilitychange", function () {

    if (!document.hidden) {

        const background = document.querySelector(".background");
        const title = document.querySelector("h1");

        // Reinicia a animação

        background.style.animation = "none";
        title.style.animation = "none";

        requestAnimationFrame(function () {

            background.style.animation = "";
            title.style.animation = "";

        });

    }

});
