export const portfolioData = {
    meta: {
        name: 'Jomarie T. Travilla',
        title: 'Jomarie Travilla | Full Stack Developer',
        description: '3rd Year BS Computer Science student at the University of Mindanao and junior full-stack developer based in Davao City. Building clean, functional, and production-ready web applications.',
    },

    hero: {
        name: 'Jomarie T. Travilla',
        location: 'Davao City, Philippines',
        tagline: 'I build real things with AI-assisted code — and I actually understand what I ship.',
        resumeUrl: '/resume.html',
        profileImage: '/images/ID picture.png',
    },

    socials: [
        { name: 'GitHub', url: 'https://github.com/jtravilla546512-netizen', icon: 'github' },
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/jomarie-travilla-6813b822a/', icon: 'linkedin' },
        { name: 'Instagram', url: 'https://www.instagram.com/jomztravilla', icon: 'instagram' },
        { name: 'Email', url: 'mailto:jomtravilla.dev@gmail.com', icon: 'mail' },
    ],

    about: {
        bio: "I'm a 3rd-year Bachelor of Science in Computer Science student at the University of Mindanao and a junior full-stack developer. I build web applications with intention — combining strong programming fundamentals with modern frameworks and tools to deliver clean, functional, and production-ready software.\n\nWith 4+ years of hands-on experience across Java, Python, PHP, JavaScript, SQL, and Laravel, I have built everything from full-stack service management systems to mobile applications and algorithm simulations. I am currently seeking an internship where I can contribute meaningfully, grow alongside experienced professionals, and put my skills to work in a real-world environment.",
        yearsCoding: '4+',
        projectsBuilt: '4+',
        certificationsEarned: '5+',
        learning: 'Flutter + Dart + Advanced Laravel Patterns',
    },

    skills: {
        'Frontend': [
            { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
            { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
            { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
            { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
            { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
        ],
        'Backend': [
            { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
            { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
            { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
            { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
            { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        ],
        'Mobile & Tools': [
            { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
            { name: 'Dart', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg' },
            { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
            { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
        ],
    },

    projects: [
        {
            featured: true,
            title: 'CoolMasterSpecialist',
            description: 'A full-stack appliance repair service management system with 7 integrated subsystems: bookings, POS, inventory, customer management, technician management, analytics, and PDF reports. Built for a real business and deployed live.',
            stack: ['Laravel', 'PHP', 'Tailwind', 'MySQL', 'JavaScript', 'Vite'],
            image: '/images/coolmaster.png',
            liveUrl: 'https://coolmasterspecialist.page',
            repoUrl: 'https://github.com/jtravilla546512-netizen/SoftEng2',
        },
        {
            featured: true,
            title: 'Honda Click 125i CVT Tuning Simulator',
            description: 'An interactive browser-based simulator for tuning the Honda Click 125i CVT. Adjust flyball weight, pulley angles, spring stiffness, tire size, and rider weight — then see live charts for top speed, 0–60 km/h time, and RPM-vs-speed curves, plus a Canvas animation of the pulleys and belt. Built with a pure JS physics engine and shareable configurations via URL hash.',
            stack: ['Vue 3', 'Vite', 'Chart.js', 'JavaScript', 'Canvas API'],
            image: '/images/project-placeholder.svg',
            liveUrl: 'https://honda-click-cvt-tune.vercel.app/',
            repoUrl: 'https://github.com/jtravilla546512-netizen/Honda-Click-CVT-Tune',
        },
        {
            featured: false,
            title: 'Bridge Simulation',
            description: 'A deterministic bridge algorithm simulation built in Python — exploring graph traversal and computational logic. A pure problem-solving project focused on clean thinking in code. Desktop application, not web-deployed.',
            stack: ['Python'],
            image: '/images/project-placeholder.svg',
            liveUrl: null,
            repoUrl: 'https://github.com/jtravilla546512-netizen/Bridge-Simulation',
        },
        {
            featured: false,
            title: 'Spotnik',
            description: 'A Spotify-inspired music application built with Flutter and Dart for mobile. Browse, play, and discover music with a sleek mobile-first design. Built to explore mobile UX patterns and media playback. Not web-deployed — mobile/desktop app.',
            stack: ['Flutter', 'Dart', 'Python'],
            image: '/images/project-placeholder.svg',
            liveUrl: null,
            repoUrl: 'https://github.com/jtravilla546512-netizen/Spotnik',
        },
    ],

    experience: [
        {
            year: '2021',
            title: 'Hello World',
            company: 'Self-Taught',
            description: 'Wrote my first lines of code. Java was the language that started it all — and it set the foundation for everything that followed.',
        },
        {
            year: 'Aug 2023 – Present',
            title: 'BS Computer Science Student',
            company: 'University of Mindanao',
            description: 'Currently a 3rd year CS student building a strong foundation in algorithms, data structures, software engineering, and machine learning. Entering 4th year in August 2026.',
        },
        {
            year: '2025',
            title: 'Started Building Real Projects',
            company: 'Self-Directed',
            description: 'Began developing full-stack applications independently — combining classroom knowledge with hands-on product thinking and AI-assisted development.',
        },
        {
            year: '2025',
            title: 'Deployed First Live Project',
            company: 'CoolMasterSpecialist',
            description: 'Successfully designed, built, and deployed a full production-grade service management system with POS, inventory, and analytics for a real business.',
        },
        {
            year: 'Aug 2026',
            title: 'Entering 4th Year',
            company: 'University of Mindanao',
            description: 'Advancing to 4th year BS Computer Science while actively seeking an internship to apply skills in a professional setting and grow as a developer.',
        },
    ],

    certifications: [
        {
            name: 'Cybersecurity',
            issuer: 'Cisco Networking Academy',
            date: '2026',
            thumbnail: '/images/Cybersecurity.png',
            image: '/images/Cybersecurity.png',
        },
        {
            name: 'Databases',
            issuer: 'Cisco Networking Academy',
            date: '2025',
            thumbnail: '/images/Databases.png',
            image: '/images/Databases.png',
        },
        {
            name: 'Network Security',
            issuer: 'Cisco Networking Academy',
            date: '2026',
            thumbnail: '/images/Network Security.png',
            image: '/images/Network Security.png',
        },
        {
            name: 'Python Essentials',
            issuer: 'Cisco Networking Academy',
            date: '2021',
            thumbnail: '/images/python.png',
            image: '/images/python.png',
        },
        {
            name: 'Python Basics',
            issuer: 'Cisco Networking Academy',
            date: '2021',
            thumbnail: '/images/python basics.png',
            image: '/images/python basics.png',
        },
    ],

    contact: {
        email: 'jomtravilla.dev@gmail.com',
        location: '09482414092 · Davao City, Philippines',
        responseTime: 'Usually replies within 1 hour',
        // EmailJS credentials — replace with your own from emailjs.com
        emailjsServiceId: 'service_w5glxpw',
        emailjsTemplateId: 'template_ez6wpog',
        emailjsPublicKey: 'PvELUkjaU2EZwa4y1',
    },
};
