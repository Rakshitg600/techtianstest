window.addEventListener('resize', adjustCardWidths);
window.addEventListener('load', adjustCardWidths);

function adjustCardWidths() {
    const container = document.querySelector('.content');
    const cards = document.querySelectorAll('.card');
    const containerWidth = container.clientWidth;
    let cardWidthPercentage;

    if (containerWidth >= 1200) {
        cardWidthPercentage = 30; // 3 cards per row for wide screens
    } else if (containerWidth >= 800) {
        cardWidthPercentage = 45; // 2 cards per row for medium screens
    } else {
        cardWidthPercentage = 100; // 1 card per row for small screens
    }

    cards.forEach(card => {
        card.style.width = `${cardWidthPercentage}%`;
    });
}
