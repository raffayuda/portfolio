// Utility functions for portfolio website
const portfolioUtils = {
    
    // DOM manipulation utilities
    dom: {
        // Get element by selector
        get(selector) {
            return document.querySelector(selector);
        },

        // Get all elements by selector
        getAll(selector) {
            return document.querySelectorAll(selector);
        },

        // Create element with attributes
        create(tag, attributes = {}, textContent = '') {
            const element = document.createElement(tag);
            
            Object.entries(attributes).forEach(([key, value]) => {
                if (key === 'className') {
                    element.className = value;
                } else if (key === 'innerHTML') {
                    element.innerHTML = value;
                } else {
                    element.setAttribute(key, value);
                }
            });
            
            if (textContent) {
                element.textContent = textContent;
            }
            
            return element;
        },

        // Add event listener with options
        on(element, event, handler, options = {}) {
            if (typeof element === 'string') {
                element = this.get(element);
            }
            if (element) {
                element.addEventListener(event, handler, options);
            }
        },

        // Remove element
        remove(element) {
            if (typeof element === 'string') {
                element = this.get(element);
            }
            if (element && element.parentNode) {
                element.parentNode.removeChild(element);
            }
        },

        // Toggle class
        toggleClass(element, className) {
            if (typeof element === 'string') {
                element = this.get(element);
            }
            if (element) {
                element.classList.toggle(className);
            }
        },

        // Add class
        addClass(element, className) {
            if (typeof element === 'string') {
                element = this.get(element);
            }
            if (element) {
                element.classList.add(className);
            }
        },

        // Remove class
        removeClass(element, className) {
            if (typeof element === 'string') {
                element = this.get(element);
            }
            if (element) {
                element.classList.remove(className);
            }
        }
    },

    // Animation utilities
    animation: {
        // Fade in element
        fadeIn(element, duration = 300) {
            if (typeof element === 'string') {
                element = portfolioUtils.dom.get(element);
            }
            
            if (element) {
                element.style.opacity = '0';
                element.style.display = 'block';
                
                let start = null;
                function animate(timestamp) {
                    if (!start) start = timestamp;
                    const progress = timestamp - start;
                    const opacity = Math.min(progress / duration, 1);
                    
                    element.style.opacity = opacity;
                    
                    if (progress < duration) {
                        requestAnimationFrame(animate);
                    }
                }
                requestAnimationFrame(animate);
            }
        },

        // Fade out element
        fadeOut(element, duration = 300) {
            if (typeof element === 'string') {
                element = portfolioUtils.dom.get(element);
            }
            
            if (element) {
                let start = null;
                function animate(timestamp) {
                    if (!start) start = timestamp;
                    const progress = timestamp - start;
                    const opacity = Math.max(1 - (progress / duration), 0);
                    
                    element.style.opacity = opacity;
                    
                    if (progress < duration) {
                        requestAnimationFrame(animate);
                    } else {
                        element.style.display = 'none';
                    }
                }
                requestAnimationFrame(animate);
            }
        },

        // Slide in from bottom
        slideInUp(element, duration = 300) {
            if (typeof element === 'string') {
                element = portfolioUtils.dom.get(element);
            }
            
            if (element) {
                element.style.transform = 'translateY(20px)';
                element.style.opacity = '0';
                
                let start = null;
                function animate(timestamp) {
                    if (!start) start = timestamp;
                    const progress = Math.min(timestamp - start, duration) / duration;
                    
                    const translateY = 20 * (1 - progress);
                    element.style.transform = `translateY(${translateY}px)`;
                    element.style.opacity = progress;
                    
                    if (progress < 1) {
                        requestAnimationFrame(animate);
                    }
                }
                requestAnimationFrame(animate);
            }
        }
    },

    // Storage utilities
    storage: {
        // Set item in localStorage
        set(key, value) {
            try {
                localStorage.setItem(key, JSON.stringify(value));
            } catch (e) {
                console.warn('LocalStorage not available:', e);
            }
        },

        // Get item from localStorage
        get(key, defaultValue = null) {
            try {
                const item = localStorage.getItem(key);
                return item ? JSON.parse(item) : defaultValue;
            } catch (e) {
                console.warn('LocalStorage not available:', e);
                return defaultValue;
            }
        },

        // Remove item from localStorage
        remove(key) {
            try {
                localStorage.removeItem(key);
            } catch (e) {
                console.warn('LocalStorage not available:', e);
            }
        },

        // Clear all localStorage
        clear() {
            try {
                localStorage.clear();
            } catch (e) {
                console.warn('LocalStorage not available:', e);
            }
        }
    },

    // Validation utilities
    validation: {
        // Validate email
        email(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(email);
        },

        // Validate required field
        required(value) {
            return value && value.trim().length > 0;
        },

        // Validate minimum length
        minLength(value, min) {
            return value && value.length >= min;
        },

        // Validate maximum length
        maxLength(value, max) {
            return value && value.length <= max;
        },

        // Validate phone number
        phone(phone) {
            const re = /^[\+]?[\d\s\-\(\)]{10,}$/;
            return re.test(phone);
        },

        // Validate URL
        url(url) {
            try {
                new URL(url);
                return true;
            } catch {
                return false;
            }
        }
    },

    // Format utilities
    format: {
        // Format date
        date(date, options = {}) {
            const defaultOptions = {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            };
            
            return new Intl.DateTimeFormat('id-ID', { ...defaultOptions, ...options })
                .format(new Date(date));
        },

        // Format number
        number(number, options = {}) {
            return new Intl.NumberFormat('id-ID', options).format(number);
        },

        // Truncate text
        truncate(text, length = 100, suffix = '...') {
            if (text.length <= length) return text;
            return text.substring(0, length) + suffix;
        },

        // Capitalize first letter
        capitalize(text) {
            return text.charAt(0).toUpperCase() + text.slice(1);
        },

        // Convert to slug
        slug(text) {
            return text
                .toLowerCase()
                .replace(/[^\w\s-]/g, '')
                .replace(/[\s_-]+/g, '-')
                .replace(/^-+|-+$/g, '');
        }
    },

    // Device detection utilities
    device: {
        // Check if mobile device
        isMobile() {
            return window.innerWidth < 768;
        },

        // Check if tablet device
        isTablet() {
            return window.innerWidth >= 768 && window.innerWidth < 1024;
        },

        // Check if desktop device
        isDesktop() {
            return window.innerWidth >= 1024;
        },

        // Check if touch device
        isTouch() {
            return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        },

        // Get device type
        getType() {
            if (this.isMobile()) return 'mobile';
            if (this.isTablet()) return 'tablet';
            return 'desktop';
        }
    },

    // Performance utilities
    performance: {
        // Debounce function
        debounce(func, delay) {
            let timeoutId;
            return function (...args) {
                clearTimeout(timeoutId);
                timeoutId = setTimeout(() => func.apply(this, args), delay);
            };
        },

        // Throttle function
        throttle(func, limit) {
            let inThrottle;
            return function (...args) {
                if (!inThrottle) {
                    func.apply(this, args);
                    inThrottle = true;
                    setTimeout(() => inThrottle = false, limit);
                }
            };
        },

        // Check if element is in viewport
        isInViewport(element) {
            if (typeof element === 'string') {
                element = portfolioUtils.dom.get(element);
            }
            
            if (!element) return false;
            
            const rect = element.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        },

        // Lazy load images
        lazyLoadImages() {
            const images = portfolioUtils.dom.getAll('img[data-src]');
            
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        observer.unobserve(img);
                    }
                });
            });

            images.forEach(img => imageObserver.observe(img));
        }
    },

    // SEO utilities
    seo: {
        // Set page title
        setTitle(title) {
            document.title = title;
        },

        // Set meta description
        setDescription(description) {
            let meta = portfolioUtils.dom.get('meta[name="description"]');
            if (!meta) {
                meta = portfolioUtils.dom.create('meta', { name: 'description' });
                document.head.appendChild(meta);
            }
            meta.setAttribute('content', description);
        },

        // Set meta keywords
        setKeywords(keywords) {
            let meta = portfolioUtils.dom.get('meta[name="keywords"]');
            if (!meta) {
                meta = portfolioUtils.dom.create('meta', { name: 'keywords' });
                document.head.appendChild(meta);
            }
            meta.setAttribute('content', keywords);
        },

        // Set Open Graph meta tags
        setOGTags(title, description, image, url) {
            const tags = [
                { property: 'og:title', content: title },
                { property: 'og:description', content: description },
                { property: 'og:image', content: image },
                { property: 'og:url', content: url },
                { property: 'og:type', content: 'website' }
            ];

            tags.forEach(tag => {
                let meta = portfolioUtils.dom.get(`meta[property="${tag.property}"]`);
                if (!meta) {
                    meta = portfolioUtils.dom.create('meta', { property: tag.property });
                    document.head.appendChild(meta);
                }
                meta.setAttribute('content', tag.content);
            });
        }
    },

    // Analytics utilities
    analytics: {
        // Track page view
        trackPageView(page) {
            if (typeof gtag !== 'undefined') {
                gtag('config', 'GA_MEASUREMENT_ID', {
                    page_title: page,
                    page_location: window.location.href
                });
            }
        },

        // Track event
        trackEvent(action, category, label, value) {
            if (typeof gtag !== 'undefined') {
                gtag('event', action, {
                    event_category: category,
                    event_label: label,
                    value: value
                });
            }
        },

        // Track button click
        trackButtonClick(buttonName) {
            this.trackEvent('click', 'button', buttonName);
        },

        // Track form submission
        trackFormSubmission(formName) {
            this.trackEvent('submit', 'form', formName);
        }
    },

    // Error handling utilities
    error: {
        // Log error
        log(error, context = '') {
            console.error(`Portfolio Error ${context}:`, error);
            
            // Send to error tracking service if available
            if (typeof Sentry !== 'undefined') {
                Sentry.captureException(error);
            }
        },

        // Show user-friendly error message
        show(message, type = 'error') {
            const errorDiv = portfolioUtils.dom.create('div', {
                className: `fixed top-4 right-4 p-4 rounded-lg text-white z-50 ${
                    type === 'error' ? 'bg-red-500' : 
                    type === 'warning' ? 'bg-yellow-500' : 
                    'bg-green-500'
                }`
            }, message);

            document.body.appendChild(errorDiv);

            setTimeout(() => {
                portfolioUtils.animation.fadeOut(errorDiv, 300);
                setTimeout(() => portfolioUtils.dom.remove(errorDiv), 300);
            }, 5000);
        }
    }
};

// Initialize utilities on page load
document.addEventListener('DOMContentLoaded', function() {
    // Initialize lazy loading
    portfolioUtils.performance.lazyLoadImages();
    
    // Add global error handling
    window.addEventListener('error', function(e) {
        portfolioUtils.error.log(e.error, 'Global');
    });
    
    // Add unhandled promise rejection handling
    window.addEventListener('unhandledrejection', function(e) {
        portfolioUtils.error.log(e.reason, 'Promise');
    });
});

// Export utilities
if (typeof module !== 'undefined' && module.exports) {
    module.exports = portfolioUtils;
}
