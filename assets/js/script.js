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
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 80,
            sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-links a[href*=' + sectionId + ']').classList.add('active-link')
            document.querySelector('.dropdown-links a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav-links a[href*=' + sectionId + ']').classList.remove('active-link')
            document.querySelector('.dropdown-links a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)
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


