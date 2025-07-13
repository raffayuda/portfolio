// Enhanced navbar functionality
function initNavbar() {
    const navbar = document.querySelector('nav');
    const progressBar = document.getElementById('progressBar');
    const scrollIndicator = document.getElementById('scrollIndicator');
    
    // Update progress bar and scroll indicator
    function updateScrollProgress() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const progress = (scrollTop / scrollHeight) * 100;
        
        // Update progress bar
        if (progressBar) {
            progressBar.style.width = progress + '%';
        }
        
        // Update scroll indicator
        if (scrollIndicator) {
            const indicatorProgress = (scrollTop / scrollHeight) * 80;
            scrollIndicator.style.transform = `translateY(${indicatorProgress}px)`;
        }
        
        // Add shadow to navbar when scrolled
        if (scrollTop > 50) {
            navbar.classList.add('navbar-shadow');
        } else {
            navbar.classList.remove('navbar-shadow');
        }
    }
    
    // Update scroll progress on scroll
    window.addEventListener('scroll', updateScrollProgress);
    
    // Initial call
    updateScrollProgress();
}

// Typing Animation
const texts = [
    "Junior Web Developer",
    "Frontend Enthusiast", 
    "UI/UX Designer",
    "Problem Solver",
    "Creative Thinker"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedTextElement = document.getElementById('typed-text');

function typeWriter() {
    const currentText = texts[textIndex];
    
    if (isDeleting) {
        typedTextElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typedTextElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }
    
    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(typeWriter, 2000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(typeWriter, 500);
    } else {
        setTimeout(typeWriter, isDeleting ? 50 : 100);
    }
}

// Start typing animation when page loads
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(typeWriter, 1000);
    initNavbar(); // Initialize navbar enhancements
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('nav');
    if (window.scrollY > 50) {
        navbar.classList.add('bg-white/95');
        navbar.classList.remove('bg-white/80');
    } else {
        navbar.classList.add('bg-white/80');
        navbar.classList.remove('bg-white/95');
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            
            // Animate skill bars
            if (entry.target.classList.contains('skill-bar')) {
                const width = entry.target.style.width || entry.target.getAttribute('data-width');
                entry.target.style.width = '0%';
                setTimeout(() => {
                    entry.target.style.width = width;
                }, 200);
            }
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.card-hover, .skill-bar');
    animateElements.forEach(el => observer.observe(el));
});

// Add CSS animation classes
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        animation: slideInUp 0.6s ease-out forwards;
    }
    
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .card-hover {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease-out;
    }
    
    .card-hover.animate-in {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);

// Parallax effect for hero section - DISABLED
// window.addEventListener('scroll', function() {
//     const scrolled = window.pageYOffset;
//     const hero = document.querySelector('#home');
//     if (hero) {
//         hero.style.transform = `translateY(${scrolled * 0.5}px)`;
//     }
// });

// Add loading animation
window.addEventListener('load', function() {
    const loadingScreen = document.createElement('div');
    loadingScreen.className = 'fixed inset-0 bg-white z-50 flex items-center justify-center';
    loadingScreen.innerHTML = `
        <div class="text-center">
            <div class="w-16 h-16 border-4 border-purple-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p class="text-gray-600">Loading...</p>
        </div>
    `;
    
    document.body.appendChild(loadingScreen);
    
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        loadingScreen.style.transition = 'opacity 0.5s ease-out';
        setTimeout(() => {
            loadingScreen.remove();
        }, 500);
    }, 1500);
});

// Cursor trail effect
let mouseX = 0;
let mouseY = 0;
let trail = [];

document.addEventListener('mousemove', function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function createTrail() {
    const dot = document.createElement('div');
    dot.className = 'fixed w-2 h-2 bg-purple-400 rounded-full pointer-events-none z-40';
    dot.style.left = mouseX + 'px';
    dot.style.top = mouseY + 'px';
    dot.style.transform = 'translate(-50%, -50%)';
    dot.style.opacity = '0.7';
    
    document.body.appendChild(dot);
    trail.push(dot);
    
    setTimeout(() => {
        dot.style.transition = 'opacity 0.5s ease-out';
        dot.style.opacity = '0';
        setTimeout(() => {
            if (dot.parentNode) {
                dot.parentNode.removeChild(dot);
            }
            trail = trail.filter(d => d !== dot);
        }, 500);
    }, 100);
    
    if (trail.length > 10) {
        const oldDot = trail.shift();
        if (oldDot.parentNode) {
            oldDot.parentNode.removeChild(oldDot);
        }
    }
}

setInterval(createTrail, 50);

// Project card 3D tilt effect
document.querySelectorAll('.card-hover').forEach(card => {
    card.addEventListener('mousemove', function(e) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
    });
    
    card.addEventListener('mouseleave', function() {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
    });
});

// Add particle background to hero section
function createParticles() {
    const hero = document.querySelector('#home');
    const particleContainer = document.createElement('div');
    particleContainer.className = 'absolute inset-0 overflow-hidden pointer-events-none';
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'absolute w-2 h-2 bg-white/20 rounded-full';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        particle.style.animation = 'float ' + particle.style.animationDuration + ' infinite linear';
        
        particleContainer.appendChild(particle);
    }
    
    hero.appendChild(particleContainer);
}

// Initialize particles after DOM loads
document.addEventListener('DOMContentLoaded', createParticles);

// Add scroll progress indicator
const progressBar = document.createElement('div');
progressBar.className = 'fixed top-0 left-0 h-1 bg-purple-600 z-50 transition-all duration-300';
progressBar.style.width = '0%';
document.body.appendChild(progressBar);

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    progressBar.style.width = scrollPercent + '%';
});

// Add easter egg - Konami code
let konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];
let konamiIndex = 0;

document.addEventListener('keydown', function(e) {
    if (e.code === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            // Easter egg activated!
            document.body.style.filter = 'hue-rotate(180deg)';
            setTimeout(() => {
                document.body.style.filter = 'none';
            }, 3000);
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});

// Performance optimization - Lazy loading images
const lazyImages = document.querySelectorAll('img[data-src]');
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
        }
    });
});

lazyImages.forEach(img => imageObserver.observe(img));

// EmailJS Configuration and Contact Form Handler
document.addEventListener('DOMContentLoaded', function() {
    // Initialize EmailJS
    if (typeof emailjs !== 'undefined') {
        emailjs.init("zxdF7r_SKJntIpXkE");
        console.log('EmailJS initialized successfully');
    } else {
        console.error('EmailJS library not loaded');
    }
});

// Alpine.js Contact Form Component
function contactForm() {
    return {
        form: {
            name: '',
            email: '',
            subject: '',
            message: ''
        },
        loading: false,
        submitted: false,
        error: false,
        errorMessage: '',        async submitForm() {
            // Cek apakah EmailJS tersedia
            if (typeof emailjs === 'undefined') {
                this.showError('Email service not available. Please try again later.');
                return;
            }

            // Validasi form
            if (!this.form.name || !this.form.email || !this.form.subject || !this.form.message) {
                this.showError('Please fill in all fields');
                return;
            }

            // Validasi email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(this.form.email)) {
                this.showError('Please enter a valid email address');
                return;
            }

            this.loading = true;
            this.error = false;
            this.submitted = false;            try {
                // Template parameters untuk EmailJS
                const templateParams = {
                    from_name: this.form.name,
                    from_email: this.form.email,
                    subject: this.form.subject,
                    message: this.form.message,
                    reply_to: this.form.email
                };

                console.log('Sending email with params:', templateParams);

                // Kirim email menggunakan EmailJS
                const result = await emailjs.send(
                    'service_l873065',
                    'template_080oxqk',
                    templateParams
                );

                console.log('Email sent successfully:', result);
                this.showSuccess();
                this.resetForm();

            } catch (error) {
                console.error('Email send failed:', error);
                
                // Tampilkan error yang lebih spesifik
                let errorMsg = 'Failed to send message. ';
                if (error.status === 400) {
                    errorMsg += 'Invalid template parameters.';
                } else if (error.status === 401) {
                    errorMsg += 'Authentication failed.';
                } else if (error.status === 402) {
                    errorMsg += 'Email limit exceeded.';
                } else if (error.status === 404) {
                    errorMsg += 'Service or template not found.';
                } else {
                    errorMsg += 'Please try again or contact me directly.';
                }
                
                this.showError(errorMsg);
            } finally {
                this.loading = false;
            }
        },

        showSuccess() {
            this.submitted = true;
            this.error = false;
            setTimeout(() => {
                this.submitted = false;
            }, 5000);
        },

        showError(message) {
            this.error = true;
            this.errorMessage = message;
            this.submitted = false;
            setTimeout(() => {
                this.error = false;
            }, 5000);
        },

        resetForm() {
            this.form = {
                name: '',
                email: '',
                subject: '',
                message: ''
            };
        }
    }
}
