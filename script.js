/* ========================================
   LEWIS WANJOHI PORTFOLIO - SCRIPT.JS
   Production-ready, modular, optimized
   ======================================== */

(function() {
    'use strict';

    // ===== CONFIGURATION =====
    const CONFIG = {
        loaderDelay: 1200,
        scrollOffset: 100,
        animationThreshold: 0.15,
        testimonialInterval: 6000,
        particleCount: 30,
        typingSpeed: 100,
        typingDeleteSpeed: 50,
        typingPause: 2000
    };

    // ===== DOM ELEMENTS =====
    const DOM = {
        loader: document.getElementById('loader'),
        cursorDot: document.getElementById('cursorDot'),
        cursorOutline: document.getElementById('cursorOutline'),
        scrollProgress: document.getElementById('scrollProgress'),
        header: document.getElementById('header'),
        menuBtn: document.getElementById('menuBtn'),
        navLinks: document.getElementById('navLinks'),
        particles: document.getElementById('particles'),
        backToTop: document.getElementById('backToTop'),
        testimonialTrack: document.getElementById('testimonialTrack'),
        testimonialDots: document.getElementById('testimonialDots'),
        testPrev: document.getElementById('testPrev'),
        testNext: document.getElementById('testNext'),
        certModal: document.getElementById('certModal'),
        certModalBackdrop: document.getElementById('certModalBackdrop'),
        certModalClose: document.getElementById('certModalClose'),
        certModalPrev: document.getElementById('certModalPrev'),
        certModalNext: document.getElementById('certModalNext'),
        certModalViewer: document.getElementById('certModalViewer'),
        certModalImg: document.getElementById('certModalImg'),
        certModalInfo: document.getElementById('certModalInfo'),
        projectsGrid: document.getElementById('projectsGrid'),
        certificatesGrid: document.getElementById('certificatesGrid'),
        chatBox: document.getElementById('chatBox'),
        chatToggle: document.getElementById('chatToggle'),
        chatClose: document.getElementById('chatClose'),
        chatBody: document.getElementById('chatBody'),
        chatInput: document.getElementById('chatInput'),
        contactForm: document.getElementById('contactForm')
    };

    // ===== DATA =====
    const PROJECTS = [
        { id: 1, title: 'Strawberry Ice Cream Campaign', category: 'branding', desc: 'Brand identity & product marketing campaign', image: 'https://raw.githubusercontent.com/lewis405/lewis-portfolio/main/dba6728fb0b44e1ba5d70a8e88d8be87.jpg', fallback: 'https://images.unsplash.com/photo-1560008581-09826d1de69e?w=400&h=300&fit=crop' },
        { id: 2, title: 'Ice Cream Campaign V2', category: 'branding', desc: 'Social media ad creative', image: 'https://raw.githubusercontent.com/lewis405/lewis-portfolio/main/d69b437622b84439a61f061d02b41353.jpg', fallback: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop' },
        { id: 3, title: 'Ice Cream Campaign V3', category: 'branding', desc: 'Promotional poster design', image: 'https://raw.githubusercontent.com/lewis405/lewis-portfolio/main/261051ba9a564b05b5e2b3bf0b58ed4d.jpg', fallback: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=400&h=300&fit=crop' },
        { id: 4, title: 'School Admission Drive', category: 'print', desc: 'Enrollment marketing materials', image: 'https://raw.githubusercontent.com/lewis405/lewis-portfolio/main/95ce76c7aa0a40f5a1e2d94c01c12e61.jpg', fallback: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop' },
        { id: 5, title: 'Tour & Travel Campaign', category: 'print', desc: 'Tourism brand awareness poster', image: 'https://raw.githubusercontent.com/lewis405/lewis-portfolio/main/126722573e5046e898c9082b7e8304ea.jpg', fallback: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&h=300&fit=crop' },
        { id: 6, title: 'Youth Event Promotion', category: 'print', desc: 'Community event marketing', image: 'https://raw.githubusercontent.com/lewis405/lewis-portfolio/main/e613636aa7dd428295581b8299dc82ff.jpg', fallback: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=300&fit=crop' },
        { id: 7, title: 'Teen Service Campaign', category: 'print', desc: 'Targeted youth demographic promotion', image: 'https://raw.githubusercontent.com/lewis405/lewis-portfolio/main/ea3da17f8fc14640906e0e2df9b719de.jpg', fallback: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=300&fit=crop' },
        { id: 8, title: 'JBL Headphones Ad', category: 'branding', desc: 'Product advertisement & launch campaign', image: 'https://raw.githubusercontent.com/lewis405/lewis-portfolio/main/c9d007635aa4460fba8ea8a0de9b14ec.jpg', fallback: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop' },
        { id: 9, title: 'Building with Trust', category: 'branding', desc: 'B2B construction company branding', image: 'https://raw.githubusercontent.com/lewis405/lewis-portfolio/main/49f09191b72b401cbf2436b2fcc19bf1.jpg', fallback: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop' },
        { id: 10, title: 'Health Week Campaign', category: 'print', desc: 'Healthcare awareness event marketing', image: 'https://raw.githubusercontent.com/lewis405/lewis-portfolio/main/bd6257ed96074e4abbccdb1979618be2.jpg', fallback: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=300&fit=crop' },
        { id: 11, title: 'R Logo Brand Identity', category: 'branding', desc: 'Modern logo & brand system design', image: 'https://raw.githubusercontent.com/lewis405/lewis-portfolio/main/IMG-20250902-WA0019.jpg', fallback: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=300&fit=crop' },
        { id: 12, title: 'Menu Display Design', category: 'print', desc: 'Food & beverage marketing collateral', image: 'https://raw.githubusercontent.com/lewis405/lewis-portfolio/main/4c5d3529bb3845f2865e6c3b0707eaa2.jpg', fallback: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop' },
        { id: 13, title: 'Beauty Brand Campaign', category: 'print', desc: 'Cosmetics & skincare marketing', image: 'https://raw.githubusercontent.com/lewis405/lewis-portfolio/main/75af69fea3d6423faa82b2ac6feb1c40.jpg', fallback: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=300&fit=crop' },
        { id: 14, title: 'ETruk Logistics Campaign', category: 'print', desc: 'Transportation service promotion', image: 'https://raw.githubusercontent.com/lewis405/lewis-portfolio/main/b404f440ed124bee98476360a61caff4.jpg', fallback: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop' },
        { id: 15, title: 'Healthy Food Campaign', category: 'print', desc: 'Nutrition & wellness marketing', image: 'https://raw.githubusercontent.com/lewis405/lewis-portfolio/main/f8218551a1f848d98db5c57572ab8003.jpg', fallback: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=300&fit=crop' },
        { id: 16, title: 'NaanStop Restaurant Branding', category: 'branding', desc: 'Full restaurant brand identity system', image: 'https://raw.githubusercontent.com/lewis405/lewis-portfolio/main/IMG-20250824-WA0006.jpg', fallback: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop' },
        { id: 17, title: 'Talent Acquisition Campaign', category: 'print', desc: 'HR & recruitment marketing poster', image: 'https://raw.githubusercontent.com/lewis405/lewis-portfolio/main/8de33c3a9c3a4b1893c0b2dd1cd36958.jpg', fallback: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=300&fit=crop' },
        { id: 18, title: 'Institute Awareness Campaign', category: 'print', desc: 'Educational institution promotion', image: 'https://raw.githubusercontent.com/lewis405/lewis-portfolio/main/0cf77831853040b0b5586341ee2d37db.jpg', fallback: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=300&fit=crop' },
        { id: 19, title: 'Smoothie Launch Campaign', category: 'print', desc: 'Beverage product marketing design', image: 'https://raw.githubusercontent.com/lewis405/lewis-portfolio/main/1650a52ba8b04f1695c5181022d2da59.jpg', fallback: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=300&fit=crop' },
        { id: 20, title: 'Business Growth Campaign', category: 'print', desc: 'Corporate promotion & B2B marketing', image: 'https://raw.githubusercontent.com/lewis405/lewis-portfolio/main/2b5b47ef04b748539929f1f63527dbab.jpg', fallback: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop' },
        { id: 21, title: 'Recruitment Drive Campaign', category: 'print', desc: 'Creative hiring & talent marketing', image: 'https://raw.githubusercontent.com/lewis405/lewis-portfolio/main/9808f986b4be468086c89da1f73f923c.jpg', fallback: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=300&fit=crop' },
        { id: 22, title: 'Foundation Montessori Website', category: 'web', desc: 'Educational institution web presence', image: 'https://raw.githubusercontent.com/lewis405/lewis-portfolio/main/WhatsApp%20Image%202025-09-27%20at%2018.33.51_af91a97f.jpg', fallback: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop' }
    ];

    const CERTIFICATES = [
        { id: 0, title: 'Digital Marketing Certified', issuer: 'HubSpot Academy', desc: 'Core credential: Inbound-first digital marketing, SEO, content strategy, email marketing, and analytics.', date: 'Valid: Jun 22, 2026 - Jul 22, 2027', image: 'https://raw.githubusercontent.com/lewis405/lewis-portfolio/main/digital%20maketing%20(2).png', category: 'marketing', primary: true },
        { id: 1, title: 'Social Media Marketing Certified', issuer: 'HubSpot Academy', desc: 'Core credential: Platform strategy, content creation, paid social, community management, and engagement analytics.', date: 'Valid: Jun 1, 2026 - Jun 30, 2028', image: 'https://raw.githubusercontent.com/lewis405/lewis-portfolio/main/social%20media.png', category: 'marketing', primary: true },
        { id: 2, title: 'Inbound Certified', issuer: 'HubSpot Academy', desc: 'Core credential: Inbound Methodology, Flywheel Business Model, and customer-centric marketing strategies.', date: 'Valid: May 26, 2026 - Jun 24, 2028', image: 'https://raw.githubusercontent.com/lewis405/lewis-portfolio/main/inbound.png', category: 'marketing', primary: true },
        { id: 3, title: 'Digital Marketing (Adobe)', issuer: 'Adobe & Coursera', desc: 'Comprehensive digital marketing covering strategy, analytics, content creation, and campaign management.', date: 'Completed: June 12, 2026', image: 'https://raw.githubusercontent.com/lewis405/lewis-portfolio/main/digital%20maketing%20adobe.jpeg', category: 'marketing', primary: true },
        { id: 4, title: 'Prompt Engineering for ChatGPT', issuer: 'Vanderbilt University (Coursera)', desc: 'AI-powered marketing: Using ChatGPT to generate content, automate campaigns, and analyze customer data.', date: 'Completed: June 25, 2026', image: 'https://raw.githubusercontent.com/lewis405/lewis-portfolio/main/promont.jpeg', category: 'ai', primary: false },
        { id: 5, title: 'Certificate in Web Programming', issuer: 'Equator Institute of Technology', desc: 'Technical foundation for marketing: landing page development, tracking implementation, and website optimization.', date: 'Awarded: May 2025 | Grade: Distinction', image: 'https://raw.githubusercontent.com/lewis405/lewis-portfolio/main/web%20development.jpg', category: 'tech', primary: false },
        { id: 6, title: 'Certificate in Graphic Design', issuer: 'CFSK Institute of ICT', desc: 'Creative asset production: marketing posters, social media graphics, brand identity, and visual content.', date: 'Photoshop (A), Illustrator (A)', image: 'https://raw.githubusercontent.com/lewis405/lewis-portfolio/main/graphics%20design%20cert.jpg', category: 'tech', primary: false },
        { id: 7, title: 'Foundation in AI & Machine Learning', issuer: 'University of Nairobi - KITI', desc: 'Marketing application: Predictive analytics, customer segmentation, and automated personalization.', date: 'Completed: March 8, 2026', image: 'https://raw.githubusercontent.com/lewis405/lewis-portfolio/main/Foundation%20in%20AI%20&%20Machine%20Learning.jpeg', category: 'ai', primary: false },
        { id: 8, title: 'Intermediate AI & Machine Learning', issuer: 'University of Nairobi - KITI', desc: 'Advanced marketing intelligence: Campaign optimization algorithms and customer behavior prediction.', date: 'Completed: May 28, 2026', image: 'https://raw.githubusercontent.com/lewis405/lewis-portfolio/main/al%20and%20ml%20inter.jpeg', category: 'ai', primary: false },
        { id: 9, title: 'Foundation in Blockchain', issuer: 'University of Nairobi - KITI', desc: 'Emerging marketing tech: Understanding decentralized marketing, NFT campaigns, and crypto loyalty.', date: 'Completed: September 8, 2025', image: 'https://raw.githubusercontent.com/lewis405/lewis-portfolio/main/foundtion%20blockchain.png', category: 'ai', primary: false },
        { id: 10, title: 'Intermediate Blockchain', issuer: 'University of Nairobi - KITI', desc: 'Smart contract marketing: Automated affiliate programs, transparent ad tracking, and tokenized rewards.', date: 'Completed: January 21, 2026', image: 'https://raw.githubusercontent.com/lewis405/lewis-portfolio/main/Intermediate%20Blockchain.png', category: 'ai', primary: false },
        { id: 11, title: 'Advanced Blockchain', issuer: 'University of Nairobi - KITI', desc: 'Enterprise marketing innovation: DApp integration, DAO marketing structures, and Web3 brand strategies.', date: 'Completed: June 16, 2026', image: 'https://raw.githubusercontent.com/lewis405/lewis-portfolio/main/Advanced%20Blockchain.png', category: 'ai', primary: false },
        { id: 12, title: 'Certificate in Computer Packages', issuer: 'CFSK Institute of ICT', desc: 'Essential productivity: MS Office, data analysis, and digital tools for marketing operations.', date: 'MS Office, Internet & Email', image: 'https://raw.githubusercontent.com/lewis405/lewis-portfolio/main/computer%20packages.jpg', category: 'tech', primary: false },
        { id: 13, title: 'KCSE Certificate 2024', issuer: 'The Kenya National Examinations Council (KNEC)', desc: 'St. Bonaventure Kaheti Boys High School', date: 'Year: 2024 | Mean Grade: C- | AGP: 34', image: 'https://raw.githubusercontent.com/lewis405/lewis-portfolio/main/kcse.jpg', category: 'education', primary: false },
        { id: 14, title: 'KCPE Certificate', issuer: 'The Kenya National Examinations Council', desc: 'C & J Mt. Carmel School', date: 'Year: 2020 | Total: 296 Marks', image: 'https://raw.githubusercontent.com/lewis405/lewis-portfolio/main/kcpe%20cert.jpg', category: 'education', primary: false },
        { id: 15, title: 'Additional Certifications', issuer: 'Multiple Institutions', desc: 'St. John Ambulance, CFSK ICT, Nyeri Hospice Charity Walk', date: '2022 - 2023', image: 'https://raw.githubusercontent.com/lewis405/lewis-portfolio/main/IMG_20250430_161044_273.jpg', category: 'education', primary: false }
    ];

    // ===== LOADING SCREEN =====
    function initLoader() {
        window.addEventListener('load', function() {
            setTimeout(function() {
                if (DOM.loader) DOM.loader.classList.add('hidden');
            }, CONFIG.loaderDelay);
        });
    }

    // ===== CUSTOM CURSOR =====
    function initCursor() {
        if (window.matchMedia('(max-width: 768px)').matches) return;

        let mouseX = 0, mouseY = 0, outlineX = 0, outlineY = 0;

        document.addEventListener('mousemove', function(e) {
            mouseX = e.clientX;
            mouseY = e.clientY;
            if (DOM.cursorDot) {
                DOM.cursorDot.style.left = mouseX + 'px';
                DOM.cursorDot.style.top = mouseY + 'px';
            }
        });

        function animateCursor() {
            outlineX += (mouseX - outlineX) * 0.12;
            outlineY += (mouseY - outlineY) * 0.12;
            if (DOM.cursorOutline) {
                DOM.cursorOutline.style.left = outlineX + 'px';
                DOM.cursorOutline.style.top = outlineY + 'px';
            }
            requestAnimationFrame(animateCursor);
        }
        animateCursor();

        // Hover effects
        const hoverElements = document.querySelectorAll('a, button, .service-card, .project-card, .certificate-card, .filter-btn, .cert-filter-btn, .testimonial-nav-btn, .faq-question, .value-item, .skill-tag');
        hoverElements.forEach(function(el) {
            el.addEventListener('mouseenter', function() {
                if (DOM.cursorDot) DOM.cursorDot.classList.add('hover');
                if (DOM.cursorOutline) DOM.cursorOutline.classList.add('hover');
            });
            el.addEventListener('mouseleave', function() {
                if (DOM.cursorDot) DOM.cursorDot.classList.remove('hover');
                if (DOM.cursorOutline) DOM.cursorOutline.classList.remove('hover');
            });
        });
    }

    // ===== SCROLL PROGRESS =====
    function initScrollProgress() {
        window.addEventListener('scroll', function() {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
            if (DOM.scrollProgress) {
                DOM.scrollProgress.style.width = scrollPercent + '%';
                DOM.scrollProgress.setAttribute('aria-valuenow', Math.round(scrollPercent));
            }
        }, { passive: true });
    }

    // ===== HEADER SCROLL =====
    function initHeader() {
        let lastScroll = 0;
        window.addEventListener('scroll', function() {
            const currentScroll = window.scrollY;
            if (DOM.header) {
                if (currentScroll > 50) {
                    DOM.header.classList.add('scrolled');
                } else {
                    DOM.header.classList.remove('scrolled');
                }
            }
            lastScroll = currentScroll;
        }, { passive: true });
    }

    // ===== MOBILE MENU =====
    function initMobileMenu() {
        if (!DOM.menuBtn || !DOM.navLinks) return;

        DOM.menuBtn.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
            DOM.navLinks.classList.toggle('active');
            document.body.style.overflow = isExpanded ? '' : 'hidden';
        });

        DOM.navLinks.querySelectorAll('a').forEach(function(link) {
            link.addEventListener('click', function() {
                DOM.menuBtn.setAttribute('aria-expanded', 'false');
                DOM.navLinks.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // ===== ACTIVE NAV LINK =====
    function initActiveNav() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

        window.addEventListener('scroll', function() {
            let current = '';
            sections.forEach(function(section) {
                const sectionTop = section.offsetTop - CONFIG.scrollOffset;
                if (window.scrollY >= sectionTop) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(function(link) {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + current) {
                    link.classList.add('active');
                }
            });
        }, { passive: true });
    }

    // ===== PARTICLES =====
    function initParticles() {
        if (!DOM.particles) return;
        const colors = ['#fdbb2d', '#ff6b6b', '#4ecdc4', '#a8e6cf', '#ff8b94', '#c7ceea', '#ffd93d', '#b21f1f'];

        for (let i = 0; i < CONFIG.particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            const size = Math.random() * 5 + 2;
            particle.style.width = size + 'px';
            particle.style.height = size + 'px';
            particle.style.background = colors[Math.floor(Math.random() * colors.length)];
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 8 + 's';
            particle.style.animationDuration = (Math.random() * 6 + 6) + 's';
            DOM.particles.appendChild(particle);
        }
    }

    // ===== SCROLL ANIMATIONS (Intersection Observer) =====
    function initScrollAnimations() {
        const observerOptions = {
            root: null,
            rootMargin: '0px 0px -50px 0px',
            threshold: CONFIG.animationThreshold
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');

                    // Animate skill bars
                    const skillFills = entry.target.querySelectorAll('.skill-fill');
                    skillFills.forEach(function(fill) {
                        const width = fill.getAttribute('data-width');
                        if (width) fill.style.width = width + '%';
                    });

                    // Animate counters
                    const counters = entry.target.querySelectorAll('[data-count]');
                    counters.forEach(function(counter) {
                        const target = parseInt(counter.getAttribute('data-count'));
                        animateCounter(counter, target);
                    });

                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('[data-animate]').forEach(function(el) {
            observer.observe(el);
        });
    }

    function animateCounter(element, target) {
        let current = 0;
        const increment = target / 50;
        const duration = 1500;
        const stepTime = duration / 50;

        const timer = setInterval(function() {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current);
        }, stepTime);
    }

    // ===== PROJECTS =====
    function initProjects() {
        if (!DOM.projectsGrid) return;
        renderProjects('all');

        document.querySelectorAll('.filter-btn').forEach(function(btn) {
            btn.addEventListener('click', function() {
                document.querySelectorAll('.filter-btn').forEach(function(b) {
                    b.classList.remove('active');
                    b.setAttribute('aria-pressed', 'false');
                });
                this.classList.add('active');
                this.setAttribute('aria-pressed', 'true');
                renderProjects(this.getAttribute('data-filter'));
            });
        });
    }

    function renderProjects(filter) {
        if (!DOM.projectsGrid) return;
        const filtered = filter === 'all' ? PROJECTS : PROJECTS.filter(function(p) { return p.category === filter; });

        DOM.projectsGrid.innerHTML = filtered.map(function(project) {
            return '<article class="project-card" data-animate="fade-up" data-category="' + project.category + '">' +
                '<div class="project-image-wrap">' +
                    '<img src="' + project.image + '" alt="' + project.title + '" class="project-image" loading="lazy" onerror="this.onerror=null;this.src='' + project.fallback + ''">' +
                    '<div class="project-overlay">' +
                        '<span class="project-category">' + project.category + '</span>' +
                        '<h3 class="project-title">' + project.title + '</h3>' +
                        '<p class="project-desc">' + project.desc + '</p>' +
                        '<div class="project-actions">' +
                            '<a href="' + project.image + '" target="_blank" class="project-btn project-btn-primary" rel="noopener noreferrer">View Full</a>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
            '</article>';
        }).join('');

        // Re-observe new elements
        setTimeout(function() {
            const newElements = DOM.projectsGrid.querySelectorAll('[data-animate]');
            newElements.forEach(function(el) {
                el.classList.remove('animated');
                const observer = new IntersectionObserver(function(entries) {
                    entries.forEach(function(entry) {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('animated');
                            observer.unobserve(entry.target);
                        }
                    });
                }, { threshold: 0.1 });
                observer.observe(el);
            });
        }, 50);
    }

    // ===== CERTIFICATES =====
    function initCertificates() {
        if (!DOM.certificatesGrid) return;
        renderCertificates('all');

        document.querySelectorAll('.cert-filter-btn').forEach(function(btn) {
            btn.addEventListener('click', function() {
                document.querySelectorAll('.cert-filter-btn').forEach(function(b) {
                    b.classList.remove('active');
                    b.setAttribute('aria-pressed', 'false');
                });
                this.classList.add('active');
                this.setAttribute('aria-pressed', 'true');
                renderCertificates(this.getAttribute('data-filter'));
            });
        });

        initCertModal();
    }

    function renderCertificates(filter) {
        if (!DOM.certificatesGrid) return;
        const filtered = filter === 'all' ? CERTIFICATES : CERTIFICATES.filter(function(c) { return c.category === filter; });

        DOM.certificatesGrid.innerHTML = filtered.map(function(cert) {
            const badgeClass = cert.primary ? 'primary-badge' : 
                cert.category === 'tech' ? 'tech-badge' : 
                cert.category === 'ai' ? 'ai-badge' : 'edu-badge';
            const badgeText = cert.primary ? 'Primary' : 
                cert.category === 'tech' ? 'Tech' : 
                cert.category === 'ai' ? 'AI & Data' : 'Education';

            return '<article class="certificate-card ' + (cert.primary ? 'primary' : '') + '" data-cert="' + cert.id + '" data-animate="fade-up">' +
                '<div class="certificate-image-wrap">' +
                    '<img src="' + cert.image + '" alt="' + cert.title + '" class="certificate-image" loading="lazy" onerror="this.parentElement.innerHTML='<div class=\'certificate-image-fallback\'><i class=\'fas fa-certificate\'></i><span>' + cert.title + '</span></div>'">' +
                '</div>' +
                '<div class="certificate-content">' +
                    '<h3>' + cert.title + '</h3>' +
                    '<p class="cert-issuer">' + cert.issuer + '</p>' +
                    '<p class="cert-desc">' + cert.desc + '</p>' +
                    '<p class="cert-date">' + cert.date + '</p>' +
                    '<span class="cert-badge ' + badgeClass + '">' + badgeText + '</span>' +
                '</div>' +
            '</article>';
        }).join('');

        // Add click handlers
        DOM.certificatesGrid.querySelectorAll('.certificate-card').forEach(function(card) {
            card.addEventListener('click', function() {
                const certId = parseInt(this.getAttribute('data-cert'));
                openCertModal(certId);
            });
        });

        // Re-observe
        setTimeout(function() {
            const newElements = DOM.certificatesGrid.querySelectorAll('[data-animate]');
            newElements.forEach(function(el) {
                el.classList.remove('animated');
                const observer = new IntersectionObserver(function(entries) {
                    entries.forEach(function(entry) {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('animated');
                            observer.unobserve(entry.target);
                        }
                    });
                }, { threshold: 0.1 });
                observer.observe(el);
            });
        }, 50);
    }

    // ===== CERTIFICATE MODAL =====
    let currentCertIndex = 0;
    let currentCertFilter = 'all';

    function initCertModal() {
        if (!DOM.certModal) return;

        DOM.certModalClose.addEventListener('click', closeCertModal);
        DOM.certModalBackdrop.addEventListener('click', closeCertModal);
        DOM.certModalPrev.addEventListener('click', function(e) { e.stopPropagation(); navigateCert(-1); });
        DOM.certModalNext.addEventListener('click', function(e) { e.stopPropagation(); navigateCert(1); });

        document.addEventListener('keydown', function(e) {
            if (!DOM.certModal.classList.contains('active')) return;
            if (e.key === 'Escape') closeCertModal();
            if (e.key === 'ArrowLeft') navigateCert(-1);
            if (e.key === 'ArrowRight') navigateCert(1);
        });
    }

    function openCertModal(index) {
        currentCertIndex = index;
        const cert = CERTIFICATES[index];
        if (!cert) return;

        if (DOM.certModalImg) DOM.certModalImg.src = cert.image;
        if (DOM.certModalImg) DOM.certModalImg.alt = cert.title + ' Certificate';
        if (DOM.certModalInfo) {
            DOM.certModalInfo.innerHTML = '<h3>' + cert.title + '</h3><p>' + cert.issuer + ' | ' + cert.date + '</p>';
        }

        DOM.certModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeCertModal() {
        DOM.certModal.classList.remove('active');
        document.body.style.overflow = '';
    }

    function navigateCert(direction) {
        currentCertIndex = (currentCertIndex + direction + CERTIFICATES.length) % CERTIFICATES.length;
        openCertModal(currentCertIndex);
    }

    // ===== TESTIMONIALS SLIDER =====
    let currentTestimonial = 0;
    let testimonialAutoPlay;

    function initTestimonials() {
        if (!DOM.testimonialTrack || !DOM.testimonialDots) return;

        const slides = DOM.testimonialTrack.querySelectorAll('.testimonial-slide');

        // Create dots
        slides.forEach(function(_, i) {
            const dot = document.createElement('button');
            dot.className = 'testimonial-dot' + (i === 0 ? ' active' : '');
            dot.setAttribute('aria-label', 'Go to testimonial ' + (i + 1));
            dot.setAttribute('role', 'tab');
            dot.addEventListener('click', function() { goToTestimonial(i); });
            DOM.testimonialDots.appendChild(dot);
        });

        DOM.testPrev.addEventListener('click', function() {
            goToTestimonial((currentTestimonial - 1 + slides.length) % slides.length);
            resetAutoPlay();
        });

        DOM.testNext.addEventListener('click', function() {
            goToTestimonial((currentTestimonial + 1) % slides.length);
            resetAutoPlay();
        });

        startAutoPlay();
    }

    function goToTestimonial(index) {
        currentTestimonial = index;
        if (DOM.testimonialTrack) {
            DOM.testimonialTrack.style.transform = 'translateX(-' + (index * 100) + '%)';
        }

        const dots = document.querySelectorAll('.testimonial-dot');
        dots.forEach(function(dot, i) {
            dot.classList.toggle('active', i === index);
        });
    }

    function startAutoPlay() {
        testimonialAutoPlay = setInterval(function() {
            const slides = DOM.testimonialTrack.querySelectorAll('.testimonial-slide');
            goToTestimonial((currentTestimonial + 1) % slides.length);
        }, CONFIG.testimonialInterval);
    }

    function resetAutoPlay() {
        clearInterval(testimonialAutoPlay);
        startAutoPlay();
    }

    // ===== BACK TO TOP =====
    function initBackToTop() {
        if (!DOM.backToTop) return;

        window.addEventListener('scroll', function() {
            if (window.scrollY > 500) {
                DOM.backToTop.classList.add('visible');
            } else {
                DOM.backToTop.classList.remove('visible');
            }
        }, { passive: true });

        DOM.backToTop.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ===== CHAT WIDGET =====
    function initChat() {
        if (!DOM.chatToggle || !DOM.chatBox) return;

        DOM.chatToggle.addEventListener('click', toggleChat);
        if (DOM.chatClose) DOM.chatClose.addEventListener('click', toggleChat);
    }

    window.toggleChat = function() {
        if (!DOM.chatBox) return;
        DOM.chatBox.classList.toggle('active');
    };

    window.sendChatMessage = function() {
        if (!DOM.chatInput) return;
        const text = DOM.chatInput.value.trim();
        if (!text) return;
        addChatMessage(text, true);
        DOM.chatInput.value = '';
        showChatTyping();
        setTimeout(function() {
            removeChatTyping();
            addChatMessage(getBotReply(text), false);
        }, 1200);
    };

    window.sendQuickReply = function(text) {
        addChatMessage(text, true);
        showChatTyping();
        setTimeout(function() {
            removeChatTyping();
            addChatMessage(getBotReply(text), false);
        }, 1000);
    };

    function addChatMessage(text, isUser) {
        if (!DOM.chatBody) return;
        const msgDiv = document.createElement('div');
        msgDiv.className = 'chat-message ' + (isUser ? 'user' : 'bot');
        msgDiv.innerHTML = '<div class="chat-bubble ' + (isUser ? 'user' : 'bot') + '">' + escapeHtml(text) + '</div>';
        DOM.chatBody.appendChild(msgDiv);
        DOM.chatBody.scrollTop = DOM.chatBody.scrollHeight;
    }

    function showChatTyping() {
        if (!DOM.chatBody) return;
        const typingDiv = document.createElement('div');
        typingDiv.className = 'chat-message bot';
        typingDiv.id = 'typingIndicator';
        typingDiv.innerHTML = '<div class="chat-bubble bot"><div class="chat-typing"><span></span><span></span><span></span></div></div>';
        DOM.chatBody.appendChild(typingDiv);
        DOM.chatBody.scrollTop = DOM.chatBody.scrollHeight;
    }

    function removeChatTyping() {
        const typing = document.getElementById('typingIndicator');
        if (typing) typing.remove();
    }

    function getBotReply(userMsg) {
        const msg = userMsg.toLowerCase();
        if (msg.includes('social') || msg.includes('media')) {
            return "I offer full social media management including content creation, scheduling, community management, and paid ads. My Growth package starts at KES 35,000/month. Would you like to see some examples?";
        } else if (msg.includes('price') || msg.includes('pricing') || msg.includes('cost') || msg.includes('package')) {
            return "I have three packages: Starter (KES 15,000/project), Growth (KES 35,000/month), and Enterprise (custom pricing). Each is tailored to your specific needs. Which sounds right for your business?";
        } else if (msg.includes('design') || msg.includes('brand') || msg.includes('logo')) {
            return "I create complete brand identity packages including logos, color palettes, social media templates, and marketing collateral. Check out my Projects section for examples!";
        } else if (msg.includes('book') || msg.includes('call') || msg.includes('consult') || msg.includes('meeting')) {
            return "I would love to discuss your project! Please fill out the contact form below or WhatsApp me at 0792 316 985. I typically respond within an hour during business hours.";
        } else if (msg.includes('seo') || msg.includes('website') || msg.includes('web')) {
            return "I provide technical SEO audits, on-page optimization, and website performance tuning. My web development background means I can implement fixes directly, not just recommend them.";
        } else if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey')) {
            return "Hello! Welcome to my portfolio. I am Lewis, a certified digital marketer. How can I help you today?";
        } else {
            return "Thanks for reaching out! I would be happy to discuss your marketing needs in detail. Please share more about your project, or fill out the contact form and I will get back to you within an hour.";
        }
    }

    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // ===== CONTACT FORM =====
    function initContactForm() {
        if (!DOM.contactForm) return;

        DOM.contactForm.addEventListener('submit', function(e) {
            const name = document.getElementById('contactName');
            const email = document.getElementById('contactEmail');
            const phone = document.getElementById('contactPhone');
            const message = document.getElementById('contactMessage');

            let valid = true;

            if (!name.value.trim()) { showError('nameError'); valid = false; }
            if (!email.value.trim() || !email.value.includes('@')) { showError('emailError'); valid = false; }
            if (!phone.value.trim()) { showError('phoneError'); valid = false; }
            if (!message.value.trim()) { showError('messageError'); valid = false; }

            if (!valid) e.preventDefault();
        });
    }

    function showError(id) {
        const el = document.getElementById(id);
        if (el) {
            el.style.display = 'block';
            setTimeout(function() { el.style.display = 'none'; }, 3000);
        }
    }

    // ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href === '#') return;
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    const offset = target.offsetTop - 80;
                    window.scrollTo({ top: offset, behavior: 'smooth' });
                }
            });
        });
    }

    // ===== PARALLAX EFFECT =====
    function initParallax() {
        const heroPortrait = document.querySelector('.hero-portrait-wrap');
        const heroText = document.querySelector('.hero-text-col');

        window.addEventListener('scroll', function() {
            const scrolled = window.scrollY;
            if (scrolled < window.innerHeight && heroPortrait) {
                heroPortrait.style.transform = 'translateY(' + (scrolled * 0.08) + 'px)';
            }
            if (scrolled < window.innerHeight && heroText) {
                heroText.style.opacity = Math.max(0, 1 - (scrolled / (window.innerHeight * 0.6)));
            }
        }, { passive: true });
    }

    // ===== KEYBOARD NAVIGATION =====
    function initKeyboardNav() {
        document.addEventListener('keydown', function(e) {
            // Escape to close mobile menu
            if (e.key === 'Escape' && DOM.navLinks && DOM.navLinks.classList.contains('active')) {
                DOM.menuBtn.setAttribute('aria-expanded', 'false');
                DOM.navLinks.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    // ===== INITIALIZE ALL =====
    function init() {
        initLoader();
        initCursor();
        initScrollProgress();
        initHeader();
        initMobileMenu();
        initActiveNav();
        initParticles();
        initScrollAnimations();
        initProjects();
        initCertificates();
        initTestimonials();
        initBackToTop();
        initChat();
        initContactForm();
        initSmoothScroll();
        initParallax();
        initKeyboardNav();
    }

    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
