// Configuration file for portfolio animations and themes
const portfolioConfig = {
    // Animation settings
    animations: {
        typingSpeed: {
            type: 100,
            delete: 50,
            pause: 2000
        },
        scroll: {
            offset: 100,
            duration: 800
        },
        hover: {
            duration: 300,
            easing: 'ease-out'
        },
        page: {
            loadDelay: 1500,
            fadeInDuration: 800
        }
    },

    // Theme configurations
    themes: {
        light: {
            primary: '#667eea',
            secondary: '#764ba2',
            accent: '#f093fb',
            background: '#ffffff',
            surface: '#f7fafc',
            text: '#2d3748',
            textSecondary: '#718096'
        },
        dark: {
            primary: '#667eea',
            secondary: '#764ba2', 
            accent: '#f093fb',
            background: '#1a202c',
            surface: '#2d3748',
            text: '#f7fafc',
            textSecondary: '#cbd5e0'
        }
    },

    // Particle system settings
    particles: {
        count: 50,
        speed: 2,
        size: 2,
        opacity: 0.2,
        color: 'rgba(255, 255, 255, 0.2)'
    },

    // Skill bar animation settings
    skillBars: {
        animationDelay: 200,
        animationDuration: 2000,
        easing: 'ease-in-out'
    },

    // Form validation rules
    validation: {
        name: {
            required: true,
            minLength: 2,
            maxLength: 50
        },
        email: {
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        },
        subject: {
            required: true,
            minLength: 5,
            maxLength: 100
        },
        message: {
            required: true,
            minLength: 10,
            maxLength: 1000
        }
    },

    // Responsive breakpoints
    breakpoints: {
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280,
        '2xl': 1536
    },

    // SEO and meta data
    seo: {
        title: "Raffa Yuda Pratama - Junior Web Developer",
        description: "Portfolio website junior web developer Indonesia yang passionate dalam menciptakan pengalaman web yang luar biasa",
        keywords: "web developer, frontend developer, javascript, react, vue, portfolio, indonesia",
        author: "Raffa Yuda Pratama",
        image: "/assets/profile-og.jpg",
        url: "https://raffayuda.dev"
    },

    // Performance settings
    performance: {
        lazyLoading: true,
        imageOptimization: true,
        cacheEnabled: true,
        compressionEnabled: true
    },

    // Feature flags
    features: {
        darkMode: true,
        particles: true,
        cursorTrail: true,
        parallax: true,
        soundEffects: false,
        analytics: false
    },

    // Contact form settings
    contact: {
        emailService: 'EmailJS', // or 'Netlify', 'Formspree'
        emailTemplate: 'template_portfolio',
        emailServiceId: 'service_portfolio',
        emailPublicKey: 'your_public_key_here'
    },

    // Social media configurations
    socialMedia: {
        linkedin: {
            username: 'raffa-yuda',
            showIcon: true,
            openInNewTab: true
        },
        github: {
            username: 'raffa-yuda',
            showIcon: true,
            openInNewTab: true
        },
        twitter: {
            username: 'raffa_yuda',
            showIcon: true,
            openInNewTab: true
        },
        instagram: {
            username: 'raffa.yuda',
            showIcon: true,
            openInNewTab: true
        }
    },

    // Development settings
    development: {
        debugMode: false,
        showPerformanceMetrics: false,
        enableConsoleLogging: false
    }
};

// Function to get current theme
function getCurrentTheme() {
    const savedTheme = localStorage.getItem('portfolio-theme');
    return savedTheme || 'light';
}

// Function to set theme
function setTheme(theme) {
    if (portfolioConfig.themes[theme]) {
        localStorage.setItem('portfolio-theme', theme);
        document.documentElement.setAttribute('data-theme', theme);
        
        // Apply theme colors to CSS variables
        const themeColors = portfolioConfig.themes[theme];
        const root = document.documentElement;
        
        Object.entries(themeColors).forEach(([key, value]) => {
            root.style.setProperty(`--color-${key}`, value);
        });
        
        return true;
    }
    return false;
}

// Function to toggle theme
function toggleTheme() {
    const currentTheme = getCurrentTheme();
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    return newTheme;
}

// Function to get animation duration based on user preferences
function getAnimationDuration(type) {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) return 0;
    
    return portfolioConfig.animations[type]?.duration || 300;
}

// Function to check if feature is enabled
function isFeatureEnabled(feature) {
    return portfolioConfig.features[feature] || false;
}

// Function to get responsive value based on screen size
function getResponsiveValue(values) {
    const width = window.innerWidth;
    
    if (width >= portfolioConfig.breakpoints['2xl']) return values['2xl'] || values.xl || values.lg || values.md || values.sm || values.default;
    if (width >= portfolioConfig.breakpoints.xl) return values.xl || values.lg || values.md || values.sm || values.default;
    if (width >= portfolioConfig.breakpoints.lg) return values.lg || values.md || values.sm || values.default;
    if (width >= portfolioConfig.breakpoints.md) return values.md || values.sm || values.default;
    if (width >= portfolioConfig.breakpoints.sm) return values.sm || values.default;
    
    return values.default;
}

// Initialize theme on page load
document.addEventListener('DOMContentLoaded', function() {
    const theme = getCurrentTheme();
    setTheme(theme);
    
    // Add theme toggle button functionality
    const themeToggle = document.querySelector('[data-theme-toggle]');
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            const newTheme = toggleTheme();
            // Update button icon based on theme
            const icon = themeToggle.querySelector('i');
            if (icon) {
                icon.className = newTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
            }
        });
    }
});

// Export configuration
if (typeof module !== 'undefined' && module.exports) {
    module.exports = portfolioConfig;
}
