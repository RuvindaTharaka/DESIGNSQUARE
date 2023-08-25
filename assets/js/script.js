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
/* Step I - Check is in viewport*/
/*
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}*/
/* Step II - Bind & remove active-link*/
/*
function setActiveLink() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");
    const dropLinks = document.querySelectorAll(".dropdown-links a");

    sections.forEach((section, index) => {
        if (isInViewport(section)) {
            navLinks.forEach(link => link.classList.remove("active-link"));
            dropLinks.forEach(link => link.classList.remove("active-link"));

            if (navLinks[index]) {
                navLinks[index].classList.add("active-link");
            }

            if (dropLinks[index]) {
                dropLinks[index].classList.add("active-link");
            }
        }
    });
}

window.addEventListener("scroll", setActiveLink); */




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


