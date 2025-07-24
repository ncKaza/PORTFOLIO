
body {
    margin: 0;
    font-family: 'Orbitron', sans-serif;
    background-color: #1e1e2f;
    color: #f0f0f0;
    scroll-behavior: smooth;
    background-image: url('https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=1950&q=80');
    background-size: cover;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: center;
}

header {
    background-color: rgba(42, 42, 64, 0.95);
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    position: sticky;
    top: 0;
    z-index: 1000;
}

h1 {
    font-size: 2rem;
    color: #00ffe7;
    margin: 0;
}

nav ul {
    list-style: none;
    display: flex;
    gap: 1rem;
    margin: 0;
    padding: 0;
}

nav ul li a {
    color: #ffffff;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s;
}

nav ul li a:hover {
    color: #00ffe7;
}

.section {
    padding: 4rem 2rem;
    max-width: 900px;
    margin: auto;
    background-color: rgba(30, 30, 47, 0.9);
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0,0,0,0.4);
    margin-top: 2rem;
    margin-bottom: 2rem;
    transition: transform 0.3s ease;
}

.section:hover {
    transform: scale(1.01);
}

h2 {
    font-size: 1.8rem;
    color: #00ffe7;
    margin-bottom: 1rem;
}

p, li {
    font-size: 1rem;
    line-height: 1.6;
    color: #e0e0e0;
}

ul {
    padding-left: 1.5rem;
}

a {
    color: #00ffe7;
    text-decoration: underline;
}

a:hover {
    color: #00ccbf;
}

footer {
    text-align: center;
    padding: 1rem;
    background-color: rgba(42, 42, 64, 0.95);
    font-size: 0.9rem;
    color: #888;
    margin-top: 4rem;
}

.fade-in {
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 1s forwards;
}

.visible {
    opacity: 1 !important;
    transform: translateY(0) !important;
}

@keyframes fadeInUp {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

#scrollToTop {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    padding: 0.5rem 1rem;
    font-size: 1.5rem;
    border: none;
    border-radius: 50%;
    background-color: #00ffe7;
    color: #1e1e2f;
    cursor: pointer;
    box-shadow: 0 0 10px rgba(0, 255, 231, 0.6);
    display: none;
    transition: transform 0.3s ease;
}

#scrollToTop:hover {
    transform: scale(1.2);
}