const navLinks = [
    {
        name: "Work",
        link: "#work",
    },
    {
        name: "Strengths",
        link: "#strengths",
    },
    {
        name: "Experience",
        link: "#experience",
    },
    {
        name: "Skills",
        link: "#skills",
    },
];

const words = [
    { text: "Ideas", imgPath: "./images/ideas.svg" },
    { text: "Concepts", imgPath: "./images/concepts.svg" },
    { text: "Designs", imgPath: "./images/designs.svg" },
    { text: "Code", imgPath: "./images/code.svg" },
    { text: "Ideas", imgPath: "./images/ideas.svg" },
    { text: "Concepts", imgPath: "./images/concepts.svg" },
    { text: "Designs", imgPath: "./images/designs.svg" },
    { text: "Code", imgPath: "./images/code.svg" },
];

const counterItems = [
    { value: 3, suffix: "+", label: "Years of Experience" },
    { value: 5, label: "Partnerships" },
    { value: 40, suffix: "+", label: "Completed Projects" },
    { value: 3.7, decimals: 1, label: "GPA" },
];


const abilities = [
    {
        imgPath: "./images/seo.png",
        title: "Quality Focus",
        desc: "Delivering high-quality results while maintaining attention to every detail.",
    },
    {
        imgPath: "./images/chat.png",
        title: "Reliable Communication",
        desc: "Keeping you updated at every step to ensure transparency and clarity.",
    },
    {
        imgPath: "./images/time.png",
        title: "On-Time Delivery",
        desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
    },
];

const techStackImgs = [
    {
        name: "Node.js",
        imgPath: "./images/logos/node.png",
    },
    {
        name: "Agile",
        imgPath: "./images/logos/agile4.png.webp",
    },

];

const techStackIcons = [
    {
        name: "React",
        modelPath: "./models/react_logo-transformed.glb",
        scale: 1,
        rotation: [0, 0, 0],
    },
    {
        name: "Python",
        modelPath: "./models/python-transformed.glb",
        scale: 0.8,
        rotation: [0, 0, 0],

    },
    {
        name: "Git",
        modelPath: "./models/git-svg-transformed.glb",
        scale: 0.05,
        rotation: [0, -Math.PI / 4, 0],
    },
];

const expCards = [
    {
        review:
            "WPI Team brought creativity and technical expertise, significantly improving our frontend performance. They carefully listened to our needs and delivered a much more self intuitive interface for staff and patients.",
        imgPath: "./images/hospital.png",
        logoPath: "./images/logos/hpLogo.png",
        title: "Frontend Developer",
        date: "March 2025 - May 2025",
        responsibilities: [
            "Developed a full-stack prototype website for Massachusetts General Brigham hospital in 10 weeks as part of a 10 person team.",
            "Led frontend development using TypeScript, React, Mantine for UI components, and Github for version control.",
            "Deployed with Prisma ORM on AWS EC2 with Docker for containerization.",
            "Followed agile methodologies and collected 30+ requirements by creating user stories and scenarios.",
        ],
    },
    {
        review:
            "Working with Yanding has been beneficial for our restaurant. He built a web application that allows our guests to order directly from their tables using QR codes. Thanks to his work, we’ve seen a noticeable improvement in efficiency " +
            "and our staff can focus more on customer service rather than manual entry.",
        imgPath: "./images/logos/balsam.png",
        logoPath: "./images/logos/balsita.png",
        title: "Full Stack Developer",
        date: "February 2024 - April 2024",
        responsibilities: [
            "Engineered a full-stack WebApp featuring a QR code-based ordering system deployed in restaurants",
            "Designed the application using Node.js, React,js, Javascript, Express.js, and Bootstrap.",
            "Directed backend implementation of RESTful APIs for scalable dynamic menu management, real-time order tracking, and\n" +
            "ESC/POS-integrated billing system.",
            "Achieved a 30% decrease in order turnaround time and improvement in operational efficiency."
        ],
    },
    {
        review: "Yanding has a real talent for explaining  technical concepts in a way that’s easy to understand, I really appreciated how he broke down problems step by step, which made assignments and exam prep much clearer.",
        imgPath: "./images/wpi.png",
        logoPath: "./images/logos/wpilogo.png",
        title: "Undergraduate Teaching Assistant",
        date: "Aug 2024- Present",
        responsibilities: [
            "Delivered personalized one-on-one and group office hour sessions to help students across Computer Science courses.",
            "Guided students on mastering key programming concepts, algorithms, and debugging practices.",
            "Assessed exams, graded projects and assignments, and conducted lab sessions.",
        ],
    },
];


export {
    words,
    abilities,
    counterItems,
    expCards,
    techStackIcons,
    techStackImgs,
    navLinks,
};