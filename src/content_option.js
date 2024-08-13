import quiz from "./assets/images/Quiz.png";
import screen from "./assets/images/Screen.png";
import rock from "./assets/images/Rock.png";
import image from "./assets/images/port.jpeg";

const logotext = "SRIRAM";
const meta = {
  title: "SRIRAM PORTIFOLIO",
  description:
    "I’m Sri Rama Krishna Full stack devloper,currently working at Eficens System.",
};

const introdata = {
  title: "I’m Sri Rama Krishna",
  animated: {
    first: "I love coding.",
    second: "I code cool websites.",
    third: "I develop Web Applications.",
  },
  description:
    "I’m Sri Rama Krishna Full stack devloper,currently working at Eficens System.",
  your_img_url: image,
};

const dataabout = {
  title: "abit about my self",
  aboutme:
    "I’m Sri Rama Krishna Full stack devloper,currently working at Eficens System.",
};
const worktimeline = [
  {
    jobtitle: "SDE Intern",
    where: "Eficens",
    date: "2024",
  },
  {
    jobtitle: "Full Stack Intern",
    where: "SITE",
    date: "2023",
  },
];

const skills = [
  {
    name: "Python",
    value: 90,
  },
  {
    name: "Java",
    value: 80,
  },
  {
    name: "Javascript",
    value: 80,
  },
  {
    name: "React Js",
    value: 85,
  },
  {
    name: "Node Js",
    value: 80,
  },
  {
    name: "Express Js",
    value: 85,
  },
  {
    name: "Nest Js",
    value: 75,
  },
  {
    name: "MongoDB",
    value: 90,
  },
];

const services = [
  {
    title: "Address",
    description:
      "C-3-72, Ramalayam Street, Near Nandi Water Plant, Chodavaram, East Godavari, 534111.",
  },
];

const dataportfolio = [
  {
    img: quiz,
    description:
      "A Simple Quiz Application Where Students Can Verify Thier Knowledge",
    link: "https://quiz-app-tau-rose.vercel.app/",
  },
  {
    img: screen,
    description:
      "A Simple Screen Recorder Application which we can Record the Screen and Particular Pages for Reference",
    link: "https://screen-recorder-with-reactjs.vercel.app/",
  },
  {
    img: rock,
    description: "A Funny Game Application Named Rock-Paper-Scissor Game",
    link: "https://sriram629.github.io/Rock-Paper-Scissors-Game/rock.html",
  },
];

const contactConfig = {
  YOUR_EMAIL: "maddipatisriramakrishna@gmail.com",
  YOUR_FONE: "9398236799",
  description:
    "I’m Sri Rama Krishna Full stack devloper,currently working at Eficens System. ",
  YOUR_SERVICE_ID: "contact_service",
  YOUR_TEMPLATE_ID: "contact_form",
  YOUR_USER_ID: "7F8cl9q88rfG7uMj9",
};

const socialprofils = {
  github: "https://github.com/sriram629",
  facebook: "https://facebook.com/maddipathi.sriramkrishna?mibextid=ZbWKwL",
  linkedin: "https://linkedin.com/in/maddipati-sri-rama-krishna-960675229",
};
export {
  meta,
  dataabout,
  dataportfolio,
  worktimeline,
  skills,
  services,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
};
