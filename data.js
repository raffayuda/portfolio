// Data for portfolio projects and skills
const portfolioData = {
    // Personal Information
    personal: {
        name: "Raffa Yuda Pratama",
        title: "Junior Web Developer",
        email: "raffa.yuda@example.com",
        phone: "+62 123 456 789",
        location: "Indonesia",
        description: "Passionate junior web developer dengan semangat untuk menciptakan pengalaman web yang luar biasa menggunakan teknologi terkini.",
        about: "Saya adalah seorang junior web developer yang bersemangat dalam menciptakan website dan aplikasi web yang inovatif. Dengan latar belakang yang kuat dalam front-end development, saya senang mengubah ide-ide kreatif menjadi kenyataan digital."
    },

    // Typing animation texts
    typingTexts: [
        "Junior Web Developer",
        "Frontend Enthusiast", 
        "UI/UX Designer",
        "Problem Solver",
        "Creative Thinker"
    ],

    // Skills data
    skills: {
        frontend: [
            { name: "HTML5", percentage: 90, icon: "fab fa-html5" },
            { name: "CSS3", percentage: 85, icon: "fab fa-css3-alt" },
            { name: "JavaScript", percentage: 80, icon: "fab fa-js-square" },
            { name: "Tailwind CSS", percentage: 88, icon: "fas fa-palette" }
        ],
        frameworks: [
            { name: "React", percentage: 75, icon: "fab fa-react" },
            { name: "Vue.js", percentage: 70, icon: "fab fa-vuejs" },
            { name: "Next.js", percentage: 65, icon: "fas fa-layer-group" },
            { name: "Bootstrap", percentage: 82, icon: "fab fa-bootstrap" }
        ],
        tools: [
            { name: "Git", percentage: 85, icon: "fab fa-git-alt" },
            { name: "VS Code", percentage: 90, icon: "fas fa-code" },
            { name: "Figma", percentage: 75, icon: "fab fa-figma" },
            { name: "Photoshop", percentage: 70, icon: "fas fa-image" }
        ]
    },

    // Projects data
    projects: [
        {
            id: 1,
            title: "E-Commerce Website",
            description: "Modern e-commerce platform dengan fitur lengkap seperti shopping cart, payment gateway, dan admin dashboard.",
            image: {
                icon: "fas fa-shopping-cart",
                gradient: "from-purple-400 to-blue-500"
            },
            technologies: ["React", "Tailwind", "Node.js"],
            links: {
                demo: "#",
                github: "#"
            },
            featured: true
        },
        {
            id: 2,
            title: "Task Management App",
            description: "Aplikasi manajemen tugas dengan drag & drop, real-time notifications, dan kolaborasi tim.",
            image: {
                icon: "fas fa-tasks",
                gradient: "from-green-400 to-blue-500"
            },
            technologies: ["Vue.js", "CSS3", "JavaScript"],
            links: {
                demo: "#",
                github: "#"
            },
            featured: true
        },
        {
            id: 3,
            title: "Analytics Dashboard",
            description: "Dashboard analitik dengan visualisasi data interaktif, real-time charts, dan reporting system.",
            image: {
                icon: "fas fa-chart-line",
                gradient: "from-pink-400 to-red-500"
            },
            technologies: ["React", "Chart.js", "Express"],
            links: {
                demo: "#",
                github: "#"
            },
            featured: true
        },
        {
            id: 4,
            title: "Weather App",
            description: "Aplikasi cuaca dengan API integration, geolocation, dan forecast 7 hari ke depan.",
            image: {
                icon: "fas fa-cloud-sun",
                gradient: "from-blue-400 to-indigo-500"
            },
            technologies: ["JavaScript", "API", "CSS3"],
            links: {
                demo: "#",
                github: "#"
            },
            featured: false
        },
        {
            id: 5,
            title: "Blog Platform",
            description: "Platform blog dengan CMS, rich text editor, dan sistem komentar yang interaktif.",
            image: {
                icon: "fas fa-blog",
                gradient: "from-yellow-400 to-orange-500"
            },
            technologies: ["Next.js", "Markdown", "Tailwind"],
            links: {
                demo: "#",
                github: "#"
            },
            featured: false
        },
        {
            id: 6,
            title: "Portfolio Website",
            description: "Website portfolio responsif dengan animasi interaktif dan design modern.",
            image: {
                icon: "fas fa-user",
                gradient: "from-teal-400 to-cyan-500"
            },
            technologies: ["HTML5", "Tailwind", "JavaScript"],
            links: {
                demo: "#",
                github: "#"
            },
            featured: false
        }
    ],

    // Social media links
    social: [
        {
            name: "LinkedIn",
            url: "https://linkedin.com/in/raffa-yuda",
            icon: "fab fa-linkedin",
            color: "bg-blue-500"
        },
        {
            name: "GitHub",
            url: "https://github.com/raffa-yuda",
            icon: "fab fa-github",
            color: "bg-gray-800"
        },
        {
            name: "Twitter",
            url: "https://twitter.com/raffa_yuda",
            icon: "fab fa-twitter",
            color: "bg-blue-400"
        },
        {
            name: "Instagram",
            url: "https://instagram.com/raffa.yuda",
            icon: "fab fa-instagram",
            color: "bg-pink-500"
        }
    ],

    // Statistics
    stats: [
        {
            number: "10+",
            label: "Projects",
            icon: "fas fa-project-diagram"
        },
        {
            number: "1+",
            label: "Years Learning",
            icon: "fas fa-graduation-cap"
        },
        {
            number: "5+",
            label: "Technologies",
            icon: "fas fa-code"
        },
        {
            number: "100%",
            label: "Dedication",
            icon: "fas fa-heart"
        }
    ]
};

// Function to get featured projects
function getFeaturedProjects() {
    return portfolioData.projects.filter(project => project.featured);
}

// Function to get all projects
function getAllProjects() {
    return portfolioData.projects;
}

// Function to get skills by category
function getSkillsByCategory(category) {
    return portfolioData.skills[category] || [];
}

// Function to update project data dynamically
function updateProject(id, updates) {
    const projectIndex = portfolioData.projects.findIndex(project => project.id === id);
    if (projectIndex !== -1) {
        portfolioData.projects[projectIndex] = { ...portfolioData.projects[projectIndex], ...updates };
    }
}

// Function to add new project
function addProject(project) {
    const newId = Math.max(...portfolioData.projects.map(p => p.id)) + 1;
    portfolioData.projects.push({ ...project, id: newId });
}

// Export data for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = portfolioData;
}
