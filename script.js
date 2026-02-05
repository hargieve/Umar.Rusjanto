/* =================== 1. PRELOADER =================== */
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    setTimeout(() => {
        if (loader) loader.classList.add("loader-hidden");
    }, 1500);
});

/* =================== 2. TYPED JS =================== */
if (document.querySelector('.typing')) {
    new Typed('.typing', {
        strings: ['Informatics'],
        typeSpeed: 100,
        backSpeed: 60,
        backDelay: 1000,
        loop: true
    });
}

/* =================== 3. NAVBAR LOGIC =================== */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                let target = document.querySelector('header nav a[href*=' + id + ']');
                if (target) target.classList.add('active');
            });
        }
    });

    // Sticky Navbar
    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Auto-close menu on scroll
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/* =================== 4. DARK/LIGHT MODE =================== */
const themeIcon = document.querySelector('#theme-icon');
if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-mode');
    themeIcon.classList.replace('bx-moon', 'bx-sun');
}

themeIcon.onclick = () => {
    document.body.classList.toggle('light-mode');
    if (document.body.classList.contains('light-mode')) {
        themeIcon.classList.replace('bx-moon', 'bx-sun');
        localStorage.setItem('theme', 'light');
    } else {
        themeIcon.classList.replace('bx-sun', 'bx-moon');
        localStorage.setItem('theme', 'dark');
    }
};

/* =================== 5. SCROLL REVEAL =================== */
const sr = ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200
});
sr.reveal('.home-content, .heading', { origin: 'top' });
sr.reveal('.home-img, .skills-row, .projects-container, .contact form', { origin: 'bottom' });
sr.reveal('.home-content h1, .about-img', { origin: 'left' });
sr.reveal('.home-content p, .about-content', { origin: 'right' });

/* =================== 6. VANILLA TILT =================== */
if (typeof VanillaTilt !== 'undefined') {
    VanillaTilt.init(document.querySelectorAll(".skill-card, .project-box"), {
        max: 15, speed: 400, glare: true, "max-glare": 0.2
    });
}

/* =================== 7. EMAILJS =================== */
// Ganti bagian ini jika sudah punya akun EmailJS
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = contactForm.querySelector('.btn');
        btn.value = "Sending...";

        // Hanya jalan jika PUBLIC_KEY sudah diganti
        if (typeof emailjs !== 'undefined') {
            // emailjs.init("YOUR_PUBLIC_KEY"); // Aktifkan ini nanti
            
            // Simulasi berhasil jika belum setting EmailJS
            setTimeout(() => {
                alert("Pesan Terkirim! (Pastikan konfigurasi EmailJS sudah benar)");
                btn.value = "Send Message";
                contactForm.reset();
            }, 1000);
        }
    });
}