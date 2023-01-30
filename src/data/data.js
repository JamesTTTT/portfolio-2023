export const navItems = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Projects",
    path: "/projects",
  },
  {
    title: "Info",
    path: "/info",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

export const homeText = {
  header: "Hi! my name is James Taylor",
  body: "I am a student studying full stack web development at Blekinge Institute of Technology. I am passionate about coding and im always trying to learn new technologies to improve my skills. I am dedicated to always deliver a great and accessible user experiences.",
};

export const contactText = {
  header: "Get in touch!",
  body: "Please reach out for career opportunities or project inquiries! I would love to hear from you and discuss potential collaboration. Feel free to email me",
};

export const projects = [
  {
    title: "MyTaskScheduler",
    desc: "My task scheduler is a web application developed by me. It allows the user to easily create tasks in such a way that is simple and straightforward. A task consists of a title, description, start date, deadline and estimated hours needed to complete. With this information my task scheduler maps out all currently active tasks on a timeline. This timeline automatically optimizes and works out if you have sufficient time to complete your work tasks. There is a settings tab where the user inputs the hours they start and finish work in a day. This what allows the algorithm to work out if all deadlines can be met.",
    url: "https://www.mytaskscheduler.com/",
    github: "https://github.com/JamesTTTT/TaskScheduler",
    tech: ["JavaScript", "React", "Tailwind"],
    img: "",
  },
  {
    title: "SparkRentals",
    desc: "Spark Rentals is a web-based system for renting electric scooters developed by me and a team of three others. This system is equipped with a REST-API backend, NoSQL database, Admin Dashboard, Phone application, User website and a test simulation. I was responsible for building the admin dashboard and most of the user website. The admin dashboard allows the user to create cities to host the scooters. Each city is customizable with various zones and custom pricing. Using a map API and geoJson I built a custom zone builder where the user can draw custom zones on the map. The dashboard also allows users to view statistics, register new scooters into the system, manage prepaid cards, manage customers and admin accounts. The user website is equipped with an intuitive landing page with information about the system. The site also allows customers to register or login via Oauth. There they can view account details such as funds or ride history. The rest of the system was developed by the other members of my team and when it all works together creates a genuine electric scooter rental system.",
    url: "",
    github: "https://github.com/FalkenDev/SparkRentals-Admin-Dashboard",
    tech: [
      "JavaScript",
      "Python",
      "Express",
      "React",
      "React Native",
      "NoSQL",
      "Tailwind",
    ],
    img: "",
  },
];

export const contact = [
  {
    title: "Email",
  },
];

export const skills = [
  "Javascript",
  "Typescript",
  "React",
  "Node.js",
  "Python",
  "PHP",
];
