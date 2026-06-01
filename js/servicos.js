const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {
        card.classList.add("flipped");
    });

    card.addEventListener("mouseleave", () => {
        card.classList.remove("flipped");
    });

});