document.addEventListener('DOMContentLoaded', () => {
    const langToggle = document.getElementById('lang-toggle');
    let currentLang = 'pt'; // Default language

    // i18n Logic
    const loadLanguage = async (lang) => {
        try {
            const response = await fetch('languages.json');
            const translations = await response.json();
            
            document.querySelectorAll('[data-i18n]').forEach(element => {
                const key = element.getAttribute('data-i18n');
                if (translations[lang][key]) {
                    if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                        element.placeholder = translations[lang][key];
                    } else {
                        element.textContent = translations[lang][key];
                    }
                }
            });

            // Update HTML lang attribute
            document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
            // Update button text
            langToggle.textContent = lang === 'pt' ? 'EN' : 'PT';
            currentLang = lang;
            
            // Save preference
            localStorage.setItem('preferred-lang', lang);
        } catch (error) {
            console.error('Error loading translations:', error);
        }
    };

    // Toggle click event
    langToggle.addEventListener('click', () => {
        const nextLang = currentLang === 'pt' ? 'en' : 'pt';
        loadLanguage(nextLang);
    });

    // Check for saved preference
    const savedLang = localStorage.getItem('preferred-lang');
    if (savedLang) {
        loadLanguage(savedLang);
    } else {
        // Fallback to auto-detect or default
        loadLanguage(currentLang);
    }

    // Scroll Reveal Animation (Simple version using Intersection Observer)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply reveal class to sections and cards
    document.querySelectorAll('.section, .project-card, .skill-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s ease-out';
        observer.observe(el);
    });

    // CSS for reveal effect (added dynamically for simplicity or could be in styles.css)
    const style = document.createElement('style');
    style.textContent = `
        .reveal {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
});
