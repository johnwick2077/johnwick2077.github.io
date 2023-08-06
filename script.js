// Smooth scrolling functionality for navigation links and Back to Top button
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        const headerOffset = 100; // Adjust the offset as needed (consider the height of the header)

        // Calculate the target position and scroll smoothly
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerOffset;
        window.scroll({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});

// Show the "Back to Top" button when scrolling down
let isScrolling = false;

window.addEventListener('scroll', function () {
    isScrolling = true;
    throttleScroll(); // Throttle the scroll event to improve performance
});

function throttleScroll() {
    if (isScrolling) {
        requestAnimationFrame(function () {
            showBackToTop();
            isScrolling = false;
        });
    }
}

function showBackToTop() {
    const backToTopButton = document.querySelector('.back-to-top');
    if (window.pageYOffset > 100) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
}

// Add comment functionality here to allow visitors to leave comments on blog posts
// You can use a backend server or a third-party commenting system for this purpose

// Additionally, you can implement SEO optimizations such as adding relevant meta tags,
// using descriptive headings and alt attributes, optimizing image sizes, and providing
// high-quality and engaging content to improve the website's search engine visibility.
