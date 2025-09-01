console.log("Test 1 2 3");
// Smooth scroll for nav links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href').slice(1);
        const target = document.getElementById(targetId);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Fade-in animation on scroll
const faders = document.querySelectorAll('.fade-in');
const appearOptions = { threshold: 0.2, rootMargin: "0px 0px -50px 0px" };
const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

// Retour en haut
const topBtn = document.createElement('button');
topBtn.textContent = "↑";
topBtn.style.position = "fixed";
topBtn.style.bottom = "30px";
topBtn.style.right = "30px";
topBtn.style.zIndex = "2000";
topBtn.style.background = "#00ffe7";
topBtn.style.color = "#222";
topBtn.style.border = "none";
topBtn.style.padding = "0.7em 1em";
topBtn.style.borderRadius = "50%";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
document.body.appendChild(topBtn);

window.addEventListener('scroll', () => {
    topBtn.style.display = window.scrollY > 300 ? "block" : "none";
});
topBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Effet sur le titre au survol
const h1 = document.querySelector('header h1');
h1.addEventListener('mouseenter', () => {
    h1.style.letterSpacing = "0.3em";
    h1.style.color = "#fff";
    h1.style.textShadow = "0 0 20px #00ffe7";
});
h1.addEventListener('mouseleave', () => {
    h1.style.letterSpacing = "";
    h1.style.color = "#00ffe7";
    h1.style.textShadow = "";
});

// Message de bienvenue animé
window.addEventListener('DOMContentLoaded', () => {
    const accueil = document.getElementById('accueil');
    if (accueil) {
        const msg = accueil.querySelector('h2');
        let txt = msg.textContent;
        msg.textContent = "";
        let i = 0;
        function typeWriter() {
            if (i < txt.length) {
                msg.textContent += txt.charAt(i);
                i++;
                setTimeout(typeWriter, 40);
            }
        }
        typeWriter();
    }
});