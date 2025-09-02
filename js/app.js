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
// Message de bienvenue animé
window.addEventListener('DOMContentLoaded', () => {
    const accueil = document.getElementById('Apropos');
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
// Fond animé "particules"
window.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('animated-bg');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let w = window.innerWidth;
    let h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;
    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.zIndex = "0";
    canvas.style.pointerEvents = "none";

    const particles = [];
    const colors = ["#00ffe7", "#00ccbf", "#232347", "#fff"];
    const particleCount = Math.floor(w / 18);

    function randomBetween(a, b) {
        return a + Math.random() * (b - a);
    }

    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * w,
            y: Math.random() * h,
            r: randomBetween(1.5, 3.5),
            dx: randomBetween(-0.7, 0.7),
            dy: randomBetween(-0.7, 0.7),
            color: colors[Math.floor(Math.random() * colors.length)]
        });
    }

    function draw() {
        ctx.clearRect(0, 0, w, h);
        // Draw particles
        for (let p of particles) {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.globalAlpha = 0.7;
            ctx.fill();
            ctx.globalAlpha = 1;
        }
        // Draw lines between close particles
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                let a = particles[i], b = particles[j];
                let dist = Math.hypot(a.x - b.x, a.y - b.y);
                if (dist < 90) {
                    ctx.beginPath();
                    ctx.moveTo(a.x, a.y);
                    ctx.lineTo(b.x, b.y);
                    ctx.strokeStyle = "#00ffe7";
                    ctx.globalAlpha = 0.15;
                    ctx.stroke();
                    ctx.globalAlpha = 1;
                }
            }
        }
    }

    function update() {
        for (let p of particles) {
            p.x += p.dx;
            p.y += p.dy;
            if (p.x < 0 || p.x > w) p.dx *= -1;
            if (p.y < 0 || p.y > h) p.dy *= -1;
        }
    }

    function animate() {
        update();
        draw();
        requestAnimationFrame(animate);
    }
    animate();

    // Resize canvas on window resize
    window.addEventListener('resize', () => {
        w = window.innerWidth;
        h = window.innerHeight;
        canvas.width = w;
        canvas.height = h;
    });

    // Effet interactif : particules attirées par la souris
    canvas.addEventListener('mousemove', e => {
        const mx = e.clientX, my = e.clientY;
        for (let p of particles) {
            let dist = Math.hypot(p.x - mx, p.y - my);
            if (dist < 120) {
                p.dx += (mx - p.x) * 0.0005;
                p.dy += (my - p.y) * 0.0005;
            }
        }
    });
});

// ...existing code...