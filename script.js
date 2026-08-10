document.addEventListener("visibilitychange", () => {

    if (!document.hidden) {

        const background = document.querySelector(".background");
        const title = document.querySelector("h1");

        background.style.animation = "none";
        title.style.animation = "none";

        requestAnimationFrame(() => {

            background.style.animation = "";
            title.style.animation = "";

        });

    }

});
