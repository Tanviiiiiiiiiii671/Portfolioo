// ===== Smooth Scroll for Navbar Links =====
document.querySelectorAll('.navbar nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// ===== Navbar Background Change on Scroll =====
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(0, 0, 0, 0.85)';
    } else {
        navbar.style.background = 'rgba(26, 188, 156, 0.85)';
    }
});

// ===== Fade-in Animation on Scroll =====
const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    },
    { threshold: 0.2 }
);

document.querySelectorAll('.section, .card, .accomplishment-item').forEach(el => {
    el.classList.add('hidden');
    observer.observe(el);
});

// ===== Typing Effect in Hero Section =====
const text = "Electronics & Telecommunication Engineer | IoT & Embedded Systems Enthusiast";
let index = 0;
const typingElement = document.querySelector('.hero p');

function typeEffect() {
    if (index < text.length) {
        typingElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 50);
    }
}

typingElement.textContent = "";
typeEffect();

// ===== Back to Top Button =====
const topBtn = document.createElement("button");
topBtn.innerHTML = "⬆";
topBtn.style.position = "fixed";
topBtn.style.bottom = "30px";
topBtn.style.right = "30px";
topBtn.style.padding = "12px 15px";
topBtn.style.borderRadius = "50%";
topBtn.style.border = "none";
topBtn.style.background = "#00e5b5";
topBtn.style.color = "#000";
topBtn.style.fontSize = "18px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.zIndex = "1000";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// ===== Card Hover Glow Effect =====
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(0,255,200,0.25), rgba(255,255,255,0.08))`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.background = 'rgba(255,255,255,0.08)';
    });
});
