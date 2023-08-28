/* When toggle-menu is clicked this function will fire */
function toggleNavLinks() {
    var navLinks = document.querySelector('.nav-links');
    var toggleIcon = document.querySelectorAll('.toggle-icon');
    var dropdownLinks = document.querySelector('.dropdown-links');

    if (dropdownLinks.style.display === 'none') {
        dropdownLinks.style.display = 'block';
    } else {
        dropdownLinks.style.display = 'none';
    }
}


/* This is for active-links */
const navLinks = document.querySelectorAll('.nav-links a');

// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to update the active link
function updateActiveLink() {
    navLinks.forEach(link => {
        const sectionId = link.getAttribute('href');
        const section = document.querySelector(sectionId);

        if (section && isInViewport(section)) {
            link.classList.add('active-link');
        } else {
            link.classList.remove('active-link');
        }
    });
}

// Attach scroll event listener to update active link
window.addEventListener('scroll', updateActiveLink);



/*Animation*/
const animateOnScrollElements = document.querySelectorAll('.animate-on-scroll');

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2,
};

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const animationType = entry.target.getAttribute('data-animation');
            entry.target.classList.add(animationType, 'animate');
        } else {
            const animationType = entry.target.getAttribute('data-animation');
            entry.target.classList.remove(animationType, 'animate');
        }
    });
}, observerOptions);

animateOnScrollElements.forEach(element => {
    observer.observe(element);
});


