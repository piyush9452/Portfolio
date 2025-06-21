 // Custom cursor
 const cursor = document.getElementById('cursor');
 const links = document.querySelectorAll('a, button, .btn');

 document.addEventListener('mousemove', (e) => {
     cursor.style.left = e.clientX + 'px';
     cursor.style.top = e.clientY + 'px';
 });

 links.forEach(link => {
     link.addEventListener('mouseenter', () => {
         cursor.classList.add('hover');
     });
     link.addEventListener('mouseleave', () => {
         cursor.classList.remove('hover');
     });
 });

 // Scroll progress
 window.addEventListener('scroll', () => {
     const scrollProgress = document.getElementById('scrollProgress');
     const scrollTop = document.documentElement.scrollTop;
     const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
     const scrollPercent = (scrollTop / scrollHeight) * 100;
     scrollProgress.style.width = scrollPercent + '%';
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

 // Intersection Observer for animations
 const observerOptions = {
     threshold: 0.1,
     rootMargin: '0px 0px -50px 0px'
 };

 const observer = new IntersectionObserver((entries) => {
     entries.forEach(entry => {
         if (entry.isIntersecting) {
             entry.target.style.opacity = '1';
             entry.target.style.transform = 'translateY(0)';
         }
     });
 }, observerOptions);

 // Observe elements for animation
 const animateElements = document.querySelectorAll('.skill-category, .project-card, .timeline-item');
 animateElements.forEach(el => {
     el.style.opacity = '0';
     el.style.transform = 'translateY(50px)';
     el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
     observer.observe(el);
 });

 // Parallax effect for floating shapes
 window.addEventListener('scroll', () => {
     const shapes = document.querySelectorAll('.shape');
     const scrolled = window.pageYOffset;
     const rate = scrolled * -0.5;

     shapes.forEach((shape, index) => {
         shape.style.transform = `translateY(${rate * (index + 1) * 0.1}px)`;
     });
 });

 // Typing effect for hero title
 const heroTitle = document.querySelector('.hero-title');
 const originalText = heroTitle.textContent;
 heroTitle.textContent = '';
 
 let i = 0;
 const typeWriter = () => {
     if (i < originalText.length) {
         heroTitle.textContent += originalText.charAt(i);
         i++;
         setTimeout(typeWriter, 100);
     }
 };

 setTimeout(typeWriter, 1000);

 // Add random floating animation to shapes
 const shapes = document.querySelectorAll('.shape');
 shapes.forEach((shape, index) => {
     const randomDelay = Math.random() * 2;
     const randomDuration = 4 + Math.random() * 4;
     shape.style.animationDelay = `${randomDelay}s`;
     shape.style.animationDuration = `${randomDuration}s`;
 });

 // Dynamic gradient background
 let gradientAngle = 0;
 setInterval(() => {
     gradientAngle += 1;
     document.body.style.background = `linear-gradient(${gradientAngle}deg, #0a0a0a 0%, #1a0a1a 50%, #0a0a0a 100%)`;
 }, 100);

 // Add sparkle effect on mouse move
 document.addEventListener('mousemove', (e) => {
     if (Math.random() > 0.9) {
         createSparkle(e.clientX, e.clientY);
     }
 });

 function createSparkle(x, y) {
     const sparkle = document.createElement('div');
     sparkle.style.position = 'fixed';
     sparkle.style.left = x + 'px';
     sparkle.style.top = y + 'px';
     sparkle.style.width = '4px';
     sparkle.style.height = '4px';
     sparkle.style.background = '#8b45ff';
     sparkle.style.borderRadius = '50%';
     sparkle.style.pointerEvents = 'none';
     sparkle.style.zIndex = '9998';
     sparkle.style.animation = 'sparkle 1s ease-out forwards';
     document.body.appendChild(sparkle);

     setTimeout(() => {
         sparkle.remove();
     }, 1000);
 }

 // Add sparkle animation
 const sparkleCSS = `
     @keyframes sparkle {
         0% {
             opacity: 1;
             transform: scale(0);
         }
         50% {
             opacity: 1;
             transform: scale(1);
         }
         100% {
             opacity: 0;
             transform: scale(0);
         }
     }
 `;
 const style = document.createElement('style');
 style.textContent = sparkleCSS;
 document.head.appendChild(style);

 // Profile image click handler
 const profileImage = document.getElementById('profileImage');
 const imageWrapper = document.querySelector('.image-wrapper');
 const lightbox = document.getElementById('lightbox');
 const lightboxImg = document.getElementById('lightbox-img');
 const lightboxClose = document.querySelector('.lightbox-close');
 
 imageWrapper.addEventListener('click', () => {
     lightbox.style.display = 'block';
     lightboxImg.src = profileImage.src;
 });
 
 const closeLightbox = () => {
     lightbox.style.display = 'none';
 }
 
 lightboxClose.addEventListener('click', closeLightbox);
 lightbox.addEventListener('click', (e) => {
     if (e.target === lightbox) {
         closeLightbox();
     }
 });

 // Mobile menu toggle
 const createMobileMenu = () => {
     const navbar = document.querySelector('.navbar');
     const navContent = document.querySelector('.nav-content');
     
     // Create hamburger button
     const hamburger = document.createElement('button');
     hamburger.innerHTML = '☰';
     hamburger.style.cssText = `
         display: none;
         background: none;
         border: none;
         color: white;
         font-size: 1.5rem;
         cursor: pointer;
         @media (max-width: 768px) {
             display: block;
         }
     `;
     
     navContent.appendChild(hamburger);
     
     hamburger.addEventListener('click', () => {
         const navLinks = document.querySelector('.nav-links');
         navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
         navLinks.style.position = 'absolute';
         navLinks.style.top = '100%';
         navLinks.style.left = '0';
         navLinks.style.right = '0';
         navLinks.style.background = 'rgba(10, 10, 10, 0.95)';
         navLinks.style.flexDirection = 'column';
         navLinks.style.padding = '1rem';
         navLinks.style.gap = '1rem';
     });
 };

 // Initialize mobile menu
 if (window.innerWidth <= 768) {
     createMobileMenu();
 }

 // Contact form functionality (if needed)
 const addContactForm = () => {
     const contactSection = document.querySelector('.contact');
     const formHTML = `
         <form class="contact-form" style="max-width: 500px; margin: 2rem auto 0;">
             <div style="margin-bottom: 1rem;">
                 <input type="text" placeholder="Your Name" required 
                        style="width: 100%; padding: 1rem; border: 1px solid rgba(255,255,255,0.3); 
                               background: rgba(255,255,255,0.05); color: white; border-radius: 10px;">
             </div>
             <div style="margin-bottom: 1rem;">
                 <input type="email" placeholder="Your Email" required 
                        style="width: 100%; padding: 1rem; border: 1px solid rgba(255,255,255,0.3); 
                               background: rgba(255,255,255,0.05); color: white; border-radius: 10px;">
             </div>
             <div style="margin-bottom: 1rem;">
                 <textarea placeholder="Your Message" rows="5" required 
                           style="width: 100%; padding: 1rem; border: 1px solid rgba(255,255,255,0.3); 
                                  background: rgba(255,255,255,0.05); color: white; border-radius: 10px; resize: vertical;"></textarea>
             </div>
             <button type="submit" class="btn btn-primary" style="width: 100%;">Send Message</button>
         </form>
     `;
     
     const ctaButtons = contactSection.querySelector('.cta-buttons');
     ctaButtons.insertAdjacentHTML('afterend', formHTML);
     
     // Form submission handler
     const form = contactSection.querySelector('.contact-form');
     form.addEventListener('submit', (e) => {
         e.preventDefault();
         alert('Thank you for your message! I\'ll get back to you soon.');
         form.reset();
     });
 };

 // Uncomment the line below if you want to add a contact form
 // addContactForm();

 // Performance optimization: Lazy loading for images
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

 // Add loading animation
 window.addEventListener('load', () => {
     document.body.style.opacity = '0';
     document.body.style.transition = 'opacity 0.5s ease';
     setTimeout(() => {
         document.body.style.opacity = '1';
     }, 100);
 });

 // Easter egg: Konami code
 let konamiCode = [];
 const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];
 
 document.addEventListener('keydown', (e) => {
     konamiCode.push(e.code);
     if (konamiCode.length > konamiSequence.length) {
         konamiCode.shift();
     }
     
     if (konamiCode.join(',') === konamiSequence.join(',')) {
         // Easter egg activated!
         document.body.style.filter = 'hue-rotate(180deg)';
         setTimeout(() => {
             document.body.style.filter = 'none';
         }, 3000);
         console.log('🎉 Easter egg activated! You found the secret!');
     }
 });