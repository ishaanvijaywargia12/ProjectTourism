document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.querySelector("input[type='text']");
    const cards = document.querySelectorAll(".card");

    searchInput.addEventListener("input", function() {
        const searchText = searchInput.value.trim().toLowerCase();

        cards.forEach(card => {
            const cardTitle = card.querySelector("h2").textContent.toLowerCase();

            if (cardTitle.includes(searchText)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});
// Function to open the tour link with animation
function openTour(url) {
    // Add animation class to the body
    document.body.classList.add('fadeOut');

    // Delay opening the link to allow animation to finish
    setTimeout(() => {
        window.location.href = url;
    }, 500); // Adjust the delay time to match your animation duration
}