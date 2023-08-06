// Smooth scrolling functionality for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Show the "Back to Top" button when scrolling down
window.addEventListener('scroll', function () {
    if (window.pageYOffset > 100) {
        document.querySelector('.back-to-top').style.display = 'block';
    } else {
        document.querySelector('.back-to-top').style.display = 'none';
    }
});

// Add comment functionality here to allow visitors to leave comments on blog posts
// You can use a backend server or a third-party commenting system for this purpose

// Additionally, you can implement SEO optimizations such as adding relevant meta tags,
// using descriptive headings and alt attributes, optimizing image sizes, and providing
// high-quality and engaging content to improve the website's search engine visibility.
