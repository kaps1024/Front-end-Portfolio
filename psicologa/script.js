document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.menu a, .btn-hero');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            
            if (targetId && targetId.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    const navbarHeight = document.querySelector('.navbar').offsetHeight;
                    const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    const animatedElements = document.querySelectorAll('[class*="reveal-"]');
    
    const revealOnScroll = () => {
        const triggerBottom = window.innerHeight * 0.82; 
        
        animatedElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < triggerBottom) {
                if (element.classList.contains('cards-grid')) {
                    if (!element.classList.contains('active')) {
                        element.classList.add('active');
                        const cards = element.querySelectorAll('.glass-card');
                      cards.forEach((card, index) => {
                          card.style.transitionDelay = `${index * 0.25}s`;
                      });
                    }
                } else {
                    element.classList.add('active');
                }
            }
        });
    };

    revealOnScroll();
    window.addEventListener('scroll', revealOnScroll, { passive: true });
    
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');
    const overlay = document.querySelector('.menu-overlay');
    const menuLinks = document.querySelectorAll('.menu a');

    const toggleMenu = () => {
    menu.classList.toggle('open');
    overlay.classList.toggle('open');
    };
    
    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMenu);
        overlay.addEventListener('click', toggleMenu);
        
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.remove('open');
                overlay.classList.remove('open');
            });
        });
    }    
    
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 80) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    }, { passive: true });
});