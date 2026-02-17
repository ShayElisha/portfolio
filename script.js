// =========================
// LOADING SCREEN
// =========================
window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loading-screen');
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }, 1500);
});

// =========================
// SCROLL PROGRESS BAR
// =========================
window.addEventListener('scroll', () => {
    const scrollProgress = document.getElementById('scrollProgress');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = (scrollTop / scrollHeight) * 100;
    scrollProgress.style.width = scrollPercentage + '%';
});

// =========================
// BACK TO TOP BUTTON
// =========================
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// =========================
// DARK MODE TOGGLE
// =========================
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Check for saved dark mode preference
if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
    darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        localStorage.setItem('darkMode', null);
        darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
});

// =========================
// LIVE TYPING EFFECT
// =========================
const typingText = document.getElementById('typingText');
const texts = [
    'מפתח Full Stack',
    'הנדסאי תוכנה',
    'מומחה JavaScript',
    'מפתח React & Node.js',
    'בונה מערכות מורכבות',
    'יוצר חוויות דיגיטליות'
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 150;

function type() {
    const currentText = texts[textIndex];
    
    if (isDeleting) {
        typingText.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
    } else {
        typingText.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 150;
    }
    
    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        typingSpeed = 2000; // Pause at end
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        typingSpeed = 500; // Pause before starting new text
    }
    
    setTimeout(type, typingSpeed);
}

// Start typing effect
setTimeout(type, 1000);

// =========================
// MOBILE MENU
// =========================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// =========================
// PARTICLES.JS INITIALIZATION
// =========================
if (typeof particlesJS !== 'undefined') {
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: '#6366f1'
            },
            shape: {
                type: 'circle'
            },
            opacity: {
                value: 0.5,
                random: false,
                anim: {
                    enable: false
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#6366f1',
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'repulse'
                },
                onclick: {
                    enable: true,
                    mode: 'push'
                },
                resize: true
            },
            modes: {
                repulse: {
                    distance: 100,
                    duration: 0.4
                },
                push: {
                    particles_nb: 4
                }
            }
        },
        retina_detect: true
    });
}

// =========================
// CREATE SIMPLE PARTICLES FALLBACK
// =========================
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;
    
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        
        const size = Math.random() * 4 + 2;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        particlesContainer.appendChild(particle);
    }
}

createParticles();

// =========================
// PROJECT MODAL
// =========================
const projectData = {
    erp: {
        title: 'מערכת ERP מודולרית לניהול תהליכים עסקיים',
        description: 'פיתוח מערכת ERP מקיפה לניהול כולל של כלל תהליכי העסק בפלטפורמה אחת.',
        features: [
            'ניהול עובדים, שכר וחוזים',
            'מערכת ניהול מלאי ורכש',
            'מערכת מכירות ומוצרים',
            'חתימות דיגיטליות',
            'בקרה ומעקב בזמן אמת',
            'צ\'אט בוט מבוסס בינה מלאכותית',
            'תחזיות עסקיות ותובנות בזמן אמת',
            'מידע ניהולי נגיש ואינטראקטיבי'
        ],
        technologies: ['Node.js', 'Express', 'MongoDB', 'React', 'Socket.io', 'Cron Jobs', 'AI']
    },
    delivery: {
        title: 'מערכת ניהול משלוחים מתקדמת',
        description: 'פיתוח מערכת ניהול מקיפה לחברת שליחויות, הכוללת ממשקים ייעודיים למנהלים, נהגים ולקוחות.',
        features: [
            'חלוקה אוטומטית של משלוחים לפי אזור גאוגרפי',
            'חלוקת קווי נהגים באופן אוטומטי',
            'ממשקים ייעודיים למנהלים, נהגים ולקוחות',
            'ניהול משתמשים מתקדם',
            'הפקת דוחות מפורטים',
            'סטטוס משלוחים בזמן אמת',
            'מעקב אחר ביצועי נהגים'
        ],
        technologies: ['ASP.NET MVC', 'Entity Framework', 'SQL Server', 'C#']
    },
    restaurant: {
        title: 'פלטפורמת הזמנות דינמית למסעדות',
        description: 'אפליקציית ווב להזמנת שולחנות ומנות עם חוויית משתמש אינטואיטיבית ועיצוב רספונסיבי.',
        features: [
            'הזמנת שולחנות בזמן אמת',
            'הזמנת מנות והוספה לעגלה',
            'עדכונים בזמן אמת לזמינות שולחנות',
            'מערכת ניהול הזמנות',
            'אינטגרציה עם מערכות תשלום',
            'אימות משתמשים מאובטח',
            'ממשק ניהול למסעדות',
            'דוחות וסטטיסטיקות'
        ],
        technologies: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Node.js', 'Express.js', 'MongoDB']
    },
    simulator: {
        title: 'סימולטור לניהול עסק',
        description: 'פיתוח משחק סימולציה לניהול עסק הכולל ניהול הכנסות, הוצאות, עובדים ושדרוגים.',
        features: [
            'ניהול הכנסות והוצאות',
            'ניהול עובדים ושכר',
            'מערכת שדרוגים לעסק',
            'דוחות רווח עם גרפים דינמיים',
            'ייצוא נתונים ל-CSV',
            'ממשק רספונסיבי ונוח',
            'אנימציות ואפקטים ויזואליים',
            'מערכת אירועים אקראיים'
        ],
        technologies: ['Python', 'Tkinter', 'Pandas', 'Matplotlib', 'Git']
    },
    wedding: {
        title: 'מערכת סידור הושבה והזמנות לחתונה',
        titleEn: 'Wedding Seating & Invitations System',
        description: 'מערכת ניהול חתונה מקיפה לסידור הושבה אוטומטי והזמנות דיגיטליות עם מעקב אחר תגובות אורחים.',
        descriptionEn: 'Comprehensive wedding management system for automatic seating arrangements and digital invitations with guest response tracking.',
        features: [
            'סידור הושבה אוטומטי לפי קבוצות ומשפחות',
            'מערכת הזמנות דיגיטליות עם RSVP',
            'מעקב אחר תגובות אורחים בזמן אמת',
            'ניהול רשימת אורחים מפורטת',
            'ממשק גרפי אינטואיטיבי לסידור שולחנות',
            'התראות ועדכונים אוטומטיים',
            'ניהול תפריט והעדפות תזונתיות',
            'דוחות וסטטיסטיקות על נוכחות'
        ],
        featuresEn: [
            'Automatic seating arrangement by groups and families',
            'Digital invitation system with RSVP',
            'Real-time guest response tracking',
            'Detailed guest list management',
            'Intuitive graphical interface for table arrangement',
            'Automatic notifications and updates',
            'Menu management and dietary preferences',
            'Attendance reports and statistics'
        ],
        technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Socket.io', 'JavaScript']
    },
    shifts: {
        title: 'מערכת ניהול משמרות עובדים',
        titleEn: 'Employee Shift Management System',
        description: 'מערכת מתקדמת לתזמון משמרות והקצאת עובדים עם הקצאות אוטומטיות ומעקב אחר זמינות.',
        descriptionEn: 'Advanced system for shift scheduling and employee allocation with automatic assignments and availability tracking.',
        features: [
            'תזמון משמרות אוטומטי וחכם',
            'הקצאת עובדים לפי זמינות וכישורים',
            'מערכת החלפות משמרות',
            'מעקב אחר שעות עבודה ושכר',
            'התראות על משמרות קרובות',
            'ממשק למנהלים ולעובדים',
            'דוחות שעות עבודה מפורטים',
            'אינטגרציה עם מערכות שכר'
        ],
        featuresEn: [
            'Smart automatic shift scheduling',
            'Employee allocation by availability and skills',
            'Shift swap system',
            'Work hours and salary tracking',
            'Notifications for upcoming shifts',
            'Interface for managers and employees',
            'Detailed work hours reports',
            'Integration with payroll systems'
        ],
        technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Express', 'JavaScript']
    },
    'employee-platform': {
        title: 'פלטפורמה אינטרקטיבית לניהול עובדים',
        titleEn: 'Interactive Employee Management Platform',
        description: 'פלטפורמה מקיפה לכלל העובדים וההנהלה עם עדכונים בזמן אמת, כלי שיתוף פעולה ומעקב ביצועים.',
        descriptionEn: 'Comprehensive platform for all employees and management with real-time updates, collaboration tools, and performance tracking.',
        features: [
            'ממשק מרכזי לכלל העובדים וההנהלה',
            'עדכונים בזמן אמת על משימות ופרויקטים',
            'מערכת הודעות ותקשורת פנימית',
            'מעקב אחר ביצועים ומשוב',
            'ניהול משימות ופרויקטים משותפים',
            'לוח זמנים משותף ומשמרות',
            'מערכת דוחות וסטטיסטיקות',
            'אינטגרציה עם מערכות ניהול נוספות',
            'ממשק ניהול למנהלים עם הרשאות'
        ],
        featuresEn: [
            'Central interface for all employees and management',
            'Real-time updates on tasks and projects',
            'Internal messaging and communication system',
            'Performance tracking and feedback',
            'Task and collaborative project management',
            'Shared calendar and shifts',
            'Reports and statistics system',
            'Integration with additional management systems',
            'Management interface for managers with permissions'
        ],
        technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Socket.io', 'Express', 'JWT']
    }
};

function openProjectModal(projectId) {
    const modal = document.getElementById('projectModal');
    const modalBody = document.getElementById('modalBody');
    const project = projectData[projectId];
    
    if (!project) return;
    
    const isEnglish = currentLang === 'en';
    const title = isEnglish && project.titleEn ? project.titleEn : project.title;
    const description = isEnglish && project.descriptionEn ? project.descriptionEn : project.description;
    const features = isEnglish && project.featuresEn ? project.featuresEn : project.features;
    const featuresLabel = isEnglish ? 'Key Features:' : 'תכונות עיקריות:';
    const techLabel = isEnglish ? 'Technologies:' : 'טכנולוגיות:';
    
    const featuresHTML = features.map(feature => `<li>${feature}</li>`).join('');
    const techHTML = project.technologies.map(tech => `<span class="tag">${tech}</span>`).join('');
    
    modalBody.innerHTML = `
        <h2>${title}</h2>
        <p>${description}</p>
        
        <h3>${featuresLabel}</h3>
        <ul>
            ${featuresHTML}
        </ul>
        
        <h3>${techLabel}</h3>
        <div class="modal-tags">
            ${techHTML}
        </div>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeProjectModal();
    }
});

// =========================
// CONTACT FORM VALIDATION
// =========================
// =========================
// INITIALIZE EMAILJS
// =========================
(function() {
    if (typeof EMAILJS_CONFIG !== 'undefined' && EMAILJS_CONFIG.PUBLIC_KEY) {
        emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
    } else {
        console.error('EmailJS config not found! Make sure config.js exists and contains EMAILJS_CONFIG.');
    }
})();

const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const subjectInput = document.getElementById('subject');
const messageInput = document.getElementById('message');
const submitBtn = document.getElementById('submitBtn');

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function showError(input, message) {
    const formGroup = input.parentElement;
    formGroup.classList.add('error');
    formGroup.classList.remove('success');
    const errorElement = formGroup.querySelector('.form-error');
    errorElement.textContent = message;
}

function showSuccess(input) {
    const formGroup = input.parentElement;
    formGroup.classList.add('success');
    formGroup.classList.remove('error');
}

function validateInput(input) {
    const value = input.value.trim();
    
    if (value === '') {
        showError(input, 'שדה זה הוא חובה');
        return false;
    }
    
    if (input.id === 'email' && !validateEmail(value)) {
        showError(input, 'נא להזין כתובת אימייל תקינה');
        return false;
    }
    
    if (input.hasAttribute('minlength')) {
        const minLength = parseInt(input.getAttribute('minlength'));
        if (value.length < minLength) {
            showError(input, `שדה זה צריך לכלול לפחות ${minLength} תווים`);
            return false;
        }
    }
    
    showSuccess(input);
    return true;
}

// Real-time validation
[nameInput, emailInput, subjectInput, messageInput].forEach(input => {
    input.addEventListener('blur', () => validateInput(input));
    input.addEventListener('input', () => {
        if (input.parentElement.classList.contains('error')) {
            validateInput(input);
        }
    });
});

// Form submission
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const isNameValid = validateInput(nameInput);
    const isEmailValid = validateInput(emailInput);
    const isSubjectValid = validateInput(subjectInput);
    const isMessageValid = validateInput(messageInput);
    
    if (isNameValid && isEmailValid && isSubjectValid && isMessageValid) {
        // Show loading
        submitBtn.querySelector('.btn-text').style.display = 'none';
        submitBtn.querySelector('.btn-loader').style.display = 'inline-flex';
        submitBtn.disabled = true;
        
        // Prepare email data
        const emailParams = {
            from_name: nameInput.value,
            from_email: emailInput.value,
            subject: subjectInput.value,
            message: messageInput.value,
            to_email: 'shayelisha2312@gmail.com'
        };
        
        // Send email using EmailJS
        console.log('Sending email with params:', emailParams);
        
        if (typeof EMAILJS_CONFIG === 'undefined' || !EMAILJS_CONFIG.SERVICE_ID || !EMAILJS_CONFIG.TEMPLATE_ID) {
            alert('EmailJS configuration not found! Please check config.js file.');
            submitBtn.querySelector('.btn-text').style.display = 'inline';
            submitBtn.querySelector('.btn-loader').style.display = 'none';
            submitBtn.disabled = false;
            return;
        }
        
        emailjs.send(EMAILJS_CONFIG.SERVICE_ID, EMAILJS_CONFIG.TEMPLATE_ID, emailParams)
            .then((response) => {
                console.log('Email sent successfully!', response.status, response.text);
                
                // Hide loading
                submitBtn.querySelector('.btn-text').style.display = 'inline';
                submitBtn.querySelector('.btn-loader').style.display = 'none';
                submitBtn.disabled = false;
                
                // Trigger confetti
                triggerConfetti();
                
                // Show success message
                const isEnglish = document.documentElement.lang === 'en';
                alert(isEnglish ? 'Your message has been sent successfully! ✨' : 'הודעתך נשלחה בהצלחה! ✨');
                
                // Reset form
                contactForm.reset();
                document.querySelectorAll('.form-group').forEach(group => {
                    group.classList.remove('success', 'error');
                });
            })
            .catch((error) => {
                // Hide loading
                submitBtn.querySelector('.btn-text').style.display = 'inline';
                submitBtn.querySelector('.btn-loader').style.display = 'none';
                submitBtn.disabled = false;
                
                // Show error message with details
                const isEnglish = document.documentElement.lang === 'en';
                console.error('EmailJS Error Details:', error);
                console.error('Error Status:', error.status);
                console.error('Error Text:', error.text);
                
                let errorMessage = isEnglish 
                    ? 'Sorry, there was an error sending your message. ' 
                    : 'מצטער, אירעה שגיאה בשליחת ההודעה. ';
                
                if (error.text) {
                    errorMessage += `\n${error.text}`;
                }
                
                alert(errorMessage);
            });
    }
});

// =========================
// CONFETTI ANIMATION
// =========================
function triggerConfetti() {
    if (typeof confetti === 'undefined') return;
    
    const count = 200;
    const defaults = {
        origin: { y: 0.7 }
    };
    
    function fire(particleRatio, opts) {
        confetti({
            ...defaults,
            ...opts,
            particleCount: Math.floor(count * particleRatio)
        });
    }
    
    fire(0.25, {
        spread: 26,
        startVelocity: 55,
    });
    
    fire(0.2, {
        spread: 60,
    });
    
    fire(0.35, {
        spread: 100,
        decay: 0.91,
        scalar: 0.8
    });
    
    fire(0.1, {
        spread: 120,
        startVelocity: 25,
        decay: 0.92,
        scalar: 1.2
    });
    
    fire(0.1, {
        spread: 120,
        startVelocity: 45,
    });
}

// =========================
// PDF RESUME DOWNLOAD
// =========================
const downloadCV = document.getElementById('downloadCV');

downloadCV.addEventListener('click', () => {
    generatePDF();
});

function generatePDF() {
    if (typeof html2pdf === 'undefined') {
        alert('מצטער, אין אפשרות להוריד קו"ח כרגע');
        return;
    }
    
    const resumeContent = `
            <div style="font-family: Arial, sans-serif; padding: 40px; max-width: 800px; margin: 0 auto; direction: rtl;">
            <h1 style="color: #6366f1; text-align: center; margin-bottom: 10px;">שי אלישע</h1>
            <p style="text-align: center; color: #666; margin-bottom: 30px;">הנדסאי תוכנה | מפתח Full Stack</p>
            
            <div style="margin-bottom: 30px;">
                <h2 style="color: #6366f1; border-bottom: 2px solid #6366f1; padding-bottom: 5px;">פרטים אישיים</h2>
                <p>📧 shayelisha2312@gmail.com</p>
                <p>📞 053-717-1884</p>
                <p>💻 GitHub: github.com/ShayElisha</p>
                <p>🔗 LinkedIn: linkedin.com/in/shay-elisha</p>
                <p>📍 ישראל</p>
                <p>🎓 הנדסאי תוכנה - המכללה למינהל</p>
            </div>
            
            <div style="margin-bottom: 30px;">
                <h2 style="color: #6366f1; border-bottom: 2px solid #6366f1; padding-bottom: 5px;">אודותיי</h2>
                <p style="line-height: 1.8;">שאפתן עם אהבה לטכנולוגיה, חדשנות ולשיפור תהליכי פיתוח. מנוסה בבניית מערכות ואפליקציות ווב מבוססות צד לקוח וצד שרת, תוך שימוש ב־JavaScript, TypeScript, React, Node.js ו־MongoDB.</p>
            </div>
            
            <div style="margin-bottom: 30px;">
                <h2 style="color: #6366f1; border-bottom: 2px solid #6366f1; padding-bottom: 5px;">מיומנויות</h2>
                <p><strong>שפות תכנות:</strong> JavaScript, TypeScript, Python, Java, C#, PHP</p>
                <p><strong>צד לקוח:</strong> React.js, Angular, HTML5, CSS3, Tailwind CSS</p>
                <p><strong>צד שרת:</strong> Node.js, Express.js, ASP.NET</p>
                <p><strong>מסדי נתונים:</strong> MongoDB, MySQL, SQL Server, Firebase</p>
            </div>
            
            <div style="margin-bottom: 30px;">
                <h2 style="color: #6366f1; border-bottom: 2px solid #6366f1; padding-bottom: 5px;">פרויקטים</h2>
                <div style="margin-bottom: 15px;">
                    <h3 style="color: #333;">מערכת ERP מודולרית</h3>
                    <p>מערכת מקיפה לניהול תהליכים עסקיים עם AI chatbot</p>
                    <p style="color: #666; font-size: 14px;">Node.js, Express, MongoDB, React, Socket.io</p>
                </div>
                <div style="margin-bottom: 15px;">
                    <h3 style="color: #333;">מערכת ניהול משלוחים</h3>
                    <p>מערכת לחברת שליחויות עם ממשקים למנהלים ונהגים</p>
                    <p style="color: #666; font-size: 14px;">ASP.NET MVC, Entity Framework, SQL Server</p>
                </div>
            </div>
        </div>
    `;
    
    const opt = {
        margin: 10,
        filename: 'CV-Resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };
    
    const element = document.createElement('div');
    element.innerHTML = resumeContent;
    
    html2pdf().set(opt).from(element).save();
    
    // Trigger confetti after download starts
    setTimeout(() => {
        triggerConfetti();
    }, 500);
}

// =========================
// LANGUAGE SWITCHER
// =========================
const langToggle = document.getElementById('langToggle');
let currentLang = 'he';

// English translations for typing effect
const textsEn = [
    'Full Stack Developer',
    'Software Engineer',
    'JavaScript Expert',
    'React & Node.js Developer',
    'Building Complex Systems',
    'Creating Digital Experiences'
];

const textsHe = [
    'מפתח Full Stack',
    'הנדסאי תוכנה',
    'מומחה JavaScript',
    'מפתח React & Node.js',
    'בונה מערכות מורכבות',
    'יוצר חוויות דיגיטליות'
];

function switchLanguage() {
    if (currentLang === 'he') {
        // Switch to English
        currentLang = 'en';
        document.documentElement.setAttribute('lang', 'en');
        document.documentElement.setAttribute('dir', 'ltr');
        langToggle.querySelector('.lang-text').textContent = 'HE';
        
        // Update all elements with data-en attribute
        document.querySelectorAll('[data-en]').forEach(element => {
            const englishText = element.getAttribute('data-en');
            element.setAttribute('data-he', element.textContent);
            element.textContent = englishText;
        });
        
        // Update placeholders
        document.querySelectorAll('[data-placeholder-en]').forEach(element => {
            const englishPlaceholder = element.getAttribute('data-placeholder-en');
            element.setAttribute('data-placeholder-he', element.placeholder);
            element.placeholder = englishPlaceholder;
        });
        
        // Update typing texts
        texts.length = 0;
        texts.push(...textsEn);
        textIndex = 0;
        charIndex = 0;
        isDeleting = false;
        
        // Update name prefix
        const nameSpan = document.querySelector('[data-en-start]');
        if (nameSpan) {
            nameSpan.textContent = 'Hello, I\'m ';
        }
        
        // Update loader text
        const loaderText = document.querySelector('.loader-text');
        if (loaderText) {
            loaderText.textContent = 'Loading...';
        }
        
    } else {
        // Switch to Hebrew
        currentLang = 'he';
        document.documentElement.setAttribute('lang', 'he');
        document.documentElement.setAttribute('dir', 'rtl');
        langToggle.querySelector('.lang-text').textContent = 'EN';
        
        // Restore Hebrew text
        document.querySelectorAll('[data-he]').forEach(element => {
            const hebrewText = element.getAttribute('data-he');
            element.textContent = hebrewText;
        });
        
        // Restore Hebrew placeholders
        document.querySelectorAll('[data-placeholder-he]').forEach(element => {
            const hebrewPlaceholder = element.getAttribute('data-placeholder-he');
            element.placeholder = hebrewPlaceholder;
        });
        
        // Update typing texts
        texts.length = 0;
        texts.push(...textsHe);
        textIndex = 0;
        charIndex = 0;
        isDeleting = false;
        
        // Update name prefix
        const nameSpan = document.querySelector('[data-en-start]');
        if (nameSpan) {
            nameSpan.textContent = 'שלום, אני ';
        }
        
        // Update loader text
        const loaderText = document.querySelector('.loader-text');
        if (loaderText) {
            loaderText.textContent = 'טוען...';
        }
    }
    
    // Save language preference
    localStorage.setItem('language', currentLang);
}

langToggle.addEventListener('click', switchLanguage);

// Load saved language preference
const savedLang = localStorage.getItem('language');
if (savedLang === 'en') {
    switchLanguage();
}

// =========================
// SCROLL ANIMATIONS
// =========================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(section);
});

// =========================
// SMOOTH SCROLL FOR NAVIGATION
// =========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// =========================
// ACTIVE NAV LINK HIGHLIGHT
// =========================
const sections = document.querySelectorAll('section[id]');

function highlightNavLink() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLink?.classList.add('active');
        } else {
            navLink?.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', highlightNavLink);

// =========================
// PARALLAX EFFECT - DISABLED
// =========================
// Parallax effect removed - hero section should scroll normally

// =========================
// CURSOR GLOW EFFECT
// =========================
const cursorGlow = document.createElement('div');
cursorGlow.style.cssText = `
    position: fixed;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%);
    pointer-events: none;
    transform: translate(-50%, -50%);
    transition: opacity 0.3s ease;
    z-index: 9999;
    opacity: 0;
    filter: blur(40px);
`;
document.body.appendChild(cursorGlow);

let mouseX = 0, mouseY = 0;
let glowX = 0, glowY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursorGlow.style.opacity = '1';
});

document.addEventListener('mouseleave', () => {
    cursorGlow.style.opacity = '0';
});

function animateCursorGlow() {
    glowX += (mouseX - glowX) * 0.1;
    glowY += (mouseY - glowY) * 0.1;
    
    cursorGlow.style.left = glowX + 'px';
    cursorGlow.style.top = glowY + 'px';
    
    requestAnimationFrame(animateCursorGlow);
}

animateCursorGlow();

// =========================
// EASTER EGG - Konami Code
// =========================
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let easterEggTriggered = false;

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode.splice(-konamiSequence.length - 1, konamiCode.length - konamiSequence.length);
    
    if (konamiCode.join('').includes(konamiSequence.join('')) && !easterEggTriggered) {
        showEasterEgg();
        easterEggTriggered = true;
    }
});

// Secret word Easter Egg
let typedWord = '';
const secretWord = 'nexora';
const secretTimeout = setTimeout(() => {}, 0);

document.addEventListener('keypress', (e) => {
    typedWord += e.key.toLowerCase();
    
    if (typedWord.length > secretWord.length) {
        typedWord = typedWord.slice(-secretWord.length);
    }
    
    if (typedWord === secretWord) {
        showEasterEgg();
        typedWord = '';
    }
    
    clearTimeout(secretTimeout);
});

function showEasterEgg() {
    const easterEggMessage = document.getElementById('easterEggMessage');
    easterEggMessage.classList.add('active');
    
    // Trigger confetti
    setTimeout(() => {
        triggerConfetti();
    }, 300);
    
    // Play a sound (optional - commented out)
    // const audio = new Audio('path/to/celebration-sound.mp3');
    // audio.play();
}

function closeEasterEgg() {
    const easterEggMessage = document.getElementById('easterEggMessage');
    easterEggMessage.classList.remove('active');
    setTimeout(() => {
        easterEggTriggered = false;
    }, 1000);
}

// Triple click on logo Easter Egg
const navBrand = document.querySelector('.nav-brand');
let clickCount = 0;
let clickTimer;

navBrand.addEventListener('click', () => {
    clickCount++;
    
    if (clickCount === 1) {
        clickTimer = setTimeout(() => {
            clickCount = 0;
        }, 500);
    } else if (clickCount === 3) {
        clearTimeout(clickTimer);
        clickCount = 0;
        showEasterEgg();
    }
});

// =========================
// BLOG ARTICLES MODAL
// =========================

const articleData = {
    erp: {
        title: 'בניית ERP מבוסס AI: שילוב צ\'אטבוט עם נתוני עסק',
        titleEn: 'Building an AI-Powered ERP: Integrating Chatbot with Business Data',
        date: 'ינואר 2025',
        dateEn: 'January 2025',
        readTime: '8 דקות קריאה',
        readTimeEn: '8 min read',
        content: `
            <h2>האתגר</h2>
            <p>בניית מערכת ERP מודולרית שתוכל לנהל את כל תהליכי העסק - מעובדים ושכר, דרך מלאי ורכש, ועד מכירות וחתימות דיגיטליות. האתגר האמיתי? להפוך את כל המידע הזה לנגיש ושימושי באמצעות צ'אטבוט מבוסס בינה מלאכותית.</p>
            
            <h2>הארכיטקטורה</h2>
            <p>בחרתי ב-Node.js ו-Express כשרת הבקאנד בגלל גמישותם ויכולתם להתמודד עם חיבורים מרובים בו זמנית. MongoDB שימש כמסד הנתונים הראשי, מה שאפשר לי מבנה דינמי ויכולת scale גבוהה.</p>
            
            <div class="article-highlight">
                <p><strong>טיפ חשוב:</strong> בעבודה עם מערכות ERP, חיוני לתכנן מראש את מבנה הנתונים. שינויים במבנה ה-Schema יכולים להיות מאוד יקרים בשלב מאוחר.</p>
            </div>
            
            <h3>מודולים עיקריים שפיתחתי:</h3>
            <ul>
                <li><strong>ניהול עובדים:</strong> מעקב אחר נוכחות, שעות עבודה, ותפקידים</li>
                <li><strong>מערכת שכר:</strong> חישובים אוטומטיים, ניכויים והפקת תלושים</li>
                <li><strong>ניהול מלאי:</strong> מעקב בזמן אמת, התראות על מלאי נמוך</li>
                <li><strong>מערכת רכש:</strong> ניהול ספקים, הזמנות ואישורים</li>
                <li><strong>חתימות דיגיטליות:</strong> אינטגרציה עם שירותי חתימה אלקטרונית</li>
            </ul>
            
            <h2>צ'אטבוט מבוסס AI</h2>
            <p>החלק המעניין ביותר בפרויקט היה שילוב הצ'אטבוט. השתמשתי ב-API של OpenAI כדי ליצור בוט שיכול:</p>
            
            <ul>
                <li>לענות על שאלות על מצב העסק</li>
                <li>לספק תחזיות מבוססות נתונים היסטוריים</li>
                <li>להציג דוחות בפורמט קריא</li>
                <li>להמליץ על פעולות לשיפור</li>
            </ul>
            
            <h2>עדכונים בזמן אמת עם Socket.io</h2>
            <p>כדי שהמערכת תהיה באמת שימושית, הוספתי עדכונים בזמן אמת באמצעות Socket.io. כל שינוי במלאי, הזמנה חדשה, או עדכון במערכת - משודר מיידית לכל המשתמשים המחוברים.</p>
            
            <h2>אוטומציה עם Cron Jobs</h2>
            <p>הגדרתי משימות מתוזמנות שרצות באופן אוטומטי:</p>
            <ul>
                <li>דוחות יומיים בשעה 23:00</li>
                <li>גיבוי אוטומטי של מסד הנתונים</li>
                <li>התראות על משימות ממתינות</li>
                <li>ניקוי logs ישנים</li>
            </ul>
            
            <h2>התוצאות</h2>
            <p>המערכת הצליחה לרכז את כל תהליכי העסק בפלטפורמה אחת, להפחית זמני עיבוד ב-60%, ולספק למנהלים תובנות עסקיות בזמן אמת דרך הצ'אטבוט.</p>
            
            <h3>טכנולוגיות שהשתמשתי בהן:</h3>
            <div class="modal-tags">
                <span class="tag">Node.js</span>
                <span class="tag">Express</span>
                <span class="tag">MongoDB</span>
                <span class="tag">React</span>
                <span class="tag">Socket.io</span>
                <span class="tag">OpenAI API</span>
                <span class="tag">Cron Jobs</span>
            </div>
        `,
        contentEn: `
            <h2>The Challenge</h2>
            <p>Building a modular ERP system capable of managing all business processes - from employees and payroll, through inventory and purchasing, to sales and digital signatures. The real challenge? Making all this information accessible and useful through an AI-powered chatbot.</p>
            
            <h2>The Architecture</h2>
            <p>I chose Node.js and Express as the backend server due to their flexibility and ability to handle multiple concurrent connections. MongoDB served as the main database, allowing me a dynamic structure and high scalability.</p>
            
            <div class="article-highlight">
                <p><strong>Important Tip:</strong> When working with ERP systems, it's crucial to plan the data structure in advance. Schema changes can be very expensive at a later stage.</p>
            </div>
            
            <h3>Main Modules I Developed:</h3>
            <ul>
                <li><strong>Employee Management:</strong> Tracking attendance, work hours, and roles</li>
                <li><strong>Payroll System:</strong> Automatic calculations, deductions, and payslip generation</li>
                <li><strong>Inventory Management:</strong> Real-time tracking, low stock alerts</li>
                <li><strong>Purchasing System:</strong> Supplier management, orders, and approvals</li>
                <li><strong>Digital Signatures:</strong> Integration with e-signature services</li>
            </ul>
            
            <h2>AI-Powered Chatbot</h2>
            <p>The most interesting part of the project was integrating the chatbot. I used OpenAI's API to create a bot that can:</p>
            
            <ul>
                <li>Answer questions about business status</li>
                <li>Provide forecasts based on historical data</li>
                <li>Display reports in a readable format</li>
                <li>Recommend actions for improvement</li>
            </ul>
            
            <h2>Real-Time Updates with Socket.io</h2>
            <p>To make the system truly useful, I added real-time updates using Socket.io. Every inventory change, new order, or system update - is instantly broadcast to all connected users.</p>
            
            <h2>Automation with Cron Jobs</h2>
            <p>I set up scheduled tasks that run automatically:</p>
            <ul>
                <li>Daily reports at 11:00 PM</li>
                <li>Automatic database backups</li>
                <li>Alerts for pending tasks</li>
                <li>Cleaning old logs</li>
            </ul>
            
            <h2>Results</h2>
            <p>The system successfully centralized all business processes on one platform, reduced processing times by 60%, and provided managers with real-time business insights through the chatbot.</p>
            
            <h3>Technologies Used:</h3>
            <div class="modal-tags">
                <span class="tag">Node.js</span>
                <span class="tag">Express</span>
                <span class="tag">MongoDB</span>
                <span class="tag">React</span>
                <span class="tag">Socket.io</span>
                <span class="tag">OpenAI API</span>
                <span class="tag">Cron Jobs</span>
            </div>
        `
    },
    delivery: {
        title: 'אופטימיזציה של מסלולי משלוחים: ASP.NET ואלגוריתמים גיאוגרפיים',
        titleEn: 'Optimizing Delivery Routes: ASP.NET & Geo-Algorithms',
        date: 'דצמבר 2024',
        dateEn: 'December 2024',
        readTime: '6 דקות קריאה',
        readTimeEn: '6 min read',
        content: `
            <h2>הרקע</h2>
            <p>חברת שליחויות פנתה אליי עם בעיה: הם ניהלו את כל המשלוחים באקסל ובנייר, וזה גרם לבלגן, איבודי משלוחים וחוסר יעילות. הם היו זקוקים למערכת ממוחשבת מקיפה.</p>
            
            <h2>האתגר הטכני</h2>
            <p>הדרישה המרכזית הייתה ליצור אלגוריתם שיכול לחלק משלוחים אוטומטית לפי אזורים גיאוגרפיים ולהקצות אותם לנהגים בצורה אופטימלית. זה דרש:</p>
            
            <ul>
                <li>עבודה עם נתונים גיאוגרפיים (קואורדינטות, מרחקים)</li>
                <li>אלגוריתמים לאופטימיזציה של מסלולים</li>
                <li>ממשקים שונים לכל סוג משתמש</li>
                <li>מעקב בזמן אמת אחר סטטוס משלוחים</li>
            </ul>
            
            <h2>הטכנולוגיות</h2>
            <p>בחרתי ב-ASP.NET MVC מכיוון שהלקוח כבר עבד עם סביבת Windows Server. Entity Framework אפשר לי לעבוד עם SQL Server בצורה נוחה ויעילה.</p>
            
            <h3>מבנה המערכת:</h3>
            
            <h3>1. ממשק מנהלים</h3>
            <ul>
                <li>הוספת משלוחים חדשים</li>
                <li>חלוקה אוטומטית לאזורים</li>
                <li>הקצאת נהגים</li>
                <li>הפקת דוחות מפורטים</li>
                <li>מעקב ביצועים</li>
            </ul>
            
            <h3>2. ממשק נהגים</h3>
            <ul>
                <li>רשימת משלוחים ליום</li>
                <li>ניווט אופטימלי (אינטגרציה עם Waze/Google Maps)</li>
                <li>עדכון סטטוס משלוח</li>
                <li>חתימות דיגיטליות של לקוחות</li>
            </ul>
            
            <h3>3. ממשק לקוחות</h3>
            <ul>
                <li>מעקב אחר המשלוח בזמן אמת</li>
                <li>הודעות SMS/Email אוטומטיות</li>
                <li>היסטוריית משלוחים</li>
            </ul>
            
            <h2>האלגוריתם לחלוקת משלוחים</h2>
            <p>פיתחתי אלגוריתם שמחלק משלוחים לפי:</p>
            <ol>
                <li>קירבה גיאוגרפית (Haversine formula למרחקים)</li>
                <li>עומס נוכחי של נהגים</li>
                <li>דחיפות המשלוח</li>
                <li>גודל המשלוח ויכולת הרכב</li>
            </ol>
            
            <div class="article-highlight">
                <p><strong>לקח חשוב:</strong> אופטימיזציה מוקדמת היא שורש כל הרעות. התחלתי עם אלגוריתם פשוט ושיפרתי אותו בהדרגה על בסיס נתונים אמיתיים.</p>
            </div>
            
            <h2>התוצאות</h2>
            <ul>
                <li>הפחתה של 40% בזמן חלוקת המשלוחים</li>
                <li>שיפור של 35% ביעילות הנהגים</li>
                <li>ירידה של 90% בטעויות ואיבודי משלוחים</li>
                <li>חיסכון משמעותי בעלויות תפעול</li>
            </ul>
            
            <h3>טכנולוגיות:</h3>
            <div class="modal-tags">
                <span class="tag">ASP.NET MVC</span>
                <span class="tag">C#</span>
                <span class="tag">Entity Framework</span>
                <span class="tag">SQL Server</span>
                <span class="tag">JavaScript</span>
                <span class="tag">Google Maps API</span>
            </div>
        `,
        contentEn: `
            <h2>The Background</h2>
            <p>A delivery company approached me with a problem: they managed all deliveries with Excel and paper, causing chaos, lost packages, and inefficiency. They needed a comprehensive computerized system.</p>
            
            <h2>The Technical Challenge</h2>
            <p>The main requirement was to create an algorithm that could automatically divide deliveries by geographic areas and assign them to drivers optimally. This required:</p>
            
            <ul>
                <li>Working with geographic data (coordinates, distances)</li>
                <li>Route optimization algorithms</li>
                <li>Different interfaces for each user type</li>
                <li>Real-time tracking of delivery status</li>
            </ul>
            
            <h2>The Technologies</h2>
            <p>I chose ASP.NET MVC because the client already worked with Windows Server environment. Entity Framework allowed me to work with SQL Server conveniently and efficiently.</p>
            
            <h3>System Structure:</h3>
            
            <h3>1. Manager Interface</h3>
            <ul>
                <li>Adding new deliveries</li>
                <li>Automatic area division</li>
                <li>Driver assignment</li>
                <li>Detailed report generation</li>
                <li>Performance tracking</li>
            </ul>
            
            <h3>2. Driver Interface</h3>
            <ul>
                <li>Daily delivery list</li>
                <li>Optimal navigation (Waze/Google Maps integration)</li>
                <li>Delivery status updates</li>
                <li>Digital customer signatures</li>
            </ul>
            
            <h3>3. Customer Interface</h3>
            <ul>
                <li>Real-time delivery tracking</li>
                <li>Automatic SMS/Email notifications</li>
                <li>Delivery history</li>
            </ul>
            
            <h2>The Delivery Distribution Algorithm</h2>
            <p>I developed an algorithm that divides deliveries by:</p>
            <ol>
                <li>Geographic proximity (Haversine formula for distances)</li>
                <li>Current driver load</li>
                <li>Delivery urgency</li>
                <li>Package size and vehicle capacity</li>
            </ol>
            
            <div class="article-highlight">
                <p><strong>Important Lesson:</strong> Premature optimization is the root of all evil. I started with a simple algorithm and gradually improved it based on real data.</p>
            </div>
            
            <h2>Results</h2>
            <ul>
                <li>40% reduction in delivery distribution time</li>
                <li>35% improvement in driver efficiency</li>
                <li>90% decrease in errors and lost deliveries</li>
                <li>Significant savings in operational costs</li>
            </ul>
            
            <h3>Technologies:</h3>
            <div class="modal-tags">
                <span class="tag">ASP.NET MVC</span>
                <span class="tag">C#</span>
                <span class="tag">Entity Framework</span>
                <span class="tag">SQL Server</span>
                <span class="tag">JavaScript</span>
                <span class="tag">Google Maps API</span>
            </div>
        `
    },
    restaurant: {
        title: 'ממונוליט למיקרו-שירותים: מסע פלטפורמת המסעדות',
        titleEn: 'From Monolith to Microservices: Restaurant Platform Journey',
        date: 'נובמבר 2024',
        dateEn: 'November 2024',
        readTime: '7 דקות קריאה',
        readTimeEn: '7 min read',
        content: `
            <h2>הרעיון</h2>
            <p>ליצור פלטפורמה שתאפשר ללקוחות להזמין שולחנות ומנות באופן דיגיטלי, עם חוויית משתמש אינטואיטיבית ועדכונים בזמן אמת. המטרה: להחליף את התהליך המסורבל של שיחות טלפון ופנקסי הזמנות.</p>
            
            <h2>Stack הטכנולוגי</h2>
            <p>בחרתי ב-MERN Stack (MongoDB, Express, React, Node.js) מכיוון שהוא מושלם לאפליקציות real-time ומאפשר פיתוח מהיר:</p>
            
            <ul>
                <li><strong>React:</strong> ממשק משתמש דינמי ורספונסיבי</li>
                <li><strong>Node.js + Express:</strong> API מהיר ויעיל</li>
                <li><strong>MongoDB:</strong> גמישות במבנה הנתונים</li>
                <li><strong>Socket.io:</strong> עדכונים בזמן אמת</li>
            </ul>
            
            <h2>תכונות עיקריות שפיתחתי</h2>
            
            <h3>1. הזמנת שולחנות בזמן אמת</h3>
            <p>המערכת מציגה זמינות שולחנות בזמן אמת. כאשר מישהו מזמין שולחן, כל המשתמשים האחרים רואים מיידית שהוא תפוס. השתמשתי ב-WebSocket כדי לסנכרן את המידע.</p>
            
            <h3>2. מערכת הזמנות מנות</h3>
            <ul>
                <li>תפריט דינמי עם תמונות</li>
                <li>עגלת קניות אינטראקטיבית</li>
                <li>התאמות אישיות (אלרגיות, העדפות)</li>
                <li>חישוב מחיר בזמן אמת</li>
            </ul>
            
            <h3>3. מערכת תשלומים</h3>
            <p>אינטגרציה מאובטחת עם שערי תשלום. כל הנתונים מוצפנים ב-HTTPS, והשתמשתי ב-JWT לאימות משתמשים.</p>
            
            <h2>האתגרים</h2>
            
            <h3>סנכרון בזמן אמת</h3>
            <p>האתגר הגדול ביותר היה לוודא שכל המשתמשים רואים מידע מעודכן. פתרתי את זה עם:</p>
            <ul>
                <li>Socket.io rooms לכל מסעדה</li>
                <li>Event emitters לשינויים בזמינות</li>
                <li>Optimistic UI updates עם rollback במקרה של שגיאה</li>
            </ul>
            
            <h3>אופטימיזציה של MongoDB</h3>
            <p>יצרתי indexes על שדות שמשתמשים בהם לעתים קרובות:</p>
            <ul>
                <li>Restaurant ID + Date לשאילתות זמינות</li>
                <li>User ID לשליפת הזמנות</li>
                <li>Status לפילטור הזמנות פעילות</li>
            </ul>
            
            <div class="article-highlight">
                <p><strong>טיפ מקצועי:</strong> תמיד בדוק את ה-query performance עם <code>explain()</code> ב-MongoDB. גיליתי שאילתות שלקחו 2 שניות במקום 50ms!</p>
            </div>
            
            <h2>ממשק משתמש רספונסיבי</h2>
            <p>התמקדתי ב-UX מושלם:</p>
            <ul>
                <li>עיצוב Mobile-First</li>
                <li>אנימציות חלקות ב-CSS</li>
                <li>Loading states לכל פעולה</li>
                <li>Error handling ידידותי</li>
            </ul>
            
            <h2>התוצאות</h2>
            <ul>
                <li>50 מסעדות משתמשות בפלטפורמה</li>
                <li>1,000+ הזמנות ביום</li>
                <li>דירוג 4.8/5 מלקוחות</li>
                <li>הפחתה של 70% בטעויות הזמנות</li>
            </ul>
            
            <h3>טכנולוגיות:</h3>
            <div class="modal-tags">
                <span class="tag">React</span>
                <span class="tag">Node.js</span>
                <span class="tag">Express</span>
                <span class="tag">MongoDB</span>
                <span class="tag">Socket.io</span>
                <span class="tag">JWT</span>
                <span class="tag">Stripe</span>
            </div>
        `,
        contentEn: `
            <h2>The Background</h2>
            <p>A delivery company approached me with a problem: they managed all deliveries with Excel and paper, causing chaos, lost packages, and inefficiency. They needed a comprehensive computerized system.</p>
            
            <h2>The Technical Challenge</h2>
            <p>The main requirement was to create an algorithm that could automatically divide deliveries by geographic areas and assign them to drivers optimally. This required:</p>
            
            <ul>
                <li>Working with geographic data (coordinates, distances)</li>
                <li>Route optimization algorithms</li>
                <li>Different interfaces for each user type</li>
                <li>Real-time delivery status tracking</li>
            </ul>
            
            <h2>Technologies</h2>
            <p>I chose ASP.NET MVC because the client already worked with Windows Server environment. Entity Framework allowed me to work with SQL Server conveniently and efficiently.</p>
            
            <h3>System Structure:</h3>
            
            <h3>1. Manager Interface</h3>
            <ul>
                <li>Adding new deliveries</li>
                <li>Automatic area division</li>
                <li>Driver assignment</li>
                <li>Detailed report generation</li>
                <li>Performance tracking</li>
            </ul>
            
            <h3>2. Driver Interface</h3>
            <ul>
                <li>Daily delivery list</li>
                <li>Optimal navigation (Waze/Google Maps integration)</li>
                <li>Delivery status updates</li>
                <li>Digital customer signatures</li>
            </ul>
            
            <h3>3. Customer Interface</h3>
            <ul>
                <li>Real-time delivery tracking</li>
                <li>Automatic SMS/Email notifications</li>
                <li>Delivery history</li>
            </ul>
            
            <h2>The Delivery Distribution Algorithm</h2>
            <p>I developed an algorithm that divides deliveries by:</p>
            <ol>
                <li>Geographic proximity (Haversine formula for distances)</li>
                <li>Current driver load</li>
                <li>Delivery urgency</li>
                <li>Package size and vehicle capacity</li>
            </ol>
            
            <div class="article-highlight">
                <p><strong>Professional Tip:</strong> Always check query performance with <code>explain()</code> in MongoDB. I found queries that took 2 seconds instead of 50ms!</p>
            </div>
            
            <h2>Results</h2>
            <ul>
                <li>40% reduction in delivery distribution time</li>
                <li>35% improvement in driver efficiency</li>
                <li>90% decrease in errors and lost deliveries</li>
                <li>Significant savings in operational costs</li>
            </ul>
            
            <h3>Technologies:</h3>
            <div class="modal-tags">
                <span class="tag">ASP.NET MVC</span>
                <span class="tag">C#</span>
                <span class="tag">Entity Framework</span>
                <span class="tag">SQL Server</span>
                <span class="tag">JavaScript</span>
                <span class="tag">Google Maps API</span>
            </div>
        `
    }
};

function openArticleModal(articleId) {
    const modal = document.getElementById('articleModal');
    const modalBody = document.getElementById('articleModalBody');
    const article = articleData[articleId];
    
    if (!article) return;
    
    const isEnglish = currentLang === 'en';
    const title = isEnglish ? article.titleEn : article.title;
    const date = isEnglish ? article.dateEn : article.date;
    const readTime = isEnglish ? article.readTimeEn : article.readTime;
    const content = isEnglish ? article.contentEn : article.content;
    
    modalBody.innerHTML = `
        <h1>${title}</h1>
        <div class="article-meta">
            <span><i class="far fa-calendar"></i> ${date}</span>
            <span><i class="far fa-clock"></i> ${readTime}</span>
        </div>
        ${content}
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeArticleModal() {
    const modal = document.getElementById('articleModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeArticleModal();
    }
});

// =========================
// HIRE ME CTA INTERACTION
// =========================
const hireBtn = document.querySelector('.btn-hire');

if (hireBtn) {
    hireBtn.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Scroll to contact section
        const contactSection = document.getElementById('contact');
        contactSection.scrollIntoView({ behavior: 'smooth' });
        
        // Add special highlight effect
        setTimeout(() => {
            contactSection.style.animation = 'highlight-section 1s ease';
            setTimeout(() => {
                contactSection.style.animation = '';
            }, 1000);
        }, 500);
    });
}

// Add highlight animation CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes highlight-section {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.02); }
    }
`;
document.head.appendChild(style);

// =========================
// SPECIAL EFFECTS ON HOVER
// =========================

// Name hover Easter Egg
const dynamicName = document.getElementById('dynamicName');
let hoverTimeout;
let hoverDuration = 0;

if (dynamicName) {
    dynamicName.addEventListener('mouseenter', () => {
        hoverTimeout = setInterval(() => {
            hoverDuration += 100;
            if (hoverDuration >= 10000) { // 10 seconds
                clearInterval(hoverTimeout);
                showEasterEgg();
                hoverDuration = 0;
            }
        }, 100);
    });
    
    dynamicName.addEventListener('mouseleave', () => {
        clearInterval(hoverTimeout);
        hoverDuration = 0;
    });
}

console.log('Portfolio loaded successfully! 🚀✨');
console.log('💡 Easter Eggs:');
console.log('1. Type "nexora" anywhere on the page');
console.log('2. Konami Code: ↑ ↑ ↓ ↓ ← → ← → B A');
console.log('3. Triple click on the logo');
console.log('4. Hover on your name for 10 seconds');
