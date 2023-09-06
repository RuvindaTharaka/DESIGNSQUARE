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


/* Remove Place holders */
var inputElement1 = document.getElementById("name");
var inputElement2 = document.getElementById("email");
var inputElement3 = document.getElementById("subject");
var inputElement4 = document.getElementById("message");

// Add an event listener for when the input element receives focus (click)
inputElement1.addEventListener("focus", function () {
    // Clear the placeholder text
    inputElement1.placeholder = "";
    inputElement1.style.border = "2px solid rgba(62, 101, 62, 1)";
    inputElement1.style.outline = "none";
    inputElement1.style.textAlign = "left";

});

inputElement2.addEventListener("focus", function () {
    // Clear the placeholder text
    inputElement2.placeholder = "";
    inputElement2.style.border = "2px solid rgba(62, 101, 62, 1)";
    inputElement2.style.outline = "none";
    inputElement2.style.textAlign = "left";
});

inputElement3.addEventListener("focus", function () {
    // Clear the placeholder text
    inputElement3.placeholder = "";
    inputElement3.style.border = "2px solid rgba(62, 101, 62, 1)";
    inputElement3.style.outline = "none";
    inputElement3.style.textAlign = "left";
});

inputElement4.addEventListener("focus", function () {
    // Clear the placeholder text
    inputElement4.placeholder = "";
    inputElement4.style.border = "2px solid rgba(62, 101, 62, 1)";
    inputElement4.style.outline = "none";
    inputElement4.style.textAlign = "left";
});

inputElement1.addEventListener("blur", function () {
    // Restore the placeholder text if the input is empty
    if (inputElement1.value === "") {
        inputElement1.placeholder = "Your Name";
        inputElement1.style.borderColor = "#FFFFFF";
        inputElement1.style.textAlign = "center";
    }
});

inputElement2.addEventListener("blur", function () {
    // Restore the placeholder text if the input is empty
    if (inputElement2.value === "") {
        inputElement2.placeholder = "Your Email";
        inputElement2.style.borderColor = "#FFFFFF";
        inputElement2.style.textAlign = "center";
    }
});

inputElement3.addEventListener("blur", function () {
    // Restore the placeholder text if the input is empty
    if (inputElement3.value === "") {
        inputElement3.placeholder = "Email Subject";
        inputElement3.style.borderColor = "#FFFFFF";
        inputElement3.style.textAlign = "center";
    }
});


inputElement4.addEventListener("blur", function () {
    // Restore the placeholder text if the input is empty
    if (inputElement4.value === "") {
        inputElement4.placeholder = "Your Message";
        inputElement4.style.borderColor = "#FFFFFF";
        inputElement4.style.textAlign = "center";
    }
});