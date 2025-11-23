// Loading Screen
window.addEventListener('load', function() {
    const loader = document.getElementById('loader');
    const body = document.body;
    
    setTimeout(() => {
        loader.classList.add('hidden');
        body.classList.add('loaded');
        // Remove loader from DOM after animation
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }, 1500); // Show loader for 1.5 seconds minimum
});

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
});

// Initialize all website functionality
function initializeWebsite() {
    initializeCursor();
    initializeCountdown();
    initializeSmoothScrolling();
    initializeScrollSpy();
    initializeGallery();
    initializeQuotesCarousel();
    initializeAddToCalendar();
    initializeIntersectionObserver();
    initializeMobileMenu();
    initializeShare();
    initializeScrollTop();
}

// Custom Cursor
function initializeCursor() {
    const cursor = document.getElementById('cursor');
    
    if (!cursor) return;
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
    
    // Add hover effect to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .gallery-item, .event-card');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.classList.add('hover');
        });
        
        element.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover');
        });
    });
    
    // Hide cursor on mobile
    if (window.innerWidth <= 768) {
        cursor.style.display = 'none';
    }
}

// Countdown Timer
function initializeCountdown() {
    const weddingDate = new Date('November 24, 2025 11:00:00').getTime();
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = weddingDate - now;
        
        if (distance < 0) {
            // Wedding day has arrived!
            document.getElementById('countdown').innerHTML = '<div class="countdown-item"><span class="countdown-number">🎉</span><span class="countdown-label">Today!</span></div>';
            return;
        }
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    }
    
    // Update countdown immediately and then every second
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Smooth Scrolling
function initializeSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed nav
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Scroll Spy Navigation
function initializeScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    function updateActiveNav() {
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav(); // Initial call
}

// Gallery Lightbox
function initializeGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxClose = document.getElementById('lightboxClose');
    const lightboxPrev = document.getElementById('lightboxPrev');
    const lightboxNext = document.getElementById('lightboxNext');
    
    if (!galleryGrid) return;
    
    // Sample gallery images (replace with actual images)
    const galleryImages = [
        'public/gallery/1.jpg',
        'public/gallery/2.jpg',
        'public/gallery/3.jpg',
        'public/gallery/4.jpg',
        'public/gallery/5.jpg',
        'public/gallery/6.jpg',
        'public/gallery/7.jpg',
        'public/gallery/8.jpg',
        'public/gallery/9.jpg',
        'public/gallery/10.jpg',
        'public/gallery/11.jpg',
        'public/gallery/12.jpg'
    ];
    
    let currentImageIndex = 0;
    
    // Populate gallery
    galleryImages.forEach((imageSrc, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.setAttribute('data-index', index);
        
        const img = document.createElement('img');
        img.alt = `Wedding Photo ${index + 1}`;
        img.loading = 'lazy';
        img.decoding = 'async';
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
        
        // Add loading state
        galleryItem.classList.add('loading');
        galleryItem.style.background = 'rgba(255, 255, 255, 0.05)';
        galleryItem.style.minHeight = '300px';
        
        // Load image with error handling
        const imageLoader = new Image();
        imageLoader.onload = function() {
            img.src = imageSrc;
            img.classList.add('loaded');
            img.style.opacity = '1';
            galleryItem.classList.remove('loading');
            galleryItem.style.background = 'transparent';
        };
        imageLoader.onerror = function() {
            img.src = `https://via.placeholder.com/400x300/333/666?text=Photo+${index + 1}`;
            img.classList.add('loaded');
            img.style.opacity = '1';
            galleryItem.classList.remove('loading');
            galleryItem.style.background = 'transparent';
        };
        imageLoader.src = imageSrc;
        
        galleryItem.appendChild(img);
        galleryGrid.appendChild(galleryItem);
        
        // Add click event
        galleryItem.addEventListener('click', () => {
            openLightbox(index);
        });
    });
    
    function openLightbox(index) {
        currentImageIndex = index;
        lightboxImage.src = galleryImages[index];
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
    
    function showNextImage() {
        currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
        lightboxImage.src = galleryImages[currentImageIndex];
    }
    
    function showPrevImage() {
        currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
        lightboxImage.src = galleryImages[currentImageIndex];
    }
    
    // Event listeners
    lightboxClose.addEventListener('click', closeLightbox);
    lightboxNext.addEventListener('click', showNextImage);
    lightboxPrev.addEventListener('click', showPrevImage);
    
    // Close on background click
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        
        switch(e.key) {
            case 'Escape':
                closeLightbox();
                break;
            case 'ArrowRight':
                showNextImage();
                break;
            case 'ArrowLeft':
                showPrevImage();
                break;
        }
    });
}

// Quotes Carousel
function initializeQuotesCarousel() {
    const quotesCarousel = document.getElementById('quotesCarousel');
    if (!quotesCarousel) return;
    
    const quoteItems = quotesCarousel.querySelectorAll('.quote-item');
    let currentQuoteIndex = 0;
    
    function showQuote(index) {
        quoteItems.forEach((item, i) => {
            item.classList.remove('active');
            if (i === index) {
                item.classList.add('active');
            }
        });
    }
    
    function nextQuote() {
        currentQuoteIndex = (currentQuoteIndex + 1) % quoteItems.length;
        showQuote(currentQuoteIndex);
    }
    
    // Auto-rotate quotes every 5 seconds
    setInterval(nextQuote, 5000);
}

// Add to Calendar
function initializeAddToCalendar() {
    const addToCalendarBtn = document.getElementById('addToCalendar');
    
    if (!addToCalendarBtn) return;
    
    addToCalendarBtn.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Create ICS file content
        const icsContent = [
            'BEGIN:VCALENDAR',
            'VERSION:2.0',
            'PRODID:-//Jibin & Jisly Wedding//EN',
            'CALSCALE:GREGORIAN',
            'METHOD:PUBLISH',
            'BEGIN:VEVENT',
            'UID:jibin-jisly-wedding-2025',
            'DTSTART:20251124T103000Z',
            'DTEND:20251124T143000Z',
            'SUMMARY:Jibin & Jisly Wedding',
            'DESCRIPTION:Join us in celebrating the wedding of Jibin & Jisly. Wedding Mass at 10:30 AM, Reception at 12:00 PM.',
            'LOCATION:St. Mary\'s Church and Parish Hall',
            'STATUS:CONFIRMED',
            'SEQUENCE:0',
            'BEGIN:VALARM',
            'TRIGGER:-PT1H',
            'DESCRIPTION:Wedding starts in 1 hour',
            'ACTION:DISPLAY',
            'END:VALARM',
            'END:VEVENT',
            'END:VCALENDAR'
        ].join('\r\n');
        
        // Create and download file
        const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'jibin-jisly-wedding.ics';
        link.click();
        window.URL.revokeObjectURL(url);
    });
}

// Intersection Observer for Animations
function initializeIntersectionObserver() {
    const sections = document.querySelectorAll('section');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        observer.observe(section);
    });
}

// Mobile Menu
function initializeMobileMenu() {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (!navToggle || !navLinks) return;
    
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    const mobileNavLinks = navLinks.querySelectorAll('.nav-link');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
    
    // Close mobile menu on window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navLinks.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });
}

// Performance Optimization
function optimizePerformance() {
    // Lazy load images
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
    
    // Preload critical resources
    const criticalResources = [
        // Static hero: no video or poster preload needed
    ];
    
    criticalResources.forEach(resource => {
        // No-op for now
    });
}

// Error Handling
function handleErrors() {
    window.addEventListener('error', (e) => {
        console.error('Website error:', e.error);
        
        // Remove video fallback since video is not used
    });
}

// Initialize performance optimizations and error handling
document.addEventListener('DOMContentLoaded', () => {
    optimizePerformance();
    handleErrors();
});

// Add CSS for mobile menu
const mobileMenuCSS = `
    @media (max-width: 768px) {
        .nav-links {
            position: fixed;
            top: 70px;
            left: 0;
            width: 100%;
            background: rgba(0, 0, 0, 0.98);
            backdrop-filter: blur(20px);
            flex-direction: column;
            padding: 2rem 1rem;
            transform: translateX(-100%);
            opacity: 0;
            transition: all 0.3s ease;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
            max-height: calc(100vh - 70px);
            overflow-y: auto;
        }
        
        .nav-links.active {
            transform: translateX(0);
            opacity: 1;
        }
        
        .nav-links li {
            width: 100%;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .nav-links li:last-child {
            border-bottom: none;
        }
        
        .nav-link {
            display: block;
            padding: 1rem;
            width: 100%;
            text-align: left;
            font-size: 1.1rem;
        }
        
        .nav-toggle {
            display: flex;
            flex-direction: column;
            gap: 5px;
            z-index: 1001;
        }
        
        .nav-toggle span {
            width: 25px;
            height: 3px;
            background: #ffffff;
            transition: all 0.3s ease;
            display: block;
        }
        
        .nav-toggle.active span:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
        }
        
        .nav-toggle.active span:nth-child(2) {
            opacity: 0;
        }
        
        .nav-toggle.active span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -6px);
        }
    }
    
    @media (max-width: 480px) {
        .nav-links {
            top: 60px;
            padding: 1.5rem 1rem;
        }
        
        .nav-link {
            padding: 0.9rem;
            font-size: 1rem;
        }
    }
`;

// Inject mobile menu CSS
const style = document.createElement('style');
style.textContent = mobileMenuCSS;
document.head.appendChild(style);

// Share Functionality
function initializeShare() {
    const shareButton = document.getElementById('shareButton');
    
    // Show native share button on mobile
    if (navigator.share && shareButton) {
        shareButton.style.display = 'inline-flex';
        shareButton.addEventListener('click', async () => {
            try {
                await navigator.share({
                    title: 'Jibin & Jisly Wedding',
                    text: 'Join us in celebrating our special day!',
                    url: window.location.href
                });
            } catch (err) {
                console.log('Share cancelled');
            }
        });
    }
}

// Scroll to Top Button
function initializeScrollTop() {
    const scrollTopBtn = document.getElementById('scrollTop');
    
    if (!scrollTopBtn) return;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });
    
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}
