// Navigate to selected category page
function navigateTo(url) {
    window.location.href = url;
}

// Smooth scroll effect
document.addEventListener("DOMContentLoaded", () => {
    document.body.style.opacity = 0;
    setTimeout(() => { document.body.style.opacity = 1; }, 300);
});
