// ===============================
// 🌟 GLOBAL CONSTANTS FILE
// ===============================

// -------------------------
// 🧭 Navbar Links
// -------------------------
export const NAV_LINKS = [
  { name: "HOME", to: "home" },
  { name: "ABOUT ME", to: "about" },
  { name: "PROJECTS", to: "projects" },
  { name: "SERVICES", to: "services" },
  { name: "EXPERIENCE", to: "experience" },
  { name: "TESTIMONIALS", to: "testimonials" },
  { name: "CONTACT", to: "contact" },
];

// -------------------------
// 📥 Navbar Button
// -------------------------
export const NAV_BUTTON_TEXT = "DOWNLOAD CV";

// -------------------------
// 🎨 Navbar Theme Colors
// -------------------------
export const NAV_THEME = {
  bgGradient: "from-[#031D34] to-[#050E16]",
  textColor: "text-white",
  hoverTextColor: "hover:text-blue-400",
  underlineColor: "#00bfff",
};

// -------------------------
// 🌐 Social Media Links
// -------------------------
export const SOCIAL_LINKS = [
  { icon: "facebook", url: "https://facebook.com", bgColor: "#3b5998", hoverColor: "#2d4373" },
  { icon: "linkedin", url: "https://linkedin.com", bgColor: "#0a66c2", hoverColor: "#084d9a" },
  { icon: "twitter", url: "https://twitter.com", bgColor: "#1da1f2", hoverColor: "#0d95e8" },
  { icon: "instagram", url: "https://instagram.com", bgColor: "#e1306c", hoverColor: "#c12a5a" },
];

// -------------------------
// ⚡ Animation Config (Framer Motion)
// -------------------------
export const ANIMATION = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.3 },
  transition: { duration: 0.8 },
};

// -------------------------
// 👑 Hero Section
// -------------------------
export const HERO_DATA = {
  name: "LAIBA HAMEED",
  greeting: "HAY! I’M LAIBA",
  typedTexts: ["DESIGNER", "DEVELOPER", "CREATOR"],
  description:
    "I’m a Front-End Developer skilled in React, Tailwind CSS, and JavaScript. Currently studying BSIT at University of Education.",
  buttonText: "GET IN TOUCH →",
  image: "/src/assets/jenna.png",
  socials: [
    { icon: "facebook", url: "https://facebook.com", color: "hover:bg-blue-500" },
    { icon: "dribbble", url: "https://dribbble.com", color: "hover:bg-pink-500" },
    { icon: "linkedin", url: "https://linkedin.com", color: "hover:bg-blue-600" },
  ],
};

// -------------------------
// 🖼️ Projects Section
// -------------------------
import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";
import img3 from "./assets/img3.png";
import img4 from "./assets/img4.png";
import img5 from "./assets/img5.png";
import img6 from "./assets/img6.png";

export const GALLERY_DATA = {
  headingTag: "MY WORK",
  headingTitle: "Recent Projects",
  images: [img1, img2, img3, img4, img5, img6],
  captions: [
    ["Airbnb Clone","Zymmy Clone", "E-Commerce Website"],
    ["Food Delivery Website", "FoodWagon Website", "Tripadvisor Clone"],
  ],
};

// -------------------------
// 💼 Services Section
// -------------------------
// src/Constants.js
import { FaPaintBrush, FaCode, FaSearch, FaLaptopCode } from "react-icons/fa";
import service1Img from "./assets/service1img.png";
import service2Img from "./assets/service2img.png";
import service3Img from "./assets/service3img.png";
import service4Img from "./assets/service4img.png";

export const services = [
  {
    title: "Creative Web Design",
    description:
      "Designing visually stunning, user-focused, and responsive layouts that represent your brand perfectly.",
    image: service1Img,
    icon: FaPaintBrush,
  },
  {
    title: "Front-End Development",
    description:
      "Developing modern, interactive, and fast websites using HTML, CSS, JavaScript, Bootstrap, and React.js.",
    image: service2Img,
    icon: FaCode,
  },
  {
    title: "SEO Optimization",
    description:
      "Helping websites rank higher with clean structure, optimized code, and search-friendly design techniques.",
    image: service3Img,
    icon: FaSearch,
  },
  {
    title: "Responsive UI Design",
    description:
      "Creating pixel-perfect interfaces that look beautiful and function flawlessly across all devices.",
    image: service4Img,
    icon: FaLaptopCode,
  },
];


// -------------------------
// 🏢 Logo Strip Section
// -------------------------
export const LOGOS = [
  "https://janna-react.vercel.app/images/brand-1.svg",
  "https://janna-react.vercel.app/images/brand-2.svg",
  "https://janna-react.vercel.app/images/brand-1.svg",
  "https://janna-react.vercel.app/images/brand-2.svg",
];

// -------------------------
// 🗣️ Testimonials Section
// -------------------------
export const TESTIMONIALS = [
  {
    image: 'https://janna-react.vercel.app/images/avatar-1.jpg',
    text: `Working with Laiba Hameed was an amazing experience! Her front-end skills,
     especially in React and Tailwind CSS, brought our design ideas to life beautifully.`,
  },
  {
    image: 'https://janna-react.vercel.app/images/avatar-2.jpg',
    text: `Laiba is a dedicated and talented developer. She delivers clean,
     responsive, and modern web designs on time and with great attention to detail.`,
  },
  {
    image: 'https://janna-react.vercel.app/images/avatar-3.jpg',
    text: `Highly recommend Laiba for any front-end project. Her creativity,
     problem-solving, and professionalism make her stand out as a true developer.`,
  },
];

// Decoration images for testimonials
import loadingImg from "./assets/loading.png";
import leftImage from "./assets/dots.png";

export const TESTIMONIAL_DECOR = { loadingImg, leftImage };


// -------------------------
// 🧾 Footer Text
// -------------------------
export const FOOTER_TEXT = "© 2025 All rights reserved | Designed by Laiba Hameed";
// About section
// About Me Data
export const ABOUT_ME_DATA = {
  name: "Laiba Hameed",
  role: "Front-End Developer",
  university: "University of Engineering",
  degree: "BS in Information Technology",
  description: "I love building beautiful, responsive, and modern web interfaces using HTML, CSS, JavaScript, React, Tailwind CSS, and other front-end tools. I aim to create designs that are both visually appealing and user-friendly.",
  stats: [
    { number: "20+", label: "Projects" },
    { number: "2+", label: "Years of Experience" },
    { number: "10+", label: "Clients" },
  ],
  buttonText: "GET IN TOUCH →"
};

// Experience Data
export const EXPERIENCE_DATA = [
  {
    title: "Front-End Web Developer",
    company: "Freelance | Remote",
    date: "2022 - Present",
    type: "Project Based",
    about:
      "Built responsive and interactive websites using HTML, CSS, JavaScript, and Bootstrap. Focused on pixel-perfect layouts, cross-browser compatibility, and smooth user interactions.",
  },
  {
    title: "Front-End Projects",
    company: "Personal Portfolio",
    date: "2023 - 2025",
    type: "Self Projects",
    about:
      "Developed creative websites like travel portals, portfolio pages, and business templates using React and Tailwind CSS. Every project polished my design and coding precision.",
  },
  {
    title: "BS Information Technology",
    company: "University of Education",
    date: "2021 - Present",
    type: "Education",
    about:
      "Learning programming, databases, and front-end frameworks which support my career in modern web development and UI/UX design.",
  },
];
// Contact Data
export const CONTACT_DATA = {
  email: "laibahameed947@gmail.com",
  phone: "+044 9696 9696 3636",
  socials: [
    { icon: "Facebook", url: "https://web.facebook.com/?_rdc=1&_rdr#", bgColor: "#3b5998" },
    { icon: "Linkedin", url: "https://www.linkedin.com/", bgColor: "#0077b5" },
    { icon: "Twitter", url: "#", bgColor: "#1da1f2" },
    { icon: "Instagram", url: "https://www.instagram.com/", bgColor: "#E1306C" },
  ],
  title: "Let’s Discuss Your Project",
  subtitle: "Always available for website developing if the right project comes along. Feel free to contact me.",
  buttonText: "Send Message",
  footerText: "© 2025 All rights reserved | Designed by Laiba Hameed"
};
// cursor follower
export const CURSOR_SETTINGS = {
  size: 12, // Diameter in pixels
  color: "#ffffff", // Cursor dot color
  stiffness: 300,
  damping: 30,
};
// scrollanimation
export const SCROLL_ANIMATION = {
  duration: 0.8,
  offsetY: 50,      // start position in px
  viewportAmount: 0.3,
  once: false,      // repeat on scroll
};


