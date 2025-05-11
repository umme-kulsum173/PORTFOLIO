// Skills wala
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import javaLogo from './assets/tech_logo/java.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';


// Education Section Logo's
// import glaLogo from './assets/education_logo/gla_logo.png';
// import bsaLogo from './assets/education_logo/bsa_logo.png';
// import vpsLogo from './assets/education_logo/vps_logo.png';

// Project Section Logo's
import mernChatlogo from './assets/project_logo/MernChat.png';
import expenselogo from './assets/project_logo/expense.webp';
import plantlogo from './assets/project_logo/Plant.png';



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];


  
  export const education = [
    {
      id: 0,
      // img: glaLogo,
      school: "Don Bosco Institute of Technology, Bangalore",
      date: "2022 -  2026",
      grade: "8.41 CGPA",
      desc: "I am currently pursuing a Bachelor's degree in Information Science and Engineering at Don Bosco Institute of Technology, Bangalore. I have completed 5 semesters and have a CGPA of 8.41. I have taken courses in Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks, among others",
      degree: "Bachelor of Engineering - BE, Information Science and Engineering",
    },
    {
      id: 1,
      // img: bsaLogo,
      school: "Sarvothama PU college, Banglore",
      date: "2020 -  2022",
      grade: "84.00%",
      desc: "I completed my class 12th high school education at Sarvothama PU College, Bangalore, where I studied Science with  Maths and Biology ",
      degree: "(XII), PCMB",
    },
    {
      id: 2,
      // img: vpsLogo,
      school: "Crescent High  School, Bangalore",
      date: " 2018 - 2020",
      grade: "80.0%",
      desc: "I completed my class 10 education at Cresent High School, Bangalore.",
      degree: "(X), ",
    },
    
  ];
  
  export const projects = [
    {
      id: 0,
      title: "MERN ChatApp with AI",
      description:
        "Built a full-stack real-time chat app using the MERN stack and Socket.IO for instant messaging. Integrated Google Gemini AI to generate smart, context-aware replies, enhancing user interactions. The frontend was developed with React and Context API to ensure a responsive and dynamic user experience.",
       image: mernChatlogo,
      tags: ["HTML", "CSS", "Tailwind CSS","JavaScript", "React JS", "Node Js","Express Js","MongoDB"],
      github: "",
      webapp: "",
    },
    {
      id: 1,
      title: "Plant Analysis tool",
      description:
        "Developed a web application to help users analyze plant care requirements and determine ideal growth conditions. The frontend was built with React.js, and MongoDB was used for data management. It offers a smooth and informative experience for gardening enthusiasts..",
       image: plantlogo,
      tags: ["React JS", "Node.js", "MongoDB", "Express Js", "HTML", "CSS", "JavaScript"],
      github: "",
      webapp: "",
    },
    {
      id: 2,
      title: "Expense Tracker",
      description:
        "Created an expense tracking app with React.js, Node.js, Firebase, and Auth.js. It allows users to manage their daily expenses in real time, offering secure login and a simple interface. Currently used by 20+ users for reliable financial tracking.",
       image: expenselogo,
      tags: ["React JS", "HTML", "CSS", "JavaScript","Node.js", "MongoDB", "Express Js"],
      github: "",
      webapp: "",
    },
 
   
  ];  